"use strict";(self.webpackChunkcrm_app=self.webpackChunkcrm_app||[]).push([[636],{5782:function(e,n,t){t.d(n,{Z:function(){return i}});t(2791);var l={Button:"ButtonText_Button__jyVlZ",disabled:"ButtonText_disabled__uCPQr",ColoredBtn:"ButtonText_ColoredBtn__X+88K",PrimaryBtn:"ButtonText_PrimaryBtn__KnE6B",BorderBtn:"ButtonText_BorderBtn__yLIBf",AcceptBtn:"ButtonText_AcceptBtn__frYTd",DeclineBtn:"ButtonText_DeclineBtn__HRicl",ResetBtn:"ButtonText_ResetBtn__DxvfY"},o=t(184),i=function(e){var n=e.children,t=e.type,i=void 0===t?"button":t,s=e.disabled,a=void 0!==s&&s,r=e.style,c=void 0===r?{}:r,d=e.className,u=void 0===d?"":d,m=e.onClick,_=void 0===m?null:m,p=e.styleType,f=void 0===p?"PrimaryBtn":p,x=[l.Button,l[f],u].join(" ");return(0,o.jsx)("button",{style:c,type:i,className:x,disabled:a,onClick:function(){_&&_()},children:(0,o.jsx)("span",{children:n})})}},9986:function(e,n,t){t.d(n,{Z:function(){return x}});var l=t(4942),o=t(1413),i=t(885),s=t(2791),a={inputBox:"PrimaryInput_inputBox__W2S01",input:"PrimaryInput_input__ETF4D",label:"PrimaryInput_label__Xnnap",textarea:"PrimaryInput_textarea__DbV9e"},r=t(184),c=function(e){var n=e.label,t=e.value,l=e.defaultValue,o=e.name,i=e.required,s=void 0!==i&&i,c=e.id,d=e.type,u=void 0===d?"text":d,m=e.placeholder,_=e.onChange,p=e.onClick;return(0,r.jsxs)("div",{className:a.inputBox,children:[(0,r.jsx)("label",{htmlFor:c,className:a.label,children:(0,r.jsx)("span",{className:a.labelInner,children:n})}),(0,r.jsx)("input",{className:a.input,name:o,defaultValue:l,value:t,id:c,type:u,placeholder:m,required:s,onChange:_,onClick:p})]})},d=t(5782),u="FormProductInfo_formContainer__dyDfA",m="FormProductInfo_form__ZxkdW",_="FormProductInfo_formTitle__Rxoy7",p="FormProductInfo_inputs__x+i7I",f="FormProductInfo_buttons__x5zAE",x=function(e){var n=e.formTitle,t=void 0===n?"Form title":n,a={},x=(0,s.useState)(a),h=(0,i.Z)(x,2),v=h[0],g=h[1];function j(e){var n=e.target,t=n.name,i=n.value;g((0,o.Z)((0,o.Z)({},v),{},(0,l.Z)({},t,i)))}return(0,r.jsx)("div",{className:u,children:(0,r.jsxs)("form",{className:m,onSubmit:function(e){e.preventDefault(),console.log(v)},onReset:function(e){g(a)},children:[(0,r.jsx)("div",{className:_,children:(0,r.jsx)("span",{children:t})}),(0,r.jsxs)("div",{className:p,children:[(0,r.jsx)(c,{label:"Input",placeholder:"Input",name:"1",value:v[1],onChange:j}),(0,r.jsx)(c,{label:"Input",placeholder:"Input",name:"2",value:v[2],onChange:j}),(0,r.jsx)(c,{label:"Input",placeholder:"Input",name:"3",value:v[3],onChange:j}),(0,r.jsx)(c,{label:"Input",placeholder:"Input",name:"4",value:v[4],onChange:j}),(0,r.jsx)(c,{label:"Input",placeholder:"Input",name:"5",value:v[5],onChange:j})]}),(0,r.jsxs)("div",{className:f,children:[(0,r.jsx)(d.Z,{styleType:"AcceptBtn",type:"submit",children:"\u041f\u0440\u0438\u0439\u043d\u044f\u0442\u0438"}),(0,r.jsx)(d.Z,{styleType:"ResetBtn",type:"reset",children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u0438"}),(0,r.jsx)(d.Z,{styleType:"DeclineBtn",children:"\u0412\u0456\u0434\u0445\u0438\u043b\u0438\u0442\u0438"})]})]})})}},5636:function(e,n,t){t.r(n),t.d(n,{default:function(){return X}});var l=t(6226),o=t(9986),i=t(2982),s=t(885),a=t(2791),r=t(9107),c=t(4164),d=function(e){var n=document.getElementById("modal");return c.createPortal(e.children,n)},u=t(1413),m={iconBox:"SvgIconClose_iconBox__srQxP",svg:"SvgIconClose_svg__aH642"},_=t(184),p=function(e){e.iconId;var n=e.style,t=e.size,l=void 0===t?"":t,o=e.svgClass,i=void 0===o?"":o,s=(0,u.Z)((0,u.Z)({},n),{},{width:l,height:l}),a=[m.svg,i].join(" ");return(0,_.jsx)("div",{className:m.iconBox,style:s,children:(0,_.jsx)("svg",{className:a,viewBox:"0 0 32 32",children:(0,_.jsx)("path",{d:"M1.76 1.787l-0.612 0.613 13.598 13.6-13.6 13.6 0.628 0.626 0.626 0.628 13.6-13.6 13.6 13.6 0.626-0.628 0.628-0.626-13.6-13.6 13.6-13.6-0.628-0.626-0.626-0.628-13.6 13.6-6.788-6.788c-2.249-2.258-4.469-4.469-6.698-6.671l-0.116-0.114c-0.014 0-0.302 0.276-0.638 0.613z"})})})},f="ModalCustom_Backdrop__ySop7",x="ModalCustom_Modal__fIrS1",h="ModalCustom_closeModal__1h6N6",v=(0,a.createContext)(),g=function(e){var n=e.handleToggle,t=e.defaultBtn,l=void 0===t||t,o=e.children,i=(0,a.useState)(!0),r=(0,s.Z)(i,2),c=r[0],u=r[1];function m(){n(),u(!c)}return window.addEventListener("keydown",(function e(t){"Escape"===t.code&&(n(),window.removeEventListener("keydown",e))})),(0,a.useEffect)((function(){return c&&document.querySelector("body").classList.add("NotScroll"),function(){document.querySelector("body").classList.remove("NotScroll")}}),[c]),(0,_.jsx)(d,{children:(0,_.jsx)(v.Provider,{value:{isOpen:c,handleToggleModal:m},children:(0,_.jsx)("div",{className:f,onClick:function(e){e.target===e.currentTarget&&(n(),u(!c))},children:(0,_.jsxs)("div",{className:x,children:[l&&(0,_.jsx)("button",{className:h,onClick:m,children:(0,_.jsx)(p,{size:"100%"})}),o]})})})})},j=function(e){var n=e.children,t=e.className,l=e.modalContent,o=e.defaultBtn,i=void 0===o||o,r=(0,a.useState)(!1),c=(0,s.Z)(r,2),d=c[0],u=c[1];return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("a",{className:t,onClick:function(e){e.preventDefault(),u(!d)},href:"/",children:n}),d&&(0,_.jsx)(g,{handleToggle:function(e){u(!d)},defaultBtn:i,children:l})]})},I="InputImg_inputImg__TX5bB",y="InputImg_labelInner__Pcgo+",B="InputImg_inputLabel__J2Jg+",b="InputImg_labelInnerImg__228-Q",N=function(e){var n=e.name,t=e.id,l=e.onChange,o=e.selectedFile,i=void 0===o?null:o,c=e.multiple,d=void 0!==c&&c,u=e.disabled,m=void 0!==u&&u,p=(0,a.useState)(),f=(0,s.Z)(p,2),x=f[0],h=f[1];return(0,a.useEffect)((function(){var e,n=!1;return e=new FileReader,i&&(e.onload=function(e){var t=e.target.result;!t&&n||h(t)},e.readAsDataURL(i)),function(){n=!0,e&&1===e.readyState&&e.abort()}}),[i]),(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("div",{className:I,children:[(0,_.jsx)("input",{className:"visually-hidden",name:n,type:"file",id:t,accept:".png, .jpg, .jpeg, .webp",disabled:i||m,multiple:d,onChange:l}),(0,_.jsxs)("label",{htmlFor:t,className:B,children:[!i&&(0,_.jsx)("span",{className:y,children:(0,_.jsx)(r.Z,{iconId:"plus",size:"30px"})}),(0,_.jsx)(j,{modalContent:(0,_.jsx)("img",{src:x,alt:null===i||void 0===i?void 0:i.name}),children:x&&(0,_.jsx)("img",{className:b,src:x,alt:null===i||void 0===i?void 0:i.name})})]})]})})},C=t(5782),P=t(5206),T="FormProductImgs_formContainer__qIuSg",F="FormProductImgs_form__XjORT",Z="FormProductImgs_formTitle__rIB6d",S="FormProductImgs_inputs__YGFT-",k="FormProductImgs_buttons__zsBTE",w=/image\/(png|jpg|jpeg|webp)/i,D=function(e){var n=e.formTitle,t=void 0===n?"Form title":n,l=[],o=(0,a.useState)(l),r=(0,s.Z)(o,2),c=r[0],d=r[1],u=(0,a.useState)(l),m=(0,s.Z)(u,2),p=m[0],f=m[1],x=(0,a.useState)(5),h=(0,s.Z)(x,2),v=h[0],g=h[1];function j(e){var n=e.target.files;if(n.length>v)P.Am.error("\u0412\u0438 \u043e\u0431\u0440\u0430\u043b\u0438 \u0431\u0456\u043b\u044c\u0448\u0435 ".concat(v," \u0444\u0430\u0439\u043b\u0456\u0432"));else{var t=(0,i.Z)(n).filter((function(e){return e.type.match(w)?e.size>5242880?(P.Am.error('File size of "'.concat(e.name,'" is more than alowed, "').concat(e.size,'"')),null):(P.Am.success('File "'.concat(e.name,' is accepted"')),e):(P.Am.error("Image mime type is not valid"),null)}));f([].concat((0,i.Z)(p),(0,i.Z)(t))),console.log(v);var l=v-c.length;g(l)}}function I(e,n){console.log(e,"for edit file")}function y(e,n){console.log(e,"for delete file")}return(0,a.useEffect)((function(){if(p.length>0){var e=p.filter((function(e){return e}));console.log(e),d((0,i.Z)(e))}}),[p,p.length]),(0,_.jsx)("div",{className:T,children:(0,_.jsxs)("form",{className:F,onSubmit:function(e){e.preventDefault(),console.log(c,"submit data")},onReset:function(e){d(l)},children:[(0,_.jsx)("div",{className:Z,children:(0,_.jsx)("span",{children:t})}),(0,_.jsxs)("div",{className:S,children:[c.length>0&&c.map((function(e,n){return(0,_.jsx)(N,{name:e.name,idx:n,id:e.name,selectedFile:e,onChange:j,onDelete:y,onEdit:I,multiple:!0},n)})),c.length<=4&&(0,_.jsx)(N,{name:"img",id:"img1",onChange:j,multiple:!0})]}),(0,_.jsxs)("div",{className:k,children:[(0,_.jsx)(C.Z,{styleType:"AcceptBtn",type:"submit",children:"\u041f\u0440\u0438\u0439\u043d\u044f\u0442\u0438"}),(0,_.jsx)(C.Z,{styleType:"ResetBtn",type:"reset",children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u0438"}),(0,_.jsx)(C.Z,{styleType:"DeclineBtn",children:"\u0412\u0456\u0434\u0445\u0438\u043b\u0438\u0442\u0438"})]})]})})},E=function(){return(0,_.jsx)("div",{children:"FormProductStock"})},R=t(7401),A="PageProducts_pageFlex__q407T",z="PageProducts_sectionTopFlex__m3okd",L="PageProducts_sectionBottomFlex__3rqsX",q="PageProducts_sectionInnerLeft__FWfKz",M="PageProducts_sectionInnerRight__-jX0i",X=function(){return(0,_.jsx)(R.T,{children:(0,_.jsxs)("div",{className:A,children:[(0,_.jsx)("section",{className:z,children:(0,_.jsx)(l.Z,{blockFilter:!0,title:"\u0421\u043f\u0438\u0441\u043e\u043a \u0442\u043e\u0432\u0430\u0440\u0456\u0432",iconId:"list",actions:"withFilter",filter:!0})}),(0,_.jsxs)("section",{className:L,children:[(0,_.jsx)("div",{className:q,children:(0,_.jsxs)(l.Z,{title:"\u0414\u0435\u0442\u0430\u043b\u0456",iconId:"info",actions:"primary",children:[(0,_.jsx)(o.Z,{formTitle:"Form Product Info"}),(0,_.jsx)(D,{})]})}),(0,_.jsx)("div",{className:M,children:(0,_.jsx)(l.Z,{title:"\u0421\u043a\u043b\u0430\u0434",iconId:"storage",actions:"primary",children:(0,_.jsx)(E,{})})})]})]})})}}}]);
//# sourceMappingURL=636.478cdfe3.chunk.js.map