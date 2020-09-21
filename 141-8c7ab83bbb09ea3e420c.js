(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{1092:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(17));function a(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=function(e){var t=c({},e);return r.default.createElement(o.default,t,r.default.createElement("path",{d:"M23.5 1.5C22.6.7 21.9 0 21.9 0H0v21.9l1.5 1.5 23.8 23.8c.8.8 2.2.8 3.1 0l18.9-18.9c.8-.8.8-2.2 0-3.1L23.5 1.5zm-9.8 16.7c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"}))};u.displayName="IconTag",u.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",isBidi:!0};var l=u;t.default=l},1160:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(0),o=n.n(r),a=n(884),c=n.n(a),u=function(e){var t=e.url;return o.a.createElement(c.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-tag",name:"terra-tag",version:"2.40.0",url:t})}},2260:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),o=c(n(1092)),a=c(n(959));function c(e){return e&&e.__esModule?e:{default:e}}var u=function(){return r.default.createElement("div",null,r.default.createElement(a.default,{text:"Default OnClick Tag",onClick:function(){return window.alert("Tag has been clicked!")}}),r.default.createElement(a.default,{icon:r.default.createElement(o.default,null),onClick:function(){return window.alert("Tag has been clicked!")},text:"Icon & Text OnClick Tag"}))};t.default=u},2261:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),o=c(n(1092)),a=c(n(959));function c(e){return e&&e.__esModule?e:{default:e}}var u=function(){return r.default.createElement("div",null,r.default.createElement(a.default,{href:"http://google.com",text:"HREF Tag"}),r.default.createElement(a.default,{icon:r.default.createElement(o.default,null),href:"http://google.com",text:"Icon & Text HREF Tag"}))};t.default=u},2262:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),o=c(n(1092)),a=c(n(959));function c(e){return e&&e.__esModule?e:{default:e}}var u=function(){return r.default.createElement("div",null,r.default.createElement(a.default,{text:"No OnClick/HREF Tag"}),r.default.createElement(a.default,{icon:r.default.createElement(o.default,null),text:"Icon & Text - No OnClick/HREF Tag"}))};t.default=u},2971:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return B}));var r=n(0),o=n.n(r),a=n(289),c=n(1160),u=n(2260),l=n.n(u);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s={};function f(e){var t=e.components,n=p(e,["components"]);return Object(a.mdx)("wrapper",i({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",i({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport IconTag from 'terra-icon/lib/icon/IconTag';\nimport Tag from 'terra-tag';\n\nconst TagDefault = () => (\n  <div>\n    {/* eslint-disable no-alert */}\n    <Tag text=\"Default OnClick Tag\" onClick={() => window.alert('Tag has been clicked!')} />\n    <Tag icon={<IconTag />} onClick={() => window.alert('Tag has been clicked!')} text=\"Icon &amp; Text OnClick Tag\" />\n    {/* eslint-enable no-alert */}\n  </div>\n);\n\nexport default TagDefault;\n\n")))}f.isMDXComponent=!0;var d=n(883),m=n.n(d),b=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.a.createElement(m.a,{title:t||"Tag Default",description:n,example:o.a.createElement(l.a,null),exampleSrc:o.a.createElement(f,null),isExpanded:r})},g=n(2261),y=n.n(g);function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var v={};function h(e){var t=e.components,n=x(e,["components"]);return Object(a.mdx)("wrapper",O({},v,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",O({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport IconTag from \'terra-icon/lib/icon/IconTag\';\nimport Tag from \'terra-tag\';\n\nconst HrefTag = () => (\n  <div>\n    <Tag href="http://google.com" text="HREF Tag" />\n    <Tag icon={<IconTag />} href="http://google.com" text="Icon &amp; Text HREF Tag" />\n  </div>\n);\n\nexport default HrefTag;\n\n')))}h.isMDXComponent=!0;var j=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.a.createElement(m.a,{title:t||"Href Tag",description:n,example:o.a.createElement(y.a,null),exampleSrc:o.a.createElement(h,null),isExpanded:r})},T=n(2262),w=n.n(T);function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function E(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var M={};function C(e){var t=e.components,n=E(e,["components"]);return Object(a.mdx)("wrapper",_({},M,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",_({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport IconTag from 'terra-icon/lib/icon/IconTag';\nimport Tag from 'terra-tag';\n\nconst TagFallbacks = () => (\n  <div>\n    <Tag text=\"No OnClick/HREF Tag\" />\n    <Tag icon={<IconTag />} text=\"Icon &amp; Text - No OnClick/HREF Tag\" />\n  </div>\n);\n\nexport default TagFallbacks;\n\n")))}C.isMDXComponent=!0;var k=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.a.createElement(m.a,{title:t||"Tag Fallbacks",description:n,example:o.a.createElement(w.a,null),exampleSrc:o.a.createElement(C,null),isExpanded:r})},D=n(886),N=n.n(D);function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function X(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var S=function(){return Object(a.mdx)(N.a,{rows:[{name:"href",type:function(){var e={};function t(t){var n=t.components,r=X(t,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=X(t,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Sets the href. When set will render the component as an anchor tag."))}return t.isMDXComponent=!0,t({})}},{name:"icon",type:function(){var e={};function t(t){var n=t.components,r=X(t,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"element"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=X(t,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"An optional icon."))}return t.isMDXComponent=!0,t({})}},{name:"onClick",type:function(){var e={};function t(t){var n=t.components,r=X(t,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=X(t,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Callback function triggered when clicked."))}return t.isMDXComponent=!0,t({})}},{name:"onBlur",type:function(){var e={};function t(t){var n=t.components,r=X(t,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=X(t,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Callback function triggered when tag loses focus."))}return t.isMDXComponent=!0,t({})}},{name:"onFocus",type:function(){var e={};function t(t){var n=t.components,r=X(t,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=X(t,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Callback function triggered when tag gains focus."))}return t.isMDXComponent=!0,t({})}},{name:"onKeyUp",type:function(){var e={};function t(t){var n=t.components,r=X(t,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=X(t,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Callback function triggered when key is released."))}return t.isMDXComponent=!0,t({})}},{name:"text",type:function(){var e={};function t(t){var n=t.components,r=X(t,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=X(t,["components"]);return Object(a.mdx)("wrapper",P({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Sets the tag text."))}return t.isMDXComponent=!0,t({})}}]})};function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function L(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var R={};function B(e){var t=e.components,n=L(e,["components"]);return Object(a.mdx)("wrapper",I({},R,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)(c.a,{mdxType:"Badge"}),Object(a.mdx)("h1",{id:"terra-tag"},"Terra Tag"),Object(a.mdx)("p",null,"The tag component is used for tagging and provides users a way to trigger actions in the UI. Each tag should have text.\nIt can optionally display an icon along with the text."),Object(a.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Install with ",Object(a.mdx)("a",I({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(a.mdx)("ul",{parentName:"li"},Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"npm install terra-tag"))))),Object(a.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(a.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(a.mdx)("table",null,Object(a.mdx)("thead",{parentName:"table"},Object(a.mdx)("tr",{parentName:"thead"},Object(a.mdx)("th",I({parentName:"tr"},{align:null}),"Peer Dependency"),Object(a.mdx)("th",I({parentName:"tr"},{align:null}),"Version"))),Object(a.mdx)("tbody",{parentName:"table"},Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",I({parentName:"tr"},{align:null}),"react"),Object(a.mdx)("td",I({parentName:"tr"},{align:null}),"^16.8.5")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",I({parentName:"tr"},{align:null}),"react-dom"),Object(a.mdx)("td",I({parentName:"tr"},{align:null}),"^16.8.5")))),Object(a.mdx)("h2",{id:"usage"},"Usage"),Object(a.mdx)("pre",null,Object(a.mdx)("code",I({parentName:"pre"},{className:"language-jsx"}),"import Tag from 'terra-tag';\n")),Object(a.mdx)("h2",{id:"component-features"},"Component Features"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",I({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",I({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#responsive-support"}),"Responsive Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",I({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#mobile-support"}),"Mobile Support"))),Object(a.mdx)("h2",{id:"examples"},"Examples"),Object(a.mdx)(b,{title:"Default Tag with onClick",mdxType:"TagDefault"}),Object(a.mdx)(j,{title:"Tag with href",mdxType:"TagHref"}),Object(a.mdx)(k,{title:"Tag with no onClick or href",description:"These styles are provided for when this component is missing recommended elements for best practice use.",mdxType:"TagFallbacks"}),Object(a.mdx)("h2",{id:"tag-props"},"Tag Props"),Object(a.mdx)(S,{mdxType:"TagPropsTable"}))}B.isMDXComponent=!0},887:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(17));function a(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=function(e){var t=c({},e);return r.default.createElement(o.default,t,r.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};u.displayName="IconChevronLeft",u.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var l=u;t.default=l},959:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n(0)),o=s(n(3)),a=s(n(10)),c=s(n(5)),u=s(n(7)),l=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==f(e)&&"function"!=typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(22)),i=s(n(973));function p(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}function s(e){return e&&e.__esModule?e:{default:e}}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=v(e);if(t){var o=v(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return O(this,n)}}function O(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?x(e):t}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=c.default.bind(i.default),j={href:o.default.string,icon:o.default.element,onClick:o.default.func,onBlur:o.default.func,onFocus:o.default.func,onKeyUp:o.default.func,text:o.default.string.isRequired},T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(u,e);var t,n,o,c=y(u);function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=c.call(this,e)).state={focused:!1},t.handleKeyUp=t.handleKeyUp.bind(x(t)),t.handleOnBlur=t.handleOnBlur.bind(x(t)),t}return t=u,(n=[{key:"handleOnBlur",value:function(e){this.setState({focused:!1}),this.props.onBlur&&this.props.onBlur(e)}},{key:"handleKeyUp",value:function(e){e.nativeEvent.keyCode===l.KEY_TAB&&this.setState({focused:!0}),this.props.onKeyUp&&this.props.onKeyUp(e)}},{key:"render",value:function(){var e=this.props,t=e.icon,n=e.text,o=e.href,c=e.onClick,u=(e.onBlur,e.onFocus),l=(e.onKeyUp,m(e,["icon","text","href","onClick","onBlur","onFocus","onKeyUp"])),i=this.context,p=(0,a.default)(h("tag",{"is-focused":this.state.focused},{"is-interactive":o||c},i.className),l.className),s=h("icon"),f=t?r.default.createElement("span",{className:s},t):null,b=o||c?o?"a":"button":"span";return r.default.createElement(b,d({},l,{className:p,onKeyUp:this.handleKeyUp,onBlur:this.handleOnBlur,onClick:c,onFocus:u,href:o}),f,n)}}])&&b(t.prototype,n),o&&b(t,o),u}(r.default.Component);T.propTypes=j,T.contextType=u.default;var w=T;t.default=w},973:function(e,t,n){e.exports={"clinical-lowlight-theme":"Tag-module__clinical-lowlight-theme___2bry9","orion-fusion-theme":"Tag-module__orion-fusion-theme___2T651",tag:"Tag-module__tag___2dKaH","is-interactive":"Tag-module__is-interactive___NGCCj","is-focused":"Tag-module__is-focused___mOKiO",icon:"Tag-module__icon___2MbIr"}}}]);
//# sourceMappingURL=141-8c7ab83bbb09ea3e420c.js.map