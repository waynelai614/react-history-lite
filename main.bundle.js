!function(e){function t(t){for(var o,i,l=t[0],u=t[1],c=t[2],d=0,f=[];d<l.length;d++)i=l[d],n[i]&&f.push(n[i][0]),n[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);for(s&&s(t);f.length;)f.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],o=!0,l=1;l<r.length;l++){var u=r[l];0!==n[u]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var o={},n={0:0},a=[];function i(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=o,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(r,o,function(t){return e[t]}.bind(null,o));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="./";var l=window.webpackJsonp=window.webpackJsonp||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var s=u;a.push([20,1]),r()}([,,,,,,,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(11);Object.defineProperty(t,"HistoryContext",{enumerable:!0,get:function(){return l(o).default}});var n=r(14);Object.defineProperty(t,"connectHistory",{enumerable:!0,get:function(){return n.connectHistory}});var a=r(15);Object.defineProperty(t,"Location",{enumerable:!0,get:function(){return l(a).default}});var i=r(31);function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"withLocation",{enumerable:!0,get:function(){return l(i).default}})},,,,function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},_createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),_react=__webpack_require__(0),_react2=_interopRequireDefault(_react),_propTypes=__webpack_require__(8),_propTypes2=_interopRequireDefault(_propTypes),_lodash=__webpack_require__(12),_history=__webpack_require__(13),oa;function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}oa=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).enterModule,oa&&oa(module);var HistoryContext=_react2.default.createContext(),HistoryProvider=function(_PureComponent){function HistoryProvider(e){_classCallCheck(this,HistoryProvider);var t=_possibleConstructorReturn(this,(HistoryProvider.__proto__||Object.getPrototypeOf(HistoryProvider)).call(this,e));return(0,_lodash.bindAll)(t,["getHistoryContext","handleLocationChange"]),t.history=e.history||_history.$history,t.state={location:t.history.location},t._isMounted=!1,t._pendingLocation=null,t.unlisten=t.history.listen(function(e){t._isMounted?t.handleLocationChange(e):t._pendingLocation=e}),t}return _inherits(HistoryProvider,_PureComponent),_createClass(HistoryProvider,[{key:"componentDidMount",value:function(){this._isMounted=!0,this._pendingLocation&&this.handleLocationChange(this._pendingLocation)}},{key:"componentWillUnmount",value:function(){this.unlisten&&this.unlisten()}},{key:"getHistoryContext",value:function(){return _extends({history:this.history},this.state)}},{key:"handleLocationChange",value:function(e){this.setState({location:e})}},{key:"render",value:function(){return _react2.default.createElement(HistoryContext.Provider,{value:this.getHistoryContext()},this.props.children)}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),HistoryProvider}(_react.PureComponent);HistoryProvider.propTypes={history:_propTypes2.default.object,children:_propTypes2.default.oneOfType([_propTypes2.default.node,_propTypes2.default.element])};var _default={Provider:HistoryProvider,Consumer:HistoryContext.Consumer},Ea,Fa;exports.default=_default,Ea=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).default,Ea&&(Ea.register(HistoryContext,"HistoryContext","/Users/yuanjung.lai/Documents/react-history-lite/src/components/history/context.js"),Ea.register(HistoryProvider,"HistoryProvider","/Users/yuanjung.lai/Documents/react-history-lite/src/components/history/context.js"),Ea.register(_default,"default","/Users/yuanjung.lai/Documents/react-history-lite/src/components/history/context.js")),Fa=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).leaveModule,Fa&&Fa(module)}).call(this,__webpack_require__(3)(module))},,function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.$history=void 0;var o,n=r(41);(o=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&o(e);var a,i,l=t.$history="undefined"==typeof window?(0,n.createMemoryHistory)():(0,n.createBrowserHistory)();(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&a.register(l,"$history","/Users/yuanjung.lai/Documents/react-history-lite/src/utils/history.js"),(i=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&i(e)}).call(this,r(3)(e))},function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.connectHistory=void 0;var o,n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},a=l(r(0)),i=l(r(11));function l(e){return e&&e.__esModule?e:{default:e}}(o=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&o(e);var u,c,s=t.connectHistory=function(e){return function(t){return a.default.createElement(i.default.Consumer,null,function(r){return a.default.createElement(e,n({},t,{historyCtx:r}))})}};(u=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&u.register(s,"connectHistory","/Users/yuanjung.lai/Documents/react-history-lite/src/components/history/connect.js"),(c=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&c(e)}).call(this,r(3)(e))},function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0}),exports.Location=exports.defaultParamsSelector=void 0;var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),_react=__webpack_require__(0),_react2=_interopRequireDefault(_react),_propTypes=__webpack_require__(8),_propTypes2=_interopRequireDefault(_propTypes),_types=__webpack_require__(30),_base=__webpack_require__(16),_connect=__webpack_require__(14),tb;function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}tb=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).enterModule,tb&&tb(module);var defaultParamsSelector=exports.defaultParamsSelector=function(e){var t=e.search;return(0,_base.getUrlParams)(t)},Location=exports.Location=function(_PureComponent){function Location(){return _classCallCheck(this,Location),_possibleConstructorReturn(this,(Location.__proto__||Object.getPrototypeOf(Location)).apply(this,arguments))}return _inherits(Location,_PureComponent),_createClass(Location,[{key:"componentDidUpdate",value:function(e){var t=e.historyCtx.location,r=this.props,o=r.historyCtx.location,n=r.paramsSelector,a=r.onChange;t!==o&&a({location:o,params:n(o)})}},{key:"render",value:function(){return this.props.children?_react2.default.Children.only(this.props.children):null}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Location}(_react.PureComponent);Location.propTypes={historyCtx:_types.HistoryContextShape.isRequired,paramsSelector:_propTypes2.default.func,onChange:_propTypes2.default.func.isRequired,children:_propTypes2.default.oneOfType([_propTypes2.default.node,_propTypes2.default.element])},Location.defaultProps={paramsSelector:defaultParamsSelector};var _default=(0,_connect.connectHistory)(Location),Lb,Mb;exports.default=_default,Lb=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).default,Lb&&(Lb.register(defaultParamsSelector,"defaultParamsSelector","/Users/yuanjung.lai/Documents/react-history-lite/src/components/history/location.js"),Lb.register(Location,"Location","/Users/yuanjung.lai/Documents/react-history-lite/src/components/history/location.js"),Lb.register(_default,"default","/Users/yuanjung.lai/Documents/react-history-lite/src/components/history/location.js")),Mb=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).leaveModule,Mb&&Mb(module)}).call(this,__webpack_require__(3)(module))},function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var o,n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e};(o=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&o(e);var a,i,l=t.getUrlParams=function(){return(0<arguments.length&&void 0!==arguments[0]?arguments[0]:window.location.search).substring(1).split("&").filter(Boolean).reduce(function(e,t){var r,o,a,i=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],o=!0,n=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(o=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);o=!0);}catch(e){n=!0,a=e}finally{try{!o&&l.return&&l.return()}finally{if(n)throw a}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}(t.split("="),2),l=i[0],u=i[1];return n({},e,(a=u||"",(o=l)in(r={})?Object.defineProperty(r,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[o]=a,r))},{})};(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&a.register(l,"getUrlParams","/Users/yuanjung.lai/Documents/react-history-lite/src/utils/base.js"),(i=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&i(e)}).call(this,r(3)(e))},function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.doSearch=void 0;var o,n=r(13);(o=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&o(e);var a,i,l=t.doSearch=function(){var e="/?keyword="+(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).keyword;n.$history.push(e)};(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&a.register(l,"doSearch","/Users/yuanjung.lai/Documents/react-history-lite/example/utils.js"),(i=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&i(e)}).call(this,r(3)(e))},,,function(e,t,r){e.exports=r(21)},function(e,t,r){"use strict";(function(e){var t,o=u(r(0)),n=u(r(23)),a=r(7),i=u(r(32)),l=u(r(33));function u(e){return e&&e.__esModule?e:{default:e}}r(35),(t=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&t(e);var c,s,d=function(){return o.default.createElement(a.HistoryContext.Provider,null,o.default.createElement(i.default,null))},f=function(){return o.default.createElement(a.HistoryContext.Provider,null,o.default.createElement(l.default,null))};n.default.render(o.default.createElement(d,null),document.getElementById("search-box")),n.default.render(o.default.createElement(f,null),document.getElementById("page")),(c=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(c.register(d,"SearchBoxApp","/Users/yuanjung.lai/Documents/react-history-lite/example/index.js"),c.register(f,"PageApp","/Users/yuanjung.lai/Documents/react-history-lite/example/index.js")),(s=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&s(e)}).call(this,r(3)(e))},,,,,,,,,function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.HistoryContextShape=void 0;var o,n,a=(o=r(8))&&o.__esModule?o:{default:o};(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&n(e);var i,l,u=t.HistoryContextShape=a.default.shape({history:a.default.object.isRequired,location:a.default.shape({key:a.default.string,pathname:a.default.string.isRequired,search:a.default.string.isRequired,hash:a.default.string.isRequired}).isRequired});(i=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&i.register(u,"HistoryContextShape","/Users/yuanjung.lai/Documents/react-history-lite/src/types/index.js"),(l=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&l(e)}).call(this,r(3)(e))},function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),_react=__webpack_require__(0),_react2=_interopRequireDefault(_react),_lodash=__webpack_require__(12),_location=__webpack_require__(15),_location2=_interopRequireDefault(_location),Dd;function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Dd=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).enterModule,Dd&&Dd(module);var _default=function _default(initializer){return function(Base){return function(_PureComponent){function WithLocation(e){_classCallCheck(this,WithLocation);var t=_possibleConstructorReturn(this,(WithLocation.__proto__||Object.getPrototypeOf(WithLocation)).call(this,e));return t.locationCompProps=initializer(e),t}return _inherits(WithLocation,_PureComponent),_createClass(WithLocation,[{key:"render",value:function(){return _react2.default.createElement(_react.Fragment,null,_react2.default.createElement(_location2.default,this.locationCompProps),_react2.default.createElement(Base,this.props))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),WithLocation}(_react.PureComponent)}},Nd,Od;exports.default=_default,Nd=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).default,Nd&&Nd.register(_default,"default","/Users/yuanjung.lai/Documents/react-history-lite/src/components/history/withLocation.js"),Od=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).leaveModule,Od&&Od(module)}).call(this,__webpack_require__(3)(module))},function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var o,n,a=r(0),i=(o=a)&&o.__esModule?o:{default:o},l=r(7),u=r(16),c=r(17);(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&n(e);var s,d,f=function(){var e=(0,u.getUrlParams)(),t=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],o=!0,n=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(o=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);o=!0);}catch(e){n=!0,a=e}finally{try{!o&&l.return&&l.return()}finally{if(n)throw a}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,a.useState)(decodeURIComponent(e.keyword||"")),2),r=t[0],o=t[1];return i.default.createElement("section",null,i.default.createElement("h2",null,"Search Box Component"),i.default.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==r.trim()&&(o(r),(0,c.doSearch)({keyword:r}))}},i.default.createElement("input",{type:"text",className:"search-box",placeholder:"Search something...",value:r,onChange:function(e){o(e.target.value)}}),i.default.createElement("button",{type:"submit"},"Go!")),i.default.createElement(l.Location,{onChange:function(e){var t=e.params;o(decodeURIComponent(t.keyword||""))}}))},p=f;t.default=p,(s=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(s.register(f,"SearchBox","/Users/yuanjung.lai/Documents/react-history-lite/example/searchBox.js"),s.register(p,"default","/Users/yuanjung.lai/Documents/react-history-lite/example/searchBox.js")),(d=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&d(e)}).call(this,r(3)(e))},function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var o,n,a=(o=r(0))&&o.__esModule?o:{default:o},i=r(40),l=r(7),u=r(17);(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&n(e);var c,s,d=function(){return a.default.createElement("section",null,a.default.createElement("h2",null,"Page Component"),a.default.createElement("button",{type:"button",onClick:function(){return(0,u.doSearch)({keyword:"iPhone"})}},"Search iPhone"),a.default.createElement("button",{type:"button",onClick:function(){return(0,u.doSearch)({keyword:"Android"})}},"Search Android"),a.default.createElement("h3",null,"History Object"),a.default.createElement(l.HistoryContext.Consumer,null,function(e){return a.default.createElement("p",null,JSON.stringify(e.history))}))},f=(0,i.compose)((0,i.withHandlers)({handleLocationChange:function(){return function(e){var t=e.params;console.log("handleLocationChange",t)}}}),(0,l.withLocation)(function(e){return{onChange:e.handleLocationChange}}),i.pure),p=f(d);t.default=p,(c=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(c.register(d,"Page","/Users/yuanjung.lai/Documents/react-history-lite/example/page.js"),c.register(f,"enhance","/Users/yuanjung.lai/Documents/react-history-lite/example/page.js"),c.register(p,"default","/Users/yuanjung.lai/Documents/react-history-lite/example/page.js")),(s=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&s(e)}).call(this,r(3)(e))},,function(e,t,r){var o=r(36);"string"==typeof o&&(o=[[e.i,o,""]]);r(38)(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(e.exports=o.locals)},function(e,t,r){(e.exports=r(37)(!1)).push([e.i,"section {\n  padding: 0 1rem;\n  margin: 24px 0;\n  border: 1px solid #ccc; }\n\ninput, button {\n  font-size: 16px;\n  padding: .5rem; }\n\nbutton:not(:last-child) {\n  margin-right: 6px; }\n",""])}]);