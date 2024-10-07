(()=>{var ct=Object.create;var V=Object.defineProperty;var bt=Object.getOwnPropertyDescriptor;var dt=Object.getOwnPropertyNames;var ut=Object.getPrototypeOf,mt=Object.prototype.hasOwnProperty;var pt=(t,o)=>()=>(t&&(o=t(t=0)),o);var p=(t,o)=>()=>(o||t((o={exports:{}}).exports,o),o.exports);var It=(t,o,l,g)=>{if(o&&typeof o=="object"||typeof o=="function")for(let a of dt(o))!mt.call(t,a)&&a!==l&&V(t,a,{get:()=>o[a],enumerable:!(g=bt(o,a))||g.enumerable});return t};var I=(t,o,l)=>(l=t!=null?ct(ut(t)):{},It(o||!t||!t.__esModule?V(l,"default",{value:t,enumerable:!0}):l,t));function n(t){return(...o)=>{if(window["@Neos:HostPluginAPI"]&&window["@Neos:HostPluginAPI"][`@${t}`])return window["@Neos:HostPluginAPI"][`@${t}`](...o);throw new Error("You are trying to read from a consumer api that hasn't been initialized yet!")}}var u=pt(()=>{});var S=p((Et,N)=>{u();N.exports=n("vendor")().React});var R=p((Kt,H)=>{u();H.exports=n("vendor")().PropTypes});var k=p((_t,q)=>{u();q.exports=n("NeosProjectPackages")().ReactUiComponents});var D=p((te,L)=>{u();L.exports=n("NeosProjectPackages")().NeosUiDecorators});var j=p((ge,J)=>{u();J.exports=n("vendor")().reactRedux});var U=p((ae,T)=>{u();T.exports=n("NeosProjectPackages")().NeosUiReduxStore});u();var Y=n("manifest");var s=I(S()),r=I(R()),C=I(k()),M=I(D());var i={imageFull:"beromir-toggleeditor-blateq-imageFull",loading:"beromir-toggleeditor-blateq-loading",wrapper:"beromir-toggleeditor-blateq-wrapper",list:"beromir-toggleeditor-blateq-list",colorTransparent:"beromir-toggleeditor-blateq-colorTransparent",colorButton:"beromir-toggleeditor-blateq-colorButton",button:"beromir-toggleeditor-blateq-button",allowEmptyRadio:"beromir-toggleeditor-blateq-allowEmptyRadio",selected:"beromir-toggleeditor-blateq-selected",disabled:"beromir-toggleeditor-blateq-disabled",image:"beromir-toggleeditor-blateq-image",allowEmptyShow:"beromir-toggleeditor-blateq-allowEmptyShow",flex:"beromir-toggleeditor-blateq-flex",grid:"beromir-toggleeditor-blateq-grid",label:"beromir-toggleeditor-blateq-label",listButton:"beromir-toggleeditor-blateq-listButton",error:"beromir-toggleeditor-blateq-error",allowEmpty:"beromir-toggleeditor-blateq-allowEmpty",imageSVG:"beromir-toggleeditor-blateq-imageSVG",highlight:"beromir-toggleeditor-blateq-highlight",color:"beromir-toggleeditor-blateq-color",radio:"beromir-toggleeditor-blateq-radio",colorBox:"beromir-toggleeditor-blateq-colorBox"};var K=I(j()),P=I(U());function Q(t){var o,l,g="";if(typeof t=="string"||typeof t=="number")g+=t;else if(typeof t=="object")if(Array.isArray(t)){var a=t.length;for(o=0;o<a;o++)t[o]&&(l=Q(t[o]))&&(g&&(g+=" "),g+=l)}else for(l in t)t[l]&&(g&&(g+=" "),g+=l);return g}function At(){for(var t,o,l=0,g="",a=arguments.length;l<a;l++)(t=arguments[l])&&(o=Q(t))&&(g&&(g+=" "),g+=o);return g}var b=At;var ht=t=>({contextNodePath:t.focusedNodePath,dataSourceIdentifier:t.options.dataSourceIdentifier,dataSourceUri:t.options.dataSourceUri,dataSourceAdditionalData:t.options.dataSourceAdditionalData,dataSourceDisableCaching:!!t.options.dataSourceDisableCaching}),ft={layout:"grid",maximalColumns:4,values:{},columns:null,allowEmpty:!1,iconSize:null,disabled:!1,dataSourceIdentifier:null,dataSourceUri:null};function _(t){let o={...ft,...t.options},{layout:l,values:g,columns:a,maximalColumns:v,allowEmpty:G,iconSize:tt,disabled:et,dataSourceIdentifier:ot,dataSourceUri:rt}=o,{value:A,commit:W,highlight:y,i18nRegistry:h,dataSourcesDataLoader:it}=t,f=!!(ot||rt),[lt,gt]=(0,s.useState)(f),[x,st]=(0,s.useState)(f?[]:xt(g,h));if((0,s.useEffect)(()=>{f&&it.resolveValue(ht(t),A).then(e=>{gt(!1),st(e)})},[o]),lt)return s.default.createElement("div",{className:b(i.wrapper,i.loading),title:h.translate("Beromir.ToggleEditor:Main:loading")},s.default.createElement(C.Icon,{icon:"spinner",size:"lg",spin:!0}));if(!x||!x.length)return s.default.createElement("div",{className:b(i.wrapper,i.error)},h.translate(`Beromir.ToggleEditor:Main:error.${f?"noDataFromSource":"noNodeTypeDefintion"}`));let at=h.translate("Beromir.ToggleEditor:Main:reset");function X(e,c){if(c&&c.blur(),!e||G&&A===e.value){W("");return}W(e.value)}let w=(e,c=0)=>{if(typeof e=="number"&&e>0)return e;let d=x.length||1;if(!e||typeof e!="string")return d;try{return e=e.replaceAll("{items}",d),c&&(e=e.replaceAll("{maximalColumns}",d)),new Function(`return Math.floor(${e})`)()}catch(m){console.warn('An error occurred while trying to evaluate "'+e+`"
`,m)}},nt=()=>{let e=w(a,v),c=w(v);return{"--columns":Math.min(e,c)}},z=e=>e.icon?s.default.createElement(C.Icon,{icon:e.icon,style:{transform:`rotate(${e.iconRotate||0}deg)`},size:tt}):null,B=e=>G&&A===e.value?at:e.description||e.label,O=(e,c=i.allowEmpty)=>G?s.default.createElement("div",{className:b(c,A===e.value&&i.allowEmptyShow)},s.default.createElement(C.Icon,{size:"sm",icon:"times"})):null;return s.default.createElement("div",{className:b(i.wrapper,i[l],et&&i.disabled),style:nt()},x.map(e=>{let c=A===e.value,{label:d,disabled:m}=e;switch(l){case"list":return s.default.createElement("button",{onClick:({currentTarget:Z})=>X(e,Z),type:"button",title:B(e),disabled:m,className:b(i.listButton,c&&i.selected)},s.default.createElement("span",{className:b(i.radio,c&&y&&i.highlight)},s.default.createElement("span",null)),z(e),E(e),d&&s.default.createElement("span",null,d),O(e,i.allowEmptyRadio));case"color":return s.default.createElement("div",{className:i.colorBox},s.default.createElement("button",{onClick:({currentTarget:Z})=>X(e,Z),type:"button",title:B(e),disabled:m,className:b(i.colorButton,c&&(y?i.highlight:i.selected),e.color==="transparent"&&i.colorTransparent),style:{backgroundColor:e.color}},O(e)),d&&s.default.createElement("span",{className:b(i.label,m&&i.disabled)},d));default:return s.default.createElement(C.Button,{onClick:()=>X(e),isActive:c,title:B(e),disabled:m,className:b(i.button,c&&y&&i.highlight)},z(e),E(e),d&&s.default.createElement("span",{className:b(e.icon||e.preview?i.label:null)},d),O(e))}}))}_.propTypes={value:r.default.string,commit:r.default.func.isRequired,i18nRegistry:r.default.object.isRequired,options:r.default.shape({layout:r.default.oneOf(["grid","flex","list","color"]),columns:r.default.oneOfType([r.default.string,r.default.number]),maximalColumns:r.default.oneOfType([r.default.string,r.default.number]),allowEmpty:r.default.bool,iconSize:r.default.oneOf(["xs","sm","lg","2x","3x"]),values:r.default.objectOf(r.default.shape({label:r.default.string,icon:r.default.string,iconRotate:r.default.number,description:r.default.string,color:r.default.string,hidden:r.default.bool,preview:r.default.string,previewFull:r.default.bool,disabled:r.default.bool})),dataSourceIdentifier:r.default.string,dataSourceUri:r.default.string,dataSourceDisableCaching:r.default.bool,dataSourceAdditionalData:r.default.objectOf(r.default.any)}).isRequired};function E(t){if(!t||!t.preview)return null;let o=t.preview,l=t.previewFull?i.imageFull:null,g=t.description||t.label;if(o.startsWith("<svg "))return s.default.createElement("div",{className:b(i.imageSVG,l),"aria-label":g,dangerouslySetInnerHTML:{__html:o}});let a=o.startsWith("resource://")?`/_Resources/Static/Packages/${o.substr(11)}`:o;return s.default.createElement("img",{src:a,className:b(i.image,l),alt:g})}function xt(t,o){if(!t||typeof t!="object")return[];let l=[];for(let g in t){let a=t[g];a.hidden||l.push({...a,label:o.translate(a.label),description:o.translate(a.description),value:g})}return l}var Gt=(0,M.neos)(t=>({i18nRegistry:t.get("i18n"),dataSourcesDataLoader:t.get("dataLoaders").get("DataSources")})),yt=(0,K.connect)(t=>({focusedNodePath:P.selectors.CR.Nodes.focusedNodePathSelector(t)})),$=Gt(yt(_));Y("Beromir.ToggleEditor:Editor",{},t=>{t.get("inspector").get("editors").set("Beromir.ToggleEditor/Editor",{component:$})});})();
//# sourceMappingURL=Plugin.js.map
