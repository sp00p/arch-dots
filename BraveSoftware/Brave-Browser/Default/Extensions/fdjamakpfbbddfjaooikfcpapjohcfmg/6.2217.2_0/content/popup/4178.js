"use strict";(self.webpackChunk_dashlane_popup=self.webpackChunk_dashlane_popup||[]).push([[4178],{10035:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a){(0,n.default)(2,arguments);var u=(0,r.default)(e,a),o=(0,r.default)(t,a);return u.getTime()===o.getTime()};var r=u(a(55510)),n=u(a(2989));function u(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},2989:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")},e.exports=t.default},55510:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){(0,u.default)(1,arguments);var a=t||{},o=a.locale,s=o&&o.options&&o.options.weekStartsOn,l=null==s?0:(0,r.default)(s),f=null==a.weekStartsOn?l:(0,r.default)(a.weekStartsOn);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=(0,n.default)(e),d=c.getUTCDay(),i=(d<f?7:0)+d-f;return c.setUTCDate(c.getUTCDate()-i),c.setUTCHours(0,0,0,0),c};var r=o(a(54538)),n=o(a(4731)),u=o(a(2989));function o(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},54538:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);if(isNaN(t))return t;return t<0?Math.ceil(t):Math.floor(t)},e.exports=t.default},94178:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,r){var n=s[e];if("function"==typeof n)return n(t,a,r);return n};var r,n=(r=a(10035))&&r.__esModule?r:{default:r};var u=["неделя","понеделник","вторник","сряда","четвъртък","петък","събота"];function o(e){var t=u[e];return 2===e?"'във "+t+" в' p":"'в "+t+" в' p"}var s={lastWeek:function(e,t,a){var r=e.getUTCDay();return(0,n.default)(e,t,a)?o(r):function(e){var t=u[e];switch(e){case 0:case 3:case 6:return"'миналата "+t+" в' p";case 1:case 2:case 4:case 5:return"'миналия "+t+" в' p"}}(r)},yesterday:"'вчера в' p",today:"'днес в' p",tomorrow:"'утре в' p",nextWeek:function(e,t,a){var r=e.getUTCDay();return(0,n.default)(e,t,a)?o(r):function(e){var t=u[e];switch(e){case 0:case 3:case 6:return"'следващата "+t+" в' p";case 1:case 2:case 4:case 5:return"'следващия "+t+" в' p"}}(r)},other:"P"};e.exports=t.default},4731:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,n.default)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))};var r,n=(r=a(2989))&&r.__esModule?r:{default:r};e.exports=t.default}}]);