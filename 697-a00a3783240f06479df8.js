(window.webpackJsonp=window.webpackJsonp||[]).push([[697],{2876:function(e,t,r){"use strict";function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,n=c(r(0)),o=c(r(904)),u=(i=r(942))&&i.__esModule?i:{default:i};function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function c(e){if(e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=i?Object.getOwnPropertyDescriptor(e,n):null;o&&(o.get||o.set)?Object.defineProperty(r,n,o):r[n]=e[n]}return r.default=e,t&&t.set(e,r),r}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],l=!0,i=!1,n=void 0;try{for(var o,u=e[Symbol.iterator]();!(l=(o=u.next()).done)&&(r.push(o.value),!t||r.length!==t);l=!0);}catch(e){i=!0,n=e}finally{try{l||null==u.return||u.return()}finally{if(i)throw n}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,l=new Array(t);r<t;r++)l[r]=e[r];return l}var d=function(){var e,t=y((0,n.useState)([]),2),r=t[0],l=t[1],i=function(e,t){e.preventDefault(),l(o.Utils.toggleArrayValue(r,t.key))};return n.default.createElement(o.default,{summaryId:"example-multi-select",summary:"This table shows an implementation of multiple row selection.","aria-multiselectable":!0,rowStyle:"toggle",numberOfColumns:4,cellPaddingStyle:"standard",dividerStyle:"both",headerData:{selectAllColumn:{checkLabel:"Multi Selection"},cells:[{key:"cell-0",id:"toggle-0",children:"Name"},{key:"cell-1",id:"toggle-1",children:"Address"},{key:"cell-2",id:"toggle-2",children:"Phone Number"},{key:"cell-3",id:"toggle-3",children:"Email Id"}]},bodyData:[{rows:(e=u.default,e.map((function(e){return{key:(t=e).key,cells:(l=t.cells,l.map((function(e){return function(e){return{key:e.key,children:e.title}}(e)}))),isDisabled:!o.Utils.canToggleArrayValue(3,r,t.key),toggleAction:{metaData:{key:t.key},onToggle:i,isToggled:r.indexOf(t.key)>=0,toggleLabel:t.toggleText}};var t,l})))}]})};t.default=d},942:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=[{key:"unique-0",toggleText:"Toggle Power Row 0",discloseText:"Power Row 0 - Details",primaryIndex:1,cells:[{key:"unique-0-0",title:"Dave Smith"},{key:"unique-0-1",title:"123 Adams Drive"},{key:"unique-0-2",title:"123-456-7890"},{key:"unique-0-3",title:"dave.smith@gmail.com"}]},{key:"unique-1",toggleText:"Toggle Power Row 1",discloseText:"Power Row 1 - Details",primaryIndex:1,cells:[{key:"unique-1-0",title:"Michael Smith"},{key:"unique-1-1",title:"345 Raymond Road"},{key:"unique-1-2",title:"111-222-3333"},{key:"unique-1-3",title:"michael.smith@gmail.com"}]},{key:"unique-2",toggleText:"Toggle Power Row 2",discloseText:"Power Row 2 - Details",primaryIndex:1,cells:[{key:"unique-2-0",title:"Jack Smith"},{key:"unique-2-1",title:"567 Drive Street"},{key:"unique-2-2",title:"222-333-4444"},{key:"unique-2-3",title:"jack.smith@gmail.com"}]},{key:"unique-3",toggleText:"Toggle Power Row 3",discloseText:"Power Row 3 - Details",primaryIndex:1,cells:[{key:"unique-3-0",title:"Tom Smith"},{key:"unique-3-1",title:"789 Bay Road"},{key:"unique-3-2",title:"555-666-7777"},{key:"unique-3-3",title:"tom.smith@gmail.com"}]},{key:"unique-4",toggleText:"Toggle Power Row 4",discloseText:"Power Row 4 - Details",primaryIndex:1,cells:[{key:"unique-4-0",title:"Paul Smith"},{key:"unique-4-1",title:"123 Adams Drive"},{key:"unique-4-2",title:"777-888-9999"},{key:"unique-4-3",title:"paul.smith@gmail.com"}]}];t.default=l}}]);
//# sourceMappingURL=697-a00a3783240f06479df8.js.map