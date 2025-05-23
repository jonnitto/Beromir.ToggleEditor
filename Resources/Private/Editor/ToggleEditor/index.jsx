import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { selectors } from "@neos-project/neos-ui-redux-store";
import { neos } from "@neos-project/neos-ui-decorators";
import positionalArraySorter from "@neos-project/positional-array-sorter";
import { connect } from "react-redux";
import Loading from "carbon-neos-loadinganimation/LoadingWithStyles";
import { Button, Icon, Label, CheckBox } from "@neos-project/react-ui-components";
import { Icons, PreviewImage, Wrapper } from "./Components";
import { flattenValues, processColorValues, getItemVariants } from "./utils";
import clsx from "clsx";
import style from "./style.module.css";

const getDataLoaderOptionsForProps = (props) => ({
    contextNodePath: props.focusedNodePath,
    dataSourceIdentifier: props.options.dataSourceIdentifier,
    dataSourceUri: props.options.dataSourceUri,
    dataSourceAdditionalData: props.options.dataSourceAdditionalData,
    dataSourceDisableCaching: Boolean(props.options.dataSourceDisableCaching),
});

const defaultOptions = {
    layout: "grid",
    maximalColumns: 4,
    values: {},
    columns: null,
    allowEmpty: false,
    emptyValue: "",
    multiple: false,
    iconSize: null,
    disabled: false,
    hidden: false,
    dataSourceIdentifier: null,
    dataSourceUri: null,
    labelCustomStyle: null,
};

function Editor(props) {
    const mergedOptions = { ...defaultOptions, ...props.options };
    const {
        layout,
        values,
        columns,
        maximalColumns,
        emptyValue,
        iconSize,
        disabled,
        dataSourceIdentifier,
        dataSourceUri,
        dataSourceAdditionalData,
        multiple,
        labelCustomStyle,
    } = mergedOptions;
    const allowEmpty = multiple || mergedOptions.allowEmpty;
    const { value, commit, highlight, i18nRegistry, id, dataSourcesDataLoader, renderHelpIcon } = props;
    const label = i18nRegistry.translate(props.label);
    const [savedValue, setSavedValue] = useState([]);

    useEffect(() => {
        // This allows us to get the value stored in the content repository
        if (!highlight) {
            setSavedValue(Array.isArray(value) ? value : [value]);
        }
    }, [highlight]);

    if (multiple && !Array.isArray(value)) {
        console.warn(
            `Misconfiguration in property "${props.identifier}". Multiple is activated but value type seems to be "string" but should be "array".`,
        );
    }

    const hasDataSource = !!(dataSourceIdentifier || dataSourceUri);

    const [isLoading, setIsLoading] = useState(hasDataSource);
    const [options, setOptions] = useState(hasDataSource ? [] : flattenValues(values, layout, i18nRegistry));
    const [active, setActive] = useState(Array.isArray(value) ? value : [value]);

    // We use this hack to prevent the editor from re-rendering all the time, even if the options are the same.
    const [dataSourceOptionsAsJSON, setDataSourceOptionsAsJSON] = useState(null);

    useEffect(() => {
        const dataAsJSON = JSON.stringify({ dataSourceIdentifier, dataSourceUri, dataSourceAdditionalData });
        if (!hasDataSource || dataSourceOptionsAsJSON === dataAsJSON) {
            return;
        }

        setDataSourceOptionsAsJSON(dataAsJSON);

        // Load options from data source
        dataSourcesDataLoader.resolveValue(getDataLoaderOptionsForProps(props), value).then((values) => {
            setIsLoading(false);
            if (values.hidden) {
                setOptions({ hidden: true });
                return;
            }

            // Add key to values
            values = values.map((item) => ({ key: item.value == "" ? "__empty__" : item.value, ...item }));

            if (layout === "color") {
                setOptions(processColorValues(values));
                return;
            }
            setOptions(values);
        });
    }, [dataSourceIdentifier, dataSourceUri, dataSourceAdditionalData]);

    if (isLoading) {
        return (
            <Wrapper id={id} label={label} renderHelpIcon={renderHelpIcon}>
                <Loading isLoading={isLoading} title="Beromir.ToggleEditor:Main:loading" />
            </Wrapper>
        );
    }

    if (options.hidden) {
        return null;
    }

    if (!options || !options.length) {
        return (
            <Wrapper id={id} label={label} className={style.error} renderHelpIcon={renderHelpIcon}>
                {i18nRegistry.translate(
                    `Beromir.ToggleEditor:Main:error.${hasDataSource ? "noDataFromSource" : "noNodeTypeDefintion"}`,
                )}
            </Wrapper>
        );
    }

    function highlightItem(item) {
        // We need to compare the active with the saved value, as hightlight doesn't work with the arrays
        if (JSON.stringify(active) === JSON.stringify(savedValue)) {
            return false;
        }

        const valueIsInSaved = savedValue.includes(item.value);

        // No value is active, so we highlight it if it is in the saved value
        if (!active.length) {
            return valueIsInSaved;
        }

        const valueIsActive = itemIsActive(item);

        // If the value is a string, we can just use the active value
        if (!multiple) {
            return valueIsActive;
        }

        return (valueIsActive && !valueIsInSaved) || (valueIsInSaved && !valueIsActive);
    }

    function itemIsActive(item) {
        return active.includes(item.value);
    }

    function onChange(item, node) {
        if (node) {
            node.blur();
        }
        if (!item) {
            // No item is set, so we reset the value
            // This should not happen, but we handle it anyway
            commit(multiple ? [] : emptyValue);
            setActive([]);
            return;
        }

        const valueFromItem = item.value;

        // we'd like to have a copy instead of ref
        let activeItems = [...active];
        const valueIsAlreadyActive = activeItems.includes(valueFromItem);
        if (!multiple) {
            // Toggle single value
            activeItems = valueIsAlreadyActive ? [] : [valueFromItem];
        } else if (valueIsAlreadyActive) {
            activeItems.splice(activeItems.indexOf(valueFromItem), 1);
        } else {
            activeItems.push(valueFromItem);
        }

        // if allowEmpty is false but new active length will be 0, drop changes
        if (!allowEmpty && activeItems.length === 0) {
            return;
        }

        setActive(activeItems);

        // if multiple is disabled, we return array the first value
        if (!multiple) {
            activeItems = activeItems[0] || emptyValue;
        }
        commit(activeItems);
    }

    const convertToColumns = (value, maximalColumns = 0) => {
        if (typeof value === "number" && value > 0) {
            return value;
        }
        const items = options.length || 1;
        if (!value || typeof value !== "string") {
            return items;
        }
        try {
            value = value.replaceAll("{items}", items);
            if (maximalColumns) {
                value = value.replaceAll("{maximalColumns}", items);
            }
            // eslint-disable-next-line no-new-func
            const evaluateFn = new Function(`return Math.floor(${value})`);
            return evaluateFn();
        } catch (e) {
            console.warn('An error occurred while trying to evaluate "' + value + '"\n', e);
        }
    };

    const getColumns = () => {
        const evaluatedColumns = convertToColumns(columns, maximalColumns);
        const evaluatedMaximalColumns = convertToColumns(maximalColumns);
        return { "--columns": Math.min(evaluatedColumns, evaluatedMaximalColumns) };
    };

    const resetLabel = i18nRegistry.translate("Beromir.ToggleEditor:Main:reset");
    const AllowEmptyIcon = ({ item, className = style.allowEmpty }) =>
        allowEmpty && !multiple ? (
            <span className={clsx(className, itemIsActive(item) && style.allowEmptyShow)}>
                <Icon size="sm" icon="times" />
            </span>
        ) : null;

    return (
        <Wrapper
            id={id}
            label={label}
            className={[style[layout], disabled && style.disabled]}
            style={getColumns()}
            renderHelpIcon={renderHelpIcon}
        >
            {positionalArraySorter(options).map((item, index) => {
                const isCurrent = itemIsActive(item);
                const disabled = item.disabled;
                const state = isCurrent ? "active" : "default";

                const labels = getItemVariants(item, "label", true, (value) => i18nRegistry.translate(value));
                const descriptions = getItemVariants(item, "description", true, (value) =>
                    i18nRegistry.translate(value),
                );
                const label = labels?.[state];
                const description = descriptions?.[state];

                const title = description || label;
                const ariaLabel = isCurrent && allowEmpty ? resetLabel : title;
                const highlightStyle = highlightItem(item) && style.highlight;

                switch (layout) {
                    case "list":
                        if (multiple) {
                            return (
                                <Label
                                    className={clsx(style.listButton, highlightStyle)}
                                    title={description}
                                    aria-label={ariaLabel}
                                    key={`list-multiple-${index}`}
                                >
                                    <CheckBox
                                        isChecked={isCurrent}
                                        disabled={disabled}
                                        onChange={() => onChange(item)}
                                    />
                                    <Icons item={item} isCurrent={isCurrent} size={iconSize} />
                                    <PreviewImage item={item} isCurrent={isCurrent} />
                                    {label && <span className={style.flex1}>{label}</span>}
                                </Label>
                            );
                        }

                        return (
                            <button
                                onClick={({ currentTarget }) => onChange(item, currentTarget)}
                                type="button"
                                title={description}
                                aria-label={ariaLabel}
                                disabled={disabled}
                                className={clsx(style.listButton, isCurrent && style.selected, highlightStyle)}
                                key={`list-single-${index}`}
                            >
                                <span className={style.radio}>
                                    <span></span>
                                </span>
                                <Icons item={item} isCurrent={isCurrent} size={iconSize} />
                                <PreviewImage item={item} isCurrent={isCurrent} />
                                {label && <span className={style.flex1}>{label}</span>}
                                <AllowEmptyIcon item={item} className={style.allowEmptyRadio} />
                            </button>
                        );

                    case "color":
                        const maxColorIndex = item.color.length - 1;
                        return (
                            <div className={style.colorBox} key={`color-${index}`}>
                                <button
                                    onClick={({ currentTarget }) => onChange(item, currentTarget)}
                                    type="button"
                                    title={title}
                                    aria-label={ariaLabel}
                                    disabled={disabled}
                                    className={clsx(style.colorButton, isCurrent && style.selected, highlightStyle)}
                                >
                                    {item.color.map((color, index) => (
                                        <span
                                            key={`color-${index}`}
                                            className={clsx(
                                                style.colorPreview,
                                                color === "transparent" && style.colorTransparent,
                                                maxColorIndex === index && style.colorPreviewLast,
                                            )}
                                            style={{ backgroundColor: color }}
                                        />
                                    ))}
                                    <AllowEmptyIcon item={item} />
                                </button>
                                {label && (
                                    <span className={clsx(style.label, disabled && style.disabled)}>{label}</span>
                                )}
                            </div>
                        );

                    default:
                        return (
                            <Button
                                onClick={() => onChange(item)}
                                isActive={isCurrent}
                                title={title}
                                aria-label={ariaLabel}
                                disabled={disabled}
                                className={clsx(style.button, highlightStyle)}
                                key={`default-${index}`}
                            >
                                <Icons item={item} isCurrent={isCurrent} size={iconSize} />
                                <PreviewImage item={item} isCurrent={isCurrent} />
                                {label && (
                                    <span
                                        className={clsx(item.icon || item.preview ? style.label : null)}
                                        style={item.labelCustomStyle || labelCustomStyle || {}}
                                    >
                                        {label}
                                    </span>
                                )}
                                <AllowEmptyIcon item={item} />
                            </Button>
                        );
                }
            })}
        </Wrapper>
    );
}

Editor.propTypes = {
    value: PropTypes.string,
    commit: PropTypes.func.isRequired,
    i18nRegistry: PropTypes.object.isRequired,
    options: PropTypes.shape({
        layout: PropTypes.oneOf(["grid", "flex", "flex-start", "list", "color"]),
        columns: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        maximalColumns: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        allowEmpty: PropTypes.bool,
        emptyValue: PropTypes.string,
        multiple: PropTypes.bool,
        iconSize: PropTypes.oneOf(["xs", "sm", "lg", "2x", "3x"]),
        labelCustomStyle: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
        values: PropTypes.objectOf(
            PropTypes.shape({
                label: PropTypes.string,
                labelCustomStyle: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
                icon: PropTypes.string,
                iconRotate: PropTypes.number,
                description: PropTypes.string,
                color: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
                hidden: PropTypes.bool,
                preview: PropTypes.string,
                previewFull: PropTypes.bool,
                disabled: PropTypes.bool,
            }),
        ),

        dataSourceIdentifier: PropTypes.string,
        dataSourceUri: PropTypes.string,
        dataSourceDisableCaching: PropTypes.bool,
        dataSourceAdditionalData: PropTypes.objectOf(PropTypes.any),
    }).isRequired,
};

const neosifier = neos((globalRegistry) => ({
    i18nRegistry: globalRegistry.get("i18n"),
    dataSourcesDataLoader: globalRegistry.get("dataLoaders").get("DataSources"),
}));
const connector = connect((state) => ({
    focusedNodePath: selectors.CR.Nodes.focusedNodePathSelector(state),
}));
export default neosifier(connector(Editor));
