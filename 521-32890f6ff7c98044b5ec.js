(window.webpackJsonp=window.webpackJsonp||[]).push([[521],{2891:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(o(0)),i=l(o(906));function l(e){return e&&e.__esModule?e:{default:e}}var r=function(){return n.default.createElement("div",{id:"fontSize2"},n.default.createElement(i.default,{id:"textFontSize36",fontSize:36},"Font Size 36"),n.default.createElement("br",null),n.default.createElement(i.default,{id:"textFontSize46",fontSize:46},"Font Size 46"),n.default.createElement("br",null),n.default.createElement(i.default,{id:"textFontSize50",fontSize:50},"Font Size 50"),n.default.createElement("br",null),n.default.createElement(i.default,{id:"textFontSize56",fontSize:56},"Font Size 56"),n.default.createElement("br",null),n.default.createElement(i.default,{id:"textFontSize64",fontSize:64},"Font Size 64"))};t.default=r},906:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TextWeight=t.TextFontSize=t.default=void 0;var n=u(o(0)),i=u(o(3)),l=u(o(10)),r=u(o(5)),_=u(o(7)),f=u(o(913));function u(e){return e&&e.__esModule?e:{default:e}}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function d(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function c(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var z=r.default.bind(f.default);t.TextFontSize={10:10,12:12,14:14,16:16,18:18,20:20,24:24,32:32,36:36,46:46,50:50,56:56,64:64,72:72,92:92,100:100};t.TextWeight={200:200,300:300,400:400,700:700};var m={children:i.default.node.isRequired,isItalic:i.default.bool,isVisuallyHidden:i.default.bool,isWordWrapped:i.default.bool,fontSize:i.default.oneOf([10,12,14,16,18,20,24,32,36,46,50,56,64,72,92,100]),weight:i.default.oneOf([200,300,400,700]),colorClass:i.default.string},p=function(e){var t=e.children,o=e.isVisuallyHidden,i=e.isItalic,r=e.fontSize,f=e.weight,u=e.isWordWrapped,m=e.colorClass,p=c(e,["children","isVisuallyHidden","isItalic","fontSize","weight","isWordWrapped","colorClass"]),x=n.default.useContext(_.default),b=function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?d(Object(o),!0).forEach((function(t){s(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):d(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},p),h=(0,l.default)(z(["text",{"inherit-color":!m},{italic:i},{"word-wrap":u},{"visually-hidden":o},s({},"font-size-".concat(r),r),s({},"font-weight-".concat(f),f),m,x.className]),b.className);return n.default.createElement("span",a({},b,{className:h}),t)};p.propTypes=m,p.defaultProps={isItalic:!1,isVisuallyHidden:!1,isWordWrapped:!1};var x=p;t.default=x},913:function(e,t,o){e.exports={"clinical-lowlight-theme":"Text-module__clinical-lowlight-theme___1BVYZ","orion-fusion-theme":"Text-module__orion-fusion-theme___K_gx9",text:"Text-module__text___1XN3H","inherit-color":"Text-module__inherit-color___wLBZA",italic:"Text-module__italic___1LU77","word-wrap":"Text-module__word-wrap___26Ry3","font-size-100":"Text-module__font-size-100___ZJzFP","font-size-92":"Text-module__font-size-92___1qZR8","font-size-72":"Text-module__font-size-72___2ydxB","font-size-64":"Text-module__font-size-64___3oiCB","font-size-56":"Text-module__font-size-56___Tr9tG","font-size-50":"Text-module__font-size-50___2dFNP","font-size-46":"Text-module__font-size-46___2JriJ","font-size-36":"Text-module__font-size-36___1GU7I","font-size-32":"Text-module__font-size-32___2aM6d","font-size-24":"Text-module__font-size-24___2HgWq","font-size-20":"Text-module__font-size-20___WRnEH","font-size-18":"Text-module__font-size-18___2QuQW","font-size-16":"Text-module__font-size-16___3bUvR","font-size-14":"Text-module__font-size-14___1bAVG","font-size-12":"Text-module__font-size-12___2rFpl","font-size-10":"Text-module__font-size-10___2tVKI","font-weight-200":"Text-module__font-weight-200___3zjuy","font-weight-300":"Text-module__font-weight-300___3sjO1","font-weight-400":"Text-module__font-weight-400___3zaUV","font-weight-700":"Text-module__font-weight-700___24wsv","visually-hidden":"Text-module__visually-hidden___3MbXi","font-stack":"Text-module__font-stack___2T_7m"}}}]);
//# sourceMappingURL=521-32890f6ff7c98044b5ec.js.map