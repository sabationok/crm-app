"use strict";(self.webpackChunkcrm_app=self.webpackChunkcrm_app||[]).push([[188],{6226:function(e,t,n){n.d(t,{Z:function(){return g}});var i=n(1413),o=n(885),c=n(2791),r=n(3579),a=n(9107);var s=n(5206),l={filterContainer:"BlockSearch_filterContainer__Nu+uf",filterForm:"BlockSearch_filterForm__iPIpw",customFounder:"BlockSearch_customFounder__WBHkw",inputFounder:"BlockSearch_inputFounder__o55Bv",customSelect:"BlockSearch_customSelect__rAeb1",isOpen:"BlockSearch_isOpen__9lhaC",selectList:"BlockSearch_selectList__j6QIs",inputParam:"BlockSearch_inputParam__anOuU",selectItem:"BlockSearch_selectItem__5pGfS",button:"BlockSearch_button__VOCQW",notification:"BlockSearch_notification__tXPeC"},d=n(184),u=function(e){var t=(0,r.rL)().tableTitles,n=void 0===t?[]:t,u=(0,c.useState)(""),m=(0,o.Z)(u,2),f=m[0],h=m[1],_=(0,c.useState)({name:""}),v=(0,o.Z)(_,2),x=v[0],p=v[1],k=(0,c.useState)(!1),j=(0,o.Z)(k,2),B=j[0],I=j[1],Z=(0,c.useState)([]),y=(0,o.Z)(Z,2),g=y[0],S=y[1],w=[l.customSelect,B&&l.isOpen].join(" ");function C(){I(!B)}return(0,c.useEffect)((function(){0!==n.length&&S(function(e){var t=e.searchParam,n=void 0===t?"":t,i=e.searchQuery,o=void 0===i?null:i,c=e.data;return(void 0===c?[]:c).filter((function(e){return"number"===typeof e[n]?!(o&&!e[n].toString().toLowerCase().includes(o.toLowerCase())):"string"!==typeof e[n]||!(o&&!e[n].toLowerCase().includes(o.toLowerCase()))}))}({searchParam:"name",searchQuery:x.name,data:n.filter((function(e){return(null===e||void 0===e?void 0:e.filter)&&(null===e||void 0===e?void 0:e.visible)}))}))}),[x,n]),(0,c.useEffect)((function(){""===!f&&console.log(f)}),[f]),(0,c.useEffect)((function(){""===!x.name&&console.log(x.name)}),[x]),(0,d.jsx)("div",{className:l.filterContainer,children:(0,d.jsxs)("form",{className:l.filterForm,onSubmit:function(e){!function(e){e.preventDefault(),f&&x.name?s.Am.info("\u0412\u0438 \u0448\u0443\u043a\u0430\u043b\u0438: '".concat(f,"' \u0441\u0435\u0440\u0435\u0434 '").concat(x.name,"'")):s.Am.error("\u041d\u0435 \u0432\u0432\u0435\u0434\u0435\u043d\u043e \u0443\u0441\u0456\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0456\u0432 \u043f\u043e\u0448\u0443\u043a\u0443")}(e)},children:[(0,d.jsxs)("div",{className:w,onClick:C,children:[(0,d.jsx)("input",{className:l.inputParam,type:"text",placeholder:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440",value:x.name,onChange:function(e){var t=e.target;p((0,i.Z)((0,i.Z)({},x),{},{name:t.value}))}}),(0,d.jsx)("ul",{className:l.selectList,children:g.map((function(e){return(0,d.jsx)("li",{className:l.selectItem,"data-title":e.dataTitle,onClick:function(t){!function(e){e.evt;var t=e.item;p(t),C()}({evt:t,item:e})},children:e.name},e.id)}))})]}),(0,d.jsx)("div",{className:l.customFounder,children:(0,d.jsx)("input",{className:l.inputFounder,type:"text",name:"searchQuery",value:f,placeholder:"\u041f\u043e\u0448\u0443\u043a",onChange:function(e){!function(e){var t=e.target;h(t.value)}(e)}})}),(0,d.jsx)("button",{className:l.button,type:"submit",children:(0,d.jsx)(a.Z,{iconId:"search",size:"24px"})})]})})},m=n(3885),f="BlockHeaderSearch_header__fq2h1",h="BlockHeaderSearch_headerWithSearch__Vnm1m",_="BlockHeaderSearch_title__yFzIH",v=function(){var e=(0,r.rL)(),t=e.title,n=void 0===t?"Title":t,i=e.iconId,o=void 0===i?"info":i,c=e.isSearch,s=c?h:f;return(0,d.jsxs)("div",{className:s,children:[(0,d.jsx)(a.Z,{iconId:o,size:"24px"}),c&&(0,d.jsx)(u,{}),n&&(0,d.jsx)("span",{className:_,children:(0,d.jsx)("span",{title:n,children:n})}),(0,d.jsx)(m.default,{})]})},x="BlockHeaderLink_header__3Xw1I",p="BlockHeaderLink_headerLink__ASjs9",k="BlockHeaderLink_subTitle__yD46E",j="BlockHeaderLink_titleInner__hx2Ou",B="BlockHeaderLink_title__Nndxb",I=(0,c.lazy)((function(){return Promise.resolve().then(n.bind(n,3885))})),Z=function(){var e=(0,r.rL)(),t=e.title,n=void 0===t?"Title":t,i=e.subTitle,o=void 0===i?"link":i,c=e.iconId,s=void 0===c?"info":c;return(0,d.jsxs)("div",{className:x,children:[(0,d.jsx)(a.Z,{iconId:s,size:"24px"}),(0,d.jsx)("span",{className:B,children:(0,d.jsx)("span",{className:j,title:n,children:n})}),(0,d.jsx)("span",{className:p,children:(0,d.jsx)("span",{className:k,title:o,children:o})}),(0,d.jsx)(I,{})]})},y={block:"Block_block__l4rYQ",title:"Block_title__Fgg31",overflow:"Block_overflow__I1+3b",content:"Block_content__VVaX5",footer:"Block_footer__0j8tQ",inWork:"Block_inWork__m6rkC"},g=function(e){var t=e.children,n=e.title,a=void 0===n?"Title":n,s=e.iconId,l=void 0===s?"info":s,u=e.footer,m=void 0===u||u,f=e.header,h=void 0===f||f,_=e.style,x=void 0===_?{}:_,p=e.className,k=void 0===p?"":p,j=e.filter,B=void 0!==j&&j,I=[y.block,k].join(" "),g=(0,c.useState)(!1),S=(0,o.Z)(g,2),w=S[0],C=S[1],N=(0,c.useState)(!0),b=(0,o.Z)(N,2),L=b[0],F=b[1];var A={isSearch:w,isFormDisabled:L},P={handleToggleBlockSearch:function(){C(!w)},handleToggleEditForm:function(){F(!L)}};return console.log("block '".concat(a,"'inicialize")),(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(r.ZP,(0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)({},e),P),A),{},{children:(0,d.jsxs)("div",{className:I,style:x,children:[h&&(0,d.jsxs)(d.Fragment,{children:[B&&(0,d.jsx)(v,{}),!B&&(0,d.jsx)(Z,{})]}),(0,d.jsx)("div",{className:y.content,id:l,children:(0,d.jsxs)("div",{className:y.overflow,children:[t,!t&&(0,d.jsx)("div",{className:y.inWork,children:(0,d.jsx)("span",{children:"In work ..."})})]})}),m&&(0,d.jsx)("div",{className:y.footer})]})}))})}},3885:function(e,t,n){n.r(t),n.d(t,{default:function(){return Q}});var i=n(885),o=n(2791),c=n(1413),r=n(2776),a={Button:"ButtonIcon_Button__7zIUY",iconSvg:"ButtonIcon_iconSvg__Ha7ix",ColoredBtn:"ButtonIcon_ColoredBtn__Raw3O",PrimaryBtn:"ButtonIcon_PrimaryBtn__7XJ7x",BorderBtn:"ButtonIcon_BorderBtn__BFvDB"},s=n(184),l=function(e){var t=e.children,n=e.type,i=void 0===n?"button":n,o=e.disabled,l=void 0!==o&&o,d=e.iconId,u=void 0===d?"":d,m=e.styles,f=void 0===m?{}:m,h=e.iconStyles,_=void 0===h?{}:h,v=e.size,x=void 0===v?"24px":v,p=e.iconSize,k=void 0===p?"100%":p,j=e.className,B=void 0===j?"":j,I=e.title,Z=void 0===I?"":I,y=e.styleType,g=void 0===y?"PrimaryBtn":y,S=e.onClick,w=void 0===S?null:S,C=[a.Button,a[g],B].join(" "),N=(0,c.Z)({width:x,height:x},f),b=(0,c.Z)({width:k,height:k},_);return(0,s.jsxs)("button",{type:i,className:C,disabled:l,style:N,title:Z&&Z,onClick:w&&w,children:[(0,s.jsx)("svg",{className:a.iconSvg,style:b,children:(0,s.jsx)("use",{href:"".concat(r.Z,"#icon-").concat(u.toLowerCase())})}),t]})},d=n(4164),u=function(e){var t=(0,o.useState)(!1),n=(0,i.Z)(t,2),c=n[0],r=n[1],a=document.getElementById(e.id);if((0,o.useEffect)((function(){e.id?r(!0):r(!1)}),[e.id]),c)return d.createPortal(e.children,a)};u.propTypes={};var m=u,f="Action_actionActive__8Wn-y",h="Action_actionNotActive__0nksk",_="Action_actionTitle__YTAVc",v=function(e){e.name;var t=e.status,n=void 0!==t&&t,i=e.iconId,o=void 0===i?"close":i,c=e.title,r=void 0===c?"title":c,a=e.onClick,d=n?f:h;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l,{iconId:o,size:"100%",className:d,onClick:a}),(0,s.jsx)("span",{className:_,children:r})]})},x=n(5206),p=n(3579),k=function(e){var t=e.action,n=(0,p.rL)().blockTitle;return(0,s.jsx)(v,(0,c.Z)((0,c.Z)({},t),{},{onClick:function(){navigator.clipboard.writeText(n),x.Am.info('\u0421\u0442\u0432\u043e\u0440\u0435\u043d\u043e \u043a\u043e\u043f\u0456\u044e "'.concat(n,'"'))}}))},j=n(5861),B=n(4687),I=n.n(B),Z=function(e){var t=e.action,n=(0,p.rL)().title,i="".concat(window.location,"/").concat(n);function o(){return(o=(0,j.Z)(I().mark((function e(){var t;return I().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={title:"\u041f\u043e\u0434\u0456\u043b\u0438\u0442\u0438\u0441\u044c \u043d\u0430\u0437\u0432\u043e\u044e \u0431\u043b\u043e\u043a\u0443 ".concat(n),text:"\u041f\u043e\u0434\u0456\u043b\u0438\u0442\u0438\u0441\u044c \u043d\u0430\u0437\u0432\u043e\u044e \u0431\u043b\u043e\u043a\u0443 ".concat(n),url:i};try{navigator.share(t),x.Am.success("\u041d\u0430\u0437\u0432\u0430 \u0431\u043b\u043e\u043a\u0443 \u0434\u043b\u044f \u043d\u0430\u0434\u0441\u0438\u043b\u0430\u043d\u043d\u044f ".concat(n))}catch(o){x.Am.error("Error: ".concat(o))}case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,s.jsx)(v,(0,c.Z)((0,c.Z)({},t),{},{onClick:function(){return o.apply(this,arguments)}}))},y=function(e){var t=e.action;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(v,(0,c.Z)({},t))})},g=function(e){var t=e.action;return(0,s.jsx)(v,(0,c.Z)({},t))},S=function(e){var t=e.action;return(0,s.jsx)(v,(0,c.Z)({},t))},w=function(e){var t=e.action;return(0,s.jsx)(v,(0,c.Z)({},t))},C=function(e){var t=e.action,n=(0,p.rL)().title,i="".concat(window.location,"/").concat(n);return(0,s.jsx)(v,(0,c.Z)((0,c.Z)({},t),{},{onClick:function(){navigator.clipboard.writeText(i),console.log(i),x.Am.info('\u041f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f \u043d\u0430 \u0442\u043e\u0432\u0430\u0440 \u0441\u043a\u043e\u043f\u0456\u0439\u043e\u0432\u0430\u043d\u0435 "'.concat(n,'"'))}}))},N=function(e){var t=e.action,n=(0,p.rL)().handleToggleBlockSearch;return(0,s.jsx)(v,(0,c.Z)((0,c.Z)({},t),{},{onClick:n}))},b=function(e){var t=e.action,n=(0,p.rL)().handleToggleEditForm;return(0,s.jsx)(v,(0,c.Z)((0,c.Z)({},t),{},{onClick:n}))},L=function(e){var t=e.action;return(0,s.jsx)(v,(0,c.Z)({},t))},F=function(e){var t=e.action;return(0,s.jsx)(v,(0,c.Z)({},t))},A=function(e){var t=e.action;return(0,s.jsx)(v,(0,c.Z)({},t))},P="ActionsList_actionsList__6ChT6",T="ActionsList_listItem__7A3rn",E=function(e){var t=e.arr,n=void 0===t?[]:t,i={link:C,search:N,filter:w,copy:k,share:Z,print:y,export:g,import:S,edit:b,delete:F,create:L,refresh:A},o=(0,s.jsx)(s.Fragment,{});return(0,s.jsx)("ul",{className:P,children:n.map((function(e){return e.name?(o=i[e.name],(0,s.jsx)("li",{className:T,children:(0,s.jsx)(o,(0,c.Z)({action:e},e))},e.name)):(0,s.jsx)("li",{className:T,children:(0,s.jsx)(v,(0,c.Z)({},e))},e.name)}))})},z="BlockActions_actionsBackdrop__QWF-u",H="BlockActions_actionsBackdropOpen__PvLbA",W="BlockActions_actionsContainer__Pbrz5",O="BlockActions_actionsTitle__AH9b2",Q=function(){var e=(0,o.useState)(!1),t=(0,i.Z)(e,2),n=t[0],c=t[1],r=(0,p.rL)(),a=(0,o.useMemo)((function(){switch(r.actions){case"primary":return r.actionsPrimary;case"withFilter":return r.actionsWithFilter;default:return[]}}),[r.actions,r.actionsPrimary,r.actionsWithFilter]);function d(e){c(!n)}return(0,o.useEffect)((function(){function e(t){if("Escape"===t.code)return c(!1),void window.removeEventListener("keydown",e)}n?n&&window.addEventListener("keydown",e):window.removeEventListener("keydown",e)}),[n]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l,{iconId:n?"close":"actions-h",size:"100%",onClick:d}),(0,s.jsx)(m,{id:r.iconId,children:(0,s.jsx)("div",{className:n?H:z,onClick:d,children:(0,s.jsx)("div",{className:W,children:n&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{className:O,children:'\u0414\u043e\u0434\u0430\u0442\u043a\u043e\u0432\u0456 \u0434\u0456\u0457 \u0431\u043b\u043e\u043a\u0443 "'.concat(r.title,'"')}),a.length>0&&(0,s.jsx)(E,{arr:a})]})})})})]})}},3579:function(e,t,n){n.d(t,{ZP:function(){return l},rL:function(){return s}});var i=n(1413),o=n(2791),c={actionsPrimary:[{name:"link",title:"\u041f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f",iconId:"link",status:!0},{name:"copy",title:"\u041a\u043e\u043f\u0456\u044e\u0432\u0430\u0442\u0438",iconId:"copy",status:!1},{name:"share",title:"\u041f\u043e\u0434\u0456\u043b\u0438\u0442\u0438\u0441\u044c",iconId:"share",status:!0},{name:"refresh",title:"\u041e\u043d\u043e\u0432\u0438\u0442\u0438",iconId:"refresh",status:!1},{name:"edit",title:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438",iconId:"edit",status:!0},{name:"delete",title:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438",iconId:"delete",status:!1},{name:"create",title:"\u0421\u0442\u0432\u043e\u0440\u0438\u0442\u0438",iconId:"plus",status:!1},{name:"print",title:"\u0414\u0440\u0443\u043a",iconId:"print",status:!1},{name:"export",title:"\u0415\u043a\u0441\u043f\u043e\u0440\u0442",iconId:"upload",status:!1},{name:"import",title:"\u0406\u043c\u043f\u043e\u0440\u0442",iconId:"download",status:!1}],actionsWithFilter:[{name:"search",title:"\u041f\u043e\u0448\u0443\u043a",iconId:"search",status:!0},{name:"filter",title:"\u0424\u0456\u043b\u044c\u0442\u0440",iconId:"filter-off",status:!1},{name:"link",title:"\u041f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f",iconId:"link",status:!0},{name:"copy",title:"\u041a\u043e\u043f\u0456\u044e\u0432\u0430\u0442\u0438",iconId:"copy",status:!1},{name:"share",title:"\u041f\u043e\u0434\u0456\u043b\u0438\u0442\u0438\u0441\u044c",iconId:"share",status:!0},{name:"refresh",title:"\u041e\u043d\u043e\u0432\u0438\u0442\u0438",iconId:"refresh",status:!1},{name:"edit",title:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438",iconId:"edit",status:!1},{name:"delete",title:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438",iconId:"delete",status:!1},{name:"create",title:"\u0421\u0442\u0432\u043e\u0440\u0438\u0442\u0438",iconId:"plus",status:!1},{name:"print",title:"\u0414\u0440\u0443\u043a",iconId:"print",status:!1},{name:"export",title:"\u0415\u043a\u0441\u043f\u043e\u0440\u0442",iconId:"upload",status:!1},{name:"import",title:"\u0406\u043c\u043f\u043e\u0440\u0442",iconId:"download",status:!1}]},r=n(184),a=(0,o.createContext)(),s=function(){return(0,o.useContext)(a)},l=function(e){return(0,r.jsx)(a.Provider,{value:(0,i.Z)((0,i.Z)({},e),c),children:e.children})}},7401:function(e,t,n){n.d(t,{T:function(){return s}});var i=n(1413),o=n(885),c=n(2791),r=n(184),a=(0,c.createContext)(),s=function(e){var t=(0,c.useState)(null),n=(0,o.Z)(t,2),s=n[0],l=n[1];return(0,r.jsx)(a.Provider,{value:(0,i.Z)({selectItemByClick:function(e){l(e),console.log("addet item by id (".concat(e,") to context"))},deleteItemByClick:function(e){l(null),console.log(" deleted ".concat(e))},selectedItemId:s},e),children:e.children})}}}]);
//# sourceMappingURL=188.844f61cd.chunk.js.map