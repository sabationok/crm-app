"use strict";(self.webpackChunkcrm_app=self.webpackChunkcrm_app||[]).push([[626],{8353:function(e,t,n){n.d(t,{Z:function(){return N}});var i=n(1413),o=n(2791),c=n(2747),s=n(885),a=n(9107);var r=n(5206),l={filterContainer:"BlockFounder_filterContainer__xpoxO",filterForm:"BlockFounder_filterForm__P13kq",customFounder:"BlockFounder_customFounder__D1y72",inputFounder:"BlockFounder_inputFounder__gbkmY",customSelect:"BlockFounder_customSelect__W-Ovy",isOpen:"BlockFounder_isOpen__5YHKD",selectList:"BlockFounder_selectList__37jNg",inputParam:"BlockFounder_inputParam__00Trb",selectItem:"BlockFounder_selectItem__0PXUx",button:"BlockFounder_button__kECXA",notification:"BlockFounder_notification__ZaOSI"},d=n(184),u=function(e){var t=(0,c.rL)().tableTitles,n=void 0===t?[]:t,u=(0,o.useState)(""),m=(0,s.Z)(u,2),f=m[0],_=m[1],v=(0,o.useState)({name:""}),h=(0,s.Z)(v,2),k=h[0],p=h[1],x=(0,o.useState)(!1),j=(0,s.Z)(x,2),I=j[0],B=j[1],y=(0,o.useState)([]),N=(0,s.Z)(y,2),b=N[0],g=N[1],F=[l.customSelect,I&&l.isOpen].join(" ");function w(){B(!I)}return(0,o.useEffect)((function(){0!==n.length&&g(function(e){var t=e.searchParam,n=void 0===t?"":t,i=e.searchQuery,o=void 0===i?null:i,c=e.data;return(void 0===c?[]:c).filter((function(e){return"number"===typeof e[n]?!(o&&!e[n].toString().toLowerCase().includes(o.toLowerCase())):"string"!==typeof e[n]||!(o&&!e[n].toLowerCase().includes(o.toLowerCase()))}))}({searchParam:"name",searchQuery:k.name,data:n.filter((function(e){return(null===e||void 0===e?void 0:e.filter)&&(null===e||void 0===e?void 0:e.visible)}))}))}),[k,n]),(0,o.useEffect)((function(){""===!f&&console.log(f)}),[f]),(0,o.useEffect)((function(){""===!k.name&&console.log(k.name)}),[k]),(0,d.jsx)("div",{className:l.filterContainer,children:(0,d.jsxs)("form",{className:l.filterForm,onSubmit:function(e){!function(e){e.preventDefault(),f&&k.name?r.Am.info("\u0412\u0438 \u0448\u0443\u043a\u0430\u043b\u0438: '".concat(f,"' \u0441\u0435\u0440\u0435\u0434 '").concat(k.name,"'")):r.Am.error("\u041d\u0435 \u0432\u0432\u0435\u0434\u0435\u043d\u043e \u0443\u0441\u0456\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0456\u0432 \u043f\u043e\u0448\u0443\u043a\u0443")}(e)},children:[(0,d.jsxs)("div",{className:F,onClick:w,children:[(0,d.jsx)("input",{className:l.inputParam,type:"text",placeholder:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440",value:k.name,onChange:function(e){var t=e.target;p((0,i.Z)((0,i.Z)({},k),{},{name:t.value}))}}),(0,d.jsx)("ul",{className:l.selectList,children:b.map((function(e){return(0,d.jsx)("li",{className:l.selectItem,"data-title":e.dataTitle,onClick:function(t){!function(e){e.evt;var t=e.item;p(t),w()}({evt:t,item:e})},children:e.name},e.id)}))})]}),(0,d.jsx)("div",{className:l.customFounder,children:(0,d.jsx)("input",{className:l.inputFounder,type:"text",name:"searchQuery",value:f,placeholder:"\u041f\u043e\u0448\u0443\u043a",onChange:function(e){!function(e){var t=e.target;_(t.value)}(e)}})}),(0,d.jsx)("button",{className:l.button,type:"submit",children:(0,d.jsx)(a.Z,{iconId:"search",size:"24px"})})]})})},m=n(7746),f="BlockHeaderFilter_header__2v66G",_="BlockHeaderFilter_title__7SWEQ",v=function(){var e=(0,c.rL)(),t=e.title,n=void 0===t?"Title":t,i=e.iconId,o=void 0===i?"info":i,s=e.blockFilterParams;return(0,d.jsxs)("div",{className:f,children:[(0,d.jsx)(a.Z,{iconId:o,size:"24px"}),(0,d.jsx)(u,{blockFilterParams:s}),n&&(0,d.jsx)("span",{className:_,children:(0,d.jsx)("span",{title:n,children:n})}),(0,d.jsx)(m.default,{})]})},h="BlockHeaderLink_header__3Xw1I",k="BlockHeaderLink_headerLink__ASjs9",p="BlockHeaderLink_subTitle__yD46E",x="BlockHeaderLink_titleInner__hx2Ou",j="BlockHeaderLink_title__Nndxb",I=(0,o.lazy)((function(){return Promise.resolve().then(n.bind(n,7746))})),B=function(){var e=(0,c.rL)(),t=e.title,n=void 0===t?"Title":t,i=e.subTitle,o=void 0===i?"link":i,s=e.iconId,r=void 0===s?"info":s;return(0,d.jsxs)("div",{className:h,children:[(0,d.jsx)(a.Z,{iconId:r,size:"24px"}),(0,d.jsx)("span",{className:j,children:(0,d.jsx)("span",{className:x,title:n,children:n})}),(0,d.jsx)("span",{className:k,children:(0,d.jsx)("span",{className:p,title:o,children:o})}),(0,d.jsx)(I,{})]})},y={block:"Block_block__l4rYQ",title:"Block_title__Fgg31",overflow:"Block_overflow__I1+3b",content:"Block_content__VVaX5",footer:"Block_footer__0j8tQ",inWork:"Block_inWork__m6rkC"},N=function(e){var t=e.children,n=e.title,s=void 0===n?"Block":n,a=e.iconId,r=void 0===a?"info":a,l=e.footer,u=void 0===l||l,m=e.header,f=void 0===m||m,_=e.style,h=void 0===_?{}:_,k=e.className,p=void 0===k?"":k,x=e.blockFilter,j=void 0!==x&&x,I=e.blockFilterParams;(0,o.useEffect)((function(){console.log("small block '".concat(s,"'render"))}),[s]);var N=[y.block,p].join(" ");return console.log("small block initialize"),(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(c.ZP,(0,i.Z)((0,i.Z)({},e),{},{blockTitle:s,children:(0,d.jsxs)("div",{className:N,style:h,children:[f&&j&&(0,d.jsx)(v,{blockFilter:j,blockFilterParams:I,title:s,iconId:r}),f&&!j&&(0,d.jsx)(B,{title:s,iconId:r}),(0,d.jsx)("div",{className:y.content,id:r,children:(0,d.jsxs)("div",{className:y.overflow,children:[t,!t&&(0,d.jsx)("div",{className:y.inWork,children:(0,d.jsx)("span",{children:"In work ..."})})]})}),u&&(0,d.jsx)("div",{className:y.footer})]})}))})}},7746:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var i=n(885),o=n(2791),c=n(1413),s=n(2776),a={Button:"ButtonIcon_Button__7zIUY",iconSvg:"ButtonIcon_iconSvg__Ha7ix",ColoredBtn:"ButtonIcon_ColoredBtn__Raw3O",PrimaryBtn:"ButtonIcon_PrimaryBtn__7XJ7x",BorderBtn:"ButtonIcon_BorderBtn__BFvDB"},r=n(184),l=function(e){var t=e.children,n=e.type,i=void 0===n?"button":n,o=e.disabled,l=void 0!==o&&o,d=e.iconId,u=void 0===d?"":d,m=e.styles,f=void 0===m?{}:m,_=e.iconStyles,v=void 0===_?{}:_,h=e.size,k=void 0===h?"24px":h,p=e.iconSize,x=void 0===p?"100%":p,j=e.className,I=void 0===j?"":j,B=e.title,y=void 0===B?"":B,N=e.styleType,b=void 0===N?"PrimaryBtn":N,g=e.onClick,F=void 0===g?null:g,w=[a.Button,a[b],I].join(" "),C=(0,c.Z)({width:k,height:k},f),L=(0,c.Z)({width:x,height:x},v);return(0,r.jsxs)("button",{type:i,className:w,disabled:l,style:C,title:y&&y,onClick:F&&F,children:[(0,r.jsx)("svg",{className:a.iconSvg,style:L,children:(0,r.jsx)("use",{href:"".concat(s.Z,"#icon-").concat(u.toLowerCase())})}),t]})},d=n(4164),u=function(e){var t=(0,o.useState)(!1),n=(0,i.Z)(t,2),c=n[0],s=n[1],a=document.getElementById(e.id);if((0,o.useEffect)((function(){e.id?s(!0):s(!1)}),[e.id]),c)return d.createPortal(e.children,a)};u.propTypes={};var m=u,f="BlockActions_actionsBackdrop__QWF-u",_="BlockActions_actionsBackdropOpen__PvLbA",v="BlockActions_actionsContainer__Pbrz5",h="BlockActions_actionsList__1G1ee",k="BlockActions_listItem__TfXVd",p="BlockActions_actionActive__Qt+R0",x="BlockActions_actionNotActive__WbNeK",j="BlockActions_actionTitle__cXyoS",I=n(5206),B=function(e){var t=e.status,n=e.iconId,i=e.title,o=t?p:x,c="".concat(window.location.origin,"/");return(0,r.jsx)(l,{iconId:n,size:"100%",className:o,onClick:function(){navigator.clipboard.writeText(c),I.Am.info("\u041f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f \u0441\u043a\u043e\u043f\u0456\u0439\u043e\u0432\u0430\u043d\u043e \u0434\u043e \u0431\u0443\u0444\u0435\u0440\u0443 \u043e\u0431\u043c\u0456\u043d\u0443")},children:(0,r.jsx)("span",{className:j,children:i})})},y=n(5861),N=n(4687),b=n.n(N),g=n(2747),F=function(e){var t=e.status,n=e.iconId,i=e.title,o=(0,g.rL)().blockTitle,c=t?p:x,s="".concat(window.location.origin,"/").concat(i);function a(){return(a=(0,y.Z)(b().mark((function e(){var t;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={title:"\u041f\u043e\u0434\u0456\u043b\u0438\u0442\u0438\u0441\u044c \u043d\u0430\u0437\u0432\u043e\u044e \u0431\u043b\u043e\u043a\u0443",text:"\u041f\u043e\u0434\u0456\u043b\u0438\u0442\u0438\u0441\u044c \u043d\u0430\u0437\u0432\u043e\u044e \u0431\u043b\u043e\u043a\u0443",url:s};try{navigator.share(t),I.Am.success("\u041d\u0430\u0437\u0432\u0430 \u0431\u043b\u043e\u043a\u0443 \u0434\u043b\u044f \u043d\u0430\u0434\u0441\u0438\u043b\u0430\u043d\u043d\u044f ".concat(o))}catch(n){I.Am.error("Error: ".concat(n))}case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,r.jsx)(l,{iconId:n,size:"100%",className:c,onClick:function(){return a.apply(this,arguments)},children:(0,r.jsx)("span",{className:j,children:i})})},w=function(e){var t=e.status,n=e.iconId,i=e.title,o=t?p:x;return(0,r.jsx)(l,{iconId:n||"close",size:"100%",className:o,children:(0,r.jsx)("span",{className:j,children:i})})},C=function(e){var t=e.status,n=void 0!==t&&t,i=e.iconId,o=void 0===i?"close":i,c=e.title,s=void 0===c?"title":c,a=n?x:p;return(0,r.jsx)(l,{iconId:o,size:"100%",className:a,children:(0,r.jsx)("span",{className:j,children:s})})},L=function(e){var t=e.arr,n=void 0===t?[]:t,i={link:C,search:C,filter:C,copy:B,share:F,refresh:C,edit:C,delete:C,create:C,print:w,export:C,import:C},o=(0,r.jsx)(r.Fragment,{});return(0,r.jsx)("ul",{className:h,children:n.map((function(e){return e.name?(o=i[e.name],console.log(o),(0,r.jsx)("li",{className:k,children:(0,r.jsx)(o,{title:e.title,status:e.status,iconId:e.iconId})},e.name)):(0,r.jsx)("li",{className:k,children:(0,r.jsx)(l,{size:"100%",iconId:"close"})},e.name)}))})},Z=function(){var e=(0,o.useState)(!1),t=(0,i.Z)(e,2),n=t[0],c=t[1],s=(0,g.rL)(),a=(0,o.useMemo)((function(){switch(s.type){case"primary":return s.actionsBlockSmall;case"filtered":return s.actionsBlockLarge;default:return[]}}),[s.actionsBlockLarge,s.actionsBlockSmall,s.type]);function d(e){c(!n)}function u(e){if("Escape"===e.code)return console.log(e),void c(!1)}return(0,o.useEffect)((function(){n?n&&window.addEventListener("keydown",u):window.removeEventListener("keydown",u)}),[n]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l,{iconId:n?"close":"actions-h",size:"100%",onClick:d}),(0,r.jsx)(m,{id:s.iconId,children:(0,r.jsx)("div",{className:n?_:f,onClick:d,children:(0,r.jsxs)("div",{className:v,children:[(0,r.jsx)("span",{children:"\u0414\u043e\u0434\u0430\u0442\u043a\u043e\u0432\u043e"}),n&&a.length>0&&(0,r.jsx)(L,{arr:a})]})})})]})}},2747:function(e,t,n){n.d(t,{ZP:function(){return d},rL:function(){return l}});var i=n(1413),o=n(2791),c=[{name:"search",title:"\u041f\u043e\u0448\u0443\u043a",iconId:"search",status:!0},{name:"filter",title:"\u0424\u0456\u043b\u044c\u0442\u0440",iconId:"filter-off",status:!0},{name:"link",title:"\u041f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f",iconId:"link",status:!1},{name:"copy",title:"\u041a\u043e\u043f\u0456\u044e\u0432\u0430\u0442\u0438",iconId:"copy",status:!0},{name:"share",title:"\u041f\u043e\u0434\u0456\u043b\u0438\u0442\u0438\u0441\u044c",iconId:"share",status:!0},{name:"refresh",title:"\u041e\u043d\u043e\u0432\u0438\u0442\u0438",iconId:"refresh",status:!0},{name:"edit",title:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438",iconId:"edit",status:!0},{name:"delete",title:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438",iconId:"delete",status:!0},{name:"create",title:"\u0421\u0442\u0432\u043e\u0440\u0438\u0442\u0438",iconId:"plus",status:!0},{name:"print",title:"\u0414\u0440\u0443\u043a",iconId:"print",status:!1},{name:"export",title:"\u0415\u043a\u0441\u043f\u043e\u0440\u0442",iconId:"upload",status:!0},{name:"import",title:"\u0406\u043c\u043f\u043e\u0440\u0442",iconId:"download",status:!0}],s=[{name:"link",title:"\u041f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f",iconId:"link",status:!0},{name:"copy",title:"\u041a\u043e\u043f\u0456\u044e\u0432\u0430\u0442\u0438",iconId:"copy",status:!0},{name:"share",title:"\u041f\u043e\u0434\u0456\u043b\u0438\u0442\u0438\u0441\u044c",iconId:"share",status:!0},{name:"refresh",title:"\u041e\u043d\u043e\u0432\u0438\u0442\u0438",iconId:"refresh",status:!0},{name:"edit",title:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438",iconId:"edit",status:!0},{name:"delete",title:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438",iconId:"delete",status:!0},{name:"create",title:"\u0421\u0442\u0432\u043e\u0440\u0438\u0442\u0438",iconId:"plus",status:!0},{name:"print",title:"\u0414\u0440\u0443\u043a",iconId:"print",status:!1},{name:"export",title:"\u0415\u043a\u0441\u043f\u043e\u0440\u0442",iconId:"upload",status:!0},{name:"import",title:"\u0406\u043c\u043f\u043e\u0440\u0442",iconId:"download",status:!0}],a=n(184),r=(0,o.createContext)(),l=function(){return(0,o.useContext)(r)},d=function(e){return(0,a.jsx)(r.Provider,{value:(0,i.Z)((0,i.Z)({},e),{},{actionsBlockLarge:c,actionsBlockSmall:s}),children:e.children})}},7401:function(e,t,n){n.d(t,{T:function(){return r}});var i=n(1413),o=n(885),c=n(2791),s=n(184),a=(0,c.createContext)(),r=function(e){var t=(0,c.useState)(null),n=(0,o.Z)(t,2),r=n[0],l=n[1];return(0,s.jsx)(a.Provider,{value:(0,i.Z)({selectItemByClick:function(e){l(e),console.log("addet item by id (".concat(e,") to context"))},deleteItemByClick:function(e){l(null),console.log(" deleted ".concat(e))},selectedItemId:r},e),children:e.children})}}}]);
//# sourceMappingURL=626.d3adb7b8.chunk.js.map