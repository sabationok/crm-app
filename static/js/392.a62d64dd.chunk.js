"use strict";(self.webpackChunkcrm_app=self.webpackChunkcrm_app||[]).push([[392],{3945:function(e,i,t){t.d(i,{Z:function(){return x}});t(2791);var l=t(3579),n=t(8586),a="FormPrimary_formContainer__riZjX",r="FormPrimary_form__Wceed",s="FormPrimary_notActiveForm__CyDb9",d="FormPrimary_formTitle__c4iOn",c="FormPrimary_inputs__J0qx4",o="FormPrimary_buttons__BjbgB",m="FormPrimary_btnName__KExEs",_=t(184),x=function(e){var i=e.children,t=e.onSubmit,x=e.onReset,u=e.formTitle,v=void 0===u?"Form title":u,h=(0,l.rL)().isFormDisabled;return(0,_.jsx)("div",{className:a,children:(0,_.jsxs)("form",{className:h?s:r,onSubmit:t,onReset:x,children:[(0,_.jsx)("div",{className:d,children:(0,_.jsx)("span",{children:v})}),null!==i&&void 0!==i?i:(0,_.jsx)("div",{className:c}),(0,_.jsx)("span",{children:"\u0414\u0430\u043b\u0456 \u0431\u0443\u0434\u0435 ..."}),(0,_.jsxs)("div",{className:o,children:[(0,_.jsx)(n.Z,{iconId:"doneAll",styleType:"AcceptBtn",type:"submit",styles:{width:"fit-content",minHeight:"fit-content"},iconSize:"26px",disabled:h,children:(0,_.jsx)("span",{className:m,children:"\u041f\u0440\u0438\u0439\u043d\u044f\u0442\u0438"})}),(0,_.jsx)(n.Z,{iconId:"clear",styleType:"ResetBtn",type:"reset",styles:{width:"fit-content",minHeight:"fit-content"},iconSize:"26px",disabled:h,children:(0,_.jsx)("span",{className:m,children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u0438"})}),(0,_.jsx)(n.Z,{iconId:"removeDone",styleType:"DeclineBtn",styles:{width:"fit-content",minHeight:"fit-content"},iconSize:"26px",disabled:h,children:(0,_.jsx)("span",{className:m,children:"\u0412\u0456\u0434\u0445\u0438\u043b\u0438\u0442\u0438"})})]})]})})}},1473:function(e,i,t){t.r(i),t.d(i,{default:function(){return B}});var l=t(6155),n=t(3945),a=t(1413),r=t(2791),s=t(885),d=t(3579),c={table:"TableList_table__ngc4N",tHead:"TableList_tHead__W19Yb",tBody:"TableList_tBody__qz-DX"},o=t(184),m=(0,r.createContext)(),_=function(){return(0,r.useContext)(m)},x=function(e){var i=e.children,t=e.value,l=(0,d.rL)().tableTitles,n=void 0===l?[]:l,_=(0,r.useState)(!1),x=(0,s.Z)(_,2),u=x[0],v=x[1],h={display:"grid",gridTemplateColumns:"repeat(".concat(n.length,", 100px)")};return(0,o.jsx)(m.Provider,{value:(0,a.Z)((0,a.Z)({ts:c},t),{},{rowGrid:h,tableTitles:n,setSelectedAll:v,selectedAll:u}),children:i})},u=t(2982),v={title:"TableCells_title__uc2M1",coll:"TableCells_coll__jUPDv",selected:"TableCells_selected__cfxa2",cellInner:"TableCells_cellInner__Qolij",cellInnerWrap:"TableCells_cellInnerWrap__EeyM8",empty:"TableCells_empty__bku02",price:"TableCells_price__jtWWE",currency:"TableCells_currency__bTTZf",commision:"TableCells_commision__V8R+W",stock:"TableCells_stock__iPkCd",productionTime:"TableCells_productionTime__9+mZc"},h=function(e){var i=e.title,t=(e.idx,e.className),l=void 0===t?"":t,n=[v.title,v[null===i||void 0===i?void 0:i.action]].concat((0,u.Z)(l)).join(" ");return(0,o.jsx)("div",{className:n,children:(null===i||void 0===i?void 0:i.name)||"Empty"})},b="TableRow_thRow__7wPW3",f="TableRow_row__qSFYZ",T=function(){var e=_(),i=e.tableTitles,t=void 0===i?[]:i,l=e.rowGrid,n=void 0===l?{}:l,r=(0,a.Z)({},n);return(0,o.jsx)("div",{style:r,className:b,children:t.map((function(e,i){return(0,o.jsx)(h,{title:e,idx:i},e.id)}))})},j=function(){return(0,o.jsx)("div",{className:c.tHead,children:(0,o.jsx)(T,{})})},p=(0,r.createContext)(),w=function(e){var i=e.children,t=e.rowIdx,l=e.rowData;return(0,o.jsx)(p.Provider,{value:{rowData:l,rowIdx:t},children:(0,o.jsx)(o.Fragment,{children:i})})},y=function(e){var i=e.title,t=(e.idx,e.className),l=void 0===t?"":t,n=(0,r.useContext)(p).rowData[null===i||void 0===i?void 0:i.action]||"---",a="---"!==n?v[null===i||void 0===i?void 0:i.action]:v.empty,s=[v.coll,a].concat((0,u.Z)(l)).join(" ");return(0,o.jsx)("div",{className:s,title:n,children:(0,o.jsx)("span",{className:v.cellInner,children:n})})},N=function(){var e=_(),i=e.tableTitles,t=void 0===i?[]:i,l=e.rowGrid,n=void 0===l?{}:l,r=(0,a.Z)({},n);return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{style:r,className:f,children:t.map((function(e,i){return(0,o.jsx)(y,{title:e,idx:i},e.id)}))})})},g=function(){var e=_().visiblePosts,i=void 0===e?[]:e;return(0,o.jsx)("div",{className:c.tBody,children:i.map((function(e,i){return(0,o.jsx)(w,{rowData:e,idx:i,children:(0,o.jsx)(N,{})},e.id)}))})},C=function(e){return(0,o.jsx)(x,{value:(0,a.Z)({},e),children:(0,o.jsxs)("div",{className:[c.table,c.orders],children:[(0,o.jsx)(j,{}),(0,o.jsx)(g,{})]})})},Z=t(5984),F=[{id:(0,Z.x0)(3),name:"\u0414\u0430\u0442\u0430",dataTitle:"createdAt",action:"date",width:105,filter:!1,visible:!0},{id:(0,Z.x0)(3),name:"\u0417\u043c\u0456\u043d\u0435\u043d\u043e",dataTitle:"updatedAt",action:"date",width:105,filter:!1,visible:!0},{id:(0,Z.x0)(3),name:"\u041d\u043e\u043c\u0435\u0440",dataTitle:"orderNumber",action:"string",width:120,filter:!0,visible:!0},{id:(0,Z.x0)(3),name:"\u0421\u0442\u0430\u0442\u0443\u0441",dataTitle:"orderStatus",action:"orderStatus",width:100,filter:!0,visible:!0},{id:(0,Z.x0)(3),name:"\u041c\u0435\u043d\u0435\u0434\u0436\u0435\u0440",dataTitle:"managerName",action:"string",width:120,filter:!0,visible:!0},{id:(0,Z.x0)(3),name:"\u0412\u0430\u0440\u0442\u0456\u0441\u0442\u044c",dataTitle:"amount",action:"amount",width:80,filter:!0,visible:!0},{id:(0,Z.x0)(3),name:"\u0412\u0430\u043b\u044e\u0442\u0430",dataTitle:"currency",action:"string",width:70,filter:!0,visible:!0},{id:(0,Z.x0)(3),name:"\u0422\u0438\u043f",dataTitle:"orderType",action:"orderType",width:100,filter:!0,visible:!0},{id:(0,Z.x0)(3),name:"\u041e\u0442\u0440\u0438\u043c\u0443\u0432\u0430\u0447",dataTitle:"recieverName",action:"string",width:160,filter:!0,visible:!0},{id:(0,Z.x0)(3),name:"\u0417\u0430\u043c\u043e\u0432\u043d\u0438\u043a",dataTitle:"customerName",action:"string",width:160,filter:!0,visible:!0},{id:(0,Z.x0)(3),name:"\u0406\u043d\u0432\u043e\u0439\u0441\u0438",dataTitle:"invoicesList",action:"list",width:170,filter:!0,visible:!0},{id:(0,Z.x0)(3),name:"\u0422\u0422\u041d",dataTitle:"ttnList",action:"list",width:170,filter:!0,visible:!0},{id:(0,Z.x0)(3),name:"\u041f\u0435\u0440\u0435\u0432\u0456\u0437\u043d\u0438\u043a",dataTitle:"transporterName",action:"string",width:120,filter:!0,visible:!0},{id:(0,Z.x0)(3),name:"\u041f\u0440\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f",dataTitle:"destination",action:"string",width:100,filter:!0,visible:!0},{id:(0,Z.x0)(3),name:"\u0421\u043a\u043b\u0430\u0434\u0438",dataTitle:"storeList",action:"list",width:150,filter:!0,visible:!0},{id:(0,Z.x0)(3),name:"\u041a\u043e\u043c\u0435\u043d\u0442\u0430\u0440",dataTitle:"userComment",action:"string",width:200,filter:!0,visible:!0}],P="PageOrders_pageFlex__SX4hv",I="PageOrders_sectionTopFlex__wrAG3",S="PageOrders_sectionBottomFlex__whXpb",D="PageOrders_sectionInnerLeft__+UYv4",k="PageOrders_sectionInnerRight__SRqI6",B=function(){return(0,o.jsxs)("div",{className:P,children:[(0,o.jsx)("section",{className:I,children:(0,o.jsx)(l.Z,{blockFilter:!0,title:"\u0417\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f",iconId:"list",tableTitles:F,actions:"withFilter",filter:!0,children:(0,o.jsx)(C,{})})}),(0,o.jsxs)("section",{className:S,children:[(0,o.jsx)("div",{className:D,children:(0,o.jsx)(l.Z,{title:"\u0414\u0435\u0442\u0430\u043b\u0456",iconId:"info",actions:"primary",children:(0,o.jsx)(n.Z,{formTitle:"\u0414\u0435\u0442\u0430\u043b\u0456 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"})})}),(0,o.jsx)("div",{className:k,children:(0,o.jsxs)(l.Z,{title:"\u0422\u0422\u041d",iconId:"ttn",actions:"primary",children:[(0,o.jsx)(n.Z,{formTitle:"\u0422\u0422\u041d \u0434\u043e \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"}),(0,o.jsx)(n.Z,{formTitle:"\u0420\u0430\u0445\u0443\u043d\u043e\u043a \u0434\u043e \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"})]})})]})]})}}}]);
//# sourceMappingURL=392.a62d64dd.chunk.js.map