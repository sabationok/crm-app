"use strict";(self.webpackChunkcrm_app=self.webpackChunkcrm_app||[]).push([[984],{7667:function(e,n,t){t.d(n,{oC:function(){return kn},Xb:function(){return Fn},xP:function(){return Tn},DW:function(){return On},Au:function(){return hn},P_:function(){return Nn},zy:function(){return Zn},mR:function(){return bn},_2:function(){return Sn},Ox:function(){return xn},Kt:function(){return yn},F9:function(){return pn},KG:function(){return gn},v1:function(){return k},Gl:function(){return s},Hz:function(){return wn},LU:function(){return Cn},ff:function(){return fn},QI:function(){return jn},IQ:function(){return _n},zm:function(){return vn},zE:function(){return In},wr:function(){return Bn}});var i=t(2791),a=t(4213),o=t(9434),r=t(6351),l={gridFirst:"BlockProductsList_gridFirst__6qOFH",gridSecond:"BlockProductsList_gridSecond__D1d7N"},c=t(184),s=function(){var e=(0,o.v9)(r.H8).pageGrid,n=void 0===e?"gridFirst":e;return(0,c.jsx)(a.Z,{title:"\u0421\u043f\u0438\u0441\u043e\u043a \u0442\u043e\u0432\u0430\u0440\u0456\u0432",iconId:"list",actions:"withFilter",filter:!0,className:l[n]})},d=t(1413),u=t(5987),m=t(3579),g=t(8586),h="FormPrimary_formContainer__riZjX",p="FormPrimary_form__Wceed",x="FormPrimary_notActiveForm__CyDb9",y="FormPrimary_formTitle__c4iOn",v="FormPrimary_inputs__J0qx4",_="FormPrimary_buttons__BjbgB",j="FormPrimary_btnName__KExEs",f=["children","onSubmit","onCancel","onReset","formTitle","id"],C=(0,i.createContext)(),I=function(){return(0,i.useContext)(C)},b=function(e){var n=e.children,t=e.onSubmit,i=e.onCancel,a=e.onReset,o=e.formTitle,r=void 0===o?"Form title":o,l=e.id,s=(0,u.Z)(e,f),I=(0,m.rL)().isFormDisabled;return(0,c.jsx)(C.Provider,{value:(0,d.Z)((0,d.Z)({},s),{},{formTitle:r}),children:(0,c.jsx)("div",{className:h,children:(0,c.jsx)("form",{onSubmit:t,onReset:a,id:l,children:(0,c.jsxs)("fieldset",{disabled:I,className:I?x:p,children:[(0,c.jsx)("legend",{className:y,children:(0,c.jsx)("span",{children:r})}),null!==n&&void 0!==n?n:(0,c.jsx)("div",{className:v}),(0,c.jsx)("span",{children:"\u0414\u0430\u043b\u0456 \u0431\u0443\u0434\u0435 ..."}),(0,c.jsxs)("div",{className:_,children:[(0,c.jsx)(g.Z,{iconId:"doneAll",styleType:"AcceptBtn",type:"submit",styles:{width:"fit-content",minHeight:"fit-content"},iconSize:"26px",disabled:I,children:(0,c.jsx)("span",{className:j,children:"\u041f\u0440\u0438\u0439\u043d\u044f\u0442\u0438"})}),a&&(0,c.jsx)(g.Z,{iconId:"clear",styleType:"ResetBtn",type:"reset",styles:{width:"fit-content",minHeight:"fit-content"},iconSize:"26px",disabled:I,children:(0,c.jsx)("span",{className:j,children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u0438"})}),i&&(0,c.jsx)(g.Z,{iconId:"removeDone",styleType:"DeclineBtn",styles:{width:"fit-content",minHeight:"fit-content"},iconSize:"26px",disabled:I,onClick:i,children:(0,c.jsx)("span",{className:j,children:"\u0412\u0456\u0434\u0445\u0438\u043b\u0438\u0442\u0438"})})]})]})})})})},Z=function(){return(0,c.jsx)(b,{formTitle:"\u0423\u043f\u0440\u0430\u0432\u043b\u0456\u043d\u043d\u044f \u0441\u043a\u043b\u0430\u0434\u0441\u044c\u043a\u0438\u043c\u0438 \u0437\u0430\u043b\u0438\u0448\u043a\u0430\u043c\u0438"})},N={gridFirst:"BlockProductStock_gridFirst__ipkaU",gridSecond:"BlockProductStock_gridSecond__DifXC"},k=function(){var e=(0,o.v9)(r.H8).pageGrid,n=void 0===e?"gridFirst":e;return(0,c.jsx)(a.Z,{title:"\u0421\u043a\u043b\u0430\u0434",iconId:"storage",actions:"primary",className:N[n],children:(0,c.jsx)(Z,{})})},S=function(e){var n,t,i,a,o,r,l=e.dateString;if(l){var s=new Date(l);n=s.getFullYear().toString().padStart(2,0),t=(s.getMonth()+1).toString().padStart(2,0),i=s.getDate().toString().padStart(2,0),a=s.getHours().toString().padStart(2,0),o=s.getMinutes().toString().padStart(2,0),r=s.getSeconds().toString().padStart(2,0)}return(0,c.jsx)(c.Fragment,{children:l?"".concat(n,".").concat(t,".").concat(i," (").concat(a,":").concat(o,":").concat(r,")"):"0000.00.00 (00:00:00)"})},B="RowSimple_row__qTdOB",F="RowSimple_col__dykTa",T=function(e){var n=e.title,t=e.data;return(0,c.jsxs)("div",{className:B,children:[(0,c.jsx)("div",{className:F,title:n,children:n}),(0,c.jsx)("div",{className:F,children:t})]})},w="TopInfo_topInfo__Bxjv3",O=function(){var e=(0,o.v9)(r.Jq).posts[0],n=e.isVisible,t=e.isApproved,i=e.createdAt,a=e.changedAt,l=e.name,s=e.sku,d=e.brand,u=e.authorName,m=e.authorId,g=e.authorType,h=e.changedByAuthorId,p=e.changedByAuthorName,x=e.changedByAuthorType,y=e.sectionId,v=e.section,_=e.parentCategoryId,j=e.parentCategory,f=e.categoryId,C=e.category;return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{className:w,children:[(0,c.jsx)(T,{title:"\u0421\u0442\u0432\u043e\u0440\u0435\u043d\u043e",data:(0,c.jsx)(S,{dateString:i})}),(0,c.jsx)(T,{title:"\u0410\u0432\u0442\u043e\u0440 (ID, \u0442\u0438\u043f)",data:"".concat(u||"author"," (").concat(m||"0000",", ").concat(g||"vendor",")")}),(0,c.jsx)(T,{title:"\u0412\u0438\u0434\u0438\u043c\u0456\u0441\u0442\u044c \u0434\u043b\u044f \u043f\u043e\u043a\u0443\u043f\u0446\u0456\u0432",data:n?"\u0422\u0430\u043a":"\u041d\u0456"}),(0,c.jsx)(T,{title:"\u041f\u0440\u0438\u0439\u043d\u044f\u0442\u043e \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u043e\u043c",data:t?"\u0422\u0430\u043a":"\u041d\u0456"}),(0,c.jsx)(T,{title:"SKU",data:s}),(0,c.jsx)(T,{title:"\u041d\u0430\u0437\u0432\u0430",data:l}),(0,c.jsx)(T,{title:"\u0411\u0440\u0435\u043d\u0434",data:d}),(0,c.jsx)(T,{title:"\u0417\u043c\u0456\u043d\u0435\u043d\u043e",data:(0,c.jsx)(S,{dateString:a})}),(0,c.jsx)(T,{title:"\u0410\u0432\u0442\u043e\u0440 (ID, \u0442\u0438\u043f)",data:"".concat(p||"author"," (").concat(h||"0000",", ").concat(x||"vendor",")")}),(0,c.jsx)(T,{title:"\u0421\u0435\u043a\u0446\u0456\u044f (ID)",data:"".concat(v," (").concat(y,")")}),(0,c.jsx)(T,{title:"\u0411\u0430\u0442\u044c\u043a\u0456\u0432\u0441\u044c\u043a\u0430 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044f (ID)",data:"".concat(j," (").concat(_,")")}),(0,c.jsx)(T,{title:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044f (ID)",data:"".concat(C," (").concat(f,")")})]})})},A={},D=function(e){var n=e.children;return(0,c.jsx)("div",{className:A.tableGrid,children:n})},P={},R=function(e){var n=e.children;return(0,c.jsx)("div",{className:P.tableGrid,children:n})},L=t(5297),z=t(9612),H=(0,i.createContext)(),M=function(e){return(0,c.jsx)(H.Provider,{value:(0,d.Z)({},e),children:e.children})},E=t(9107),W={block:"BlockSimple_block__0nTRz",blockDark:"BlockSimple_blockDark__u6tJM",title:"BlockSimple_title__brEzZ",footer:"BlockSimple_footer__PJniu",header:"BlockSimple_header__QIkOp",overflow:"BlockSimple_overflow__YMUYj",content:"BlockSimple_content__TzxsC",inWork:"BlockSimple_inWork__Wkxr-"},J=function(e){var n=e.children,t=e.footerChildren,i=e.title,a=void 0===i?"Title":i,l=e.iconId,s=void 0===l?"info":l,u=e.footer,m=void 0===u||u,g=e.header,h=void 0===g||g,p=e.style,x=void 0===p?{}:p,y=e.headerStyles,v=void 0===y?{}:y,_=e.footerStyle,j=void 0===_?{}:_,f=e.className,C=void 0===f?"":f,I=e.footerClassName,b=void 0===I?"":I,Z=e.headerClassName,N=void 0===Z?"":Z,k=(0,o.v9)(r.hO).isDarkTheme,S=[k?W.blockDark:W.block,C].join(" "),B={isDarkTheme:k};return console.log("blockSimple '".concat(a,"'inicialize")),(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(M,(0,d.Z)((0,d.Z)((0,d.Z)((0,d.Z)({},e),{}),B),{},{children:(0,c.jsxs)("div",{className:S,style:x,children:[h&&(0,c.jsxs)("div",{className:[W.header,N].join(" "),style:v,children:[(0,c.jsx)(E.Z,{iconId:s,size:"24px"}),a&&(0,c.jsx)("span",{className:W.title,children:(0,c.jsx)("span",{title:a,children:a})})]}),(0,c.jsx)("div",{className:W.content,id:s,children:(0,c.jsxs)("div",{className:W.overflow,children:[n,!n&&(0,c.jsx)("div",{className:W.inWork,children:(0,c.jsx)("span",{children:"In work ..."})})]})}),m&&(0,c.jsx)("div",{style:j,className:[W.footer,b].join(" "),children:t})]})}))})},U=t(4942),Y=t(885),G=t(5985),K={changedByAuthorId:"",changedByAuthorName:"",changedByAuthorType:"",authorId:"",authorName:"",authorType:"",sku:"",name:"",brand:"",brandId:"",sectionId:"",section:"",parentCategoryId:"",parentCategory:"",categoryId:"",category:"",availability:"",order:!1,orderAwaitingTime:"",specialOrder:!1,specialOrderAwaitingTime:"",description:"",innerComment:"",aprovedStatus:!1,isVisible:!1,cost:0,isCommission:!1,commission:0,currency:"",price:0,sale:0,cashbackId:0,sizesTable:""},V=(String(new Date),String(new Date),t(6039)),X=t(610),q=["label","disabled","placeholder"],Q=function(e){var n=e.label,t=void 0===n?"input":n,i=e.disabled,a=void 0!==i&&i,o=e.placeholder,r=void 0===o?null:o,l=(0,u.Z)(e,q);return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(X.Z,(0,d.Z)((0,d.Z)({label:t,disabled:a,placeholder:r},l),{},{variant:"standard"}))})},$={Button:"ButtonText_Button__jyVlZ",disabled:"ButtonText_disabled__uCPQr",ColoredBtn:"ButtonText_ColoredBtn__X+88K",BorderBtn:"ButtonText_BorderBtn__yLIBf",AcceptBtn:"ButtonText_AcceptBtn__frYTd",DeclineBtn:"ButtonText_DeclineBtn__HRicl",ResetBtn:"ButtonText_ResetBtn__DxvfY"},ee=function(e){var n=e.children,t=e.type,i=void 0===t?"button":t,a=e.disabled,o=void 0!==a&&a,r=e.style,l=void 0===r?{}:r,s=e.className,d=void 0===s?"":s,u=e.onClick,m=void 0===u?null:u,g=e.styleType,h=void 0===g?"PrimaryBtn":g,p=[$.Button,$[h],d].join(" ");return(0,c.jsx)("button",{style:l,type:i,className:p,disabled:o,onClick:function(){m&&m()},children:(0,c.jsx)("span",{children:n})})},ne="PriceCommissionCounter_grid__OIV1c",te="PriceCommissionCounter_btnToCount__hsWiY",ie=[{label:"\u0426\u0456\u043d\u0430 \u043f\u0440\u043e\u0434\u0430\u0436\u0443",name:"price",type:"number",min:"1"},{label:"\u0417\u043d\u0438\u0436\u043a\u0430, %",name:"sale",type:"number",min:"1",max:"100",placeholder:"%"},{label:"\u0421\u043e\u0431\u0456\u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044c",name:"cost",type:"number",min:"1",disabled:!0},{label:"\u041a\u043e\u043c\u0456\u0441\u0456\u044f. %",name:"commission",type:"number",min:"1",max:"100",placeholder:"%"},{label:"\u0412\u0430\u043b\u044e\u0442\u0430",name:"currency"},{label:"\u041a\u0435\u0448\u0431\u0435\u043a ID",name:"cashbackId",type:"number",min:"0",max:"3",placeholder:"0-3"}],ae=[{label:"\u0426\u0456\u043d\u0430 \u043f\u0440\u043e\u0434\u0430\u0436\u0443",name:"price",type:"number",min:"1"},{label:"\u0417\u043d\u0438\u0436\u043a\u0430, %",name:"sale",type:"number",min:"1",max:"100",placeholder:"%"},{label:"\u0421\u043e\u0431\u0456\u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044c",name:"cost",type:"number",min:"1"},{label:"\u041a\u043e\u043c\u0456\u0441\u0456\u044f. %",name:"commission",disabled:!0,placeholder:"%"},{label:"\u0412\u0430\u043b\u044e\u0442\u0430",name:"currency"},{label:"\u041a\u0435\u0448\u0431\u0435\u043a ID",name:"cashbackId",type:"number",min:"0",max:"3",placeholder:"0-3"}],oe=function(){var e=I(),n=e.formData,t=e.isCommission,i=e.onChange;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:ne,children:[!t&&ie.map((function(e){return(0,c.jsx)(Q,(0,d.Z)({onChange:i,value:n[e.name]},e),e.name)})),t&&ae.map((function(e){return(0,c.jsx)(Q,(0,d.Z)({onChange:i,value:n[e.name]},e),e.name)}))]}),(0,c.jsx)(ee,{className:te,data:"cost",onClick:function(){},children:"\u0420\u043e\u0437\u0440\u0430\u0445\u0443\u0432\u0430\u0442\u0438"})]})},re={fieldset:"Fieldset_fieldset__Y5umc",input:"Fieldset_input__v+2cd",label:"Fieldset_label__s+HhT",legend:"Fieldset_legend__gF8ut",textarea:"Fieldset_textarea__9wvNU"},le=function(e){var n=e.legend,t=void 0===n?"":n,i=e.disabled,a=e.children,o=e.className,r=void 0===o?"":o;return(0,c.jsxs)("fieldset",{className:[re.fieldset,r].join(" "),disabled:i,children:[t&&(0,c.jsx)("legend",{className:re.legend,children:(0,c.jsx)("span",{className:re.legendInner,children:t})}),a]})},ce="PriceField_flex__xrnxV",se="PriceField_grid__M5N9g",de="PriceField_btnsGroup__0cubX",ue="PriceField_btn__qXgku",me="PriceField_activeBtn__TxSZQ",ge=function(){var e=I(),n=e.isCommission,t=e.onFormStateChange;return(0,c.jsx)(le,{legend:"\u0426\u0456\u043d\u0430 \u0456 \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044c",children:(0,c.jsxs)("div",{className:ce,children:[(0,c.jsxs)("div",{className:se,children:[(0,c.jsx)("span",{children:"\u0429\u043e \u0431\u0443\u0434\u0435\u043c\u043e \u0440\u0430\u0445\u0443\u0432\u0430\u0442\u0438?"}),(0,c.jsxs)("div",{className:de,children:[(0,c.jsx)(g.Z,{className:n?ue:me,iconId:n?"checkBoxOff":"checkBoxOn",type:"button",data:"cost",onClick:function(){t({isCommission:!1})},children:"\u0421\u043e\u0431\u0456\u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044c"}),(0,c.jsx)(g.Z,{className:n?me:ue,iconId:n?"checkBoxOn":"checkBoxOff",type:"button",data:"commission",onClick:function(){t({isCommission:!0})},children:"\u041a\u043e\u043c\u0456\u0441\u0456\u044f"})]})]}),(0,c.jsx)(oe,{})]})})},he={inputBox:"InputTextarea_inputBox__ikggp",input:"InputTextarea_input__DJ9Ft",label:"InputTextarea_label__dA1xg",legend:"InputTextarea_legend__nYIcZ",textarea:"InputTextarea_textarea__U2aoq"},pe=["label","onChange","disabled","placeholder","type"],xe=function(e){var n=e.label,t=void 0===n?"input":n,a=e.onChange,o=e.disabled,r=void 0!==o&&o,l=e.placeholder,s=void 0===l?null:l,m=(e.type,(0,u.Z)(e,pe)),g=(0,i.useState)(),h=(0,Y.Z)(g,2),p=h[0],x=h[1];return(0,c.jsxs)("fieldset",{className:he.inputBox,disabled:r,children:[t&&(0,c.jsx)("legend",{className:he.legend,children:(0,c.jsx)("span",{className:he.legendInner,children:t})}),(0,c.jsx)("textarea",(0,d.Z)({className:he.input,value:p,placeholder:null!==s&&void 0!==s?s:t,onChange:function(e){var n=e.value;x(n),a&&a(e)}},m))]})},ye=t(2982),ve=[{label:"SKU",name:"sku",action:"manual"},{label:"\u041d\u0430\u0437\u0432\u0430",name:"name",action:"manual"},{label:"\u0411\u0440\u0435\u043d\u0434",name:"brand",action:"manual"}],_e=function(){var e=I(),n=e.onChange,t=e.formData,a=(0,i.useState)((0,ye.Z)(ve)),o=(0,Y.Z)(a,1)[0];return(0,c.jsx)(c.Fragment,{children:o.map((function(e){return(0,c.jsx)(Q,(0,d.Z)((0,d.Z)({defaultValue:t[null===e||void 0===e?void 0:e.name]},e),{},{onChange:n}),e.name)}))})},je=t(5984),fe=[{label:"\u0420\u043e\u0437\u043c\u0456\u0440\u043d\u0430 \u0441\u0456\u0442\u043a\u0430",name:"sizesTable"}],Ce="OptionalInputs_button__sTfbP",Ie=function(){var e=(0,i.useState)((0,ye.Z)(fe)),n=(0,Y.Z)(e,2),t=n[0],a=n[1],o=I().onChange;return(0,c.jsxs)(c.Fragment,{children:[t.map((function(e){return(0,c.jsx)(Q,(0,d.Z)((0,d.Z)({},e),{},{onChange:o}),e.name)})),(0,c.jsx)("button",{className:Ce,onClick:function(){a([].concat((0,ye.Z)(t),[{label:"optional",name:(0,je.x0)(5),component:"text"}]))},type:"button",children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0456\u043d\u043f\u0443\u0442"})]})},be={name:"available",label:"\u0423 \u043d\u0430\u044f\u0432\u043d\u043e\u0441\u0442\u0456"},Ze={name:"notAvailable",label:"\u0412\u0456\u0434\u0441\u0443\u0442\u043d\u0456\u0439"},Ne={name:"awaitingOnStock",label:"\u041e\u0447\u0456\u043a\u0443\u0454\u0442\u044c\u0441\u044f \u043d\u0430\u0434\u0445\u043e\u0434\u0436\u0435\u043d\u043d\u044f"},ke={name:"order",label:"\u041f\u0456\u0434 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"},Se={name:"specialOrder",label:"\u0406\u043d\u0434\u0438\u0442\u0432\u0456\u0434\u0443\u0430\u043b\u044c\u043d\u0435 \u0432\u0438\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u043d\u044f"},Be="SelectAvailibility_label__EtZua",Fe="SelectAvailibility_gridWrapper__kzB3u",Te=function(){var e=I(),n=e.onChange,t=e.formData,i=e.onAvailabilityChange,a=e.onOrderTypeChange,o=be,r=Ze,l=Ne,s=ke,d=Se;return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(le,{legend:"\u041d\u0430\u044f\u0432\u043d\u0456\u0441\u0442\u044c \u0442\u043e\u0432\u0430\u0440\u0443",children:[(0,c.jsxs)("label",{htmlFor:r.name,className:Be,children:[(0,c.jsx)("input",{name:r.name,type:"checkbox",id:r.name,onChange:i,value:null===t||void 0===t?void 0:t.availability,checked:(null===t||void 0===t?void 0:t.availability)===r.name}),(0,c.jsx)("span",{children:r.label})]}),(0,c.jsxs)("label",{htmlFor:l.name,className:Be,children:[(0,c.jsx)("input",{name:l.name,type:"checkbox",id:l.name,value:null===t||void 0===t?void 0:t.availability,checked:(null===t||void 0===t?void 0:t.availability)===l.name,onChange:i}),(0,c.jsx)("span",{children:l.label})]}),(0,c.jsxs)("label",{htmlFor:o.name,className:Be,children:[(0,c.jsx)("input",{name:o.name,type:"checkbox",id:o.name,value:null===t||void 0===t?void 0:t.availability,onChange:i,checked:(null===t||void 0===t?void 0:t.availability)===o.name}),(0,c.jsx)("span",{children:o.label})]}),(0,c.jsxs)("div",{className:Fe,children:[(0,c.jsxs)("label",{htmlFor:s.name,className:Be,children:[(0,c.jsx)("input",{name:s.name,type:"checkbox",id:s.name,value:null===t||void 0===t?void 0:t.order,onChange:a}),(0,c.jsx)("span",{children:s.label})]}),(0,c.jsx)(Q,{label:"\u0422\u0435\u0440\u043c\u0456\u043d \u043e\u0447\u0456\u043a\u0443\u0432\u0430\u043d\u043d\u044f, \u0434\u043d\u0456",name:"orderAwaitingTime",defaultValue:null===t||void 0===t?void 0:t.orderAwaitingTime,type:"number",min:"1",max:"31",placeholder:"1-31",disabled:!(null!==t&&void 0!==t&&t.order),onChange:n})]}),(0,c.jsxs)("div",{className:Fe,children:[(0,c.jsxs)("label",{htmlFor:d.name,className:Be,children:[(0,c.jsx)("input",{name:d.name,type:"checkbox",id:d.name,value:null===t||void 0===t?void 0:t.specialOrder,onChange:a}),(0,c.jsx)("span",{children:d.label})]}),(0,c.jsx)(Q,{label:"\u0422\u0435\u0440\u043c\u0456\u043d \u043e\u0447\u0456\u043a\u0443\u0432\u0430\u043d\u043d\u044f, \u0434\u043d\u0456",name:"specialOrderAwaitingTime",defaultValue:null===t||void 0===t?void 0:t.specialOrderAwaitingTime,type:"number",min:"1",max:"31",placeholder:"1-31",disabled:!(null!==t&&void 0!==t&&t.specialOrder),onChange:n})]})]})})},we=function(e){var n=e.children,t=e.modalChildren,a=e.className,o=e.defaultBtn,r=void 0===o||o,l=(0,i.useState)(!1),s=(0,Y.Z)(l,2),d=s[0],u=s[1];function m(e){u(!d)}return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("button",{className:a,type:"button",onClick:m,children:n}),d&&(0,c.jsx)(V.ZP,{handleToggle:m,defaultBtn:r,children:t})]})},Oe=[{sectionId:"001",section:"\u0427\u043e\u043b\u043e\u0432\u0456\u043a\u0430\u043c",categories:[{sectionId:"001",section:"\u0427\u043e\u043b\u043e\u0432\u0456\u043a\u0430\u043c",parentCategoryId:"",parentCategory:"",categoryId:"001-001",category:"\u0412\u0437\u0443\u0442\u0442\u044f",categories:[{sectionId:"001",section:"\u0427\u043e\u043b\u043e\u0432\u0456\u043a\u0430\u043c",parentCategoryId:"001-001",parentCategory:"\u0412\u0437\u0443\u0442\u0442\u044f",categoryId:"001-001-001",category:"\u0412\u0437\u0443\u0442\u0442\u044f \u043a\u043b\u0430\u0441\u0438\u0447\u043d\u0435",categories:[{sectionId:"001",section:"\u0427\u043e\u043b\u043e\u0432\u0456\u043a\u0430\u043c",parentCategoryId:"001-001-001",parentCategory:"\u0412\u0437\u0443\u0442\u0442\u044f \u043a\u043b\u0430\u0441\u0438\u0447\u043d\u0435",categoryId:"001-001-001--001",category:"\u0414\u0435\u0440\u0431\u0456",categories:[]},{sectionId:"001",section:"\u0427\u043e\u043b\u043e\u0432\u0456\u043a\u0430\u043c",parentCategoryId:"001-001-001",parentCategory:"\u0412\u0437\u0443\u0442\u0442\u044f \u043a\u043b\u0430\u0441\u0438\u0447\u043d\u0435",categoryId:"001-001-001-002",category:"\u0411\u0440\u043e\u0433\u0438",categories:[]}]},{sectionId:"001",section:"\u0427\u043e\u043b\u043e\u0432\u0456\u043a\u0430\u043c",parentCategoryId:"001-001",parentCategory:"",categoryId:"001-001-002",category:"\u0412\u0437\u0443\u0442\u0442\u044f \u0441\u043f\u043e\u0440\u0442\u0438\u0432\u043d\u0435",categories:[]}]},{sectionId:"001",section:"\u0427\u043e\u043b\u043e\u0432\u0456\u043a\u0430\u043c",parentCategoryId:"",parentCategory:"",categoryId:"001-002",category:"\u0412\u0435\u0440\u0445\u043d\u0456\u0439 \u043e\u0434\u044f\u0433",categories:[]},{sectionId:"001",section:"\u0427\u043e\u043b\u043e\u0432\u0456\u043a\u0430\u043c",parentCategoryId:"",parentCategory:"",categoryId:"001-003",category:"",categories:[]},{sectionId:"001",section:"\u0427\u043e\u043b\u043e\u0432\u0456\u043a\u0430\u043c",parentCategoryId:"",parentCategory:"",categoryId:"001-004",category:"",categories:[]}]},{sectionId:"002",section:"\u0416\u0456\u043d\u043a\u0430\u043c",categories:[{sectionId:"002",section:"\u0416\u0456\u043d\u043a\u0430\u043c",parentCategoryId:"",parentCategory:"",categoryId:"",category:"",categories:[]},{sectionId:"002",section:"\u0416\u0456\u043d\u043a\u0430\u043c",parentCategoryId:"",parentCategory:"",categoryId:"",category:"",categories:[]},{sectionId:"002",section:"\u0416\u0456\u043d\u043a\u0430\u043c",parentCategoryId:"",parentCategory:"",categoryId:"",category:"",categories:[]},{sectionId:"002",section:"\u0416\u0456\u043d\u043a\u0430\u043c",parentCategoryId:"",parentCategory:"",categoryId:"",category:"",categories:[]}]},{sectionId:"003",section:"\u0414\u0456\u0442\u044f\u043c",categories:[{sectionId:"003",section:"\u0414\u0456\u0442\u044f\u043c",parentCategoryId:"",parentCategory:"",categoryId:"",category:"\u0412\u0435\u0440\u0445\u043d\u0456\u0439 \u043e\u0434\u044f\u0433",categories:[]},{sectionId:"003",section:"\u0414\u0456\u0442\u044f\u043c",parentCategoryId:"",parentCategory:"",categoryId:"",category:"\u0412\u0437\u0443\u0442\u0442\u044f",categories:[]},{sectionId:"003",section:"\u0414\u0456\u0442\u044f\u043c",parentCategoryId:"",categoryId:"",category:"\u041a\u043e\u0441\u0442\u044e\u043c\u0438",categories:[]},{sectionId:"003",section:"\u0414\u0456\u0442\u044f\u043c",parentCategory:"",categoryId:"",category:"\u0424\u0443\u0442\u0431\u043e\u043b\u043a\u0438, \u0441\u043e\u0440\u043e\u0447\u043a\u0438",categories:[]}]}],Ae={childrenContainer:"Category_childrenContainer__+CBKv",children:"Category_children__FSEBH",isShow:"Category_isShow__HCRkq",icon:"Category_icon__EAjFk",showBtn:"Category_showBtn__Bd2Hp",iconSvg:"Category_iconSvg__ONzgz",name:"Category_name__Clw3B",input:"Category_input__xwLll"},De=function(e){var n=e.item,t=(e.toggleParentCategory,e.name,(0,i.useState)(!1)),a=(0,Y.Z)(t,2),o=a[0],r=a[1],l=(0,i.useState)(!1),s=(0,Y.Z)(l,2),d=s[0],u=s[1],m=Ee(),h=m.handleSelectCategory,p=m.selectedCategory,x=(null===n||void 0===n?void 0:n.categories.length)>0,y=o&&x,v=[Ae.childrenContainer,o&&""].join(" "),_=[Ae.children,o&&Ae.isShow].join(" ");return(0,i.useEffect)((function(){void 0!==(null===p||void 0===p?void 0:p.categoryId)&&((null===p||void 0===p?void 0:p.categoryId)===(null===n||void 0===n?void 0:n.categoryId)||u(!1))}),[n.categoryId,p.categoryId]),(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{className:v,children:[(0,c.jsxs)("div",{className:_,children:[(0,c.jsxs)("label",{htmlFor:null===n||void 0===n?void 0:n.categoryId,className:Ae.input,children:[(0,c.jsx)("input",{className:"visually-hidden",type:"radio",id:null===n||void 0===n?void 0:n.categoryId,value:null===n||void 0===n?void 0:n.categoryId,onChange:function(e){u(!d);var t={category:null===n||void 0===n?void 0:n.category,categoryId:null===n||void 0===n?void 0:n.categoryId,parentCategory:null===n||void 0===n?void 0:n.parentCategory,parentCategoryId:null===n||void 0===n?void 0:n.parentCategoryId,section:null===n||void 0===n?void 0:n.section,sectionId:null===n||void 0===n?void 0:n.sectionId};h(t),console.log(p)},checked:d}),(0,c.jsx)(E.Z,{size:"24px",iconId:d?"checkBoxOn":"checkBoxOff"})]}),(0,c.jsx)("span",{className:Ae.name,children:n.category}),(0,c.jsx)("span",{className:Ae.id,children:n.categoryId}),(0,c.jsx)(g.Z,{iconId:"select-arrow",className:Ae.showBtn,iconClassName:Ae.icon,disabled:!x,onClick:function(){r(!o)}})]}),y&&(0,c.jsx)("div",{className:Ae.listContainer,children:(0,c.jsx)(Re,{categoriesList:null===n||void 0===n?void 0:n.categories,inputName:n.category})})]})})},Pe="CategoriesList_categotiesList__KNNkg",Re=function(e){var n=e.categoriesList,t=void 0===n?[]:n,i=e.inputName;return 0===t.lenght?(0,c.jsx)(c.Fragment,{}):(0,c.jsx)("fieldset",{className:Pe,children:t.map((function(e){return(0,c.jsx)(De,{item:e,name:i},e.categoryId)}))})},Le={sectionItemContainer:"SectionItem_sectionItemContainer__ONPBW",isOpen:"SectionItem_isOpen__Jog7P",icon:"SectionItem_icon__NWFuB",sectionItem:"SectionItem_sectionItem__O7hZT"},ze=function(e){e.categories;var n=e.item,t=(0,i.useState)(!1),a=(0,Y.Z)(t,2),o=a[0],r=a[1],l=Ee(),s=l.handleSelectCategory,d=l.selectedCategory;return(0,c.jsxs)("li",{className:[Le.sectionItemContainer,o&&Le.isOpen].join(" "),children:[(0,c.jsxs)("div",{className:Le.sectionItem,children:[(0,c.jsx)(E.Z,{iconId:d.sectionId===n.sectionId?"checkBoxOn":"checkBoxOff"}),(0,c.jsx)("span",{children:null===n||void 0===n?void 0:n.section}),(0,c.jsx)("span",{children:n.sectionId}),(0,c.jsx)(g.Z,{iconClassName:Le.icon,iconId:"select-arrow",onClick:function(){r(!o)}})]}),o&&(0,c.jsx)(Re,{categoriesList:n.categories,inputName:null===n||void 0===n?void 0:n.section,selectedCategory:d,handleSelectCategory:s})]},n.sectionId)},He={selectCategoryModal:"SectionsList_selectCategoryModal__dYaLf",header:"SectionsList_header__JnPPo",footer:"SectionsList_footer__W7OkK",sectionsList:"SectionsList_sectionsList__jiyzg",Dark:"SectionsList_Dark__WiUhZ",Light:"SectionsList_Light__HJgDW"},Me=(0,i.createContext)(),Ee=function(){return(0,i.useContext)(Me)},We=function(){var e=(0,o.v9)(r.hO).isDarkTheme,n=I().onFormStateChange,t=(0,V.dd)().handleToggleModal,l=(0,i.useState)({sectionId:"",section:"",parentCategoryId:"",parentCategory:"",categoryId:"",category:""}),s=(0,Y.Z)(l,2),d=s[0],u=s[1],m=(0,i.useState)(!0),g=(0,Y.Z)(m,2),h=g[0],p=g[1];return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(Me.Provider,{value:{handleSelectCategory:function(e){u(e),p(!1)},selectedCategory:d},children:(0,c.jsx)(a.Z,{title:"\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044e",headerClassName:He.header,className:He.selectCategoryModal,footerChildren:(0,c.jsxs)("div",{className:He.footer,children:[(0,c.jsx)("button",{type:"button",className:He.btn,onClick:function(e){n(d),t()},disabled:h,children:"\u041f\u0440\u0438\u0439\u043d\u044f\u0442\u0438"}),(0,c.jsx)("button",{type:"button",className:He.btn,onClick:function(e){t()},children:"\u0412\u0456\u0434\u0445\u0438\u043b\u0438\u0442\u0438"})]}),children:(0,c.jsx)("ul",{className:[He.sectionsList,e?He.Dark:He.Light].join(" "),children:Oe.map((function(e){return(0,c.jsx)(ze,{item:e},e.sectionId)}))})})})})},Je="SelectCategory_button__kNpMO",Ue=[{label:"\u0421\u0435\u043a\u0446\u0456\u044f",name:"section"},{label:"\u0411\u0430\u0442\u044c\u043a\u0456\u0432\u0441\u044c\u043a\u0430 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044f",name:"parentCategory"},{label:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044f",name:"category"}],Ye=function(){var e=I(),n=e.formData,t=e.onChange;return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(le,{legend:"\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044e",children:[Ue.map((function(e){return(0,c.jsx)(Q,(0,d.Z)((0,d.Z)({},e),{},{value:n[e.name],onChange:t,disabled:!0}),e.name)})),(0,c.jsx)(we,{modalChildren:(0,c.jsx)(We,{}),className:Je,children:"\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044e"})]})})},Ge=t(9358),Ke=function(e){var n=e.edit,t=void 0!==n&&n,a=e.create,l=void 0!==a&&a,s=e.copy,u=void 0!==s&&s,m=(0,o.v9)(r.tT).user,g=(0,V.dd)().handleToggleModal,h=(0,i.useState)(K),p=(0,Y.Z)(h,2),x=p[0],y=p[1],v=(0,o.I0)();function _(e){var n=e.target,t=n.name,i=n.value;y((0,d.Z)((0,d.Z)({},x),{},(0,U.Z)({},t,i)))}return(0,i.useEffect)((function(){if(!t)return l?(y(K),void console.log(l,"create form")):void(u&&console.log(u,"copy form"));console.log(t,"edit form")}),[l,t,u]),(0,c.jsxs)(b,(0,d.Z)((0,d.Z)({formTitle:"\u0414\u0435\u0442\u0430\u043b\u0456 \u0442\u043e\u0432\u0430\u0440\u0443",onSubmit:function(e){e.preventDefault();var n=(0,d.Z)((0,d.Z)({},x),{},{changedByAuthorId:m.id||"",changedByAuthorName:m.name||"",changedByAuthorType:m.type||"",authorId:m.id||"",authorName:m.name||"",authorType:m.type||""});console.log(n),v((0,Ge.IV)({submitData:n,onSuccess:function(){G.Am.success("\u0424\u043e\u0440\u043c\u0443 \u0432\u0456\u0434\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e")},onError:function(){G.Am.error("\u0424\u043e\u0440\u043c\u0443 \u043d\u0435 \u0432\u0456\u0434\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e")}})),y(K)},onReset:function(e){y(K),G.Am.info("\u0424\u043e\u0440\u043c\u0443 \u043e\u0447\u0438\u0449\u0435\u043d\u043e")},onFormStateChange:function(e){y((0,d.Z)((0,d.Z)({},x),e)),console.log(x)},onChange:_,onChangeCheckbox:function(e){var n=e.target,t=n.name,i=n.checked;y((0,d.Z)((0,d.Z)({},x),{},(0,U.Z)({},t,i)))},onAvailabilityChange:function(e){var n=e.target.name;y((0,d.Z)((0,d.Z)({},x),{},{availability:n}))},onOrderTypeChange:function(e){var n=e.target,t=n.name,i=n.checked;y((0,d.Z)((0,d.Z)({},x),{},(0,U.Z)({},t,i)))},onCancel:function(e){g()},formData:x},x),{},{id:"productForm",children:[(0,c.jsx)(_e,{}),(0,c.jsx)(Ye,{}),(0,c.jsx)(Te,{}),(0,c.jsx)(ge,{}),(0,c.jsx)(Ie,{}),(0,c.jsx)(xe,{label:"\u041e\u043f\u0438\u0441 \u0442\u043e\u0432\u0430\u0440\u0443",value:null===x||void 0===x?void 0:x.description,name:"description",onChange:_}),(0,c.jsx)(xe,{label:"\u0412\u043d\u0443\u0442\u0440\u0456\u0448\u043d\u0456\u0439 \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440",value:null===x||void 0===x?void 0:x.innerComment,name:"innerComment",onChange:_})]}))},Ve="InputImg_inputImg__TX5bB",Xe="InputImg_inputImgNotActive__XpmO1",qe="InputImg_inputLabel__J2Jg+",Qe="InputImg_labelInnerImg__228-Q",$e="InputImg_bigModalImgBox__YjkHB",en="InputImg_bigModalImg__ld-0+",nn=["id","onChange","selectedFile","disabled"],tn=function(e){var n=e.id,t=e.onChange,a=e.selectedFile,o=void 0===a?null:a,r=e.disabled,l=void 0!==r&&r,s=(0,u.Z)(e,nn),m=(0,i.useState)(),g=(0,Y.Z)(m,2),h=g[0],p=g[1];return(0,i.useEffect)((function(){var e,n=!1;return e=new FileReader,o&&(e.onload=function(e){var t=e.target.result;!t&&n||p(t)},e.readAsDataURL(o)),function(){n=!0,e&&1===e.readyState&&e.abort()}}),[o]),(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{className:l?Xe:Ve,children:[(0,c.jsx)("input",(0,d.Z)({className:"visually-hidden",type:"file",id:n,accept:".png, .jpg, .jpeg, .webp",disabled:l||o,onChange:function(e){t&&t(e)}},s)),(0,c.jsxs)("label",{htmlFor:n,className:qe,children:[!o&&(0,c.jsx)(E.Z,{iconId:"plus",size:"40px"}),h&&(0,c.jsx)(z.Z,{modalContent:(0,c.jsx)("div",{className:$e,children:(0,c.jsx)("img",{className:en,src:h,alt:null===o||void 0===o?void 0:o.name})}),children:(0,c.jsx)("img",{className:Qe,src:h,alt:null===o||void 0===o?void 0:o.name})})]})]})})},an=t(2960),on="FormProductImgs_inputs__gA-he",rn=/image\/(png|jpg|jpeg|webp)/i,ln=function(e){e.formTitle;var n=[],t=(0,an.d$)().appNotify,a=(0,i.useState)(n),o=(0,Y.Z)(a,2),r=o[0],l=o[1],s=(0,i.useState)(n),d=(0,Y.Z)(s,2),u=d[0],m=d[1],g=(0,i.useState)(5),h=(0,Y.Z)(g,2),p=h[0],x=h[1];function y(e){var n=e.target.files,t=(0,ye.Z)(n).filter((function(e){return e.type.match(rn)?e.size>5242880?(G.Am.error('\u0420\u043e\u0437\u043c\u0456\u0440 \u0444\u0430\u0439\u043b\u0443 "'.concat(e.name,'" \u0454 \u0431\u0456\u043b\u044c\u0448\u0438\u043c \u0434\u043e\u0437\u0432\u043e\u043b\u0435\u043d\u043e\u0433\u043e.')),null):(G.Am.success('\u0424\u0430\u0439\u043b "'.concat(e.name,'" \u043f\u0440\u0438\u0439\u043d\u044f\u0442\u043e.')),e):(G.Am.error('\u0422\u0438\u043f \u0444\u0430\u0439\u043b\u0443 "'.concat(e.name,'", \u043d\u0435 \u043f\u0456\u0434\u0442\u0440\u0438\u043c\u0443\u0454\u0442\u044c\u0441\u044f')),null)}));m([].concat((0,ye.Z)(u),(0,ye.Z)(t)));var i=p-r.length;x(i)}function v(e,n){console.log(e,"for edit file")}function _(e,n){console.log(e,"for delete file")}return(0,i.useEffect)((function(){if(u.length>0){var e=u.filter((function(e){return e}));console.log(e),l((0,ye.Z)(e))}}),[u,u.length]),(0,c.jsx)(b,{formTitle:"\u0424\u043e\u0442\u043e \u0442\u043e\u0432\u0430\u0440\u0443",onSubmit:function(e){e.preventDefault(),console.log(r,"submit data"),t.info("\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0444\u0430\u0439\u043b\u0456\u0432","\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u0438\u0445 \u0444\u0430\u0439\u043b\u0456\u0432: ".concat(r.length))},onReset:function(e){l(n)},children:(0,c.jsxs)("div",{className:on,children:[r.length>0&&r.map((function(e,n){return(0,c.jsx)(tn,{name:e.name,idx:n,id:e.name,selectedFile:e,onChange:y,onDelete:_,onEdit:v},n)})),r.length<=4&&(0,c.jsx)(tn,{name:"img",id:"img1",onChange:y,multiple:!0})]})})},cn=t(1747),sn="Actions_modalHeader__OxJUC",dn="Actions_modalBlock__opd-2",un=function(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(z.Z,{modalContent:(0,c.jsx)(J,{title:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043d\u043d\u044f \u0442\u043e\u0432\u0430\u0440\u0443",iconId:"info",className:dn,headerClassName:sn,children:(0,c.jsx)(Ke,{edit:!0})}),children:(0,c.jsx)(cn.Z,{iconId:"edit",title:"\u0417\u043c\u0456\u043d\u0438\u0442\u0438"})}),(0,c.jsx)(z.Z,{modalContent:(0,c.jsx)(J,{title:"\u041a\u0435\u0440\u0443\u0432\u0430\u0442\u0438 \u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f\u043c\u0438",iconId:"info",className:dn,headerClassName:sn,children:(0,c.jsx)(ln,{})}),children:(0,c.jsx)(cn.Z,{iconId:"gallery",title:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f"})}),(0,c.jsx)(z.Z,{modalContent:(0,c.jsx)(J,{title:"\u0421\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u0442\u043e\u0432\u0430\u0440\u0443",iconId:"info",className:dn,headerClassName:sn,children:(0,c.jsx)(Ke,{create:!0})}),children:(0,c.jsx)(cn.Z,{iconId:"plus",title:"\u0421\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u043d\u043e\u0432\u0438\u0439"})}),(0,c.jsx)(z.Z,{modalContent:(0,c.jsx)(J,{title:"\u0421\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u0442\u043e\u0432\u0430\u0440\u0443",iconId:"info",className:dn,headerClassName:sn,children:(0,c.jsx)(Ke,{create:!0})}),children:(0,c.jsx)(cn.Z,{iconId:"copy",title:"\u0421\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u043a\u043e\u043f\u0456\u044e"})}),(0,c.jsx)(cn.Z,{iconId:"delete",title:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438"})]})},mn={gridFirst:"BlockProductInfo_gridFirst__6m5t8",gridSecond:"BlockProductInfo_gridSecond__G2eMO"},gn=function(){var e=(0,o.v9)(r.H8).pageGrid,n=void 0===e?"gridFirst":e;return(0,c.jsxs)(a.Z,{title:"\u0414\u0435\u0442\u0430\u043b\u0456",iconId:"info",actions:"primary",className:mn[n],children:[(0,c.jsx)(L.Z,{id:"info",children:(0,c.jsx)(un,{})}),(0,c.jsx)(D,{children:(0,c.jsx)(O,{})}),(0,c.jsx)(R,{})]})},hn=function(){return(0,c.jsx)(a.Z,{title:"\u0427\u0430\u0442",iconId:"chat",actions:"primary",style:{gridColumn:"5/11",gridRow:"5/11"}})},pn=function(e){var n=Object.assign({},e);return(0,c.jsx)(a.Z,(0,d.Z)({title:"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u044c",iconId:"list",actions:"withFilter",filter:!0,style:{gridColumn:"1/11",gridRow:"1/5"}},n))},xn=function(e){var n=Object.assign({},e);return(0,c.jsx)(a.Z,(0,d.Z)((0,d.Z)({title:"\u0414\u0435\u0442\u0430\u043b\u0456",iconId:"assignment-ok",actions:"primary",style:{gridColumn:"1/5",gridRow:"5/11"}},n),{},{children:(0,c.jsx)(b,{formTitle:"\u0414\u0435\u0442\u0430\u043b\u0456 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"})}))},yn=function(e){var n=Object.assign({},e);return(0,c.jsx)(a.Z,(0,d.Z)((0,d.Z)({title:"\u0422\u0422\u041d",iconId:"ttn",actions:"primary",style:{gridColumn:"5/11",gridRow:"5/11"}},n),{},{children:(0,c.jsx)(b,{formTitle:"\u0422\u0422\u041d \u0434\u043e \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"})}))},vn=function(){return(0,c.jsx)(a.Z,{title:"\u041f\u043e\u0432\u0435\u0440\u043d\u0435\u043d\u043d\u044f",iconId:"list",actions:"withFilter",filter:!0,style:{gridColumn:"1/11",gridRow:"1/5"}})},_n=function(){return(0,c.jsx)(a.Z,{title:"\u0406\u043d\u0441\u043f\u0435\u043a\u0446\u0456\u044f",iconId:"inspect",actions:"primary",style:{gridColumn:"5/11",gridRow:"5/11"},children:(0,c.jsx)(b,{formTitle:"\u0406\u043d\u0441\u043f\u0435\u043a\u0446\u0456\u044f \u043f\u043e\u0432\u0435\u0440\u043d\u0435\u043d\u043d\u044f"})})},jn=function(){return(0,c.jsx)(a.Z,{title:"\u0414\u0435\u0442\u0430\u043b\u0456 \u043f\u043e\u0432\u0435\u0440\u043d\u0435\u043d\u043d\u044f",iconId:"return",actions:"primary",style:{gridColumn:"1/5",gridRow:"5/11"},children:(0,c.jsx)(b,{formTitle:"\u0414\u0435\u0442\u0430\u043b\u0456 \u043f\u043e\u0432\u0435\u0440\u043d\u0435\u043d\u043d\u044f"})})},fn=function(){return(0,c.jsx)(a.Z,{title:"\u0417\u0432\u0456\u0442\u0438",iconId:"list",actions:"withFilter",filter:!0,style:{gridColumn:"1/11",gridRow:"1/5"}})},Cn=function(){return(0,c.jsx)(a.Z,{title:"\u0417\u0432\u0456\u0442",iconId:"assignment-ok",actions:"primary",style:{gridColumn:"1/5",gridRow:"5/11"}})},In=function(){return(0,c.jsx)(a.Z,{title:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430",iconId:"statistics",actions:"primary",style:{gridColumn:"5/11",gridRow:"5/11"}})},bn=function(e){e.tableTitles;return(0,c.jsx)(a.Z,{title:"\u041a\u043e\u043d\u0442\u0440\u0430\u0433\u0435\u043d\u0442\u0438",iconId:"persons",actions:"withFilter",filter:!0,style:{gridColumn:"1/11",gridRow:"1/5"}})},Zn=function(){return(0,c.jsx)(a.Z,{title:"\u041a\u043e\u043d\u0442\u0440\u0430\u0433\u0435\u043d\u0442",iconId:"person",actions:"primary",style:{gridColumn:"1/5",gridRow:"5/11"}})},Nn=function(){return(0,c.jsx)(a.Z,{title:"\u0427\u0430\u0442",iconId:"chat",actions:"primary",style:{gridColumn:"5/11",gridRow:"5/11"}})},kn=function(e){var n=Object.assign({},e);return(0,c.jsx)(a.Z,(0,d.Z)({title:"\u0410\u0434\u043c\u0456\u043d",iconId:"admin",actions:"primary",style:{gridColumn:"1/6",gridRow:"1/5"}},n))},Sn=function(e){var n=Object.assign({},e);return(0,c.jsx)(a.Z,(0,d.Z)({title:"\u041c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0438",iconId:"admin",actions:"persons",style:{gridColumn:"6/11",gridRow:"1/5"}},n))},Bn=function(e){var n=Object.assign({},e);return(0,c.jsx)(a.Z,(0,d.Z)({title:"\u0412\u0435\u043d\u0434\u043e\u0440\u0438",iconId:"admin",actions:"persons",style:{gridColumn:"1/6",gridRow:"5/8"}},n))},Fn=function(e){var n=Object.assign({},e);return(0,c.jsx)(a.Z,(0,d.Z)({title:"\u041f\u0440\u0430\u0432\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0443",iconId:"admin",actions:"primary",style:{gridColumn:"6/11",gridRow:"5/8"}},n))},Tn=function(e){var n=Object.assign({},e);return(0,c.jsx)(a.Z,(0,d.Z)({title:"\u041d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f",iconId:"settings",actions:"primary",style:{gridColumn:"1/6",gridRow:"8/11"}},n))},wn=function(){return(0,c.jsx)(a.Z,{title:"\u041f\u0440\u043e\u0444\u0456\u043b\u044c",iconId:"person",actions:"primary",style:{gridColumn:"1/11",gridRow:"1/5"}})},On=function(){return(0,c.jsx)(a.Z,{title:"\u0411\u0440\u0435\u043d\u0434\u0438",iconId:"brand",actions:"primary",style:{gridColumn:"1/5",gridRow:"5/11"}})}}}]);
//# sourceMappingURL=984.a2e1c103.chunk.js.map