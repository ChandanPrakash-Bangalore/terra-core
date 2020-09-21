(window.webpackJsonp=window.webpackJsonp||[]).push([[460],{1145:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0),r=n.n(a),o=n(884),l=n.n(o),i=function(e){var t=e.url;return r.a.createElement(l.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-i18n",name:"terra-i18n",version:"4.32.0",url:t})}},2083:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r=(a=n(0))&&a.__esModule?a:{default:a},o=n(9),l=n(330);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=u(e);if(t){var r=u(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?m(e):t}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(d,e);var t,n,a,i=s(d);function d(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),(t=i.call(this,e)).state={areTranslationsLoaded:!1,locale:"en-US",messages:{}},t.handleLocaleChange=t.handleLocaleChange.bind(m(t)),t}return t=d,(n=[{key:"componentDidMount",value:function(){(0,l.i18nLoader)(this.state.locale,this.setState,this)}},{key:"handleLocaleChange",value:function(e){(0,l.i18nLoader)(e.target.value,this.setState,this)}},{key:"render",value:function(){return this.state.areTranslationsLoaded?r.default.createElement(l.I18nProvider,{locale:this.state.locale,messages:this.state.messages},r.default.createElement("div",null,r.default.createElement("span",null," Example Message Format: "),r.default.createElement(o.FormattedMessage,{id:"Terra.ajax.error"})),r.default.createElement("p",null,r.default.createElement("span",null," Example Number Format: "),r.default.createElement(o.FormattedNumber,{value:parseFloat("1123432.123")})),r.default.createElement("p",null,r.default.createElement("span",null,"Example Date Format: "),r.default.createElement(o.FormattedDate,{value:new Date(1575476163287)})),r.default.createElement("label",{htmlFor:"locale"}," ","Current locale:",this.state.locale," "),r.default.createElement("select",{id:"locale",value:this.state.locale,onChange:this.handleLocaleChange},r.default.createElement("option",{value:"en"},"en"),r.default.createElement("option",{value:"en-GB"},"en-GB"),r.default.createElement("option",{value:"en-US"},"en-US"),r.default.createElement("option",{value:"de"},"de"),r.default.createElement("option",{value:"es"},"es"),r.default.createElement("option",{value:"fr"},"fr"),r.default.createElement("option",{value:"nl"},"nl"),r.default.createElement("option",{value:"pt"},"pt"))):r.default.createElement("div",null)}}])&&c(t.prototype,n),a&&c(t,a),d}(r.default.Component);t.default=function(){return r.default.createElement(b,null)}},3008:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var a=n(0),r=n.n(a),o=n(289),l=n(1145),i=n(2083),c=n.n(i);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d={};function m(e){var t=e.components,n=s(e,["components"]);return Object(o.mdx)("wrapper",p({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",p({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport { FormattedMessage, FormattedDate, FormattedNumber } from \'react-intl\';\nimport { I18nProvider, i18nLoader } from \'terra-i18n\';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      areTranslationsLoaded: false,\n      locale: \'en-US\',\n      messages: {},\n    };\n    this.handleLocaleChange = this.handleLocaleChange.bind(this);\n  }\n\n  componentDidMount() {\n    i18nLoader(this.state.locale, this.setState, this);\n  }\n\n  handleLocaleChange(e) {\n    i18nLoader(e.target.value, this.setState, this);\n  }\n\n  render() {\n    if (!this.state.areTranslationsLoaded) {\n      return <div />;\n    }\n    return (\n      <I18nProvider\n        locale={this.state.locale}\n        messages={this.state.messages}\n      >\n        <div>\n          <span> Example Message Format: </span>\n          <FormattedMessage id="Terra.ajax.error" />\n        </div>\n        <p>\n          <span> Example Number Format: </span>\n          <FormattedNumber value={parseFloat(\'1123432.123\')} />\n        </p>\n        <p>\n          <span>Example Date Format: </span>\n          <FormattedDate value={new Date(1575476163287)} />\n        </p>\n        <label htmlFor="locale">\n          {\' \'}\n          Current locale:\n          {this.state.locale}\n          {\' \'}\n\n        </label>\n        <select id="locale" value={this.state.locale} onChange={this.handleLocaleChange}>\n          <option value="en">en</option>\n          <option value="en-GB">en-GB</option>\n          <option value="en-US">en-US</option>\n          <option value="de">de</option>\n          <option value="es">es</option>\n          <option value="fr">fr</option>\n          <option value="nl">nl</option>\n          <option value="pt">pt</option>\n        </select>\n      </I18nProvider>\n    );\n  }\n}\n\nexport default () => <Demo />;\n\n')))}m.isMDXComponent=!0;var u=n(883),b=n.n(u),f=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.a.createElement(b.a,{title:t||"I 18 N Demo",description:n,example:r.a.createElement(c.a,null),exampleSrc:r.a.createElement(m,null),isExpanded:a})},h=n(886),x=n.n(h);function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function j(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var v=function(){return Object(o.mdx)(x.a,{rows:[{name:"children",type:function(){var e={};function t(t){var n=t.components,a=j(t,["components"]);return Object(o.mdx)("wrapper",O({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=j(t,["components"]);return Object(o.mdx)("wrapper",O({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The component that will be wrapped by i18n provider."))}return t.isMDXComponent=!0,t({})}},{name:"locale",type:function(){var e={};function t(t){var n=t.components,a=j(t,["components"]);return Object(o.mdx)("wrapper",O({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=j(t,["components"]);return Object(o.mdx)("wrapper",O({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The locale name."))}return t.isMDXComponent=!0,t({})}},{name:"messages",type:function(){var e={};function t(t){var n=t.components,a=j(t,["components"]);return Object(o.mdx)("wrapper",O({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"shape"),Object(o.mdx)("pre",null,Object(o.mdx)("code",O({parentName:"pre"},{className:"language-json"}),"{}\n")))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=j(t,["components"]);return Object(o.mdx)("wrapper",O({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Translations messages object."))}return t.isMDXComponent=!0,t({})}}]})};function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var N={};function w(e){var t=e.components,n=y(e,["components"]);return Object(o.mdx)("wrapper",g({},N,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)(l.a,{mdxType:"Badge"}),Object(o.mdx)("h1",{id:"terra-i18n"},"Terra I18n"),Object(o.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(o.mdx)("p",null,"This component is not intended for direct usage by developers. It is recommended to use the ",Object(o.mdx)("inlineCode",{parentName:"p"},"terra-base")," component instead which acts as an abstraction around terra-i18n and react-intl's Intl Provider component. See ",Object(o.mdx)("a",g({parentName:"p"},{href:"https://github.com/cerner/terra-core/tree/main/packages/terra-base"}),Object(o.mdx)("inlineCode",{parentName:"a"},"terra-base documentation"))," to get started."),Object(o.mdx)("p",null,"However, terra-i18n can be installed with ",Object(o.mdx)("a",g({parentName:"p"},{href:"https://www.npmjs.com/"}),"npmjs"),":"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"npm install terra-i18n"))),Object(o.mdx)("p",null,"The terra-i18n package provides internationalization for React components by loading translations and locale data on demand and providing the translated messages to the component. It does this by utilizing the ",Object(o.mdx)("a",g({parentName:"p"},{href:"https://github.com/yahoo/react-intl"}),Object(o.mdx)("inlineCode",{parentName:"a"},"react-intl"))," dependency to provide the formatted translation messages to the supplied React children. To enable this behavior, terra-i18n provides the ",Object(o.mdx)("inlineCode",{parentName:"p"},"i18nLoader")," and ",Object(o.mdx)("inlineCode",{parentName:"p"},"I18nProvider")," components."),Object(o.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(o.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(o.mdx)("table",null,Object(o.mdx)("thead",{parentName:"table"},Object(o.mdx)("tr",{parentName:"thead"},Object(o.mdx)("th",g({parentName:"tr"},{align:null}),"Peer Dependency"),Object(o.mdx)("th",g({parentName:"tr"},{align:null}),"Version"))),Object(o.mdx)("tbody",{parentName:"table"},Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",g({parentName:"tr"},{align:null}),"react"),Object(o.mdx)("td",g({parentName:"tr"},{align:null}),"^16.8.5")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",g({parentName:"tr"},{align:null}),"react-dom"),Object(o.mdx)("td",g({parentName:"tr"},{align:null}),"^16.8.5")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",g({parentName:"tr"},{align:null}),"react-intl"),Object(o.mdx)("td",g({parentName:"tr"},{align:null}),"^2.8.0")))),Object(o.mdx)("h2",{id:"i18nloader"},"i18nLoader"),Object(o.mdx)("p",null,"The ",Object(o.mdx)("inlineCode",{parentName:"p"},"i18nLoader")," component guarantees that the Intl polyfill, locale data and translation messages are loaded before the translation-needing component is rendered. ",Object(o.mdx)("em",{parentName:"p"},"This loader should be utilized only once within an application, because all internationalization information is loaded into memory to remove the need to dynamically load locale data on the server.")),Object(o.mdx)("p",null,"Note: the ",Object(o.mdx)("inlineCode",{parentName:"p"},"i18nLoader")," state object for the callback must contain the following keys to work properly:"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"areTranslationsLoaded")," - ",Object(o.mdx)("em",{parentName:"li"},"boolean")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"locale")," - ",Object(o.mdx)("em",{parentName:"li"},"string")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"messages")," - ",Object(o.mdx)("em",{parentName:"li"},"key-value pairs such that the key is the message name and the value is the translation message"))),Object(o.mdx)("h2",{id:"i18nprovider"},"I18nProvider"),Object(o.mdx)("p",null,"The ",Object(o.mdx)("inlineCode",{parentName:"p"},"I18nProvider")," component configures the react-intl's ",Object(o.mdx)("inlineCode",{parentName:"p"},"IntlProvider")," and supplies it with the translation-needing components such that the i18n context is accessible. Usually, one ",Object(o.mdx)("inlineCode",{parentName:"p"},"I18nProvider")," will wrap an application's root component such that the entire application is within the same configured i18n context, however it is possible to render nested ",Object(o.mdx)("inlineCode",{parentName:"p"},"I18nProvider")," components to provide different, or modified i18n context."),Object(o.mdx)("h3",{id:"supported-locales"},"Supported Locales"),Object(o.mdx)("p",null,Object(o.mdx)("a",g({parentName:"p"},{href:"https://github.com/cerner/terra-aggregate-translations/blob/main/config/i18nSupportedLocales.js"}),"You can view a list of locales supported by Terra UI here.")),Object(o.mdx)("h3",{id:"non-supported-locales"},"Non-Supported Locales"),Object(o.mdx)("p",null,"It is possible to add and load non-supported locales with ",Object(o.mdx)("inlineCode",{parentName:"p"},"terra-i18n"),", however one must ensure the locales are supported by ",Object(o.mdx)("inlineCode",{parentName:"p"},"react-intl"),", otherwise no locale-data will exist and loading the intl data will result in an error. Once confirmed that the locale is supported by ",Object(o.mdx)("inlineCode",{parentName:"p"},"react-intl"),", one is responsible for including the appropriate translations messages for each terra component used in your application, otherwise the translations will fail and ",Object(o.mdx)("inlineCode",{parentName:"p"},"react-intl")," will display the message name as the fallback."),Object(o.mdx)("h3",{id:"locale-fallback"},"Locale Fallback"),Object(o.mdx)("p",null,"The ",Object(o.mdx)("inlineCode",{parentName:"p"},"i18nLoader")," loads internationalized information from the translationLoader and intlLoader modules, both which utilize a locale fallback strategy. This implemented fallback strategy when loading a locale is:"),Object(o.mdx)("ol",null,Object(o.mdx)("li",{parentName:"ol"},"Try the regional locale (if applicable)"),Object(o.mdx)("li",{parentName:"ol"},"Try the base locale"),Object(o.mdx)("li",{parentName:"ol"},"Try the 'en' base locale"),Object(o.mdx)("li",{parentName:"ol"},"Throw an error if 'en' is not provided")),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Note:")," This fallback strategy is only applied when an aggregated translation file does not exist. For example if the 'es' locale is loaded and the translation for ",Object(o.mdx)("inlineCode",{parentName:"p"},"Terra.button.close")," is missing, ",Object(o.mdx)("inlineCode",{parentName:"p"},"react-intl")," will display the ",Object(o.mdx)("inlineCode",{parentName:"p"},"Terra.button.close")," message name, not the english translation, because locale data was only loaded for 'es'. The ",Object(o.mdx)("inlineCode",{parentName:"p"},"terra-i18n")," package does not support loading multiple locales at once. This ensures an application will never have a mix of 'es' and 'en' translations."),Object(o.mdx)("h2",{id:"usage"},"Usage"),Object(o.mdx)("pre",null,Object(o.mdx)("code",g({parentName:"pre"},{className:"language-jsx"}),"import { I18nProvider, i18nLoader } from 'terra-i18n';\n")),Object(o.mdx)("h2",{id:"component-features"},"Component Features"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",g({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",g({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#internationalization-i18n-support"}),"Internationalization Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",g({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#internationalization-i18n-support"}),"Localization Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",g({parentName:"li"},{href:"https://github.com/shakacode/react_on_rails/blob/8cb06ed35cb5c2c453bcc193282b4c091574c1b7/docs/basics/i18n.md#how-to-add-i18n"}),"react_on_rails Compatible")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",g({parentName:"li"},{href:"https://github.com/webpack/docs/wiki/configuration#outputpublicpath"}),"CND Compatible"))),Object(o.mdx)("h2",{id:"examples"},"Examples"),Object(o.mdx)(f,{title:"I18nProvider Example",description:"Note: This is an example of a nested I18nProvider. The site overall is an example of using an application-level I18nProvider implemented through the terra-base component.",mdxType:"I18nDemo"}),Object(o.mdx)("h2",{id:"i18n-provider-props"},"I18n Provider Props"),Object(o.mdx)(v,{mdxType:"I18nPropsTable"}))}w.isMDXComponent=!0},887:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),r=o(n(17));function o(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i=function(e){var t=l({},e);return a.default.createElement(r.default,t,a.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var c=i;t.default=c}}]);
//# sourceMappingURL=460-13e8c6542e9ef65c4b1f.js.map