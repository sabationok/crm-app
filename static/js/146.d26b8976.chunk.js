"use strict";(self.webpackChunkcrm_app=self.webpackChunkcrm_app||[]).push([[146],{8353:function(e,n,t){t.d(n,{Z:function(){return F}});var o=t(1413),i=t(2791),c=t(2747),s=t(885),l=t(9107);var r=t(5206),a={filterContainer:"BlockFounder_filterContainer__xpoxO",filterForm:"BlockFounder_filterForm__P13kq",customFounder:"BlockFounder_customFounder__D1y72",inputFounder:"BlockFounder_inputFounder__gbkmY",customSelect:"BlockFounder_customSelect__W-Ovy",isOpen:"BlockFounder_isOpen__5YHKD",selectList:"BlockFounder_selectList__37jNg",inputParam:"BlockFounder_inputParam__00Trb",selectItem:"BlockFounder_selectItem__0PXUx",button:"BlockFounder_button__kECXA",notification:"BlockFounder_notification__ZaOSI"},d=t(184),u=function(e){e.blockFilterParams;var n=(0,c.rL)().tableTitles,t=void 0===n?[]:n,u=(0,i.useState)(""),_=(0,s.Z)(u,2),m=_[0],f=_[1],v=(0,i.useState)({name:""}),x=(0,s.Z)(v,2),h=x[0],k=x[1],j=(0,i.useState)(!1),p=(0,s.Z)(j,2),B=p[0],I=p[1],N=(0,i.useState)([]),F=(0,s.Z)(N,2),b=F[0],g=F[1],P=[a.customSelect,B&&a.isOpen].join(" ");function y(){I(!B)}return(0,i.useEffect)((function(){0!==t.length&&g(function(e){var n=e.searchParam,t=void 0===n?"":n,o=e.searchQuery,i=void 0===o?null:o,c=e.data;return(void 0===c?[]:c).filter((function(e){return"number"===typeof e[t]?!(i&&!e[t].toString().toLowerCase().includes(i.toLowerCase())):"string"!==typeof e[t]||!(i&&!e[t].toLowerCase().includes(i.toLowerCase()))}))}({searchParam:"name",searchQuery:h.name,data:t.filter((function(e){return(null===e||void 0===e?void 0:e.filter)&&(null===e||void 0===e?void 0:e.visible)}))}))}),[h,t]),(0,i.useEffect)((function(){""===m&&console.log(m)}),[m]),(0,i.useEffect)((function(){""===h.name&&console.log(h.name)}),[h]),(0,d.jsx)("div",{className:a.filterContainer,children:(0,d.jsxs)("form",{className:a.filterForm,onSubmit:function(e){!function(e){e.preventDefault(),m&&h.name?r.Am.info("\u0412\u0438 \u0448\u0443\u043a\u0430\u043b\u0438: '".concat(m,"' \u0441\u0435\u0440\u0435\u0434 '").concat(h.name,"'")):r.Am.error("\u041d\u0435 \u0432\u0432\u0435\u0434\u0435\u043d\u043e \u0443\u0441\u0456\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0456\u0432 \u043f\u043e\u0448\u0443\u043a\u0443")}(e)},children:[(0,d.jsxs)("div",{className:P,onClick:y,children:[(0,d.jsx)("input",{className:a.inputParam,type:"text",placeholder:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440",value:h.name,onChange:function(e){var n=e.target;k((0,o.Z)((0,o.Z)({},h),{},{name:n.value}))}}),(0,d.jsx)("ul",{className:a.selectList,children:b.map((function(e){return(0,d.jsx)("li",{className:a.selectItem,"data-title":e.dataTitle,onClick:function(n){!function(e){e.evt;var n=e.item;k(n),y()}({evt:n,item:e})},children:e.name},e.id)}))})]}),(0,d.jsx)("div",{className:a.customFounder,children:(0,d.jsx)("input",{className:a.inputFounder,type:"text",name:"searchQuery",value:m,placeholder:"\u041f\u043e\u0448\u0443\u043a",onChange:function(e){!function(e){var n=e.target;f(n.value)}(e)}})}),(0,d.jsx)("button",{className:a.button,type:"submit",children:(0,d.jsx)(l.Z,{iconId:"search",size:"24px"})})]})})},_=t(5416),m="BlockHeaderFilter_header__2v66G",f="BlockHeaderFilter_title__7SWEQ",v=function(){var e=(0,c.rL)(),n=e.title,t=void 0===n?"Title":n,o=e.iconId,i=void 0===o?"info":o,s=e.blockFilterParams;return(0,d.jsxs)("div",{className:m,children:[(0,d.jsx)(l.Z,{iconId:i,size:"24px"}),(0,d.jsx)(u,{blockFilterParams:s}),t&&(0,d.jsx)("span",{className:f,children:(0,d.jsx)("span",{title:t,children:t})}),(0,d.jsx)(_.default,{})]})},x="BlockHeaderLink_header__3Xw1I",h="BlockHeaderLink_headerLink__ASjs9",k="BlockHeaderLink_subTitle__yD46E",j="BlockHeaderLink_titleInner__hx2Ou",p="BlockHeaderLink_title__Nndxb",B=(0,i.lazy)((function(){return Promise.resolve().then(t.bind(t,5416))})),I=function(){var e=(0,c.rL)(),n=e.title,t=void 0===n?"Title":n,o=e.subTitle,i=void 0===o?"link":o,s=e.iconId,r=void 0===s?"info":s;return(0,d.jsxs)("div",{className:x,children:[(0,d.jsx)(l.Z,{iconId:r,size:"24px"}),(0,d.jsx)("span",{className:p,children:(0,d.jsx)("span",{className:j,title:t,children:t})}),(0,d.jsx)("span",{className:h,children:(0,d.jsx)("span",{className:k,title:i,children:i})}),(0,d.jsx)(B,{})]})},N={block:"Block_block__l4rYQ",title:"Block_title__Fgg31",overflow:"Block_overflow__I1+3b",content:"Block_content__VVaX5",footer:"Block_footer__0j8tQ",inWork:"Block_inWork__m6rkC"},F=function(e){var n=e.children,t=e.title,s=void 0===t?"Block":t,l=e.iconId,r=void 0===l?"info":l,a=e.footer,u=void 0===a||a,_=e.header,m=void 0===_||_,f=e.style,x=void 0===f?{}:f,h=e.className,k=void 0===h?"":h,j=e.blockFilter,p=void 0!==j&&j,B=e.blockFilterParams;(0,i.useEffect)((function(){console.log("small block '".concat(s,"'render"))}),[s]);var F=[N.block,k].join(" ");return console.log("small block initialize"),(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(c.ZP,(0,o.Z)((0,o.Z)({},e),{},{children:(0,d.jsxs)("div",{className:F,style:x,children:[m&&p&&(0,d.jsx)(v,{blockFilter:p,blockFilterParams:B,title:s,iconId:r}),m&&!p&&(0,d.jsx)(I,{title:s,iconId:r}),(0,d.jsx)("div",{className:N.content,id:r,children:(0,d.jsxs)("div",{className:N.overflow,children:[n,!n&&(0,d.jsx)("div",{className:N.inWork,children:(0,d.jsx)("span",{children:"In work ..."})})]})}),u&&(0,d.jsx)("div",{className:N.footer})]})}))})}},5416:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var o=t(885),i=t(2791),c=t(1413),s=t(2776),l={Button:"ButtonIcon_Button__7zIUY",iconSvg:"ButtonIcon_iconSvg__Ha7ix",ColoredBtn:"ButtonIcon_ColoredBtn__Raw3O",PrimaryBtn:"ButtonIcon_PrimaryBtn__7XJ7x",BorderBtn:"ButtonIcon_BorderBtn__BFvDB"},r=t(184),a=function(e){var n=e.children,t=e.type,o=void 0===t?"button":t,i=e.disabled,a=void 0!==i&&i,d=e.onClick,u=void 0===d?null:d,_=e.iconId,m=void 0===_?"":_,f=e.styles,v=void 0===f?{}:f,x=e.size,h=void 0===x?"":x,k=e.className,j=void 0===k?"":k,p=e.title,B=void 0===p?"":p,I=e.styleType,N=void 0===I?"PrimaryBtn":I,F=[l.Button,l[N],j].join(" "),b=(0,c.Z)({width:h,height:h},v);return(0,r.jsxs)("button",{type:o,className:F,disabled:a,style:b,title:B&&B,onClick:u&&u,children:[(0,r.jsx)("svg",{className:l.iconSvg,children:(0,r.jsx)("use",{href:"".concat(s.Z,"#icon-").concat(m.toLowerCase())})}),n]})},d=t(4164),u=function(e){var n=(0,i.useState)(!1),t=(0,o.Z)(n,2),c=t[0],s=t[1],l=document.getElementById(e.id);if((0,i.useEffect)((function(){e.id?s(!0):s(!1)}),[e.id]),c)return d.createPortal(e.children,l)};u.propTypes={};var _=u,m=t(2747),f="BlockActions_actionsBackdrop__QWF-u",v="BlockActions_actionsBackdropOpen__PvLbA",x="BlockActions_actionsContainer__Pbrz5",h="BlockActions_actionsList__1G1ee",k="BlockActions_listItem__TfXVd",j="BlockActions_hover__OY83k",p=function(){var e=(0,i.useState)(!1),n=(0,o.Z)(e,2),t=n[0],c=n[1],s=(0,m.rL)(),l={link:(0,r.jsx)(a,{iconId:"link",size:"100%",className:j}),search:(0,r.jsx)(a,{iconId:"search",size:"100%",className:j}),filter:(0,r.jsx)(a,{iconId:"filter-on",size:"100%",className:j}),copy:(0,r.jsx)(a,{iconId:"copy",size:"100%",className:j}),share:(0,r.jsx)(a,{iconId:"share",size:"100%",className:j}),refresh:(0,r.jsx)(a,{iconId:"refresh",size:"100%",className:j}),edit:(0,r.jsx)(a,{iconId:"edit",size:"100%",className:j}),delete:(0,r.jsx)(a,{iconId:"delete",size:"100%",className:j}),create:(0,r.jsx)(a,{iconId:"plus",size:"100%",className:j}),print:(0,r.jsx)(a,{iconId:"print-on",size:"100%",className:j}),upload:(0,r.jsx)(a,{iconId:"upload",size:"100%",className:j}),download:(0,r.jsx)(a,{iconId:"download",size:"100%",className:j})};function d(e){c(!t)}return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{iconId:t?"close":"actions-h",size:"100%",onClick:d}),(0,r.jsx)(_,{id:s.iconId,children:(0,r.jsx)("div",{className:t?v:f,onClick:d,children:(0,r.jsxs)("div",{className:x,children:[(0,r.jsx)("span",{children:"\u0414\u043e\u0434\u0430\u0442\u043a\u043e\u0432\u043e"}),t&&s.actions&&(0,r.jsx)("ul",{className:h,children:s.actions.map((function(e){return(0,r.jsx)("li",{className:k,children:l[e]},e)}))})]})})})]})}},2747:function(e,n,t){t.d(n,{ZP:function(){return d},rL:function(){return a}});var o=t(1413),i=t(2791),c=["search","filter","link","copy","share","refresh","edit","delete","create","print","upload","download"],s=["link","copy","share","refresh","edit","delete","create","print","upload","download"],l=t(184),r=(0,i.createContext)(),a=function(){return(0,i.useContext)(r)},d=function(e){return(0,l.jsx)(r.Provider,{value:(0,o.Z)((0,o.Z)({},e),{},{actionsBlockList:c,actionsBlockSmall:s}),children:e.children})}},4146:function(e,n,t){t.r(n),t.d(n,{default:function(){return u}});var o=t(8353),i=t(7401),c="PageProducts_pageFlex__q407T",s="PageProducts_sectionTopFlex__m3okd",l="PageProducts_sectionBottomFlex__3rqsX",r="PageProducts_sectionInnerLeft__FWfKz",a="PageProducts_sectionInnerRight__-jX0i",d=t(184),u=function(){return(0,d.jsx)(i.T,{children:(0,d.jsxs)("div",{className:c,children:[(0,d.jsx)("section",{className:s,children:(0,d.jsx)(o.Z,{blockFilter:!0,title:"\u0421\u043f\u0438\u0441\u043e\u043a \u0442\u043e\u0432\u0430\u0440\u0456\u0432",iconId:"list"})}),(0,d.jsxs)("section",{className:l,children:[(0,d.jsx)("div",{className:r,children:(0,d.jsx)(o.Z,{title:"\u0414\u0435\u0442\u0430\u043b\u0456",iconId:"info"})}),(0,d.jsx)("div",{className:a,children:(0,d.jsx)(o.Z,{title:"\u0421\u043a\u043b\u0430\u0434",iconId:"storage"})})]})]})})}},7401:function(e,n,t){t.d(n,{T:function(){return r}});var o=t(1413),i=t(885),c=t(2791),s=t(184),l=(0,c.createContext)(),r=function(e){var n=(0,c.useState)(null),t=(0,i.Z)(n,2),r=t[0],a=t[1];return(0,s.jsx)(l.Provider,{value:(0,o.Z)({selectItemByClick:function(e){a(e),console.log("addet item by id (".concat(e,") to context"))},deleteItemByClick:function(e){a(null),console.log(" deleted ".concat(e))},selectedItemId:r},e),children:e.children})}}}]);
//# sourceMappingURL=146.d26b8976.chunk.js.map