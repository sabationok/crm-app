"use strict";(self.webpackChunkcrm_app=self.webpackChunkcrm_app||[]).push([[468],{540:function(e,i,n){n.d(i,{Z:function(){return T}});var s=n(413),c=n(791),t=n(184),l=(0,c.createContext)(),o=function(e){return(0,t.jsx)(l.Provider,{value:(0,s.Z)({},e),children:e.children})},a=n(885),r=n(107),d={filterContainer:"BlockFounder_filterContainer__xpoxO",filterForm:"BlockFounder_filterForm__P13kq",customFounder:"BlockFounder_customFounder__D1y72",inputFounder:"BlockFounder_inputFounder__gbkmY",customSelect:"BlockFounder_customSelect__W-Ovy",isOpen:"BlockFounder_isOpen__5YHKD",selectList:"BlockFounder_selectList__37jNg",inputParam:"BlockFounder_inputParam__00Trb",selectItem:"BlockFounder_selectItem__0PXUx",button:"BlockFounder_button__kECXA",notification:"BlockFounder_notification__ZaOSI"},u=function(e){e.blockFilterParams;var i=(0,c.useState)(""),n=(0,a.Z)(i,2),l=n[0],o=n[1],u=(0,c.useState)({name:""}),m=(0,a.Z)(u,2),_=m[0],x=m[1],j=(0,c.useState)(!1),v=(0,a.Z)(j,2),h=v[0],k=v[1],f=(0,c.useState)([]),N=(0,a.Z)(f,1)[0],B=[d.customSelect,h&&d.isOpen].join(" ");function p(){k(!h)}return(0,t.jsx)("div",{className:d.filterContainer,children:(0,t.jsxs)("form",{className:d.filterForm,onSubmit:function(e){!function(e){e.preventDefault()}(e)},children:[(0,t.jsxs)("div",{className:B,onClick:p,children:[(0,t.jsx)("input",{className:d.inputParam,type:"text",placeholder:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440",value:_.name,onChange:function(e){var i=e.target;x((0,s.Z)((0,s.Z)({},_),{},{name:i.value}))}}),(0,t.jsx)("ul",{className:d.selectList,children:N.map((function(e){return(0,t.jsx)("li",{className:d.selectItem,"data-title":e.dataTitle,onClick:function(i){!function(e){e.evt;var i=e.item;x(i),p()}({evt:i,item:e})},children:e.name},e.id)}))})]}),(0,t.jsx)("div",{className:d.customFounder,children:(0,t.jsx)("input",{className:d.inputFounder,type:"text",name:"searchQuery",value:l,placeholder:"\u041f\u043e\u0448\u0443\u043a",onChange:function(e){!function(e){var i=e.target;o(i.value)}(e)}})}),(0,t.jsx)("button",{className:d.button,type:"submit",children:(0,t.jsx)(r.Z,{iconId:"search",size:"24px"})})]})})},m=n(776),_={Button:"ButtonIcon_Button__7zIUY",iconSvg:"ButtonIcon_iconSvg__Ha7ix",ColoredBtn:"ButtonIcon_ColoredBtn__Raw3O",PrimaryBtn:"ButtonIcon_PrimaryBtn__7XJ7x",BorderBtn:"ButtonIcon_BorderBtn__BFvDB"},x=function(e){var i=e.children,n=e.type,c=void 0===n?"button":n,l=e.disabled,o=void 0!==l&&l,a=e.onClick,r=void 0===a?null:a,d=e.iconId,u=void 0===d?"":d,x=e.styles,j=void 0===x?{}:x,v=e.size,h=void 0===v?"":v,k=e.className,f=void 0===k?"":k,N=e.title,B=void 0===N?"":N,p=e.styleType,I=void 0===p?"PrimaryBtn":p,F=[_.Button,_[I],f].join(" "),b=(0,s.Z)({width:h,height:h},j);return(0,t.jsxs)("button",{type:c,className:F,disabled:o,style:b,title:B&&B,onClick:r&&r,children:[(0,t.jsx)("svg",{className:_.iconSvg,children:(0,t.jsx)("use",{href:"".concat(m.Z,"#icon-").concat(u.toLowerCase())})}),i]})},j=n(164),v=function(e){var i=(0,c.useState)(!1),n=(0,a.Z)(i,2),s=n[0],t=n[1],l=document.getElementById(e.id);if((0,c.useEffect)((function(){e.id?t(!0):t(!1)}),[e.id]),s)return j.createPortal(e.children,l)};v.propTypes={};var h=v,k="BlockActions_actionsBackdrop__QWF-u",f="BlockActions_actionsBackdropOpen__PvLbA",N="BlockActions_actionsContainer__Pbrz5",B="BlockActions_actionsList__1G1ee",p="BlockActions_listItem__TfXVd",I="BlockActions_hover__OY83k",F=function(e){var i=e.link,n=void 0===i||i,s=e.copy,o=void 0===s||s,r=e.share,d=void 0===r||r,u=e.refresh,m=void 0===u||u,_=e.filter,j=void 0===_||_,v=e.search,F=void 0===v||v,b=e.editItem,g=void 0===b||b,y=e.createItem,C=void 0===y||y,Z=e.deleteItem,P=void 0===Z||Z,z=e.printDoc,S=void 0===z||z,A=e.exportDoc,L=void 0===A||A,T=e.importDoc,w=void 0===T||T,H=(0,c.useState)(!1),O=(0,a.Z)(H,2),D=O[0],E=O[1],W=(0,c.useContext)(l);function X(e){E(!D)}return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(x,{iconId:D?"close":"actions-h",size:"100%",onClick:X}),(0,t.jsx)(h,{id:W.iconId,children:(0,t.jsx)("div",{className:D?f:k,onClick:X,children:(0,t.jsxs)("div",{className:N,children:[(0,t.jsx)("span",{children:"\u0414\u043e\u0434\u0430\u0442\u043a\u043e\u0432\u043e"}),D&&(0,t.jsxs)("ul",{className:B,children:[n&&(0,t.jsx)("li",{className:p,children:(0,t.jsx)(x,{iconId:"link",size:"100%",className:I})}),o&&(0,t.jsx)("li",{className:p,children:(0,t.jsx)(x,{iconId:"search",size:"100%",className:I})}),d&&(0,t.jsx)("li",{className:p,children:(0,t.jsx)(x,{iconId:"filter-on",size:"100%",className:I})}),m&&(0,t.jsx)("li",{className:p,children:(0,t.jsx)(x,{iconId:"copy",size:"100%",className:I})}),j&&(0,t.jsx)("li",{className:p,children:(0,t.jsx)(x,{iconId:"share",size:"100%",className:I})}),F&&(0,t.jsx)("li",{className:p,children:(0,t.jsx)(x,{iconId:"refresh",size:"100%",className:I})}),g&&(0,t.jsxs)("li",{className:p,children:[" ",(0,t.jsx)(x,{iconId:"edit",size:"100%",className:I})]}),P&&(0,t.jsx)("li",{className:p,children:(0,t.jsx)(x,{iconId:"delete",size:"100%",className:I})}),C&&(0,t.jsxs)("li",{className:p,children:[" ",(0,t.jsx)(x,{iconId:"plus",size:"100%",className:I})]}),S&&(0,t.jsxs)("li",{className:p,children:[" ",(0,t.jsx)(x,{iconId:"print-on",size:"100%",className:I})]}),L&&(0,t.jsxs)("li",{className:p,children:[" ",(0,t.jsx)(x,{iconId:"upload",size:"100%",className:I})]}),w&&(0,t.jsxs)("li",{className:p,children:[" ",(0,t.jsx)(x,{iconId:"download",size:"100%",className:I})]})]})]})})})]})},b="BlockHeaderFilter_header__2v66G",g="BlockHeaderFilter_title__7SWEQ",y=function(e){var i=e.title,n=e.iconId,s=void 0===n?"info":n,c=(e.subTitle,e.blockFilter,e.blockFilterParams);return(0,t.jsxs)("div",{className:b,children:[(0,t.jsx)(r.Z,{iconId:s,size:"24px"}),(0,t.jsx)(u,{blockFilterParams:c}),i&&(0,t.jsx)("span",{className:g,children:(0,t.jsx)("span",{title:i,children:i})}),(0,t.jsx)(F,{})]})},C="BlockHeaderLink_header__3Xw1I",Z="BlockHeaderLink_headerLink__ASjs9",P="BlockHeaderLink_subTitle__yD46E",z="BlockHeaderLink_titleInner__hx2Ou",S="BlockHeaderLink_title__Nndxb",A=function(e){var i=e.title,n=void 0===i?"Title":i,s=e.subTitle,c=void 0===s?"link":s,l=e.iconId,o=void 0===l?"info":l;return(0,t.jsxs)("div",{className:C,children:[(0,t.jsx)(r.Z,{iconId:o,size:"24px"}),(0,t.jsx)("span",{className:S,children:(0,t.jsx)("span",{className:z,title:n,children:n})}),(0,t.jsx)("span",{className:Z,children:(0,t.jsx)("span",{className:P,title:c,children:c})}),(0,t.jsx)(F,{})]})},L={block:"Block_block__l4rYQ",title:"Block_title__Fgg31",overflow:"Block_overflow__I1+3b",content:"Block_content__VVaX5",footer:"Block_footer__0j8tQ",inWork:"Block_inWork__m6rkC"},T=function(e){var i=e.children,n=e.title,l=void 0===n?"Block":n,a=e.iconId,r=void 0===a?"info":a,d=e.footer,u=void 0===d||d,m=e.header,_=void 0===m||m,x=e.style,j=void 0===x?{}:x,v=e.className,h=void 0===v?"":v,k=e.blockFilter,f=void 0!==k&&k,N=e.blockFilterParams;(0,c.useEffect)((function(){console.log("small block '".concat(l,"'render"))}),[l]);var B=[L.block,h].join(" ");return console.log("small block initialize"),(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(o,(0,s.Z)((0,s.Z)({},e),{},{children:(0,t.jsxs)("div",{className:B,style:j,children:[_&&f&&(0,t.jsx)(y,{blockFilter:f,blockFilterParams:N,title:l,iconId:r}),_&&!f&&(0,t.jsx)(A,{title:l,iconId:r}),(0,t.jsx)("div",{className:L.content,id:r,children:(0,t.jsxs)("div",{className:L.overflow,children:[i,!i&&(0,t.jsx)("div",{className:L.inWork,children:(0,t.jsx)("span",{children:"In work ..."})})]})}),u&&(0,t.jsx)("div",{className:L.footer})]})}))})}},468:function(e,i,n){n.r(i),n.d(i,{default:function(){return d}});n(791);var s=n(540),c=n(401),t="PageAdmin_pageFlex__PNHje",l="PageAdmin_sectionTopFlex__C5AB2",o="PageAdmin_sectionBottomFlex__6uR6A",a="PageAdmin_sectionInnerRight__K7l+U",r=n(184),d=function(e){return(0,r.jsx)(c.T,{children:(0,r.jsxs)("div",{className:t,children:[(0,r.jsx)("section",{className:l,children:(0,r.jsx)(s.Z,{blockFilter:!0,title:"\u0417\u0430\u0432\u0434\u0430\u043d\u043d\u044f",iconId:"list"})}),(0,r.jsxs)("section",{className:o,children:[(0,r.jsx)("div",{className:a,children:(0,r.jsx)(s.Z,{title:"\u0410\u0434\u043c\u0456\u043d",iconId:"admin"})}),(0,r.jsx)("div",{className:a,children:(0,r.jsx)(s.Z,{title:"\u0410\u0434\u043c\u0456\u043d",iconId:"admin"})}),(0,r.jsx)("div",{className:a,children:(0,r.jsx)(s.Z,{title:"\u0410\u0434\u043c\u0456\u043d",iconId:"admin"})})]})]})})}},401:function(e,i,n){n.d(i,{T:function(){return a}});var s=n(413),c=n(885),t=n(791),l=n(184),o=(0,t.createContext)(),a=function(e){var i=(0,t.useState)(null),n=(0,c.Z)(i,2),a=n[0],r=n[1];return(0,l.jsx)(o.Provider,{value:(0,s.Z)({selectItemByClick:function(e){r(e),console.log("addet item by id (".concat(e,") to context"))},deleteItemByClick:function(e){r(null),console.log(" deleted ".concat(e))},selectedItemId:a},e),children:e.children})}}}]);
//# sourceMappingURL=468.5fc4a96b.chunk.js.map