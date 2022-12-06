import React from 'react';

import ActionPrimary from './ActionPrimary';

const ActionPrint = ({ action }) => {
  function handlePrintAction(ref) {
    // const formEl = document.querySelector('#productForm').contentWindow;
    // console.log(formEl);
    // eslint-disable-next-line no-restricted-globals
    // const newWindow = open('', 'windowPrint');
    // newWindow.document.write(formEl);
    // console.log(newWindow.document.write(formEl))
    // window.open(formEl, '__blank', 'visible=none');
    // newWindow.document.writeln(formEl);
    // newWindow.print();
    // printElRef.focus()
  }

  return (
    <>
      <ActionPrimary {...action} onClick={handlePrintAction} />
    </>
  );
};

export default ActionPrint;
// HTMLElement.prototype.printMe = printMe;
// function printMe(query){
//   var myframe = document.createElement('IFRAME');
//   myframe.domain = document.domain;
//   myframe.style.position = "absolute";
//   myframe.style.top = "-10000px";
//   document.body.appendChild(myframe);
//   myframe.contentDocument.write(this.innerHTML) ;
//   setTimeout(function(){
//   myframe.focus();
//   myframe.contentWindow.print();
//   myframe.parentNode.removeChild(myframe) ;// remove frame
//   },3000); // wait for images to load inside iframe
//   window.focus();
//  }
// Usage:

// document.getElementById('xyz').printMe();
// document.getElementsByClassName('xyz')[0].printMe();

// @media print {
//   body *:not(.printable, .printable *) {
//     // hide everything but printable elements and their children
//     display: none;
//   }
// }
// JS:

// function printElement(e) {
//   let cloned = e.cloneNode(true);
//   document.body.appendChild(cloned);
//   cloned.classList.add("printable");
//   window.print();
//   document.body.removeChild(cloned);
// }
// let win = window.open('/absolute/image/path.jpg', '__blank', 'visible=none');
// win.addEventListener('afterprint', event => event.target.close() );
// win.print();
