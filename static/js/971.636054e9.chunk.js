"use strict";(self.webpackChunkcrm_app=self.webpackChunkcrm_app||[]).push([[971],{4267:function(e,t,i){i.d(t,{Z:function(){return h}});var n=i(4942),l=i(1413),a=i(885),r=i(2791),s={inputBox:"Inputs_inputBox__1q9r+",input:"Inputs_input__BplBa",label:"Inputs_label__TCypU",textarea:"Inputs_textarea__Pz9Za"},o=i(184),d=function(e){var t=e.label,i=e.value,n=e.defaultValue,l=e.name,a=e.required,r=void 0!==a&&a,d=e.id,c=e.type,u=void 0===c?"text":c,_=e.placeholder,m=e.onChange,v=e.onClick;return(0,o.jsxs)("div",{className:s.inputBox,children:[(0,o.jsx)("label",{htmlFor:d,className:s.label,children:(0,o.jsx)("span",{className:s.labelInner,children:t})}),(0,o.jsx)("input",{className:s.input,name:l,defaultValue:n,value:i,id:d,type:u,placeholder:_,required:r,onChange:m,onClick:v})]})},c={Button:"ButtonText_Button__jyVlZ",disabled:"ButtonText_disabled__uCPQr",ColoredBtn:"ButtonText_ColoredBtn__X+88K",PrimaryBtn:"ButtonText_PrimaryBtn__KnE6B",BorderBtn:"ButtonText_BorderBtn__yLIBf",AcceptBtn:"ButtonText_AcceptBtn__frYTd",DeclineBtn:"ButtonText_DeclineBtn__HRicl",ResetBtn:"ButtonText_ResetBtn__DxvfY"},u=function(e){var t=e.children,i=e.type,n=void 0===i?"button":i,l=e.disabled,a=void 0!==l&&l,r=e.style,s=void 0===r?{}:r,d=e.className,u=void 0===d?"":d,_=e.onClick,m=void 0===_?null:_,v=e.styleType,x=void 0===v?"PrimaryBtn":v,p=[c.Button,c[x],u].join(" ");return(0,o.jsx)("button",{style:s,type:n,className:p,disabled:a,onClick:function(){m&&m()},children:(0,o.jsx)("span",{children:t})})},_="FormProductInfo_formContainer__dyDfA",m="FormProductInfo_form__ZxkdW",v="FormProductInfo_formTitle__Rxoy7",x="FormProductInfo_inputs__x+i7I",p="FormProductInfo_buttons__x5zAE",h=function(e){var t=e.formTitle,i=void 0===t?"Form title":t,s={},c=(0,r.useState)(s),h=(0,a.Z)(c,2),f=h[0],b=h[1];function T(e){var t=e.target,i=t.name,a=t.value;b((0,l.Z)((0,l.Z)({},f),{},(0,n.Z)({},i,a)))}return(0,o.jsx)("div",{className:_,children:(0,o.jsxs)("form",{className:m,onSubmit:function(e){e.preventDefault(),console.log(f)},onReset:function(e){b(s)},children:[(0,o.jsx)("div",{className:v,children:(0,o.jsx)("span",{children:i})}),(0,o.jsxs)("div",{className:x,children:[(0,o.jsx)(d,{label:"Input",placeholder:"Input",name:"1",value:f[1],onChange:T}),(0,o.jsx)(d,{label:"Input",placeholder:"Input",name:"2",value:f[2],onChange:T}),(0,o.jsx)(d,{label:"Input",placeholder:"Input",name:"3",value:f[3],onChange:T}),(0,o.jsx)(d,{label:"Input",placeholder:"Input",name:"4",value:f[4],onChange:T}),(0,o.jsx)(d,{label:"Input",placeholder:"Input",name:"5",value:f[5],onChange:T})]}),(0,o.jsxs)("div",{className:p,children:[(0,o.jsx)(u,{styleType:"AcceptBtn",type:"submit",children:"\u041f\u0440\u0438\u0439\u043d\u044f\u0442\u0438"}),(0,o.jsx)(u,{styleType:"ResetBtn",type:"reset",children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u0438"}),(0,o.jsx)(u,{styleType:"DeclineBtn",children:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438"})]})]})})}},4400:function(e,t,i){i.r(t),i.d(t,{default:function(){return S}});var n=i(6226),l=i(7401),a=i(4267),r=i(1413),s=i(2791),o=i(885),d=i(3579),c={table:"TableList_table__ngc4N",tHead:"TableList_tHead__W19Yb",tBody:"TableList_tBody__qz-DX"},u=i(184),_=(0,s.createContext)(),m=function(){return(0,s.useContext)(_)},v=function(e){var t=e.children,i=e.value,n=(0,d.rL)().tableTitles,l=void 0===n?[]:n,a=(0,s.useState)(!1),m=(0,o.Z)(a,2),v=m[0],x=m[1],p={display:"grid",gridTemplateColumns:"repeat(".concat(l.length,", 100px)")};return(0,u.jsx)(_.Provider,{value:(0,r.Z)((0,r.Z)({ts:c},i),{},{rowGrid:p,tableTitles:l,setSelectedAll:x,selectedAll:v}),children:t})},x=i(2982),p={title:"TableCells_title__uc2M1",coll:"TableCells_coll__jUPDv",selected:"TableCells_selected__cfxa2",cellInner:"TableCells_cellInner__Qolij",cellInnerWrap:"TableCells_cellInnerWrap__EeyM8",empty:"TableCells_empty__bku02",price:"TableCells_price__jtWWE",currency:"TableCells_currency__bTTZf",commision:"TableCells_commision__V8R+W",stock:"TableCells_stock__iPkCd",productionTime:"TableCells_productionTime__9+mZc"},h=function(e){var t=e.title,i=(e.idx,e.className),n=void 0===i?"":i,l=[p.title,p[null===t||void 0===t?void 0:t.action]].concat((0,x.Z)(n)).join(" ");return(0,u.jsx)("div",{className:l,children:(null===t||void 0===t?void 0:t.name)||"Empty"})},f="TableRow_thRow__7wPW3",b="TableRow_row__qSFYZ",T=function(){var e=m(),t=e.tableTitles,i=void 0===t?[]:t,n=e.rowGrid,l=void 0===n?{}:n,a=(0,r.Z)({},l);return(0,u.jsx)("div",{style:a,className:f,children:i.map((function(e,t){return(0,u.jsx)(h,{title:e,idx:t},e.id)}))})},j=function(){return(0,u.jsx)("div",{className:c.tHead,children:(0,u.jsx)(T,{})})},y=(0,s.createContext)(),B=function(e){var t=e.children,i=e.rowIdx,n=e.rowData;return(0,u.jsx)(y.Provider,{value:{rowData:n,rowIdx:i},children:(0,u.jsx)(u.Fragment,{children:t})})},C=function(e){var t=e.title,i=(e.idx,e.className),n=void 0===i?"":i,l=(0,s.useContext)(y).rowData[null===t||void 0===t?void 0:t.action]||"---",a="---"!==l?p[null===t||void 0===t?void 0:t.action]:p.empty,r=[p.coll,a].concat((0,x.Z)(n)).join(" ");return(0,u.jsx)("div",{className:r,title:l,children:(0,u.jsx)("span",{className:p.cellInner,children:l})})},w=function(){var e=m(),t=e.tableTitles,i=void 0===t?[]:t,n=e.rowGrid,l=void 0===n?{}:n,a=(0,r.Z)({},l);return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("div",{style:a,className:b,children:i.map((function(e,t){return(0,u.jsx)(C,{title:e,idx:t},e.id)}))})})},I=function(){var e=m().visiblePosts,t=void 0===e?[]:e;return(0,u.jsx)("div",{className:c.tBody,children:t.map((function(e,t){return(0,u.jsx)(B,{rowData:e,idx:t,children:(0,u.jsx)(w,{})},e.id)}))})},g=function(e){return(0,u.jsx)(v,{value:(0,r.Z)({},e),children:(0,u.jsxs)("div",{className:[c.table,c.orders],children:[(0,u.jsx)(j,{}),(0,u.jsx)(I,{})]})})},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")},Z=[{id:N(3),name:"\u0414\u0430\u0442\u0430",dataTitle:"createdAt",action:"date",width:105,filter:!1,visible:!0},{id:N(3),name:"\u0417\u043c\u0456\u043d\u0435\u043d\u043e",dataTitle:"updatedAt",action:"date",width:105,filter:!1,visible:!0},{id:N(3),name:"\u041d\u043e\u043c\u0435\u0440",dataTitle:"orderNumber",action:"string",width:120,filter:!0,visible:!0},{id:N(3),name:"\u0421\u0442\u0430\u0442\u0443\u0441",dataTitle:"orderStatus",action:"orderStatus",width:100,filter:!0,visible:!0},{id:N(3),name:"\u041c\u0435\u043d\u0435\u0434\u0436\u0435\u0440",dataTitle:"managerName",action:"string",width:120,filter:!0,visible:!0},{id:N(3),name:"\u0412\u0430\u0440\u0442\u0456\u0441\u0442\u044c",dataTitle:"amount",action:"amount",width:80,filter:!0,visible:!0},{id:N(3),name:"\u0412\u0430\u043b\u044e\u0442\u0430",dataTitle:"currency",action:"string",width:70,filter:!0,visible:!0},{id:N(3),name:"\u0422\u0438\u043f",dataTitle:"orderType",action:"orderType",width:100,filter:!0,visible:!0},{id:N(3),name:"\u041e\u0442\u0440\u0438\u043c\u0443\u0432\u0430\u0447",dataTitle:"recieverName",action:"string",width:160,filter:!0,visible:!0},{id:N(3),name:"\u0417\u0430\u043c\u043e\u0432\u043d\u0438\u043a",dataTitle:"customerName",action:"string",width:160,filter:!0,visible:!0},{id:N(3),name:"\u0406\u043d\u0432\u043e\u0439\u0441\u0438",dataTitle:"invoicesList",action:"list",width:170,filter:!0,visible:!0},{id:N(3),name:"\u0422\u0422\u041d",dataTitle:"ttnList",action:"list",width:170,filter:!0,visible:!0},{id:N(3),name:"\u041f\u0435\u0440\u0435\u0432\u0456\u0437\u043d\u0438\u043a",dataTitle:"transporterName",action:"string",width:120,filter:!0,visible:!0},{id:N(3),name:"\u041f\u0440\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f",dataTitle:"destination",action:"string",width:100,filter:!0,visible:!0},{id:N(3),name:"\u0421\u043a\u043b\u0430\u0434\u0438",dataTitle:"storeList",action:"list",width:150,filter:!0,visible:!0},{id:N(3),name:"\u041a\u043e\u043c\u0435\u043d\u0442\u0430\u0440",dataTitle:"userComment",action:"string",width:200,filter:!0,visible:!0}],P="PageOrders_pageFlex__SX4hv",F="PageOrders_sectionTopFlex__wrAG3",k="PageOrders_sectionBottomFlex__whXpb",R="PageOrders_sectionInnerLeft__+UYv4",D="PageOrders_sectionInnerRight__SRqI6",S=function(){return(0,u.jsx)(l.T,{children:(0,u.jsxs)("div",{className:P,children:[(0,u.jsx)("section",{className:F,children:(0,u.jsx)(n.Z,{blockFilter:!0,title:"\u0417\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f",iconId:"list",tableTitles:Z,actions:"withFilter",filter:!0,children:(0,u.jsx)(g,{})})}),(0,u.jsxs)("section",{className:k,children:[(0,u.jsx)("div",{className:R,children:(0,u.jsx)(n.Z,{title:"\u0414\u0435\u0442\u0430\u043b\u0456",iconId:"info",actions:"primary",children:(0,u.jsx)(a.Z,{formTitle:"Form Order Info"})})}),(0,u.jsx)("div",{className:D,children:(0,u.jsx)(n.Z,{title:"\u0422\u0422\u041d",iconId:"ttn",actions:"primary",children:(0,u.jsx)("span",{children:"Stock table form"})})})]})]})})}}}]);
//# sourceMappingURL=971.636054e9.chunk.js.map