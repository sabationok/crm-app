"use strict";(self.webpackChunkcrm_app=self.webpackChunkcrm_app||[]).push([[217],{540:function(e,i,n){n.d(i,{Z:function(){return T}});var s=n(413),t=n(791),c=n(184),o=(0,t.createContext)(),l=function(e){return(0,c.jsx)(o.Provider,{value:(0,s.Z)({},e),children:e.children})},a=n(885),r=n(107),d={filterContainer:"BlockFounder_filterContainer__xpoxO",filterForm:"BlockFounder_filterForm__P13kq",customFounder:"BlockFounder_customFounder__D1y72",inputFounder:"BlockFounder_inputFounder__gbkmY",customSelect:"BlockFounder_customSelect__W-Ovy",isOpen:"BlockFounder_isOpen__5YHKD",selectList:"BlockFounder_selectList__37jNg",inputParam:"BlockFounder_inputParam__00Trb",selectItem:"BlockFounder_selectItem__0PXUx",button:"BlockFounder_button__kECXA",notification:"BlockFounder_notification__ZaOSI"},u=function(e){e.blockFilterParams;var i=(0,t.useState)(""),n=(0,a.Z)(i,2),o=n[0],l=n[1],u=(0,t.useState)({name:""}),_=(0,a.Z)(u,2),m=_[0],x=_[1],v=(0,t.useState)(!1),j=(0,a.Z)(v,2),h=j[0],k=j[1],f=(0,t.useState)([]),N=(0,a.Z)(f,1)[0],p=[d.customSelect,h&&d.isOpen].join(" ");function B(){k(!h)}return(0,c.jsx)("div",{className:d.filterContainer,children:(0,c.jsxs)("form",{className:d.filterForm,onSubmit:function(e){!function(e){e.preventDefault()}(e)},children:[(0,c.jsxs)("div",{className:p,onClick:B,children:[(0,c.jsx)("input",{className:d.inputParam,type:"text",placeholder:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440",value:m.name,onChange:function(e){var i=e.target;x((0,s.Z)((0,s.Z)({},m),{},{name:i.value}))}}),(0,c.jsx)("ul",{className:d.selectList,children:N.map((function(e){return(0,c.jsx)("li",{className:d.selectItem,"data-title":e.dataTitle,onClick:function(i){!function(e){e.evt;var i=e.item;x(i),B()}({evt:i,item:e})},children:e.name},e.id)}))})]}),(0,c.jsx)("div",{className:d.customFounder,children:(0,c.jsx)("input",{className:d.inputFounder,type:"text",name:"searchQuery",value:o,placeholder:"\u041f\u043e\u0448\u0443\u043a",onChange:function(e){!function(e){var i=e.target;l(i.value)}(e)}})}),(0,c.jsx)("button",{className:d.button,type:"submit",children:(0,c.jsx)(r.Z,{iconId:"search",size:"24px"})})]})})},_=n(776),m={Button:"ButtonIcon_Button__7zIUY",iconSvg:"ButtonIcon_iconSvg__Ha7ix",ColoredBtn:"ButtonIcon_ColoredBtn__Raw3O",PrimaryBtn:"ButtonIcon_PrimaryBtn__7XJ7x",BorderBtn:"ButtonIcon_BorderBtn__BFvDB"},x=function(e){var i=e.children,n=e.type,t=void 0===n?"button":n,o=e.disabled,l=void 0!==o&&o,a=e.onClick,r=void 0===a?null:a,d=e.iconId,u=void 0===d?"":d,x=e.styles,v=void 0===x?{}:x,j=e.size,h=void 0===j?"":j,k=e.className,f=void 0===k?"":k,N=e.title,p=void 0===N?"":N,B=e.styleType,I=void 0===B?"PrimaryBtn":B,F=[m.Button,m[I],f].join(" "),b=(0,s.Z)({width:h,height:h},v);return(0,c.jsxs)("button",{type:t,className:F,disabled:l,style:b,title:p&&p,onClick:r&&r,children:[(0,c.jsx)("svg",{className:m.iconSvg,children:(0,c.jsx)("use",{href:"".concat(_.Z,"#icon-").concat(u.toLowerCase())})}),i]})},v=n(164),j=function(e){var i=(0,t.useState)(!1),n=(0,a.Z)(i,2),s=n[0],c=n[1],o=document.getElementById(e.id);if((0,t.useEffect)((function(){e.id?c(!0):c(!1)}),[e.id]),s)return v.createPortal(e.children,o)};j.propTypes={};var h=j,k="BlockActions_actionsBackdrop__QWF-u",f="BlockActions_actionsBackdropOpen__PvLbA",N="BlockActions_actionsContainer__Pbrz5",p="BlockActions_actionsList__1G1ee",B="BlockActions_listItem__TfXVd",I="BlockActions_hover__OY83k",F=function(e){var i=e.link,n=void 0===i||i,s=e.copy,l=void 0===s||s,r=e.share,d=void 0===r||r,u=e.refresh,_=void 0===u||u,m=e.filter,v=void 0===m||m,j=e.search,F=void 0===j||j,b=e.editItem,y=void 0===b||b,g=e.createItem,C=void 0===g||g,P=e.deleteItem,Z=void 0===P||P,z=e.printDoc,S=void 0===z||z,L=e.exportDoc,w=void 0===L||L,T=e.importDoc,A=void 0===T||T,H=(0,t.useState)(!1),O=(0,a.Z)(H,2),D=O[0],R=O[1],E=(0,t.useContext)(o);function W(e){R(!D)}return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(x,{iconId:D?"close":"actions-h",size:"100%",onClick:W}),(0,c.jsx)(h,{id:E.iconId,children:(0,c.jsx)("div",{className:D?f:k,onClick:W,children:(0,c.jsxs)("div",{className:N,children:[(0,c.jsx)("span",{children:"\u0414\u043e\u0434\u0430\u0442\u043a\u043e\u0432\u043e"}),D&&(0,c.jsxs)("ul",{className:p,children:[n&&(0,c.jsx)("li",{className:B,children:(0,c.jsx)(x,{iconId:"link",size:"100%",className:I})}),l&&(0,c.jsx)("li",{className:B,children:(0,c.jsx)(x,{iconId:"search",size:"100%",className:I})}),d&&(0,c.jsx)("li",{className:B,children:(0,c.jsx)(x,{iconId:"filter-on",size:"100%",className:I})}),_&&(0,c.jsx)("li",{className:B,children:(0,c.jsx)(x,{iconId:"copy",size:"100%",className:I})}),v&&(0,c.jsx)("li",{className:B,children:(0,c.jsx)(x,{iconId:"share",size:"100%",className:I})}),F&&(0,c.jsx)("li",{className:B,children:(0,c.jsx)(x,{iconId:"refresh",size:"100%",className:I})}),y&&(0,c.jsxs)("li",{className:B,children:[" ",(0,c.jsx)(x,{iconId:"edit",size:"100%",className:I})]}),Z&&(0,c.jsx)("li",{className:B,children:(0,c.jsx)(x,{iconId:"delete",size:"100%",className:I})}),C&&(0,c.jsxs)("li",{className:B,children:[" ",(0,c.jsx)(x,{iconId:"plus",size:"100%",className:I})]}),S&&(0,c.jsxs)("li",{className:B,children:[" ",(0,c.jsx)(x,{iconId:"print-on",size:"100%",className:I})]}),w&&(0,c.jsxs)("li",{className:B,children:[" ",(0,c.jsx)(x,{iconId:"upload",size:"100%",className:I})]}),A&&(0,c.jsxs)("li",{className:B,children:[" ",(0,c.jsx)(x,{iconId:"download",size:"100%",className:I})]})]})]})})})]})},b="BlockHeaderFilter_header__2v66G",y="BlockHeaderFilter_title__7SWEQ",g=function(e){var i=e.title,n=e.iconId,s=void 0===n?"info":n,t=(e.subTitle,e.blockFilter,e.blockFilterParams);return(0,c.jsxs)("div",{className:b,children:[(0,c.jsx)(r.Z,{iconId:s,size:"24px"}),(0,c.jsx)(u,{blockFilterParams:t}),i&&(0,c.jsx)("span",{className:y,children:(0,c.jsx)("span",{title:i,children:i})}),(0,c.jsx)(F,{})]})},C="BlockHeaderLink_header__3Xw1I",P="BlockHeaderLink_headerLink__ASjs9",Z="BlockHeaderLink_subTitle__yD46E",z="BlockHeaderLink_titleInner__hx2Ou",S="BlockHeaderLink_title__Nndxb",L=function(e){var i=e.title,n=void 0===i?"Title":i,s=e.subTitle,t=void 0===s?"link":s,o=e.iconId,l=void 0===o?"info":o;return(0,c.jsxs)("div",{className:C,children:[(0,c.jsx)(r.Z,{iconId:l,size:"24px"}),(0,c.jsx)("span",{className:S,children:(0,c.jsx)("span",{className:z,title:n,children:n})}),(0,c.jsx)("span",{className:P,children:(0,c.jsx)("span",{className:Z,title:t,children:t})}),(0,c.jsx)(F,{})]})},w={block:"Block_block__l4rYQ",title:"Block_title__Fgg31",overflow:"Block_overflow__I1+3b",content:"Block_content__VVaX5",footer:"Block_footer__0j8tQ",inWork:"Block_inWork__m6rkC"},T=function(e){var i=e.children,n=e.title,o=void 0===n?"Block":n,a=e.iconId,r=void 0===a?"info":a,d=e.footer,u=void 0===d||d,_=e.header,m=void 0===_||_,x=e.style,v=void 0===x?{}:x,j=e.className,h=void 0===j?"":j,k=e.blockFilter,f=void 0!==k&&k,N=e.blockFilterParams;(0,t.useEffect)((function(){console.log("small block '".concat(o,"'render"))}),[o]);var p=[w.block,h].join(" ");return console.log("small block initialize"),(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(l,(0,s.Z)((0,s.Z)({},e),{},{children:(0,c.jsxs)("div",{className:p,style:v,children:[m&&f&&(0,c.jsx)(g,{blockFilter:f,blockFilterParams:N,title:o,iconId:r}),m&&!f&&(0,c.jsx)(L,{title:o,iconId:r}),(0,c.jsx)("div",{className:w.content,id:r,children:(0,c.jsxs)("div",{className:w.overflow,children:[i,!i&&(0,c.jsx)("div",{className:w.inWork,children:(0,c.jsx)("span",{children:"In work ..."})})]})}),u&&(0,c.jsx)("div",{className:w.footer})]})}))})}},217:function(e,i,n){n.r(i),n.d(i,{default:function(){return u}});var s=n(540),t=n(401),c="PageReturns_pageFlex__0zikA",o="PageReturns_sectionTopFlex__n62yw",l="PageReturns_sectionBottomFlex__HMSpF",a="PageReturns_sectionInnerLeft__SkCDV",r="PageReturns_sectionInnerRight__MIKyy",d=n(184),u=function(){return(0,d.jsx)(t.T,{children:(0,d.jsxs)("div",{className:c,children:[(0,d.jsx)("section",{className:o,children:(0,d.jsx)(s.Z,{blockFilter:!0,title:"\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u043e\u0432\u0435\u0440\u043d\u0435\u043d\u044c",iconId:"list"})}),(0,d.jsxs)("section",{className:l,children:[(0,d.jsx)("div",{className:a,children:(0,d.jsx)(s.Z,{title:"\u0414\u0435\u0442\u0430\u043b\u0456",iconId:"return"})}),(0,d.jsx)("div",{className:r,children:(0,d.jsx)(s.Z,{title:"\u0406\u043d\u0441\u043f\u0435\u043a\u0446\u0456\u044f",iconId:"inspect"})})]})]})})}},401:function(e,i,n){n.d(i,{T:function(){return a}});var s=n(413),t=n(885),c=n(791),o=n(184),l=(0,c.createContext)(),a=function(e){var i=(0,c.useState)(null),n=(0,t.Z)(i,2),a=n[0],r=n[1];return(0,o.jsx)(l.Provider,{value:(0,s.Z)({selectItemByClick:function(e){r(e),console.log("addet item by id (".concat(e,") to context"))},deleteItemByClick:function(e){r(null),console.log(" deleted ".concat(e))},selectedItemId:a},e),children:e.children})}}}]);
//# sourceMappingURL=217.c444b267.chunk.js.map