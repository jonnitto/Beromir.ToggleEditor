(()=>{var Pt=Object.create;var mt=Object.defineProperty;var Kt=Object.getOwnPropertyDescriptor;var _t=Object.getOwnPropertyNames;var $t=Object.getPrototypeOf,te=Object.prototype.hasOwnProperty;var ee=(t,e)=>()=>(t&&(e=t(t=0)),e);var w=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var re=(t,e,r,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let l of _t(e))!te.call(t,l)&&l!==r&&mt(t,l,{get:()=>e[l],enumerable:!(o=Kt(e,l))||o.enumerable});return t};var p=(t,e,r)=>(r=t!=null?Pt($t(t)):{},re(e||!t||!t.__esModule?mt(r,"default",{value:t,enumerable:!0}):r,t));function I(t){return(...e)=>{if(window["@Neos:HostPluginAPI"]&&window["@Neos:HostPluginAPI"][`@${t}`])return window["@Neos:HostPluginAPI"][`@${t}`](...e);throw new Error("You are trying to read from a consumer api that hasn't been initialized yet!")}}var h=ee(()=>{});var y=w((Se,ft)=>{h();ft.exports=I("vendor")().React});var At=w((qe,Ct)=>{h();Ct.exports=I("vendor")().PropTypes});var ht=w((Je,Gt)=>{h();Gt.exports=I("NeosProjectPackages")().NeosUiReduxStore});var E=w((De,yt)=>{h();yt.exports=I("NeosProjectPackages")().NeosUiDecorators});var Xt=w((Me,xt)=>{h();xt.exports=I("vendor")().reactRedux});var P=w((_e,wt)=>{h();wt.exports=I("NeosProjectPackages")().ReactUiComponents});h();var It=I("manifest");var n=p(y()),s=p(At()),Yt=p(ht()),kt=p(E()),St=p(Xt());var x=p(y());var G=p(y());function Bt({style:t,className:e,size:r=30}){return G.default.createElement("svg",{width:r,height:r,stroke:"currentColor",viewBox:"0 0 24 24",style:t,className:e},G.default.createElement("g",null,G.default.createElement("circle",{cx:"12",cy:"12",r:"9.5",fill:"none","stroke-width":"2","stroke-linecap":"round"},[{attribute:"dasharray",values:"0 150;42 150;42 150;42 150"},{attribute:"dashoffset",values:"0;-16;-59;-59"}].map(({attribute:o,values:l})=>G.default.createElement("animate",{key:o,attributeName:`stroke-${o}`,values:l,dur:"1.5s",calcMode:"spline",keyTimes:"0;0.475;0.95;1",keySplines:"0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1",repeatCount:"indefinite"}))),G.default.createElement("animateTransform",{attributeName:"transform",type:"rotate",dur:"2s",values:"0 12 12;360 12 12",repeatCount:"indefinite"})))}function Ot({style:t,className:e,size:r=30}){return G.default.createElement("svg",{width:r*2,height:r,viewBox:"0 0 24 12",class:e,style:t},[1,2,3].map(o=>{let l=o*6,g=Math.round(100/3*(o-1))/100;return G.default.createElement("circle",{cx:l,cy:"6",r:"0",fill:"currentColor"},G.default.createElement("animate",{attributeName:"r",begin:g,calcMode:"spline",dur:"1.5s",keySplines:"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",repeatCount:"indefinite",values:"0;2;0;0"}))}))}var vt=p(E()),it={container:(t=1)=>({display:"grid",gridTemplate:"'content' 1fr / 1fr",alignItems:"center",justifyItems:"center",width:"100%",minHeight:`calc(var(--spacing-GoldenUnit) * ${t})`}),item:(t=!1)=>({gridArea:"content",transition:"opacity var(--transition-Default), transform var(--transition-Default) ease",opacity:t?1:0,transform:`scale(${t?1:0})`})};function ie({id:t,title:e="Neos.Neos:Main:loading",isLoading:r=!1,delayTime:o=500,timeoutTime:l=5e3,i18nRegistry:g,heightMultiplier:d=1}){let[u,C]=(0,x.useState)(0),H=e?g.translate(e):null;return(0,x.useEffect)(()=>{if(!r){C(0);return}let V=setTimeout(()=>{C(1)},o),D=setTimeout(()=>{C(2)},o+l);return()=>{clearTimeout(V),clearTimeout(D)}},[r]),r?x.default.createElement("div",{id:t,style:it.container(d),title:H},x.default.createElement(Bt,{style:it.item(u==1)}),x.default.createElement(Ot,{style:it.item(u==2)})):null}var le=(0,vt.neos)(t=>({i18nRegistry:t.get("i18n")})),Zt=le(ie);var X=p(P());var W=p(y()),j=p(P());var a={colorBox:"beromir-toggleeditor-blateq-colorBox",grid:"beromir-toggleeditor-blateq-grid",allowEmpty:"beromir-toggleeditor-blateq-allowEmpty",error:"beromir-toggleeditor-blateq-error",button:"beromir-toggleeditor-blateq-button",highlight:"beromir-toggleeditor-blateq-highlight",listButton:"beromir-toggleeditor-blateq-listButton",list:"beromir-toggleeditor-blateq-list","flex-start":"beromir-toggleeditor-blateq-flex-start",wrapper:"beromir-toggleeditor-blateq-wrapper",radio:"beromir-toggleeditor-blateq-radio",colorPreview:"beromir-toggleeditor-blateq-colorPreview",label:"beromir-toggleeditor-blateq-label",imageSVG:"beromir-toggleeditor-blateq-imageSVG",content:"beromir-toggleeditor-blateq-content",allowEmptyShow:"beromir-toggleeditor-blateq-allowEmptyShow",colorTransparent:"beromir-toggleeditor-blateq-colorTransparent",image:"beromir-toggleeditor-blateq-image",layered:"beromir-toggleeditor-blateq-layered",selected:"beromir-toggleeditor-blateq-selected",colorButton:"beromir-toggleeditor-blateq-colorButton",transition:"beromir-toggleeditor-blateq-transition",colorPreviewLast:"beromir-toggleeditor-blateq-colorPreviewLast",allowEmptyRadio:"beromir-toggleeditor-blateq-allowEmptyRadio",flex:"beromir-toggleeditor-blateq-flex",disabled:"beromir-toggleeditor-blateq-disabled",color:"beromir-toggleeditor-blateq-color",imageFull:"beromir-toggleeditor-blateq-imageFull"};function Wt(t){var e,r,o="";if(typeof t=="string"||typeof t=="number")o+=t;else if(typeof t=="object")if(Array.isArray(t)){var l=t.length;for(e=0;e<l;e++)t[e]&&(r=Wt(t[e]))&&(o&&(o+=" "),o+=r)}else for(r in t)t[r]&&(o&&(o+=" "),o+=r);return o}function ae(){for(var t,e,r=0,o="",l=arguments.length;r<l;r++)(t=arguments[r])&&(e=Wt(t))&&(o&&(o+=" "),o+=e);return o}var f=ae;var Ft=t=>Lt("preview",t),Nt=t=>Lt("icon",t);function O(t,e,r=!1,o=g=>g,l=""){let g=`${e}Active${l}`,d=t[e+l],u=t[g];return r&&u===void 0&&(u=d),d==null&&u==null?null:{default:o(d),active:o(u)}}function zt(t,e){if(!t||typeof t!="object")return[];let r=[];for(let o in t){let l=t[o];l.hidden||r.push({...l,value:o})}return e==="color"?lt(r):r}function lt(t){return Array.isArray(t)?(t=t.map(e=>({...e,color:ne(e.color)})).filter(e=>e.color),t):[]}function ne(t){return!t||typeof t!="string"&&!Array.isArray(t)?null:typeof t=="string"?[t]:(t=t.filter(Boolean),t.length<1?null:t)}function Lt(t,e){if(!e)return null;let r=O(e,t);if(!r)return null;let o=r.default&&r.active,l=O(e,t,!0,u=>`rotate(${u||0}deg)`,"Rotate"),g=O("label",t,!0),d=O("description",!0);return{type:t,needLayering:o,state:r,label:g,description:d,rotate:l}}function F({item:t,size:e,isCurrent:r}){let o=Nt(t);if(!o)return null;let{state:l,rotate:g,needLayering:d}=o;return d?W.default.createElement("span",{className:a.layered},W.default.createElement(j.Icon,{icon:l.default,className:a.transition,style:{opacity:r?0:1,transform:g?.default},size:e}),W.default.createElement(j.Icon,{icon:l.active,className:a.transition,style:{opacity:r?1:0,transform:g?.active},size:e})):l.default?W.default.createElement(j.Icon,{icon:l.default,className:a.transition,style:{transform:r?g?.active:g?.default},size:e}):l.active&&r?W.default.createElement(j.Icon,{icon:l.active,style:{transform:g?.active},size:e}):null}var N=p(y());var at=p(y()),Ht=p(E());var se=(0,Ht.neos)(t=>({i18nRegistry:t.get("i18n")})),J=se(ge);function ge({src:t,className:e,style:r,label:o,i18nRegistry:l}){let g=l.translate(o);return t.startsWith("<svg ")?at.default.createElement("div",{className:f(r.imageSVG,e),style:r,"aria-label":g,dangerouslySetInnerHTML:{__html:t}}):at.default.createElement("img",{className:f(r.image,e),style:r,alt:g,src:t.startsWith("resource://")?`/_Resources/Static/Packages/${t.substr(11)}`:t})}function z({item:t,isCurrent:e}){let r=Ft(t);if(!r)return null;let{state:o,rotate:l,needLayering:g,label:d,description:u}=r,C=t.previewFull?a.imageFull:null;return r.needLayering?N.default.createElement("span",{className:a.layered},N.default.createElement(J,{src:o.default,className:[a.transition,C],style:{opacity:e?0:1,transform:l?.default},label:u?.default||d?.default}),N.default.createElement(J,{src:o.active,className:[a.transition,C],style:{opacity:e?1:0,transform:l?.active},label:u?.active||d?.active})):o.default?N.default.createElement(J,{src:o.default,className:[a.transition,C],style:{transform:e?l?.active:l?.default},label:u?.default||d?.default}):o.active&&e?N.default.createElement(J,{src:o.active,className:[a.transition,C],style:{transform:l?.active},label:u?.active||d?.active}):null}var R=p(y()),Vt=p(P());function L({children:t,label:e,id:r,className:o,title:l,style:g,renderHelpIcon:d}){return t?R.default.createElement(R.default.Fragment,null,e&&R.default.createElement(Vt.Label,{htmlFor:r},e," ",d()),R.default.createElement("div",{id:r,className:f(a.wrapper,o),style:g,title:l},t)):null}var ce=t=>({contextNodePath:t.focusedNodePath,dataSourceIdentifier:t.options.dataSourceIdentifier,dataSourceUri:t.options.dataSourceUri,dataSourceAdditionalData:t.options.dataSourceAdditionalData,dataSourceDisableCaching:!!t.options.dataSourceDisableCaching}),de={layout:"grid",maximalColumns:4,values:{},columns:null,allowEmpty:!1,emptyValue:"",multiple:!1,iconSize:null,disabled:!1,hidden:!1,dataSourceIdentifier:null,dataSourceUri:null};function Qt(t){let e={...de,...t.options},{layout:r,values:o,columns:l,maximalColumns:g,emptyValue:d,iconSize:u,disabled:C,dataSourceIdentifier:H,dataSourceUri:V,dataSourceAdditionalData:D,multiple:B}=e,K=B||e.allowEmpty,{value:Y,commit:nt,highlight:_,i18nRegistry:v,id:$,dataSourcesDataLoader:jt,renderHelpIcon:tt}=t,et=v.translate(t.label);B&&!Array.isArray(Y)&&console.warn(`Misconfiguration in property "${t.identifier}". Multiple is activated but value type seems to be "string" but should be "array".`);let U=!!(H||V),[st,Jt]=(0,n.useState)(U),[k,rt]=(0,n.useState)(U?[]:zt(o,r,v)),[gt,ct]=(0,n.useState)(Array.isArray(Y)?Y:[Y]),[Rt,Dt]=(0,n.useState)(null);if((0,n.useEffect)(()=>{let i=JSON.stringify({dataSourceIdentifier:H,dataSourceUri:V,dataSourceAdditionalData:D});!U||Rt===i||(Dt(i),jt.resolveValue(ce(t),Y).then(m=>{if(Jt(!1),m.hidden){rt({hidden:!0});return}if(r==="color"){rt(lt(m));return}rt(m)}))},[H,V,D]),st)return n.default.createElement(L,{id:$,label:et,renderHelpIcon:tt},n.default.createElement(Zt,{isLoading:st,title:"Beromir.ToggleEditor:Main:loading"}));if(k.hidden)return null;if(!k||!k.length)return n.default.createElement(L,{id:$,label:et,className:a.error,renderHelpIcon:tt},v.translate(`Beromir.ToggleEditor:Main:error.${U?"noDataFromSource":"noNodeTypeDefintion"}`));function dt(i){return gt.includes(i.value)}function M(i,m){if(m&&m.blur(),!i){nt(B?[]:d),ct([]);return}let c=i.value,b=[...gt],S=b.includes(c);B?S?b.splice(b.indexOf(c),1):b.push(c):b=S?[]:[c],!(!K&&b.length===0)&&(ct(b),B||(b=b[0]||d),nt(b))}let bt=(i,m=0)=>{if(typeof i=="number"&&i>0)return i;let c=k.length||1;if(!i||typeof i!="string")return c;try{return i=i.replaceAll("{items}",c),m&&(i=i.replaceAll("{maximalColumns}",c)),new Function(`return Math.floor(${i})`)()}catch(b){console.warn('An error occurred while trying to evaluate "'+i+`"
`,b)}},Ut=()=>{let i=bt(l,g),m=bt(g);return{"--columns":Math.min(i,m)}},Mt=v.translate("Beromir.ToggleEditor:Main:reset"),ot=({item:i,className:m=a.allowEmpty})=>K&&!B?n.default.createElement("span",{className:f(m,dt(i)&&a.allowEmptyShow)},n.default.createElement(X.Icon,{size:"sm",icon:"times"})):null;return n.default.createElement(L,{id:$,label:et,className:[a[r],C&&a.disabled],style:Ut(),renderHelpIcon:tt},k.map((i,m)=>{let c=dt(i),b=i.disabled,S=c?"active":"default",Tt=O(i,"label",!0,q=>v.translate(q)),Et=O(i,"description",!0,q=>v.translate(q)),A=Tt?.[S],Q=Et?.[S]||A,T=c&&K?Mt:Q;switch(r){case"list":return B?n.default.createElement(X.Label,{className:a.listButton,title:Q,"aria-label":T,key:m},n.default.createElement(X.CheckBox,{isChecked:c,disabled:b,onChange:()=>M(i)}),n.default.createElement(F,{item:i,isCurrent:c,size:u}),n.default.createElement(z,{item:i,isCurrent:c}),A&&n.default.createElement("span",null,A)):n.default.createElement("button",{onClick:({currentTarget:Z})=>M(i,Z),type:"button",title:Q,"aria-label":T,disabled:b,className:f(a.listButton,c&&a.selected),key:m},n.default.createElement("span",{className:f(a.radio,c&&_&&a.highlight)},n.default.createElement("span",null)),n.default.createElement(F,{item:i,isCurrent:c,size:u}),n.default.createElement(z,{item:i,isCurrent:c}),A&&n.default.createElement("span",null,A),n.default.createElement(ot,{item:i,className:a.allowEmptyRadio}));case"color":let q=i.color.length-1;return n.default.createElement("div",{className:a.colorBox,key:m},n.default.createElement("button",{onClick:({currentTarget:Z})=>M(i,Z),type:"button",title:Q,"aria-label":T,disabled:b,className:f(a.colorButton,c&&(_?a.highlight:a.selected))},i.color.map((Z,ut)=>n.default.createElement("span",{key:`color-${ut}`,className:f(a.colorPreview,Z==="transparent"&&a.colorTransparent,q===ut&&a.colorPreviewLast),style:{backgroundColor:Z}})),n.default.createElement(ot,{item:i})),A&&n.default.createElement("span",{className:f(a.label,b&&a.disabled)},A));default:return n.default.createElement(X.Button,{onClick:()=>M(i),isActive:c,title:Q,"aria-label":T,disabled:b,className:f(a.button,c&&_&&a.highlight),key:m},n.default.createElement(F,{item:i,isCurrent:c,size:u}),n.default.createElement(z,{item:i,isCurrent:c}),A&&n.default.createElement("span",{className:f(i.icon||i.preview?a.label:null)},A),n.default.createElement(ot,{item:i}))}}))}Qt.propTypes={value:s.default.string,commit:s.default.func.isRequired,i18nRegistry:s.default.object.isRequired,options:s.default.shape({layout:s.default.oneOf(["grid","flex","flex-start","list","color"]),columns:s.default.oneOfType([s.default.string,s.default.number]),maximalColumns:s.default.oneOfType([s.default.string,s.default.number]),allowEmpty:s.default.bool,emptyValue:s.default.string,multiple:s.default.bool,iconSize:s.default.oneOf(["xs","sm","lg","2x","3x"]),values:s.default.objectOf(s.default.shape({label:s.default.string,icon:s.default.string,iconRotate:s.default.number,description:s.default.string,color:s.default.oneOfType([s.default.string,s.default.arrayOf(s.default.string)]),hidden:s.default.bool,preview:s.default.string,previewFull:s.default.bool,disabled:s.default.bool})),dataSourceIdentifier:s.default.string,dataSourceUri:s.default.string,dataSourceDisableCaching:s.default.bool,dataSourceAdditionalData:s.default.objectOf(s.default.any)}).isRequired};var be=(0,kt.neos)(t=>({i18nRegistry:t.get("i18n"),dataSourcesDataLoader:t.get("dataLoaders").get("DataSources")})),ue=(0,St.connect)(t=>({focusedNodePath:Yt.selectors.CR.Nodes.focusedNodePathSelector(t)})),qt=be(ue(Qt));It("Beromir.ToggleEditor:Editor",{},t=>{t.get("inspector").get("editors").set("Beromir.ToggleEditor/Editor",{component:qt,hasOwnLabel:!0})});})();
//# sourceMappingURL=Plugin.js.map
