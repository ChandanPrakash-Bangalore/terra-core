(window.webpackJsonp=window.webpackJsonp||[]).push([[310],{1027:function(e,l,r){e.exports={"clinical-lowlight-theme":"ProgressBar-module__clinical-lowlight-theme___qLQPu","orion-fusion-theme":"ProgressBar-module__orion-fusion-theme___2n2Bw","progress-bar":"ProgressBar-module__progress-bar___RnSdv","default-color":"ProgressBar-module__default-color___2k9lZ",tiny:"ProgressBar-module__tiny___2O6Dl",small:"ProgressBar-module__small___2452Z",medium:"ProgressBar-module__medium___3VPS8",large:"ProgressBar-module__large___1Dd94",huge:"ProgressBar-module__huge___3_Syb"}},1094:function(e,l,r){e.exports={"clinical-lowlight-theme":"colors-module__clinical-lowlight-theme___198mD","orion-fusion-theme":"colors-module__orion-fusion-theme___X_1Ca","color-bar-example-1":"colors-module__color-bar-example-1___33oPT","color-bar-example-2":"colors-module__color-bar-example-2___3mUZ9","color-bar-example-3":"colors-module__color-bar-example-3___2xZY3","two-colors-bar-2-colors-example-1":"colors-module__two-colors-bar-2-colors-example-1___2VQFl","two-colors-bar-2-colors-example-2":"colors-module__two-colors-bar-2-colors-example-2___DTjK3","two-colors-bar-2-colors-example-3":"colors-module__two-colors-bar-2-colors-example-3___3-C1U","customized-color-bar-example-1":"colors-module__customized-color-bar-example-1___2eaSv","customized-color-bar-example-2":"colors-module__customized-color-bar-example-2___T5N82"}},2798:function(e,l,r){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var o=s(r(0)),a=s(r(5)),t=s(r(979)),u=s(r(1094));function s(e){return e&&e.__esModule?e:{default:e}}var _=a.default.bind(u.default),n=function(){return o.default.createElement("div",null,o.default.createElement(t.default,{id:"progressbarWithNamedColor",valueText:"5%",value:5,max:10,colorClass:_(["color-bar-example-1"])}),o.default.createElement("br",null),o.default.createElement("br",null),o.default.createElement(t.default,{id:"progressbarWithHexColor",valueText:"7.5%",value:7.5,max:10,colorClass:_(["color-bar-example-2"])}),o.default.createElement("br",null),o.default.createElement("br",null),o.default.createElement(t.default,{id:"progressbarWithRGBColor",valueText:"10%",value:10,max:10,colorClass:_(["color-bar-example-3"])}))};l.default=n},979:function(e,l,r){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.ProgressBarHeightSize=l.default=void 0;var o=n(r(0)),a=n(r(3)),t=n(r(10)),u=n(r(5)),s=n(r(7)),_=n(r(1027));function n(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var l=1;l<arguments.length;l++){var r=arguments[l];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function m(e,l){if(null==e)return{};var r,o,a=function(e,l){if(null==e)return{};var r,o,a={},t=Object.keys(e);for(o=0;o<t.length;o++)r=t[o],l.indexOf(r)>=0||(a[r]=e[r]);return a}(e,l);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(o=0;o<t.length;o++)r=t[o],l.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=u.default.bind(_.default);l.ProgressBarHeightSize={TINY:"tiny",SMALL:"small",MEDIUM:"medium",LARGE:"large",HUGE:"huge"};var d={heightSize:a.default.oneOf(["tiny","small","medium","large","huge"]),value:a.default.number.isRequired,max:a.default.number,valueText:a.default.string,colorClass:a.default.string},f={heightSize:"small",max:100,valueText:void 0,colorClass:"default-color"},p=function(e){var l=e.heightSize,r=e.value,a=e.max,u=e.valueText,_=e.colorClass,n=m(e,["heightSize","value","max","valueText","colorClass"]),d=o.default.useContext(s.default),f=(0,t.default)(i("progress-bar",l,_,d.className),n.className),p=r/a*100;return o.default.createElement("progress",c({},n,{className:f,max:100,value:p,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":p,"aria-valuetext":u,tabIndex:"-1"}))};p.propTypes=d,p.defaultProps=f;var b=p;l.default=b}}]);
//# sourceMappingURL=310-4cf7b6389b60fbab2189.js.map