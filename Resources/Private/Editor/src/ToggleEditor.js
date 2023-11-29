import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Button, Icon} from "@neos-project/react-ui-components";
import style from './ToggleEditor.css';

export default class ToggleEditor extends PureComponent {

    static propTypes = {
        value: PropTypes.string,
        commit: PropTypes.func.isRequired,
        options: PropTypes.shape({
            layout: PropTypes.string,
            columns: PropTypes.string,
            flexWrap: PropTypes.bool,
            values: PropTypes.objectOf(
                PropTypes.shape({
                    label: PropTypes.string,
                    icon: PropTypes.string,
                    description: PropTypes.string,
                })
            ),
        }).isRequired,
    };

    static defaultOptions = {
        layout: 'grid',
        columns: null,
        flexWrap: false,
    };

    render() {
        const {commit, value} = this.props;
        const options = Object.assign(
            {},
            this.constructor.defaultOptions,
            this.props.options,
        );
        const values = options.values;

        const columns = options.columns === null ? Object.keys(options.values).length : options.columns;

        if (!values) {
            return (
                <div className={style.textError}>
                    No options defined, add some to the NodeType definition.
                </div>
            );
        }

        const valueArray = [];

        for (const key in values) {
            const item = values[key];
            valueArray.push({
                label: item.label,
                icon: item.icon,
                description: item.description,
                key,
            });
        }

        return (
            <div className={[style.wrapper, style[options.layout], options.flexWrap ? style.flexWrap : ''].join(' ')}
                 style={options.layout === 'grid' ? {'grid-template-columns': 'repeat(' + columns + ', 1fr)'} : null}>
                {valueArray.map((item) => {
                    return (
                        <Button onClick={() => commit(item.key)} isActive={value === item.key} title={item.description}
                                className={style.button}>
                            {item.icon && <Icon icon={item.icon}/>}
                            {item.label && <span className={item.icon ? style.label : ''}>{item.label}</span>}
                        </Button>
                    );
                })}
            </div>
        );
    }
}
