(window.webpackJsonp=window.webpackJsonp||[]).push([[266],{2911:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n(0)),o=a(n(907));function a(t){return t&&t.__esModule?t:{default:t}}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=h(t);if(e){var o=h(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return c(this,n)}}function c(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?f(t):e}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(c,t);var e,n,a,r=l(c);function c(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),(e=r.call(this,t)).state={timesOpened:0},e.handleOnOpen=e.handleOnOpen.bind(f(e)),e}return e=c,(n=[{key:"handleOnOpen",value:function(){this.setState((function(t){return{timesOpened:t.timesOpened+1}}))}},{key:"render",value:function(){return i.default.createElement("div",null,i.default.createElement("div",{id:"on-open-event"},i.default.createElement("h3",null,"Times Opened: ".concat(this.state.timesOpened))),i.default.createElement(o.default,{id:"onOpenToggleButton",closedButtonText:"ToggleButton",onOpen:this.handleOnOpen},i.default.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))}}])&&s(e.prototype,n),a&&s(e,a),c}(i.default.Component);e.default=p},893:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=u(n(0)),o=u(n(3)),a=u(n(5)),r=u(n(894)),s=u(n(895));function u(t){return t&&t.__esModule?t:{default:t}}function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function c(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var f=a.default.bind(s.default),h={children:o.default.node.isRequired,isAnimated:o.default.bool,isOpen:o.default.bool},p=function(t){var e,n=t.isAnimated,o=t.isOpen,a=t.children,s=c(t,["isAnimated","isOpen","children"]),u=o?"auto":0;return e=n?i.default.createElement(r.default,{duration:250,height:u,easing:"ease-out"},a):o&&a,i.default.createElement("div",l({},s,{className:f("toggle",s.className),"aria-hidden":!o}),e)};p.propTypes=h,p.defaultProps={isAnimated:!1,isOpen:!1};var d=p;e.default=d},894:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=l(n(0)),s=l(n(3)),u=l(n(10));function l(t){return t&&t.__esModule?t:{default:t}}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"},h=["animateOpacity","animationStateClasses","applyInlineTransitions","children","contentClassName","delay","duration","easing","height","onAnimationEnd","onAnimationStart"];function p(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];if(!n.length)return t;for(var o={},a=Object.keys(t),r=0;r<a.length;r++){var s=a[r];-1===n.indexOf(s)&&(o[s]=t[s])}return o}function d(t){t.forEach((function(t){return cancelAnimationFrame(t)}))}function m(t){return!isNaN(parseFloat(t))&&isFinite(t)}function y(t){return"string"==typeof t&&t.search("%")===t.length-1&&m(t.substr(0,t.length-1))}function g(t,e){t&&"function"==typeof t&&t(e)}var b=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));n.animationFrameIDs=[];var i="auto",a="visible";m(t.height)?(i=t.height<0||"0"===t.height?0:t.height,a="hidden"):y(t.height)&&(i="0%"===t.height?0:t.height,a="hidden"),n.animationStateClasses=o({},f,t.animationStateClasses);var r=n.getStaticStateClasses(i);return n.state={animationStateClasses:r,height:i,overflow:a,shouldUseTransitions:!1},n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),a(e,[{key:"componentDidMount",value:function(){var t=this.state.height;this.contentElement&&this.contentElement.style&&this.hideContent(t)}},{key:"componentDidUpdate",value:function(t,e){var n,i,o=this,a=this.props,r=a.delay,s=a.duration,l=a.height,f=a.onAnimationEnd,h=a.onAnimationStart;if(this.contentElement&&l!==t.height){var p;this.showContent(e.height),this.contentElement.style.overflow="hidden";var b=this.contentElement.offsetHeight;this.contentElement.style.overflow="";var O=s+r,v=null,_={height:null,overflow:"hidden"},S="auto"===e.height;m(l)?(v=l<0||"0"===l?0:l,_.height=v):y(l)?(v="0%"===l?0:l,_.height=v):(v=b,_.height="auto",_.overflow=null),S&&(_.height=v,v=b);var w=(0,u.default)((c(p={},this.animationStateClasses.animating,!0),c(p,this.animationStateClasses.animatingUp,"auto"===t.height||l<t.height),c(p,this.animationStateClasses.animatingDown,"auto"===l||l>t.height),c(p,this.animationStateClasses.animatingToHeightZero,0===_.height),c(p,this.animationStateClasses.animatingToHeightAuto,"auto"===_.height),c(p,this.animationStateClasses.animatingToHeightSpecific,_.height>0),p)),T=this.getStaticStateClasses(_.height);this.setState({animationStateClasses:w,height:v,overflow:"hidden",shouldUseTransitions:!S}),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),S?(_.shouldUseTransitions=!0,d(this.animationFrameIDs),this.animationFrameIDs=(n=function(){o.setState(_),g(h,{newHeight:_.height})},(i=[])[0]=requestAnimationFrame((function(){i[1]=requestAnimationFrame((function(){n()}))})),i),this.animationClassesTimeoutID=setTimeout((function(){o.setState({animationStateClasses:T,shouldUseTransitions:!1}),o.hideContent(_.height),g(f,{newHeight:_.height})}),O)):(g(h,{newHeight:v}),this.timeoutID=setTimeout((function(){_.animationStateClasses=T,_.shouldUseTransitions=!1,o.setState(_),"auto"!==l&&o.hideContent(v),g(f,{newHeight:v})}),O))}}},{key:"componentWillUnmount",value:function(){d(this.animationFrameIDs),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),this.timeoutID=null,this.animationClassesTimeoutID=null,this.animationStateClasses=null}},{key:"showContent",value:function(t){0===t&&(this.contentElement.style.display="")}},{key:"hideContent",value:function(t){0===t&&(this.contentElement.style.display="none")}},{key:"getStaticStateClasses",value:function(t){var e;return(0,u.default)((c(e={},this.animationStateClasses.static,!0),c(e,this.animationStateClasses.staticHeightZero,0===t),c(e,this.animationStateClasses.staticHeightSpecific,t>0),c(e,this.animationStateClasses.staticHeightAuto,"auto"===t),e))}},{key:"render",value:function(){var t,e=this,n=this.props,i=n.animateOpacity,a=n.applyInlineTransitions,s=n.children,l=n.className,f=n.contentClassName,d=n.delay,m=n.duration,y=n.easing,g=n.id,b=n.style,O=this.state,v=O.height,_=O.overflow,S=O.animationStateClasses,w=O.shouldUseTransitions,T=o({},b,{height:v,overflow:_||b.overflow});w&&a&&(T.transition="height "+m+"ms "+y+" "+d+"ms",b.transition&&(T.transition=b.transition+", "+T.transition),T.WebkitTransition=T.transition);var C={};i&&(C.transition="opacity "+m+"ms "+y+" "+d+"ms",C.WebkitTransition=C.transition,0===v&&(C.opacity=0));var j=(0,u.default)((c(t={},S,!0),c(t,l,l),t)),E="undefined"!=typeof this.props["aria-hidden"]?this.props["aria-hidden"]:0===v;return r.default.createElement("div",o({},p.apply(void 0,[this.props].concat(h)),{"aria-hidden":E,className:j,id:g,style:T}),r.default.createElement("div",{className:f,style:C,ref:function(t){return e.contentElement=t}},s))}}]),e}(r.default.Component);b.propTypes={"aria-hidden":s.default.bool,animateOpacity:s.default.bool,animationStateClasses:s.default.object,applyInlineTransitions:s.default.bool,children:s.default.any.isRequired,className:s.default.string,contentClassName:s.default.string,delay:s.default.number,duration:s.default.number,easing:s.default.string,height:function(t,e,n){var o=t[e];return"number"==typeof o&&o>=0||y(o)||"auto"===o?null:new TypeError('value "'+o+'" of type "'+("undefined"==typeof o?"undefined":i(o))+'" is invalid type for '+e+" in "+n+'. It needs to be a positive number, string "auto" or percentage string (e.g. "15%").')},id:s.default.string,onAnimationEnd:s.default.func,onAnimationStart:s.default.func,style:s.default.object},b.defaultProps={animateOpacity:!1,animationStateClasses:f,applyInlineTransitions:!0,duration:250,delay:0,easing:"ease",style:{}},e.default=b},895:function(t,e,n){t.exports={toggle:"Toggle-module__toggle___3Y29L"}},907:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=c(n(0)),o=c(n(3)),a=c(n(5)),r=c(n(46)),s=c(n(193)),u=c(n(893)),l=c(n(917));function c(t){return t&&t.__esModule?t:{default:t}}function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(){return(h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function p(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function d(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=O(t);if(e){var o=O(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return g(this,n)}}function g(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?b(t):e}function b(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function O(t){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var v=a.default.bind(l.default),_={children:o.default.node.isRequired,closedButtonText:o.default.string.isRequired,buttonAttrs:o.default.object,icon:o.default.element,isAnimated:o.default.bool,isIconAnimated:o.default.bool,isIconOnly:o.default.bool,isInitiallyOpen:o.default.bool,onClose:o.default.func,onOpen:o.default.func,openedButtonText:o.default.string},S={isAnimated:!1,isIconAnimated:!1,isIconOnly:!1,isInitiallyOpen:!1,icon:i.default.createElement(s.default,null)},w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(s,t);var e,n,o,a=y(s);function s(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(e=a.call(this,t)).state={isOpen:t.isInitiallyOpen},e.handleOnClick=e.handleOnClick.bind(b(e)),e}return e=s,(n=[{key:"handleOnClick",value:function(t){t.preventDefault(),!this.state.isOpen&&this.props.onOpen?this.props.onOpen():this.state.isOpen&&this.props.onClose&&this.props.onClose(),this.setState((function(t){return{isOpen:!t.isOpen}}))}},{key:"render",value:function(){var t=this.props,e=t.buttonAttrs,n=(t.children,t.closedButtonText),o=t.icon,a=(t.isAnimated,t.isIconAnimated),s=t.isIconOnly,l=(t.isInitiallyOpen,t.onClose,t.onOpen,t.openedButtonText),c=p(t,["buttonAttrs","children","closedButtonText","icon","isAnimated","isIconAnimated","isIconOnly","isInitiallyOpen","onClose","onOpen","openedButtonText"]),f=l||n,d=this.state.isOpen?f:n,m=s?n:d,y=v(["button",{"is-open":this.state.isOpen},{"is-icon-animated":a},c.className]),g=i.default.createElement(r.default,h({},e,{isIconOnly:s,icon:i.default.createElement("span",{className:v("icon")},o),"aria-expanded":this.state.isOpen,text:m,onClick:this.handleOnClick}));return i.default.createElement("div",h({},c,{className:y}),g,i.default.createElement(u.default,{isOpen:this.state.isOpen,isAnimated:this.props.isAnimated},this.props.children))}}])&&d(e.prototype,n),o&&d(e,o),s}(i.default.Component);w.propTypes=_,w.defaultProps=S;var T=w;e.default=T},917:function(t,e,n){t.exports={"toggle-button":"ToggleButton-module__toggle-button___2y-zM",icon:"ToggleButton-module__icon___1dRrW","is-open":"ToggleButton-module__is-open___1WTt4","is-icon-animated":"ToggleButton-module__is-icon-animated___214rn","button-text":"ToggleButton-module__button-text___2GKkq"}}}]);
//# sourceMappingURL=266-9fb2866fc046744e6a5a.js.map