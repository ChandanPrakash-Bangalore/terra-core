(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{1257:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=[{title:"Section 0",key:"unique-key-0",childItems:[{key:"unique-0-0",cells:[{key:"unique-0-0-0",title:"Mercedes"},{key:"unique-0-0-1",title:"Spoon"},{key:"unique-0-0-2",title:"Chips"}]},{key:"unique-0-1",cells:[{key:"unique-0-1-0",title:"Audi"},{key:"unique-0-1-1",title:"Forks"},{key:"unique-0-1-2",title:"Cake"}]},{key:"unique-0-2",cells:[{key:"unique-0-2-0",title:"Toyota"},{key:"unique-0-2-1",title:"Bowl"},{key:"unique-0-2-2",title:"Ice Cream"}]}]},{title:"Section 1",key:"unique-key-1",childItems:[{key:"unique-1-0",cells:[{key:"unique-1-0-0",title:"BMW"},{key:"unique-1-0-1",title:"Plate"},{key:"unique-1-0-2",title:"Pizza"}]},{key:"unique-1-1",cells:[{key:"unique-1-1-0",title:"Honda"},{key:"unique-1-1-1",title:"Knife"},{key:"unique-1-1-2",title:"Burger"}]},{key:"unique-1-2",cells:[{key:"unique-1-2-0",title:"Renault"},{key:"unique-1-2-1",title:"Pot"},{key:"unique-1-2-2",title:"Noodles"}]}]}];t.default=l},2254:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(n(0)),a=o(n(904)),r=o(n(942));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(){return l.default.createElement(a.default,{summaryId:"example-striped-table",summary:"This table shows an implementation of striped table.",numberOfColumns:4,cellPaddingStyle:"standard",dividerStyle:"horizontal",headerData:{cells:[{key:"cell-0",id:"toggle-0",children:"Name"},{key:"cell-1",id:"toggle-1",children:"Address"},{key:"cell-2",id:"toggle-2",children:"Phone Number"},{key:"cell-3",id:"toggle-3",children:"Email Id"}]},bodyData:[{rows:(e=r.default,e.map((function(e,t){return function(e,t){return{key:e.key,isStriped:t%2!=0,cells:(n=e.cells,n.map((function(e){return function(e){return{key:e.key,children:e.title}}(e)})))};var n}(e,t)})))}]});var e};t.default=i},2255:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(n(0)),a=o(n(904)),r=o(n(1257));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(){return l.default.createElement(a.default,{summaryId:"example-striped-section-table",summary:"This table shows an implementation of striped section table.",numberOfColumns:3,cellPaddingStyle:"standard",dividerStyle:"horizontal",headerData:{cells:[{key:"cell-0",id:"toggle-10",children:"Cars"},{key:"cell-1",id:"toggle-11",children:"Flatware"},{key:"cell-2",id:"toggle-12",children:"Food"}]},bodyData:(e=r.default,e.map((function(e){return{sectionHeader:{key:(t=e).key,id:"section-".concat(t.key),title:t.title},rows:t.childItems.map((function(e,t){return function(e,t){return{key:e.key,isStriped:t%2!=0,cells:(n=e.cells,n.map((function(e){return function(e){return{key:e.key,children:e.title}}(e)})))};var n}(e,t)}))};var t})))});var e};t.default=i},2994:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return S}));var l=n(0),a=n.n(l),r=n(289),o=n(2254),i=n.n(o);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d={};function s(e){var t=e.components,n=u(e,["components"]);return Object(r.mdx)("wrapper",c({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("pre",null,Object(r.mdx)("code",c({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Table from 'terra-table';\nimport mockData from './mock-data/mock-select';\n\nconst createCell = cell => ({ key: cell.key, children: cell.title });\n\nconst createCellsForRow = cells => cells.map(cell => createCell(cell));\n\nconst createRow = (rowData, index) => (\n  {\n    key: rowData.key,\n    isStriped: index % 2 !== 0,\n    cells: createCellsForRow(rowData.cells),\n  }\n);\n\nconst createRows = data => data.map((childItem, index) => createRow(childItem, index));\n\nconst StripedTable = () => (\n  <Table\n    summaryId=\"example-striped-table\"\n    summary=\"This table shows an implementation of striped table.\"\n    numberOfColumns={4}\n    cellPaddingStyle=\"standard\"\n    dividerStyle=\"horizontal\"\n    headerData={{\n      cells: [\n        { key: 'cell-0', id: 'toggle-0', children: 'Name' },\n        { key: 'cell-1', id: 'toggle-1', children: 'Address' },\n        { key: 'cell-2', id: 'toggle-2', children: 'Phone Number' },\n        { key: 'cell-3', id: 'toggle-3', children: 'Email Id' },\n      ],\n    }}\n    bodyData={[{\n      rows: createRows(mockData),\n    }]}\n  />\n);\n\nexport default StripedTable;\n\n")))}s.isMDXComponent=!0;var m=n(883),p=n.n(m),f=function(e){var t=e.title,n=e.description,l=e.isExpanded;return a.a.createElement(p.a,{title:t||"Striped Table",description:n,example:a.a.createElement(i.a,null),exampleSrc:a.a.createElement(s,null),isExpanded:l})},y=n(2255),b=n.n(y);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var k={};function x(e){var t=e.components,n=g(e,["components"]);return Object(r.mdx)("wrapper",h({},k,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("pre",null,Object(r.mdx)("code",h({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Table from 'terra-table';\nimport mockData from './mock-data/mock-section';\n\nconst createCell = cell => ({ key: cell.key, children: cell.title });\n\nconst createCellsForRow = cells => cells.map(cell => createCell(cell));\n\nconst createRow = (rowData, index) => (\n  {\n    key: rowData.key,\n    isStriped: index % 2 !== 0,\n    cells: createCellsForRow(rowData.cells),\n  }\n);\n\nconst createSection = sectionData => (\n  {\n    sectionHeader: {\n      key: sectionData.key,\n      id: `section-${sectionData.key}`,\n      title: sectionData.title,\n    },\n    rows: sectionData.childItems.map((childItem, index) => createRow(childItem, index)),\n  }\n);\n\nconst createSections = data => data.map(childItem => createSection(childItem));\n\nconst StripedTableSection = () => (\n  <Table\n    summaryId=\"example-striped-section-table\"\n    summary=\"This table shows an implementation of striped section table.\"\n    numberOfColumns={3}\n    cellPaddingStyle=\"standard\"\n    dividerStyle=\"horizontal\"\n    headerData={{\n      cells: [\n        { key: 'cell-0', id: 'toggle-10', children: 'Cars' },\n        { key: 'cell-1', id: 'toggle-11', children: 'Flatware' },\n        { key: 'cell-2', id: 'toggle-12', children: 'Food' },\n      ],\n    }}\n    bodyData={createSections(mockData)}\n  />\n);\n\nexport default StripedTableSection;\n\n")))}x.isMDXComponent=!0;var w=function(e){var t=e.title,n=e.description,l=e.isExpanded;return a.a.createElement(p.a,{title:t||"Striped Table Section",description:n,example:a.a.createElement(b.a,null),exampleSrc:a.a.createElement(x,null),isExpanded:l})};function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var O={};function S(e){var t=e.components,n=_(e,["components"]);return Object(r.mdx)("wrapper",v({},O,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("h1",{id:"terra-table---implementing-a-striped-table"},"Terra Table - Implementing a Striped Table"),Object(r.mdx)("p",null,"The following guide shows how to cleanly implement a striped Table. For the table implementation, the responsibility of striping is on the Row itself."),Object(r.mdx)("h2",{id:"standard-striped-function"},"Standard Striped Function"),Object(r.mdx)("p",null,"When striping the table rows the functionality is the same if you are yielding a flat list of items and a section's items.  When mapping your data to table rows capture the index of each row pass it to your createRow method."),Object(r.mdx)("pre",null,Object(r.mdx)("code",v({parentName:"pre"},{className:"language-diff"}),"+ const createRows = data => data.map((childItem, index) => createRow(childItem, index));\n")),Object(r.mdx)("p",null,"Next within our newly created method for row creation we want to set the striping pattern by the UX approved pattern, on odd array indexed items. This pattern is true for both a flat list and within each section. To accomplish this we check whether or not index modulus 2 yields a non zero value, this will give us the odd values rows."),Object(r.mdx)("pre",null,Object(r.mdx)("code",v({parentName:"pre"},{className:"language-diff"}),"+ const createRow = (rowData, index) => (\n+   {\n+     key: rowData.key,\n+     isStriped: index % 2 !== 0,\n+     cells: createCellsForRow(rowData.cells),\n+   }\n+ );\n")),Object(r.mdx)("p",null,"We can then implement our additional static methods to populate the cell data."),Object(r.mdx)("pre",null,Object(r.mdx)("code",v({parentName:"pre"},{className:"language-diff"}),"+ const createCell = cell => ({ key: cell.key, children: cell.title });\n\n+ const createCellsForRow = cells => cells.map(cell => createCell(cell));\n")),Object(r.mdx)("p",null,"And finally we call our create row creation method."),Object(r.mdx)("pre",null,Object(r.mdx)("code",v({parentName:"pre"},{className:"language-diff"}),"+ const StripedTable = () => (\n+   <Table\n+     summaryId=\"example-striped-table\"\n+     summary=\"This table shows an implementation of striped table.\"\n+     numberOfColumns={4}\n+     cellPaddingStyle=\"standard\"\n+     headerData={{\n+       cells: [\n+         { key: 'cell-0', id: 'toggle-0', children: 'Name' },\n+         { key: 'cell-1', id: 'toggle-1', children: 'Address' },\n+         { key: 'cell-2', id: 'toggle-2', children: 'Phone Number' },\n+         { key: 'cell-3', id: 'toggle-3', children: 'Email Id' },\n+       ],\n+     }}\n+     bodyData={[{\n+       rows: createRows(mockData),\n+     }]}\n+   />\n+ );\n")),Object(r.mdx)("p",null,"Using these steps we get the following examples:"),Object(r.mdx)(f,{mdxType:"StripedTable"}),Object(r.mdx)(w,{mdxType:"StripedTableSection"}))}S.isMDXComponent=!0},883:function(e,t,n){"use strict";function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=a?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n(0)),r=m(n(3)),o=m(n(5)),i=n(82),c=m(n(887)),u=m(n(193)),d=n(22),s=m(n(888));function m(e){return e&&e.__esModule?e:{default:e}}function p(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],l=!0,a=!1,r=void 0;try{for(var o,i=e[Symbol.iterator]();!(l=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);l=!0);}catch(e){a=!0,r=e}finally{try{l||null==i.return||i.return()}finally{if(a)throw r}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}var b=o.default.bind(s.default),h={example:r.default.element,exampleSrc:r.default.element,exampleCssSrc:r.default.element,title:r.default.string,description:r.default.node,isExpanded:r.default.bool},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},k=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},x=function(e){var t=e.example,n=e.exampleSrc,l=e.exampleCssSrc,r=e.title,o=e.description,s=e.isExpanded,m=f((0,a.useState)(s),2),p=m[0],y=m[1],h=f((0,a.useState)(!1),2),x=h[0],w=h[1],v=a.default.useContext(i.ThemeContext),_=void 0!==l,O=function(){w(!x),p&&y(!p)},S=function(){y(!p),x&&w(!x)},T=function(e,t){e.nativeEvent.keyCode!==d.KEY_SPACE&&e.nativeEvent.keyCode!==d.KEY_RETURN||(e.preventDefault(),t())};return a.default.createElement("div",{className:b("template",v.className)},a.default.createElement("div",{className:b("header")},r&&a.default.createElement("h2",{className:b("title")},r)),a.default.createElement("div",{className:b("content")},o&&a.default.createElement("div",{className:b("description")},o),t),a.default.createElement("div",{className:b("footer")},n?a.default.createElement("div",{className:b("button-container")},_&&a.default.createElement("button",{type:"button",className:b("css-toggle","item",{"is-selected":x}),onClick:O,onKeyDown:function(e){return T(e,O)},onBlur:g,onMouseDown:k,tabIndex:0,"data-focus-styles-enabled":!0},a.default.createElement(c.default,{className:b("chevron")}),a.default.createElement("span",null,"CSS"),a.default.createElement(u.default,{className:b("chevron")})),a.default.createElement("button",{type:"button",className:b("code-toggle","item",{"is-selected":p}),onClick:S,onKeyDown:function(e){return T(e,S)},onBlur:g,onMouseDown:k,tabIndex:0,"data-focus-styles-enabled":!0},a.default.createElement(c.default,{className:b("chevron")}),a.default.createElement("span",null,"Code"),a.default.createElement(u.default,{className:b("chevron")}))):null,a.default.createElement("div",null,x&&a.default.createElement("div",{className:b("css")},l),p&&a.default.createElement("div",{className:b("code")},n))))};x.propTypes=h,x.defaultProps={isExpanded:!1};var w=x;t.default=w},887:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(0)),a=r(n(17));function r(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}var i=function(e){var t=o({},e);return l.default.createElement(a.default,t,l.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var c=i;t.default=c},888:function(e,t,n){e.exports={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___e4g6e","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___MlAIc",template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",css:"ExampleTemplate-module__css___3yyDQ",code:"ExampleTemplate-module__code____AmLF","css-toggle":"ExampleTemplate-module__css-toggle___2I9Yn","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","is-selected":"ExampleTemplate-module__is-selected___1H6Un",item:"ExampleTemplate-module__item___1N1C-",chevron:"ExampleTemplate-module__chevron___3Xlby",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}},942:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=[{key:"unique-0",toggleText:"Toggle Power Row 0",discloseText:"Power Row 0 - Details",primaryIndex:1,cells:[{key:"unique-0-0",title:"Dave Smith"},{key:"unique-0-1",title:"123 Adams Drive"},{key:"unique-0-2",title:"123-456-7890"},{key:"unique-0-3",title:"dave.smith@gmail.com"}]},{key:"unique-1",toggleText:"Toggle Power Row 1",discloseText:"Power Row 1 - Details",primaryIndex:1,cells:[{key:"unique-1-0",title:"Michael Smith"},{key:"unique-1-1",title:"345 Raymond Road"},{key:"unique-1-2",title:"111-222-3333"},{key:"unique-1-3",title:"michael.smith@gmail.com"}]},{key:"unique-2",toggleText:"Toggle Power Row 2",discloseText:"Power Row 2 - Details",primaryIndex:1,cells:[{key:"unique-2-0",title:"Jack Smith"},{key:"unique-2-1",title:"567 Drive Street"},{key:"unique-2-2",title:"222-333-4444"},{key:"unique-2-3",title:"jack.smith@gmail.com"}]},{key:"unique-3",toggleText:"Toggle Power Row 3",discloseText:"Power Row 3 - Details",primaryIndex:1,cells:[{key:"unique-3-0",title:"Tom Smith"},{key:"unique-3-1",title:"789 Bay Road"},{key:"unique-3-2",title:"555-666-7777"},{key:"unique-3-3",title:"tom.smith@gmail.com"}]},{key:"unique-4",toggleText:"Toggle Power Row 4",discloseText:"Power Row 4 - Details",primaryIndex:1,cells:[{key:"unique-4-0",title:"Paul Smith"},{key:"unique-4-1",title:"123 Adams Drive"},{key:"unique-4-2",title:"777-888-9999"},{key:"unique-4-3",title:"paul.smith@gmail.com"}]}];t.default=l}}]);
//# sourceMappingURL=161-60ba82485ae00f8c4f13.js.map