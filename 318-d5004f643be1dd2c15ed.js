(window.webpackJsonp=window.webpackJsonp||[]).push([[318],{2380:function(e,t,n){e.exports={"long-text-tag-wrapper":"LongTextTagTest-module__long-text-tag-wrapper___1O_yp"}},2885:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(n(0)),r=l(n(307)),u=l(n(5)),i=l(n(959)),a=l(n(2380));function l(e){return e&&e.__esModule?e:{default:e}}var c=u.default.bind(a.default),f=o.default.createElement(r.default,null),s=function(){return o.default.createElement("div",{className:c("long-text-tag-wrapper")}," ",o.default.createElement(i.default,{icon:f,text:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores ",id:"longTextIcon",onClick:function(){return window.alert("Tag has been clicked!")}})," ")};t.default=s},959:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n(0)),r=s(n(3)),u=s(n(10)),i=s(n(5)),a=s(n(7)),l=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==p(e)&&"function"!=typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var u=o?Object.getOwnPropertyDescriptor(e,r):null;u&&(u.get||u.set)?Object.defineProperty(n,r,u):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n(22)),c=s(n(973));function f(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function s(e){return e&&e.__esModule?e:{default:e}}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},u=Object.keys(e);for(o=0;o<u.length;o++)n=u[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(o=0;o<u.length;o++)n=u[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function _(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=g(e);if(t){var r=g(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?v(e):t}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var O=i.default.bind(c.default),w={href:r.default.string,icon:r.default.element,onClick:r.default.func,onBlur:r.default.func,onFocus:r.default.func,onKeyUp:r.default.func,text:r.default.string.isRequired},j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(a,e);var t,n,r,i=b(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e)).state={focused:!1},t.handleKeyUp=t.handleKeyUp.bind(v(t)),t.handleOnBlur=t.handleOnBlur.bind(v(t)),t}return t=a,(n=[{key:"handleOnBlur",value:function(e){this.setState({focused:!1}),this.props.onBlur&&this.props.onBlur(e)}},{key:"handleKeyUp",value:function(e){e.nativeEvent.keyCode===l.KEY_TAB&&this.setState({focused:!0}),this.props.onKeyUp&&this.props.onKeyUp(e)}},{key:"render",value:function(){var e=this.props,t=e.icon,n=e.text,r=e.href,i=e.onClick,a=(e.onBlur,e.onFocus),l=(e.onKeyUp,y(e,["icon","text","href","onClick","onBlur","onFocus","onKeyUp"])),c=this.context,f=(0,u.default)(O("tag",{"is-focused":this.state.focused},{"is-interactive":r||i},c.className),l.className),s=O("icon"),p=t?o.default.createElement("span",{className:s},t):null,_=r||i?r?"a":"button":"span";return o.default.createElement(_,d({},l,{className:f,onKeyUp:this.handleKeyUp,onBlur:this.handleOnBlur,onClick:i,onFocus:a,href:r}),p,n)}}])&&_(t.prototype,n),r&&_(t,r),a}(o.default.Component);j.propTypes=w,j.contextType=a.default;var x=j;t.default=x},973:function(e,t,n){e.exports={"clinical-lowlight-theme":"Tag-module__clinical-lowlight-theme___2bry9","orion-fusion-theme":"Tag-module__orion-fusion-theme___2T651",tag:"Tag-module__tag___2dKaH","is-interactive":"Tag-module__is-interactive___NGCCj","is-focused":"Tag-module__is-focused___mOKiO",icon:"Tag-module__icon___2MbIr"}}}]);
//# sourceMappingURL=318-d5004f643be1dd2c15ed.js.map