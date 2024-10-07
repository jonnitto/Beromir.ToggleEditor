(()=>{var gt=Object.create;var W=Object.defineProperty;var at=Object.getOwnPropertyDescriptor;var st=Object.getOwnPropertyNames;var nt=Object.getPrototypeOf,ct=Object.prototype.hasOwnProperty;var bt=(t,e)=>()=>(t&&(e=t(t=0)),e);var m=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var dt=(t,e,a,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of st(e))!ct.call(t,s)&&s!==a&&W(t,s,{get:()=>e[s],enumerable:!(l=at(e,s))||l.enumerable});return t};var I=(t,e,a)=>(a=t!=null?gt(nt(t)):{},dt(e||!t||!t.__esModule?W(a,"default",{value:t,enumerable:!0}):a,t));function n(t){return(...e)=>{if(window["@Neos:HostPluginAPI"]&&window["@Neos:HostPluginAPI"][`@${t}`])return window["@Neos:HostPluginAPI"][`@${t}`](...e);throw new Error("You are trying to read from a consumer api that hasn't been initialized yet!")}}var d=bt(()=>{});var F=m((jt,V)=>{d();V.exports=n("vendor")().React});var N=m((Ut,Y)=>{d();Y.exports=n("vendor")().PropTypes});var H=m((Et,S)=>{d();S.exports=n("NeosProjectPackages")().ReactUiComponents});var q=m((Kt,R)=>{d();R.exports=n("NeosProjectPackages")().NeosUiDecorators});var L=m((oe,k)=>{d();k.exports=n("vendor")().reactRedux});var J=m((ie,D)=>{d();D.exports=n("NeosProjectPackages")().NeosUiReduxStore});d();var z=n("manifest");var g=I(F()),i=I(N()),p=I(H()),U=I(q());var r={image:"beromir-toggleeditor-blateq-image",colorBox:"beromir-toggleeditor-blateq-colorBox",radio:"beromir-toggleeditor-blateq-radio",grid:"beromir-toggleeditor-blateq-grid",imageSVG:"beromir-toggleeditor-blateq-imageSVG",loading:"beromir-toggleeditor-blateq-loading",button:"beromir-toggleeditor-blateq-button",disabled:"beromir-toggleeditor-blateq-disabled",colorButton:"beromir-toggleeditor-blateq-colorButton",flex:"beromir-toggleeditor-blateq-flex",listButton:"beromir-toggleeditor-blateq-listButton",selected:"beromir-toggleeditor-blateq-selected",colorTransparent:"beromir-toggleeditor-blateq-colorTransparent",label:"beromir-toggleeditor-blateq-label",allowEmpty:"beromir-toggleeditor-blateq-allowEmpty",allowEmptyRadio:"beromir-toggleeditor-blateq-allowEmptyRadio",wrapper:"beromir-toggleeditor-blateq-wrapper",error:"beromir-toggleeditor-blateq-error",highlight:"beromir-toggleeditor-blateq-highlight",list:"beromir-toggleeditor-blateq-list",allowEmptyShow:"beromir-toggleeditor-blateq-allowEmptyShow",color:"beromir-toggleeditor-blateq-color",imageFull:"beromir-toggleeditor-blateq-imageFull"};var Q=I(L()),E=I(J());function j(t){var e,a,l="";if(typeof t=="string"||typeof t=="number")l+=t;else if(typeof t=="object")if(Array.isArray(t)){var s=t.length;for(e=0;e<s;e++)t[e]&&(a=j(t[e]))&&(l&&(l+=" "),l+=a)}else for(a in t)t[a]&&(l&&(l+=" "),l+=a);return l}function mt(){for(var t,e,a=0,l="",s=arguments.length;a<s;a++)(t=arguments[a])&&(e=j(t))&&(l&&(l+=" "),l+=e);return l}var c=mt;var It=t=>({contextNodePath:t.focusedNodePath,dataSourceIdentifier:t.options.dataSourceIdentifier,dataSourceUri:t.options.dataSourceUri,dataSourceAdditionalData:t.options.dataSourceAdditionalData,dataSourceDisableCaching:!!t.options.dataSourceDisableCaching}),pt={layout:"grid",values:{},columns:null,allowEmpty:!1,iconSize:null,disabled:!1,dataSourceIdentifier:null,dataSourceUri:null};function M(t){let{layout:e,values:a,columns:l,allowEmpty:s,iconSize:P,disabled:_,dataSourceIdentifier:$,dataSourceUri:tt}={...pt,...t.options},{value:C,commit:Z,highlight:x,i18nRegistry:A,dataSourcesDataLoader:et}=t,h=!!($||tt),[ot,rt]=(0,g.useState)(h),[G,it]=(0,g.useState)(h?[]:Ct(a,A));if((0,g.useEffect)(()=>{h&&et.resolveValue(It(t),C).then(o=>{rt(!1),it(o)})}),ot)return g.default.createElement("div",{className:c(r.wrapper,r.loading),title:A.translate("Beromir.ToggleEditor:Main:loading")},g.default.createElement(p.Icon,{icon:"spinner",size:"lg",spin:!0}));if(!G||!G.length)return g.default.createElement("div",{className:c(r.wrapper,r.error)},A.translate(`Beromir.ToggleEditor:Main:error.${h?"noDataFromSource":"noNodeTypeDefintion"}`));let lt=A.translate("Beromir.ToggleEditor:Main:reset");function X(o,b){if(b&&b.blur(),!o||s&&C===o.value){Z("");return}Z(o.value)}let v=o=>o.icon?g.default.createElement(p.Icon,{icon:o.icon,style:{transform:`rotate(${o.iconRotate||0}deg)`},size:P}):null,y=o=>s&&C===o.value?lt:o.description||o.label,B=(o,b=r.allowEmpty)=>s?g.default.createElement("div",{className:c(b,C===o.value&&r.allowEmptyShow)},g.default.createElement(p.Icon,{size:"sm",icon:"times"})):null;return g.default.createElement("div",{className:c(r.wrapper,r[e],_&&r.disabled),style:{"--columns":l||G.length||1}},G.map(o=>{let b=C===o.value,{label:u,disabled:f}=o;switch(e){case"list":return g.default.createElement("button",{onClick:({currentTarget:O})=>X(o,O),type:"button",title:y(o),disabled:f,className:c(r.listButton,b&&r.selected)},g.default.createElement("span",{className:c(r.radio,b&&x&&r.highlight)},g.default.createElement("span",null)),v(o),T(o),u&&g.default.createElement("span",null,u),B(o,r.allowEmptyRadio));case"color":return g.default.createElement("div",{className:r.colorBox},g.default.createElement("button",{onClick:({currentTarget:O})=>X(o,O),type:"button",title:y(o),disabled:f,className:c(r.colorButton,b&&(x?r.highlight:r.selected),o.color==="transparent"&&r.colorTransparent),style:{backgroundColor:o.color}},B(o)),u&&g.default.createElement("span",{className:c(r.label,f&&r.disabled)},u));default:return g.default.createElement(p.Button,{onClick:()=>X(o),isActive:b,title:y(o),disabled:f,className:c(r.button,b&&x&&r.highlight)},v(o),T(o),u&&g.default.createElement("span",{className:c(o.icon||o.preview?r.label:null)},u),B(o))}}))}M.propTypes={value:i.default.string,commit:i.default.func.isRequired,i18nRegistry:i.default.object.isRequired,options:i.default.shape({layout:i.default.oneOf(["grid","flex","list","color"]),columns:i.default.number,allowEmpty:i.default.bool,iconSize:i.default.oneOf(["xs","sm","lg","2x","3x"]),values:i.default.objectOf(i.default.shape({label:i.default.string,icon:i.default.string,iconRotate:i.default.number,description:i.default.string,color:i.default.string,hidden:i.default.bool,preview:i.default.string,previewFull:i.default.bool,disabled:i.default.bool})),dataSourceIdentifier:i.default.string,dataSourceUri:i.default.string,dataSourceDisableCaching:i.default.bool,dataSourceAdditionalData:i.default.objectOf(i.default.any)}).isRequired};function T(t){if(!t||!t.preview)return null;let e=t.preview,a=t.previewFull?r.imageFull:null,l=t.description||t.label;if(e.startsWith("<svg "))return g.default.createElement("div",{className:c(r.imageSVG,a),"aria-label":l,dangerouslySetInnerHTML:{__html:e}});let s=e.startsWith("resource://")?`/_Resources/Static/Packages/${e.substr(11)}`:e;return g.default.createElement("img",{src:s,className:c(r.image,a),alt:l})}function Ct(t,e){if(!t||typeof t!="object")return[];let a=[];for(let l in t){let s=t[l];s.hidden||a.push({...s,label:e.translate(s.label),description:e.translate(s.description),value:l})}return a}var At=(0,U.neos)(t=>({i18nRegistry:t.get("i18n"),dataSourcesDataLoader:t.get("dataLoaders").get("DataSources")})),ht=(0,Q.connect)(t=>({focusedNodePath:E.selectors.CR.Nodes.focusedNodePathSelector(t)})),K=At(ht(M));z("Beromir.ToggleEditor:Editor",{},t=>{t.get("inspector").get("editors").set("Beromir.ToggleEditor/Editor",{component:K})});})();
//# sourceMappingURL=Plugin.js.map
