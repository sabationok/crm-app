"use strict";(self.webpackChunkcrm_app=self.webpackChunkcrm_app||[]).push([[468],{8353:function(e,n,t){t.d(n,{Z:function(){return b}});var i=t(1413),o=t(2791),c=t(2747),s=t(885),l=t(9107);var a=t(5206),r={filterContainer:"BlockFounder_filterContainer__xpoxO",filterForm:"BlockFounder_filterForm__P13kq",customFounder:"BlockFounder_customFounder__D1y72",inputFounder:"BlockFounder_inputFounder__gbkmY",customSelect:"BlockFounder_customSelect__W-Ovy",isOpen:"BlockFounder_isOpen__5YHKD",selectList:"BlockFounder_selectList__37jNg",inputParam:"BlockFounder_inputParam__00Trb",selectItem:"BlockFounder_selectItem__0PXUx",button:"BlockFounder_button__kECXA",notification:"BlockFounder_notification__ZaOSI"},d=t(184),u=function(e){e.blockFilterParams;var n=(0,c.rL)().tableTitles,t=void 0===n?[]:n,u=(0,o.useState)(""),_=(0,s.Z)(u,2),m=_[0],f=_[1],v=(0,o.useState)({name:""}),x=(0,s.Z)(v,2),h=x[0],k=x[1],j=(0,o.useState)(!1),p=(0,s.Z)(j,2),B=p[0],N=p[1],I=(0,o.useState)([]),b=(0,s.Z)(I,2),F=b[0],y=b[1],g=[r.customSelect,B&&r.isOpen].join(" ");function C(){N(!B)}return(0,o.useEffect)((function(){0!==t.length&&y(function(e){var n=e.searchParam,t=void 0===n?"":n,i=e.searchQuery,o=void 0===i?null:i,c=e.data;return(void 0===c?[]:c).filter((function(e){return"number"===typeof e[t]?!(o&&!e[t].toString().toLowerCase().includes(o.toLowerCase())):"string"!==typeof e[t]||!(o&&!e[t].toLowerCase().includes(o.toLowerCase()))}))}({searchParam:"name",searchQuery:h.name,data:t.filter((function(e){return(null===e||void 0===e?void 0:e.filter)&&(null===e||void 0===e?void 0:e.visible)}))}))}),[h,t]),(0,o.useEffect)((function(){""===m&&console.log(m)}),[m]),(0,o.useEffect)((function(){""===h.name&&console.log(h.name)}),[h]),(0,d.jsx)("div",{className:r.filterContainer,children:(0,d.jsxs)("form",{className:r.filterForm,onSubmit:function(e){!function(e){e.preventDefault(),m&&h.name?a.Am.info("\u0412\u0438 \u0448\u0443\u043a\u0430\u043b\u0438: '".concat(m,"' \u0441\u0435\u0440\u0435\u0434 '").concat(h.name,"'")):a.Am.error("\u041d\u0435 \u0432\u0432\u0435\u0434\u0435\u043d\u043e \u0443\u0441\u0456\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0456\u0432 \u043f\u043e\u0448\u0443\u043a\u0443")}(e)},children:[(0,d.jsxs)("div",{className:g,onClick:C,children:[(0,d.jsx)("input",{className:r.inputParam,type:"text",placeholder:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440",value:h.name,onChange:function(e){var n=e.target;k((0,i.Z)((0,i.Z)({},h),{},{name:n.value}))}}),(0,d.jsx)("ul",{className:r.selectList,children:F.map((function(e){return(0,d.jsx)("li",{className:r.selectItem,"data-title":e.dataTitle,onClick:function(n){!function(e){e.evt;var n=e.item;k(n),C()}({evt:n,item:e})},children:e.name},e.id)}))})]}),(0,d.jsx)("div",{className:r.customFounder,children:(0,d.jsx)("input",{className:r.inputFounder,type:"text",name:"searchQuery",value:m,placeholder:"\u041f\u043e\u0448\u0443\u043a",onChange:function(e){!function(e){var n=e.target;f(n.value)}(e)}})}),(0,d.jsx)("button",{className:r.button,type:"submit",children:(0,d.jsx)(l.Z,{iconId:"search",size:"24px"})})]})})},_=t(5416),m="BlockHeaderFilter_header__2v66G",f="BlockHeaderFilter_title__7SWEQ",v=function(){var e=(0,c.rL)(),n=e.title,t=void 0===n?"Title":n,i=e.iconId,o=void 0===i?"info":i,s=e.blockFilterParams;return(0,d.jsxs)("div",{className:m,children:[(0,d.jsx)(l.Z,{iconId:o,size:"24px"}),(0,d.jsx)(u,{blockFilterParams:s}),t&&(0,d.jsx)("span",{className:f,children:(0,d.jsx)("span",{title:t,children:t})}),(0,d.jsx)(_.default,{})]})},x="BlockHeaderLink_header__3Xw1I",h="BlockHeaderLink_headerLink__ASjs9",k="BlockHeaderLink_subTitle__yD46E",j="BlockHeaderLink_titleInner__hx2Ou",p="BlockHeaderLink_title__Nndxb",B=(0,o.lazy)((function(){return Promise.resolve().then(t.bind(t,5416))})),N=function(){var e=(0,c.rL)(),n=e.title,t=void 0===n?"Title":n,i=e.subTitle,o=void 0===i?"link":i,s=e.iconId,a=void 0===s?"info":s;return(0,d.jsxs)("div",{className:x,children:[(0,d.jsx)(l.Z,{iconId:a,size:"24px"}),(0,d.jsx)("span",{className:p,children:(0,d.jsx)("span",{className:j,title:t,children:t})}),(0,d.jsx)("span",{className:h,children:(0,d.jsx)("span",{className:k,title:o,children:o})}),(0,d.jsx)(B,{})]})},I={block:"Block_block__l4rYQ",title:"Block_title__Fgg31",overflow:"Block_overflow__I1+3b",content:"Block_content__VVaX5",footer:"Block_footer__0j8tQ",inWork:"Block_inWork__m6rkC"},b=function(e){var n=e.children,t=e.title,s=void 0===t?"Block":t,l=e.iconId,a=void 0===l?"info":l,r=e.footer,u=void 0===r||r,_=e.header,m=void 0===_||_,f=e.style,x=void 0===f?{}:f,h=e.className,k=void 0===h?"":h,j=e.blockFilter,p=void 0!==j&&j,B=e.blockFilterParams;(0,o.useEffect)((function(){console.log("small block '".concat(s,"'render"))}),[s]);var b=[I.block,k].join(" ");return console.log("small block initialize"),(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(c.ZP,(0,i.Z)((0,i.Z)({},e),{},{children:(0,d.jsxs)("div",{className:b,style:x,children:[m&&p&&(0,d.jsx)(v,{blockFilter:p,blockFilterParams:B,title:s,iconId:a}),m&&!p&&(0,d.jsx)(N,{title:s,iconId:a}),(0,d.jsx)("div",{className:I.content,id:a,children:(0,d.jsxs)("div",{className:I.overflow,children:[n,!n&&(0,d.jsx)("div",{className:I.inWork,children:(0,d.jsx)("span",{children:"In work ..."})})]})}),u&&(0,d.jsx)("div",{className:I.footer})]})}))})}},5416:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var i=t(885),o=t(2791),c=t(1413),s=t(2776),l={Button:"ButtonIcon_Button__7zIUY",iconSvg:"ButtonIcon_iconSvg__Ha7ix",ColoredBtn:"ButtonIcon_ColoredBtn__Raw3O",PrimaryBtn:"ButtonIcon_PrimaryBtn__7XJ7x",BorderBtn:"ButtonIcon_BorderBtn__BFvDB"},a=t(184),r=function(e){var n=e.children,t=e.type,i=void 0===t?"button":t,o=e.disabled,r=void 0!==o&&o,d=e.onClick,u=void 0===d?null:d,_=e.iconId,m=void 0===_?"":_,f=e.styles,v=void 0===f?{}:f,x=e.size,h=void 0===x?"":x,k=e.className,j=void 0===k?"":k,p=e.title,B=void 0===p?"":p,N=e.styleType,I=void 0===N?"PrimaryBtn":N,b=[l.Button,l[I],j].join(" "),F=(0,c.Z)({width:h,height:h},v);return(0,a.jsxs)("button",{type:i,className:b,disabled:r,style:F,title:B&&B,onClick:u&&u,children:[(0,a.jsx)("svg",{className:l.iconSvg,children:(0,a.jsx)("use",{href:"".concat(s.Z,"#icon-").concat(m.toLowerCase())})}),n]})},d=t(4164),u=function(e){var n=(0,o.useState)(!1),t=(0,i.Z)(n,2),c=t[0],s=t[1],l=document.getElementById(e.id);if((0,o.useEffect)((function(){e.id?s(!0):s(!1)}),[e.id]),c)return d.createPortal(e.children,l)};u.propTypes={};var _=u,m=t(2747),f="BlockActions_actionsBackdrop__QWF-u",v="BlockActions_actionsBackdropOpen__PvLbA",x="BlockActions_actionsContainer__Pbrz5",h="BlockActions_actionsList__1G1ee",k="BlockActions_listItem__TfXVd",j="BlockActions_hover__OY83k",p=function(){var e=(0,o.useState)(!1),n=(0,i.Z)(e,2),t=n[0],c=n[1],s=(0,m.rL)(),l={link:(0,a.jsx)(r,{iconId:"link",size:"100%",className:j}),search:(0,a.jsx)(r,{iconId:"search",size:"100%",className:j}),filter:(0,a.jsx)(r,{iconId:"filter-on",size:"100%",className:j}),copy:(0,a.jsx)(r,{iconId:"copy",size:"100%",className:j}),share:(0,a.jsx)(r,{iconId:"share",size:"100%",className:j}),refresh:(0,a.jsx)(r,{iconId:"refresh",size:"100%",className:j}),edit:(0,a.jsx)(r,{iconId:"edit",size:"100%",className:j}),delete:(0,a.jsx)(r,{iconId:"delete",size:"100%",className:j}),create:(0,a.jsx)(r,{iconId:"plus",size:"100%",className:j}),print:(0,a.jsx)(r,{iconId:"print-on",size:"100%",className:j}),upload:(0,a.jsx)(r,{iconId:"upload",size:"100%",className:j}),download:(0,a.jsx)(r,{iconId:"download",size:"100%",className:j})};function d(e){c(!t)}return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r,{iconId:t?"close":"actions-h",size:"100%",onClick:d}),(0,a.jsx)(_,{id:s.iconId,children:(0,a.jsx)("div",{className:t?v:f,onClick:d,children:(0,a.jsxs)("div",{className:x,children:[(0,a.jsx)("span",{children:"\u0414\u043e\u0434\u0430\u0442\u043a\u043e\u0432\u043e"}),t&&s.actions&&(0,a.jsx)("ul",{className:h,children:s.actions.map((function(e){return(0,a.jsx)("li",{className:k,children:l[e]},e)}))})]})})})]})}},2747:function(e,n,t){t.d(n,{ZP:function(){return d},rL:function(){return r}});var i=t(1413),o=t(2791),c=["search","filter","link","copy","share","refresh","edit","delete","create","print","upload","download"],s=["link","copy","share","refresh","edit","delete","create","print","upload","download"],l=t(184),a=(0,o.createContext)(),r=function(){return(0,o.useContext)(a)},d=function(e){return(0,l.jsx)(a.Provider,{value:(0,i.Z)((0,i.Z)({},e),{},{actionsBlockList:c,actionsBlockSmall:s}),children:e.children})}},6468:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});t(2791);var i=t(8353),o=t(7401),c="PageAdmin_pageFlex__PNHje",s="PageAdmin_sectionTopFlex__C5AB2",l="PageAdmin_sectionBottomFlex__6uR6A",a="PageAdmin_sectionInnerRight__K7l+U",r=t(184),d=function(e){return(0,r.jsx)(o.T,{children:(0,r.jsxs)("div",{className:c,children:[(0,r.jsx)("section",{className:s,children:(0,r.jsx)(i.Z,{blockFilter:!0,title:"\u0417\u0430\u0432\u0434\u0430\u043d\u043d\u044f",iconId:"list"})}),(0,r.jsxs)("section",{className:l,children:[(0,r.jsx)("div",{className:a,children:(0,r.jsx)(i.Z,{title:"\u0410\u0434\u043c\u0456\u043d",iconId:"admin"})}),(0,r.jsx)("div",{className:a,children:(0,r.jsx)(i.Z,{title:"\u0410\u0434\u043c\u0456\u043d",iconId:"admin"})}),(0,r.jsx)("div",{className:a,children:(0,r.jsx)(i.Z,{title:"\u0410\u0434\u043c\u0456\u043d",iconId:"admin"})})]})]})})}},7401:function(e,n,t){t.d(n,{T:function(){return a}});var i=t(1413),o=t(885),c=t(2791),s=t(184),l=(0,c.createContext)(),a=function(e){var n=(0,c.useState)(null),t=(0,o.Z)(n,2),a=t[0],r=t[1];return(0,s.jsx)(l.Provider,{value:(0,i.Z)({selectItemByClick:function(e){r(e),console.log("addet item by id (".concat(e,") to context"))},deleteItemByClick:function(e){r(null),console.log(" deleted ".concat(e))},selectedItemId:a},e),children:e.children})}}}]);
//# sourceMappingURL=468.fe896afc.chunk.js.map