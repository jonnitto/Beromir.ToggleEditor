(()=>{var re=Object.create;var xt=Object.defineProperty;var oe=Object.getOwnPropertyDescriptor;var ie=Object.getOwnPropertyNames;var le=Object.getPrototypeOf,ae=Object.prototype.hasOwnProperty;var se=(t,e)=>()=>(t&&(e=t(t=0)),e);var j=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var ne=(t,e,r,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let l of ie(e))!ae.call(t,l)&&l!==r&&xt(t,l,{get:()=>e[l],enumerable:!(o=oe(e,l))||o.enumerable});return t};var X=(t,e,r)=>(r=t!=null?re(le(t)):{},ne(e||!t||!t.__esModule?xt(r,"default",{value:t,enumerable:!0}):r,t));function v(t){return(...e)=>{if(window["@Neos:HostPluginAPI"]&&window["@Neos:HostPluginAPI"][`@${t}`])return window["@Neos:HostPluginAPI"][`@${t}`](...e);throw new Error("You are trying to read from a consumer api that hasn't been initialized yet!")}}var k=se(()=>{});var L=j((Qe,Gt)=>{k();Gt.exports=v("vendor")().React});var vt=j((Te,Xt)=>{k();Xt.exports=v("vendor")().PropTypes});var Bt=j((Me,Ot)=>{k();Ot.exports=v("NeosProjectPackages")().NeosUiReduxStore});var lt=j((Ke,Zt)=>{k();Zt.exports=v("NeosProjectPackages")().NeosUiDecorators});var Wt=j((_e,wt)=>{k();wt.exports=v("vendor")().reactRedux});var at=j((or,Nt)=>{k();Nt.exports=v("NeosProjectPackages")().ReactUiComponents});k();var ge=(t,e="position",r="key")=>{let o=typeof e=="string"?g=>g[e]:e,l={},c={},u={},m={},f={},h={};t.forEach((g,y)=>{let C=g[r]?g[r]:String(y);l[C]=y;let O=o(g),A=String(O||y),J=!1;if(A.startsWith("start")){let b=A.match(/start\s+(\d+)/),p=b&&b[1]?Number(b[1]):0;u[p]||(u[p]=[]),u[p].push(C)}else if(A.startsWith("end")){let b=A.match(/end\s+(\d+)/),p=b&&b[1]?Number(b[1]):0;m[p]||(m[p]=[]),m[p].push(C)}else if(A.startsWith("before")){let b=A.match(/before\s+(\S+)(\s+(\d+))?/);if(!b)J=!0;else{let p=b[1],W=b[3]?Number(b[3]):0;f[p]||(f[p]={}),f[p][W]||(f[p][W]=[]),f[p][W].push(C)}}else if(A.startsWith("after")){let b=A.match(/after\s+(\S+)(\s+(\d+))?/);if(!b)J=!0;else{let p=b[1],W=b[3]?Number(b[3]):0;h[p]||(h[p]={}),h[p][W]||(h[p][W]=[]),h[p][W].push(C)}}else J=!0;if(J){let b=parseFloat(A);(isNaN(b)||!isFinite(b))&&(b=y),c[b]||(c[b]=[]),c[b].push(C)}});let F=[],V=[],Z=[],N=[],G=(g,y)=>{let C=Object.keys(g).map(O=>Number(O)).sort((O,A)=>O-A);return y?C:C.reverse()},w=(g,y)=>{g.forEach(C=>{if(!(N.indexOf(C)>=0)){if(N.push(C),f[C]){let O=G(f[C],!0);for(let A of O)w(f[C][A],y)}if(y.push(C),h[C]){let O=G(h[C],!1);for(let A of O)w(h[C][A],y)}}})};for(let g of G(u,!1))w(u[g],F);for(let g of G(c,!0))w(c[g],V);for(let g of G(m,!0))w(m[g],Z);for(let g of Object.keys(f))if(!(N.indexOf(g)>=0))for(let y of G(f[g],!1))w(f[g][y],F);for(let g of Object.keys(h))if(!(N.indexOf(g)>=0))for(let y of G(h[g],!1))w(h[g][y],V);return[...F,...V,...Z].map(g=>l[g]).map(g=>t[g])},ut=ge;var ht=v("manifest");var s=X(L()),n=X(vt()),jt=X(Bt()),Qt=X(lt());var Ut=X(Wt());var H=X(L());var Y=X(L());function Ft({style:t,className:e,size:r=30}){return Y.default.createElement("svg",{width:r,height:r,stroke:"currentColor",viewBox:"0 0 24 24",style:t,className:e},Y.default.createElement("g",null,Y.default.createElement("circle",{cx:"12",cy:"12",r:"9.5",fill:"none","stroke-width":"2","stroke-linecap":"round"},[{attribute:"dasharray",values:"0 150;42 150;42 150;42 150"},{attribute:"dashoffset",values:"0;-16;-59;-59"}].map(({attribute:o,values:l})=>Y.default.createElement("animate",{key:o,attributeName:`stroke-${o}`,values:l,dur:"1.5s",calcMode:"spline",keyTimes:"0;0.475;0.95;1",keySplines:"0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1",repeatCount:"indefinite"}))),Y.default.createElement("animateTransform",{attributeName:"transform",type:"rotate",dur:"2s",values:"0 12 12;360 12 12",repeatCount:"indefinite"})))}function zt({style:t,className:e,size:r=30}){return Y.default.createElement("svg",{width:r*2,height:r,viewBox:"0 0 24 12",class:e,style:t},[1,2,3].map(o=>{let l=o*6,c=Math.round(100/3*(o-1))/100;return Y.default.createElement("circle",{cx:l,cy:"6",r:"0",fill:"currentColor"},Y.default.createElement("animate",{attributeName:"r",begin:c,calcMode:"spline",dur:"1.5s",keySplines:"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",repeatCount:"indefinite",values:"0;2;0;0"}))}))}var Yt=X(lt()),mt={container:(t=1)=>({display:"grid",gridTemplate:"'content' 1fr / 1fr",alignItems:"center",justifyItems:"center",width:"100%",minHeight:`calc(var(--spacing-GoldenUnit) * ${t})`}),item:(t=!1)=>({gridArea:"content",transition:"opacity var(--transition-Default), transform var(--transition-Default) ease",opacity:t?1:0,transform:`scale(${t?1:0})`})};function de({id:t,title:e="Neos.Neos:Main:loading",isLoading:r=!1,delayTime:o=500,timeoutTime:l=5e3,i18nRegistry:c,heightMultiplier:u=1}){let[m,f]=(0,H.useState)(0),h=e?c.translate(e):null;return(0,H.useEffect)(()=>{if(!r){f(0);return}let F=setTimeout(()=>{f(1)},o),V=setTimeout(()=>{f(2)},o+l);return()=>{clearTimeout(F),clearTimeout(V)}},[r]),r?H.default.createElement("div",{id:t,style:mt.container(u),title:h},H.default.createElement(Ft,{style:mt.item(m==1)}),H.default.createElement(zt,{style:mt.item(m==2)})):null}var be=(0,Yt.neos)(t=>({i18nRegistry:t.get("i18n")})),Vt=be(de);var S=X(at());var Q=X(L()),_=X(at());var a={colorPreview:"beromir-toggleeditor-blateq-colorPreview",highlight:"beromir-toggleeditor-blateq-highlight",transition:"beromir-toggleeditor-blateq-transition",imageSVG:"beromir-toggleeditor-blateq-imageSVG",imageFull:"beromir-toggleeditor-blateq-imageFull",colorBox:"beromir-toggleeditor-blateq-colorBox",flex:"beromir-toggleeditor-blateq-flex",selected:"beromir-toggleeditor-blateq-selected",layered:"beromir-toggleeditor-blateq-layered",colorPreviewLast:"beromir-toggleeditor-blateq-colorPreviewLast",allowEmptyShow:"beromir-toggleeditor-blateq-allowEmptyShow",radio:"beromir-toggleeditor-blateq-radio",disabled:"beromir-toggleeditor-blateq-disabled",listButton:"beromir-toggleeditor-blateq-listButton",list:"beromir-toggleeditor-blateq-list",content:"beromir-toggleeditor-blateq-content",wrapper:"beromir-toggleeditor-blateq-wrapper",color:"beromir-toggleeditor-blateq-color",label:"beromir-toggleeditor-blateq-label",grid:"beromir-toggleeditor-blateq-grid",flex1:"beromir-toggleeditor-blateq-flex1",colorButton:"beromir-toggleeditor-blateq-colorButton",colorTransparent:"beromir-toggleeditor-blateq-colorTransparent",error:"beromir-toggleeditor-blateq-error","flex-start":"beromir-toggleeditor-blateq-flex-start",allowEmpty:"beromir-toggleeditor-blateq-allowEmpty",allowEmptyRadio:"beromir-toggleeditor-blateq-allowEmptyRadio",image:"beromir-toggleeditor-blateq-image",button:"beromir-toggleeditor-blateq-button"};function kt(t){var e,r,o="";if(typeof t=="string"||typeof t=="number")o+=t;else if(typeof t=="object")if(Array.isArray(t)){var l=t.length;for(e=0;e<l;e++)t[e]&&(r=kt(t[e]))&&(o&&(o+=" "),o+=r)}else for(r in t)t[r]&&(o&&(o+=" "),o+=r);return o}function ue(){for(var t,e,r=0,o="",l=arguments.length;r<l;r++)(t=arguments[r])&&(e=kt(t))&&(o&&(o+=" "),o+=e);return o}var B=ue;var Lt=t=>Jt("preview",t),Ht=t=>Jt("icon",t);function q(t,e,r=!1,o=c=>c,l=""){let c=`${e}Active${l}`,u=t[e+l],m=t[c];return r&&m===void 0&&(m=u),u==null&&m==null?null:{default:o(u),active:o(m)}}function St(t,e){if(!t||typeof t!="object")return[];let r=[];for(let o in t){let l=t[o];l.hidden||r.push({...l,value:o,key:o==""?"__empty__":o})}return e==="color"?pt(r):r}function pt(t){return Array.isArray(t)?(t=t.map(e=>({...e,color:me(e.color)})).filter(e=>e.color),t):[]}function me(t){return!t||typeof t!="string"&&!Array.isArray(t)?null:typeof t=="string"?[t]:(t=t.filter(Boolean),t.length<1?null:t)}function Jt(t,e){if(!e)return null;let r=q(e,t);if(!r)return null;let o=r.default&&r.active,l=q(e,t,!0,m=>`rotate(${m||0}deg)`,"Rotate"),c=q("label",t,!0),u=q("description",!0);return{type:t,needLayering:o,state:r,label:c,description:u,rotate:l}}function U({item:t,size:e,isCurrent:r}){let o=Ht(t);if(!o)return null;let{state:l,rotate:c,needLayering:u}=o;return u?Q.default.createElement("span",{className:a.layered},Q.default.createElement(_.Icon,{icon:l.default,className:a.transition,style:{opacity:r?0:1,transform:c?.default},size:e}),Q.default.createElement(_.Icon,{icon:l.active,className:a.transition,style:{opacity:r?1:0,transform:c?.active},size:e})):l.default?Q.default.createElement(_.Icon,{icon:l.default,className:a.transition,style:{transform:r?c?.active:c?.default},size:e}):l.active&&r?Q.default.createElement(_.Icon,{icon:l.active,style:{transform:c?.active},size:e}):null}var T=X(L());var It=X(L()),qt=X(lt());var pe=(0,qt.neos)(t=>({i18nRegistry:t.get("i18n")})),$=pe(Ie);function Ie({src:t,className:e,style:r,label:o,i18nRegistry:l}){let c=l.translate(o);return t.startsWith("<svg ")?It.default.createElement("div",{className:B(r.imageSVG,e),style:r,"aria-label":c,dangerouslySetInnerHTML:{__html:t}}):It.default.createElement("img",{className:B(r.image,e),style:r,alt:c,src:t.startsWith("resource://")?`/_Resources/Static/Packages/${t.substr(11)}`:t})}function D({item:t,isCurrent:e}){let r=Lt(t);if(!r)return null;let{state:o,rotate:l,needLayering:c,label:u,description:m}=r,f=t.previewFull?a.imageFull:null;return r.needLayering?T.default.createElement("span",{className:a.layered},T.default.createElement($,{src:o.default,className:[a.transition,f],style:{opacity:e?0:1,transform:l?.default},label:m?.default||u?.default}),T.default.createElement($,{src:o.active,className:[a.transition,f],style:{opacity:e?1:0,transform:l?.active},label:m?.active||u?.active})):o.default?T.default.createElement($,{src:o.default,className:[a.transition,f],style:{transform:e?l?.active:l?.default},label:m?.default||u?.default}):o.active&&e?T.default.createElement($,{src:o.active,className:[a.transition,f],style:{transform:l?.active},label:m?.active||u?.active}):null}var tt=X(L()),Rt=X(at());function M({children:t,label:e,id:r,className:o,title:l,style:c,renderHelpIcon:u}){return t?tt.default.createElement(tt.default.Fragment,null,e&&tt.default.createElement(Rt.Label,{htmlFor:r},e," ",u()),tt.default.createElement("div",{id:r,className:B(a.wrapper,o),style:c,title:l},t)):null}var fe=t=>({contextNodePath:t.focusedNodePath,dataSourceIdentifier:t.options.dataSourceIdentifier,dataSourceUri:t.options.dataSourceUri,dataSourceAdditionalData:t.options.dataSourceAdditionalData,dataSourceDisableCaching:!!t.options.dataSourceDisableCaching}),Ce={layout:"grid",maximalColumns:4,values:{},columns:null,allowEmpty:!1,emptyValue:"",multiple:!1,iconSize:null,disabled:!1,hidden:!1,dataSourceIdentifier:null,dataSourceUri:null};function Tt(t){let e={...Ce,...t.options},{layout:r,values:o,columns:l,maximalColumns:c,emptyValue:u,iconSize:m,disabled:f,dataSourceIdentifier:h,dataSourceUri:F,dataSourceAdditionalData:V,multiple:Z}=e,N=Z||e.allowEmpty,{value:G,commit:w,highlight:st,i18nRegistry:g,id:y,dataSourcesDataLoader:C,renderHelpIcon:O}=t,A=g.translate(t.label),[J,b]=(0,s.useState)([]);(0,s.useEffect)(()=>{st||b(Array.isArray(G)?G:[G])},[st]),Z&&!Array.isArray(G)&&console.warn(`Misconfiguration in property "${t.identifier}". Multiple is activated but value type seems to be "string" but should be "array".`);let p=!!(h||F),[W,Mt]=(0,s.useState)(p),[E,nt]=(0,s.useState)(p?[]:St(o,r,g)),[et,ft]=(0,s.useState)(Array.isArray(G)?G:[G]),[Et,Kt]=(0,s.useState)(null);if((0,s.useEffect)(()=>{let i=JSON.stringify({dataSourceIdentifier:h,dataSourceUri:F,dataSourceAdditionalData:V});!p||Et===i||(Kt(i),C.resolveValue(fe(t),G).then(I=>{if(Mt(!1),I.hidden){nt({hidden:!0});return}if(I=I.map(d=>({key:d.value==""?"__empty__":d.value,...d})),r==="color"){nt(pt(I));return}nt(I)}))},[h,F,V]),W)return s.default.createElement(M,{id:y,label:A,renderHelpIcon:O},s.default.createElement(Vt,{isLoading:W,title:"Beromir.ToggleEditor:Main:loading"}));if(E.hidden)return null;if(!E||!E.length)return s.default.createElement(M,{id:y,label:A,className:a.error,renderHelpIcon:O},g.translate(`Beromir.ToggleEditor:Main:error.${p?"noDataFromSource":"noNodeTypeDefintion"}`));function Pt(i){if(JSON.stringify(et)===JSON.stringify(J))return!1;let I=J.includes(i.value);if(!et.length)return I;let d=gt(i);return Z?d&&!I||I&&!d:d}function gt(i){return et.includes(i.value)}function rt(i,I){if(I&&I.blur(),!i){w(Z?[]:u),ft([]);return}let d=i.value,x=[...et],K=x.includes(d);Z?K?x.splice(x.indexOf(d),1):x.push(d):x=K?[]:[d],!(!N&&x.length===0)&&(ft(x),Z||(x=x[0]||u),w(x))}let Ct=(i,I=0)=>{if(typeof i=="number"&&i>0)return i;let d=E.length||1;if(!i||typeof i!="string")return d;try{return i=i.replaceAll("{items}",d),I&&(i=i.replaceAll("{maximalColumns}",d)),new Function(`return Math.floor(${i})`)()}catch(x){console.warn('An error occurred while trying to evaluate "'+i+`"
`,x)}},_t=()=>{let i=Ct(l,c),I=Ct(c);return{"--columns":Math.min(i,I)}},$t=g.translate("Beromir.ToggleEditor:Main:reset"),ct=({item:i,className:I=a.allowEmpty})=>N&&!Z?s.default.createElement("span",{className:B(I,gt(i)&&a.allowEmptyShow)},s.default.createElement(S.Icon,{size:"sm",icon:"times"})):null;return s.default.createElement(M,{id:y,label:A,className:[a[r],f&&a.disabled],style:_t(),renderHelpIcon:O},ut(E).map((i,I)=>{let d=gt(i),x=i.disabled,K=d?"active":"default",te=q(i,"label",!0,P=>g.translate(P)),ee=q(i,"description",!0,P=>g.translate(P)),z=te?.[K],dt=ee?.[K],bt=dt||z,ot=d&&N?$t:bt,it=Pt(i)&&a.highlight;switch(r){case"list":return Z?s.default.createElement(S.Label,{className:B(a.listButton,it),title:dt,"aria-label":ot,key:I},s.default.createElement(S.CheckBox,{isChecked:d,disabled:x,onChange:()=>rt(i)}),s.default.createElement(U,{item:i,isCurrent:d,size:m}),s.default.createElement(D,{item:i,isCurrent:d}),z&&s.default.createElement("span",{className:a.flex1},z)):s.default.createElement("button",{onClick:({currentTarget:R})=>rt(i,R),type:"button",title:dt,"aria-label":ot,disabled:x,className:B(a.listButton,d&&a.selected,it),key:I},s.default.createElement("span",{className:a.radio},s.default.createElement("span",null)),s.default.createElement(U,{item:i,isCurrent:d,size:m}),s.default.createElement(D,{item:i,isCurrent:d}),z&&s.default.createElement("span",{className:a.flex1},z),s.default.createElement(ct,{item:i,className:a.allowEmptyRadio}));case"color":let P=i.color.length-1;return s.default.createElement("div",{className:a.colorBox,key:I},s.default.createElement("button",{onClick:({currentTarget:R})=>rt(i,R),type:"button",title:bt,"aria-label":ot,disabled:x,className:B(a.colorButton,d&&a.selected,it)},i.color.map((R,At)=>s.default.createElement("span",{key:`color-${At}`,className:B(a.colorPreview,R==="transparent"&&a.colorTransparent,P===At&&a.colorPreviewLast),style:{backgroundColor:R}})),s.default.createElement(ct,{item:i})),z&&s.default.createElement("span",{className:B(a.label,x&&a.disabled)},z));default:return s.default.createElement(S.Button,{onClick:()=>rt(i),isActive:d,title:bt,"aria-label":ot,disabled:x,className:B(a.button,it),key:I},s.default.createElement(U,{item:i,isCurrent:d,size:m}),s.default.createElement(D,{item:i,isCurrent:d}),z&&s.default.createElement("span",{className:B(i.icon||i.preview?a.label:null)},z),s.default.createElement(ct,{item:i}))}}))}Tt.propTypes={value:n.default.string,commit:n.default.func.isRequired,i18nRegistry:n.default.object.isRequired,options:n.default.shape({layout:n.default.oneOf(["grid","flex","flex-start","list","color"]),columns:n.default.oneOfType([n.default.string,n.default.number]),maximalColumns:n.default.oneOfType([n.default.string,n.default.number]),allowEmpty:n.default.bool,emptyValue:n.default.string,multiple:n.default.bool,iconSize:n.default.oneOf(["xs","sm","lg","2x","3x"]),values:n.default.objectOf(n.default.shape({label:n.default.string,icon:n.default.string,iconRotate:n.default.number,description:n.default.string,color:n.default.oneOfType([n.default.string,n.default.arrayOf(n.default.string)]),hidden:n.default.bool,preview:n.default.string,previewFull:n.default.bool,disabled:n.default.bool})),dataSourceIdentifier:n.default.string,dataSourceUri:n.default.string,dataSourceDisableCaching:n.default.bool,dataSourceAdditionalData:n.default.objectOf(n.default.any)}).isRequired};var Ae=(0,Qt.neos)(t=>({i18nRegistry:t.get("i18n"),dataSourcesDataLoader:t.get("dataLoaders").get("DataSources")})),xe=(0,Ut.connect)(t=>({focusedNodePath:jt.selectors.CR.Nodes.focusedNodePathSelector(t)})),Dt=Ae(xe(Tt));ht("Beromir.ToggleEditor:Editor",{},t=>{t.get("inspector").get("editors").set("Beromir.ToggleEditor/Editor",{component:Dt,hasOwnLabel:!0})});})();
//# sourceMappingURL=Plugin.js.map
