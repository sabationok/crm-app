"use strict";(self.webpackChunkcrm_app=self.webpackChunkcrm_app||[]).push([[815],{3945:function(e,n,t){t.d(n,{Z:function(){return h}});t(2791);var i=t(3579),l=t(8586),a="FormPrimary_formContainer__riZjX",s="FormPrimary_form__Wceed",o="FormPrimary_notActiveForm__CyDb9",r="FormPrimary_formTitle__c4iOn",c="FormPrimary_inputs__J0qx4",d="FormPrimary_buttons__BjbgB",u="FormPrimary_btnName__KExEs",m=t(184),h=function(e){var n=e.children,t=e.onSubmit,h=e.onReset,f=e.formTitle,p=void 0===f?"Form title":f,_=(0,i.rL)().isFormDisabled;return(0,m.jsx)("div",{className:a,children:(0,m.jsxs)("form",{className:_?o:s,onSubmit:t,onReset:h,children:[(0,m.jsx)("div",{className:r,children:(0,m.jsx)("span",{children:p})}),null!==n&&void 0!==n?n:(0,m.jsx)("div",{className:c}),(0,m.jsxs)("div",{className:d,children:[(0,m.jsx)(l.Z,{iconId:"doneAll",styleType:"AcceptBtn",type:"submit",styles:{width:"fit-content",minHeight:"fit-content"},iconSize:"26px",children:(0,m.jsx)("span",{className:u,children:"\u041f\u0440\u0438\u0439\u043d\u044f\u0442\u0438"})}),(0,m.jsx)(l.Z,{iconId:"clear",styleType:"ResetBtn",type:"reset",styles:{width:"fit-content",minHeight:"fit-content"},iconSize:"26px",children:(0,m.jsx)("span",{className:u,children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u0438"})}),(0,m.jsx)(l.Z,{iconId:"removeDone",styleType:"DeclineBtn",styles:{width:"fit-content",minHeight:"fit-content"},iconSize:"26px",children:(0,m.jsx)("span",{className:u,children:"\u0412\u0456\u0434\u0445\u0438\u043b\u0438\u0442\u0438"})})]})]})})}},8738:function(e,n,t){t.d(n,{Z:function(){return m}});var i=t(4942),l=t(1413),a=t(885),s=t(2791),o=t(3945),r={inputBox:"PrimaryInput_inputBox__W2S01",input:"PrimaryInput_input__ETF4D",label:"PrimaryInput_label__Xnnap",textarea:"PrimaryInput_textarea__DbV9e"},c=t(184),d=function(e){var n=e.label,t=e.value,i=e.defaultValue,l=e.name,a=e.required,s=void 0!==a&&a,o=e.id,d=e.type,u=void 0===d?"text":d,m=e.placeholder,h=e.onChange,f=e.onClick;return(0,c.jsxs)("div",{className:r.inputBox,children:[(0,c.jsx)("label",{htmlFor:o,className:r.label,children:(0,c.jsx)("span",{className:r.labelInner,children:n})}),(0,c.jsx)("input",{className:r.input,name:l,defaultValue:i,value:t,id:o,type:u,placeholder:m,required:s,onChange:h,onClick:f})]})},u="FormProductInfo_inputs__E9NVE",m=function(e){e.formTitle;var n={},t=(0,s.useState)(n),r=(0,a.Z)(t,2),m=r[0],h=r[1];function f(e){var n=e.target,t=n.name,a=n.value;h((0,l.Z)((0,l.Z)({},m),{},(0,i.Z)({},t,a)))}return(0,c.jsx)(o.Z,{formTitle:"\u0414\u0435\u0442\u0430\u043b\u0456 \u0442\u043e\u0432\u0430\u0440\u0443",onSubmit:function(e){e.preventDefault(),console.log(m)},onReset:function(e){h(n)},children:(0,c.jsxs)("div",{className:u,children:[(0,c.jsx)(d,{label:"\u041d\u0430\u0437\u0432\u0430",placeholder:"\u041d\u0430\u0437\u0432\u0430",name:"1",value:m[1],onChange:f}),(0,c.jsx)(d,{label:"SKU",placeholder:"SKU",name:"2",value:m[2],onChange:f}),(0,c.jsx)(d,{label:"\u0426\u0456\u043d\u0430",placeholder:"\u0426\u0456\u043d\u0430",name:"3",value:m[3],onChange:f}),(0,c.jsx)(d,{label:"\u041a\u043e\u043c\u0456\u0441\u0456\u044f",placeholder:"\u041a\u043e\u043c\u0456\u0441\u0456\u044f",name:"4",value:m[4],onChange:f}),(0,c.jsx)(d,{label:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044f",placeholder:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044f",name:"5",value:m[5],onChange:f})]})})}},2620:function(e,n,t){t.r(n),t.d(n,{default:function(){return A}});var i=t(6226),l=t(8738),a=t(2982),s=t(885),o=t(2791),r=t(9107),c=t(4164),d=function(e){var n=document.getElementById("modal");return c.createPortal(e.children,n)},u=t(1413),m={iconBox:"SvgIconClose_iconBox__srQxP",svg:"SvgIconClose_svg__aH642"},h=t(184),f=function(e){e.iconId;var n=e.style,t=e.size,i=void 0===t?"":t,l=e.svgClass,a=void 0===l?"":l,s=(0,u.Z)((0,u.Z)({},n),{},{width:i,height:i}),o=[m.svg,a].join(" ");return(0,h.jsx)("div",{className:m.iconBox,style:s,children:(0,h.jsx)("svg",{className:o,viewBox:"0 0 32 32",children:(0,h.jsx)("path",{d:"M1.76 1.787l-0.612 0.613 13.598 13.6-13.6 13.6 0.628 0.626 0.626 0.628 13.6-13.6 13.6 13.6 0.626-0.628 0.628-0.626-13.6-13.6 13.6-13.6-0.628-0.626-0.626-0.628-13.6 13.6-6.788-6.788c-2.249-2.258-4.469-4.469-6.698-6.671l-0.116-0.114c-0.014 0-0.302 0.276-0.638 0.613z"})})})},p="ModalCustom_Backdrop__ySop7",_="ModalCustom_Modal__fIrS1",x="ModalCustom_closeModal__1h6N6",g=(0,o.createContext)(),v=function(e){var n=e.handleToggle,t=e.defaultBtn,i=void 0===t||t,l=e.children,a=(0,o.useState)(!0),r=(0,s.Z)(a,2),c=r[0],u=r[1];function m(){n(),u(!c)}return window.addEventListener("keydown",(function e(t){"Escape"===t.code&&(n(),window.removeEventListener("keydown",e))})),(0,o.useEffect)((function(){return c&&document.querySelector("body").classList.add("NotScroll"),function(){document.querySelector("body").classList.remove("NotScroll")}}),[c]),(0,h.jsx)(d,{children:(0,h.jsx)(g.Provider,{value:{isOpen:c,handleToggleModal:m},children:(0,h.jsx)("div",{className:p,onClick:function(e){e.target===e.currentTarget&&(n(),u(!c))},children:(0,h.jsxs)("div",{className:_,children:[i&&(0,h.jsx)("button",{className:x,onClick:m,children:(0,h.jsx)(f,{size:"100%"})}),l]})})})})},j=function(e){var n=e.children,t=e.className,i=e.modalContent,l=e.defaultBtn,a=void 0===l||l,r=(0,o.useState)(!1),c=(0,s.Z)(r,2),d=c[0],u=c[1];return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("a",{className:t,onClick:function(e){e.preventDefault(),u(!d)},href:"/",children:n}),d&&(0,h.jsx)(v,{handleToggle:function(e){u(!d)},defaultBtn:a,children:i})]})},y="InputImg_inputImg__TX5bB",b="InputImg_labelInner__Pcgo+",N="InputImg_inputLabel__J2Jg+",I="InputImg_labelInnerImg__228-Q",Z=function(e){var n=e.name,t=e.id,i=e.onChange,l=e.selectedFile,a=void 0===l?null:l,c=e.multiple,d=void 0!==c&&c,u=e.disabled,m=void 0!==u&&u,f=(0,o.useState)(),p=(0,s.Z)(f,2),_=p[0],x=p[1];return(0,o.useEffect)((function(){var e,n=!1;return e=new FileReader,a&&(e.onload=function(e){var t=e.target.result;!t&&n||x(t)},e.readAsDataURL(a)),function(){n=!0,e&&1===e.readyState&&e.abort()}}),[a]),(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("div",{className:y,children:[(0,h.jsx)("input",{className:"visually-hidden",name:n,type:"file",id:t,accept:".png, .jpg, .jpeg, .webp",disabled:a||m,multiple:d,onChange:i}),(0,h.jsxs)("label",{htmlFor:t,className:N,children:[!a&&(0,h.jsx)("span",{className:b,children:(0,h.jsx)(r.Z,{iconId:"plus",size:"30px"})}),(0,h.jsx)(j,{modalContent:(0,h.jsx)("img",{src:_,alt:null===a||void 0===a?void 0:a.name}),children:_&&(0,h.jsx)("img",{className:I,src:_,alt:null===a||void 0===a?void 0:a.name})})]})]})})},C=t(3945),F=t(5206),P="FormProductImgs_inputs__gA-he",S=/image\/(png|jpg|jpeg|webp)/i,B=function(e){e.formTitle;var n=[],t=(0,o.useState)(n),i=(0,s.Z)(t,2),l=i[0],r=i[1],c=(0,o.useState)(n),d=(0,s.Z)(c,2),u=d[0],m=d[1],f=(0,o.useState)(5),p=(0,s.Z)(f,2),_=p[0],x=p[1];function g(e){var n=e.target.files;if(n.length>_)F.Am.error("\u0412\u0438 \u043e\u0431\u0440\u0430\u043b\u0438 \u0431\u0456\u043b\u044c\u0448\u0435 ".concat(_," \u0444\u0430\u0439\u043b\u0456\u0432"));else{var t=(0,a.Z)(n).filter((function(e){return e.type.match(S)?e.size>5242880?(F.Am.error('File size of "'.concat(e.name,'" is more than alowed, "').concat(e.size,'"')),null):(F.Am.success('File "'.concat(e.name,' is accepted"')),e):(F.Am.error("Image mime type is not valid"),null)}));m([].concat((0,a.Z)(u),(0,a.Z)(t))),console.log(_);var i=_-l.length;x(i)}}function v(e,n){console.log(e,"for edit file")}function j(e,n){console.log(e,"for delete file")}return(0,o.useEffect)((function(){if(u.length>0){var e=u.filter((function(e){return e}));console.log(e),r((0,a.Z)(e))}}),[u,u.length]),(0,h.jsx)(C.Z,{formTitle:"\u0424\u043e\u0442\u043e \u0442\u043e\u0432\u0430\u0440\u0443",onSubmit:function(e){e.preventDefault(),console.log(l,"submit data")},onReset:function(e){r(n)},children:(0,h.jsxs)("div",{className:P,children:[l.length>0&&l.map((function(e,n){return(0,h.jsx)(Z,{name:e.name,idx:n,id:e.name,selectedFile:e,onChange:g,onDelete:j,onEdit:v,multiple:!0},n)})),l.length<=4&&(0,h.jsx)(Z,{name:"img",id:"img1",onChange:g,multiple:!0})]})})},w=function(){return(0,h.jsx)(C.Z,{formTitle:"\u0423\u043f\u0440\u0430\u0432\u043b\u0456\u043d\u043d\u044f \u0441\u043a\u043b\u0430\u0434\u0441\u044c\u043a\u0438\u043c\u0438 \u0437\u0430\u043b\u0438\u0448\u043a\u0430\u043c\u0438"})},T="PageProducts_pageFlex__q407T",k="PageProducts_sectionTopFlex__m3okd",E="PageProducts_sectionBottomFlex__3rqsX",z="PageProducts_sectionInnerLeft__FWfKz",D="PageProducts_sectionInnerRight__-jX0i",A=function(){return(0,h.jsxs)("div",{className:T,children:[(0,h.jsx)("section",{className:k,children:(0,h.jsx)(i.Z,{blockFilter:!0,title:"\u0421\u043f\u0438\u0441\u043e\u043a \u0442\u043e\u0432\u0430\u0440\u0456\u0432",iconId:"list",actions:"withFilter",filter:!0})}),(0,h.jsxs)("section",{className:E,children:[(0,h.jsx)("div",{className:z,children:(0,h.jsxs)(i.Z,{title:"\u0414\u0435\u0442\u0430\u043b\u0456",iconId:"info",actions:"primary",children:[(0,h.jsx)(l.Z,{}),(0,h.jsx)(B,{})]})}),(0,h.jsx)("div",{className:D,children:(0,h.jsx)(i.Z,{title:"\u0421\u043a\u043b\u0430\u0434",iconId:"storage",actions:"primary",children:(0,h.jsx)(w,{})})})]})]})}}}]);
//# sourceMappingURL=815.01d49812.chunk.js.map