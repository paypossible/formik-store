function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var t=require("react"),r=require("formik"),o=e(require("react-fast-compare")),n=e(require("debounce-promise")),i=e(require("object.omit"));function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var s=function(e){function r(){var e,t,o,u=arguments;!function(e,t){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this);for(var c=arguments.length,s=new Array(c),l=0;l<c;l++)s[l]=u[l];return o=(e=f(r)).call.apply(e,[this].concat(s)),t=!o||"object"!=typeof o&&"function"!=typeof o?p(this):o,a(p(t),"saveState",n(function(e){var r=t.props,o=r.storage,n=void 0===o?window.sessionStorage:o,u=r.name;return e.values=i(e.values,r.ignore),n.setItem(u,JSON.stringify(e))},t.props.debounce)),t}var s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(r,t.Component),(s=[{key:"componentDidMount",value:function(){var e=this.props,t=e.storage,r=void 0===t?window.sessionStorage:t,o=e.formik,n=e.name;if(!n)throw new Error("No name provided as prop for FormikStore");if(!o)throw new Error("FormikStore must be wrapped in Formik");Promise.resolve(r.getItem(n)).then(function(e){null!==e&&("object"===u(e)?o.setFormikState(e):"string"==typeof e&&o.setFormikState(JSON.parse(e)))})}},{key:"componentDidUpdate",value:function(e){var t=this.props.formik;return o(e.formik,t)||this.saveState(t),!1}},{key:"render",value:function(){return null}}])&&function(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(r.prototype,s),r}();a(s,"defaultProps",{debounce:300,ignore:[]});var l=r.connect(s);module.exports=l;
