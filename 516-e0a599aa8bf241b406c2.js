(window.webpackJsonp=window.webpackJsonp||[]).push([[516],{2883:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(0)),o=u(n(959));function u(e){return e&&e.__esModule?e:{default:e}}var i=function(){return r.default.createElement(o.default,{id:"href",text:"Href Tag",href:"www.google.com"})};t.default=i},959:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n(0)),o=s(n(3)),u=s(n(10)),i=s(n(5)),c=s(n(7)),l=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==p(e)&&"function"!=typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var u=r?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(22)),a=s(n(973));function f(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function s(e){return e&&e.__esModule?e:{default:e}}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v(this,n)}}function v(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?O(e):t}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g=i.default.bind(a.default),w={href:o.default.string,icon:o.default.element,onClick:o.default.func,onBlur:o.default.func,onFocus:o.default.func,onKeyUp:o.default.func,text:o.default.string.isRequired},j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(c,e);var t,n,o,i=b(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e)).state={focused:!1},t.handleKeyUp=t.handleKeyUp.bind(O(t)),t.handleOnBlur=t.handleOnBlur.bind(O(t)),t}return t=c,(n=[{key:"handleOnBlur",value:function(e){this.setState({focused:!1}),this.props.onBlur&&this.props.onBlur(e)}},{key:"handleKeyUp",value:function(e){e.nativeEvent.keyCode===l.KEY_TAB&&this.setState({focused:!0}),this.props.onKeyUp&&this.props.onKeyUp(e)}},{key:"render",value:function(){var e=this.props,t=e.icon,n=e.text,o=e.href,i=e.onClick,c=(e.onBlur,e.onFocus),l=(e.onKeyUp,y(e,["icon","text","href","onClick","onBlur","onFocus","onKeyUp"])),a=this.context,f=(0,u.default)(g("tag",{"is-focused":this.state.focused},{"is-interactive":o||i},a.className),l.className),s=g("icon"),p=t?r.default.createElement("span",{className:s},t):null,h=o||i?o?"a":"button":"span";return r.default.createElement(h,d({},l,{className:f,onKeyUp:this.handleKeyUp,onBlur:this.handleOnBlur,onClick:i,onFocus:c,href:o}),p,n)}}])&&h(t.prototype,n),o&&h(t,o),c}(r.default.Component);j.propTypes=w,j.contextType=c.default;var P=j;t.default=P},973:function(e,t,n){e.exports={"clinical-lowlight-theme":"Tag-module__clinical-lowlight-theme___2bry9","orion-fusion-theme":"Tag-module__orion-fusion-theme___2T651",tag:"Tag-module__tag___2dKaH","is-interactive":"Tag-module__is-interactive___NGCCj","is-focused":"Tag-module__is-focused___mOKiO",icon:"Tag-module__icon___2MbIr"}}}]);
//# sourceMappingURL=516-e0a599aa8bf241b406c2.js.map