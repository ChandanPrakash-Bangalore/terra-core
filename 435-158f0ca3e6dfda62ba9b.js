(window.webpackJsonp=window.webpackJsonp||[]).push([[435],{1040:function(e){e.exports=JSON.parse('{"name":"terra-doc-template","main":"lib/DocTemplate.js","version":"2.30.0","description":"Provides an adjustable template for documentation pages.","repository":{"type":"git","url":"git+https://github.com/cerner/terra-core.git"},"keywords":["Cerner","Terra","terra-doc-template","DocTemplate","UI"],"author":"Cerner Corporation","license":"Apache-2.0","bugs":{"url":"https://github.com/cerner/terra-core/issues"},"homepage":"https://github.com/cerner/terra-core#readme","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5"},"dependencies":{"classnames":"^2.2.5","prop-types":"^15.5.8","react-syntax-highlighter":"^11.0.0","terra-markdown":"^2.43.0","terra-props-table":"^2.50.0"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run lint && npm run jest && npm run wdio","jest":"jest --config ../../jestconfig.js","wdio-default":"cd ../.. && npx wdio","wdio-lowlight":"cd ../.. && THEME=clinical-lowlight-theme npx wdio","wdio-fusion":"cd ../.. && THEME=orion-fusion-theme npx wdio","wdio":"npm run wdio-default && npm run wdio-lowlight && npm run wdio-fusion"}}')},2555:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(a(0)),r=c(a(976)),o=a(1040);function c(e){return e&&e.__esModule?e:{default:e}}var l=function(){return n.default.createElement("div",null,n.default.createElement("br",null),n.default.createElement(r.default,{packageName:o.name}),n.default.createElement("br",null),n.default.createElement(r.default,{packageName:o.name,packageVersion:"2.13.0"}),n.default.createElement(r.default,{packageName:o.name,packageUrl:"https://engineering.cerner.com/terra-ui/components/terra-doc-template/doc-template/doc-template",packageVersion:"2.13.0"}))};t.default=l},976:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(a(0)),r=c(a(5)),o=c(a(991));function c(e){return e&&e.__esModule?e:{default:e}}var l=r.default.bind(o.default),i=function(e){var t=e.packageName,a=e.packageUrl,r=e.packageVersion;return r?n.default.createElement("div",{className:l("badge-container")},n.default.createElement("a",{className:l("badge"),href:a||"https://www.npmjs.org/package/".concat(t,"/v/").concat(r)},n.default.createElement("span",{className:l("badge-name")},a?"package":"npm"),n.default.createElement("span",{className:l("badge-version")},"v".concat(r)))):n.default.createElement("a",{href:"https://www.npmjs.org/package/".concat(t)},n.default.createElement("img",{src:"https://badgen.net/npm/v/".concat(t),alt:"NPM version"}))};t.default=i},991:function(e,t,a){e.exports={badge:"NpmBadge-module__badge___1Cu7Z","badge-container":"NpmBadge-module__badge-container___2zgQi","badge-name":"NpmBadge-module__badge-name___17OzL","badge-version":"NpmBadge-module__badge-version___2Vkei"}}}]);
//# sourceMappingURL=435-158f0ca3e6dfda62ba9b.js.map