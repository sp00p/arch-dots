"use strict";(self.webpackChunk_dashlane_popup=self.webpackChunk_dashlane_popup||[]).push([[3025,7656,2665,5447,1054,4714,4206,747,3362,8571],{10035:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){(0,i.default)(2,arguments);var u=(0,a.default)(e,n),r=(0,a.default)(t,n);return u.getTime()===r.getTime()};var a=u(n(55510)),i=u(n(2989));function u(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},2989:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")},e.exports=t.default},55510:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){(0,u.default)(1,arguments);var n=t||{},r=n.locale,l=r&&r.options&&r.options.weekStartsOn,o=null==l?0:(0,a.default)(l),d=null==n.weekStartsOn?o:(0,a.default)(n.weekStartsOn);if(!(d>=0&&d<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=(0,i.default)(e),f=s.getUTCDay(),c=(f<d?7:0)+f-d;return s.setUTCDate(s.getUTCDate()-c),s.setUTCHours(0,0,0,0),s};var a=r(n(54538)),i=r(n(4731)),u=r(n(2989));function r(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},54538:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);if(isNaN(t))return t;return t<0?Math.ceil(t):Math.floor(t)},e.exports=t.default},47656:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth,a=e.formats[n]||e.formats[e.defaultWidth];return a}},e.exports=t.default},92665:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n){var a,i=n||{};if("formatting"===(i.context?String(i.context):"standalone")&&e.formattingValues){var u=e.defaultFormattingWidth||e.defaultWidth,r=i.width?String(i.width):u;a=e.formattingValues[r]||e.formattingValues[u]}else{var l=e.defaultWidth,o=i.width?String(i.width):e.defaultWidth;a=e.values[o]||e.values[l]}return a[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},35447:(e,t)=>{function n(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function a(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},u=i.width,r=u&&e.matchPatterns[u]||e.matchPatterns[e.defaultMatchWidth],l=t.match(r);if(!l)return null;var o,d=l[0],s=u&&e.parsePatterns[u]||e.parsePatterns[e.defaultParseWidth],f=Array.isArray(s)?a(s,(function(e){return e.test(d)})):n(s,(function(e){return e.test(d)}));o=e.valueCallback?e.valueCallback(f):f,o=i.valueCallback?i.valueCallback(o):o;var c=t.slice(d.length);return{value:o,rest:c}}},e.exports=t.default},1054:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.match(e.matchPattern);if(!a)return null;var i=a[0],u=t.match(e.parsePattern);if(!u)return null;var r=e.valueCallback?e.valueCallback(u[0]):u[0];r=n.valueCallback?n.valueCallback(r):r;var l=t.slice(i.length);return{value:r,rest:l}}},e.exports=t.default},64714:(e,t)=>{function n(e,t){if(void 0!==e.one&&1===t)return e.one;var n=t%10,a=t%100;return 1===n&&11!==a?e.singularNominative.replace("{{count}}",t):n>=2&&n<=4&&(a<10||a>20)?e.singularGenitive.replace("{{count}}",t):e.pluralGenitive.replace("{{count}}",t)}function a(e){return function(t,a){return a.addSuffix?a.comparison>0?e.future?n(e.future,t):"через "+n(e.regular,t):e.past?n(e.past,t):n(e.regular,t)+" назад":n(e.regular,t)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){return n=n||{},i[e](t,n)};var i={lessThanXSeconds:a({regular:{one:"меньше секунды",singularNominative:"меньше {{count}} секунды",singularGenitive:"меньше {{count}} секунд",pluralGenitive:"меньше {{count}} секунд"},future:{one:"меньше, чем через секунду",singularNominative:"меньше, чем через {{count}} секунду",singularGenitive:"меньше, чем через {{count}} секунды",pluralGenitive:"меньше, чем через {{count}} секунд"}}),xSeconds:a({regular:{singularNominative:"{{count}} секунда",singularGenitive:"{{count}} секунды",pluralGenitive:"{{count}} секунд"},past:{singularNominative:"{{count}} секунду назад",singularGenitive:"{{count}} секунды назад",pluralGenitive:"{{count}} секунд назад"},future:{singularNominative:"через {{count}} секунду",singularGenitive:"через {{count}} секунды",pluralGenitive:"через {{count}} секунд"}}),halfAMinute:function(e,t){return t.addSuffix?t.comparison>0?"через полминуты":"полминуты назад":"полминуты"},lessThanXMinutes:a({regular:{one:"меньше минуты",singularNominative:"меньше {{count}} минуты",singularGenitive:"меньше {{count}} минут",pluralGenitive:"меньше {{count}} минут"},future:{one:"меньше, чем через минуту",singularNominative:"меньше, чем через {{count}} минуту",singularGenitive:"меньше, чем через {{count}} минуты",pluralGenitive:"меньше, чем через {{count}} минут"}}),xMinutes:a({regular:{singularNominative:"{{count}} минута",singularGenitive:"{{count}} минуты",pluralGenitive:"{{count}} минут"},past:{singularNominative:"{{count}} минуту назад",singularGenitive:"{{count}} минуты назад",pluralGenitive:"{{count}} минут назад"},future:{singularNominative:"через {{count}} минуту",singularGenitive:"через {{count}} минуты",pluralGenitive:"через {{count}} минут"}}),aboutXHours:a({regular:{singularNominative:"около {{count}} часа",singularGenitive:"около {{count}} часов",pluralGenitive:"около {{count}} часов"},future:{singularNominative:"приблизительно через {{count}} час",singularGenitive:"приблизительно через {{count}} часа",pluralGenitive:"приблизительно через {{count}} часов"}}),xHours:a({regular:{singularNominative:"{{count}} час",singularGenitive:"{{count}} часа",pluralGenitive:"{{count}} часов"}}),xDays:a({regular:{singularNominative:"{{count}} день",singularGenitive:"{{count}} дня",pluralGenitive:"{{count}} дней"}}),aboutXWeeks:a({regular:{singularNominative:"около {{count}} недели",singularGenitive:"около {{count}} недель",pluralGenitive:"около {{count}} недель"},future:{singularNominative:"приблизительно через {{count}} неделю",singularGenitive:"приблизительно через {{count}} недели",pluralGenitive:"приблизительно через {{count}} недель"}}),xWeeks:a({regular:{singularNominative:"{{count}} неделя",singularGenitive:"{{count}} недели",pluralGenitive:"{{count}} недель"}}),aboutXMonths:a({regular:{singularNominative:"около {{count}} месяца",singularGenitive:"около {{count}} месяцев",pluralGenitive:"около {{count}} месяцев"},future:{singularNominative:"приблизительно через {{count}} месяц",singularGenitive:"приблизительно через {{count}} месяца",pluralGenitive:"приблизительно через {{count}} месяцев"}}),xMonths:a({regular:{singularNominative:"{{count}} месяц",singularGenitive:"{{count}} месяца",pluralGenitive:"{{count}} месяцев"}}),aboutXYears:a({regular:{singularNominative:"около {{count}} года",singularGenitive:"около {{count}} лет",pluralGenitive:"около {{count}} лет"},future:{singularNominative:"приблизительно через {{count}} год",singularGenitive:"приблизительно через {{count}} года",pluralGenitive:"приблизительно через {{count}} лет"}}),xYears:a({regular:{singularNominative:"{{count}} год",singularGenitive:"{{count}} года",pluralGenitive:"{{count}} лет"}}),overXYears:a({regular:{singularNominative:"больше {{count}} года",singularGenitive:"больше {{count}} лет",pluralGenitive:"больше {{count}} лет"},future:{singularNominative:"больше, чем через {{count}} год",singularGenitive:"больше, чем через {{count}} года",pluralGenitive:"больше, чем через {{count}} лет"}}),almostXYears:a({regular:{singularNominative:"почти {{count}} год",singularGenitive:"почти {{count}} года",pluralGenitive:"почти {{count}} лет"},future:{singularNominative:"почти через {{count}} год",singularGenitive:"почти через {{count}} года",pluralGenitive:"почти через {{count}} лет"}})};e.exports=t.default},54206:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,i=(a=n(47656))&&a.__esModule?a:{default:a};var u={date:(0,i.default)({formats:{full:"EEEE, d MMMM y 'г.'",long:"d MMMM y 'г.'",medium:"d MMM y 'г.'",short:"dd.MM.y"},defaultWidth:"full"}),time:(0,i.default)({formats:{full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},defaultWidth:"full"}),dateTime:(0,i.default)({formats:{any:"{{date}}, {{time}}"},defaultWidth:"any"})};t.default=u,e.exports=t.default},60747:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n,a){var i=l[e];if("function"==typeof i)return i(t,n,a);return i};var a,i=(a=n(10035))&&a.__esModule?a:{default:a};var u=["воскресенье","понедельник","вторник","среду","четверг","пятницу","субботу"];function r(e){var t=u[e];return 2===e?"'во "+t+" в' p":"'в "+t+" в' p"}var l={lastWeek:function(e,t,n){var a=e.getUTCDay();return(0,i.default)(e,t,n)?r(a):function(e){var t=u[e];switch(e){case 0:return"'в прошлое "+t+" в' p";case 1:case 2:case 4:return"'в прошлый "+t+" в' p";case 3:case 5:case 6:return"'в прошлую "+t+" в' p"}}(a)},yesterday:"'вчера в' p",today:"'сегодня в' p",tomorrow:"'завтра в' p",nextWeek:function(e,t,n){var a=e.getUTCDay();return(0,i.default)(e,t,n)?r(a):function(e){var t=u[e];switch(e){case 0:return"'в следующее "+t+" в' p";case 1:case 2:case 4:return"'в следующий "+t+" в' p";case 3:case 5:case 6:return"'в следующую "+t+" в' p"}}(a)},other:"P"};e.exports=t.default},23362:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,i=(a=n(92665))&&a.__esModule?a:{default:a};var u={ordinalNumber:function(e,t){var n=String((t||{}).unit);return e+("date"===n?"-е":"week"===n||"minute"===n||"second"===n?"-я":"-й")},era:(0,i.default)({values:{narrow:["до н.э.","н.э."],abbreviated:["до н. э.","н. э."],wide:["до нашей эры","нашей эры"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["1-й кв.","2-й кв.","3-й кв.","4-й кв."],wide:["1-й квартал","2-й квартал","3-й квартал","4-й квартал"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,i.default)({values:{narrow:["Я","Ф","М","А","М","И","И","А","С","О","Н","Д"],abbreviated:["янв.","фев.","март","апр.","май","июнь","июль","авг.","сент.","окт.","нояб.","дек."],wide:["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"]},defaultWidth:"wide",formattingValues:{narrow:["Я","Ф","М","А","М","И","И","А","С","О","Н","Д"],abbreviated:["янв.","фев.","мар.","апр.","мая","июн.","июл.","авг.","сент.","окт.","нояб.","дек."],wide:["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"]},defaultFormattingWidth:"wide"}),day:(0,i.default)({values:{narrow:["В","П","В","С","Ч","П","С"],short:["вс","пн","вт","ср","чт","пт","сб"],abbreviated:["вск","пнд","втр","срд","чтв","птн","суб"],wide:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утро",afternoon:"день",evening:"веч.",night:"ночь"},abbreviated:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утро",afternoon:"день",evening:"веч.",night:"ночь"},wide:{am:"ДП",pm:"ПП",midnight:"полночь",noon:"полдень",morning:"утро",afternoon:"день",evening:"вечер",night:"ночь"}},defaultWidth:"any",formattingValues:{narrow:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утра",afternoon:"дня",evening:"веч.",night:"ночи"},abbreviated:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утра",afternoon:"дня",evening:"веч.",night:"ночи"},wide:{am:"ДП",pm:"ПП",midnight:"полночь",noon:"полдень",morning:"утра",afternoon:"дня",evening:"вечера",night:"ночи"}},defaultFormattingWidth:"wide"})};t.default=u,e.exports=t.default},88571:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(1054)),i=u(n(35447));function u(e){return e&&e.__esModule?e:{default:e}}var r={ordinalNumber:(0,a.default)({matchPattern:/^(\d+)(-?(е|я|й|ое|ье|ая|ья|ый|ой|ий|ый))?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,i.default)({matchPatterns:{narrow:/^((до )?н\.?\s?э\.?)/i,abbreviated:/^((до )?н\.?\s?э\.?)/i,wide:/^(до нашей эры|нашей эры|наша эра)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^д/i,/^н/i]},defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234](-?[ыои]?й?)? кв.?/i,wide:/^[1234](-?[ыои]?й?)? квартал/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,i.default)({matchPatterns:{narrow:/^[яфмаисонд]/i,abbreviated:/^(янв|фев|март?|апр|ма[йя]|июн[ья]?|июл[ья]?|авг|сент?|окт|нояб?|дек)\.?/i,wide:/^(январ[ья]|феврал[ья]|марта?|апрел[ья]|ма[йя]|июн[ья]|июл[ья]|августа?|сентябр[ья]|октябр[ья]|октябр[ья]|ноябр[ья]|декабр[ья])/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^я/i,/^ф/i,/^м/i,/^а/i,/^м/i,/^и/i,/^и/i,/^а/i,/^с/i,/^о/i,/^н/i,/^я/i],any:[/^я/i,/^ф/i,/^мар/i,/^ап/i,/^ма[йя]/i,/^июн/i,/^июл/i,/^ав/i,/^с/i,/^о/i,/^н/i,/^д/i]},defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:{narrow:/^[впсч]/i,short:/^(вс|во|пн|по|вт|ср|чт|че|пт|пя|сб|су)\.?/i,abbreviated:/^(вск|вос|пнд|пон|втр|вто|срд|сре|чтв|чет|птн|пят|суб).?/i,wide:/^(воскресень[ея]|понедельника?|вторника?|сред[аы]|четверга?|пятниц[аы]|суббот[аы])/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^в/i,/^п/i,/^в/i,/^с/i,/^ч/i,/^п/i,/^с/i],any:[/^в[ос]/i,/^п[он]/i,/^в/i,/^ср/i,/^ч/i,/^п[ят]/i,/^с[уб]/i]},defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:{narrow:/^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,abbreviated:/^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,wide:/^([дп]п|полночь|полдень|утр[оа]|день|дня|вечера?|ноч[ьи])/i},defaultMatchWidth:"wide",parsePatterns:{any:{am:/^дп/i,pm:/^пп/i,midnight:/^полн/i,noon:/^полд/i,morning:/^у/i,afternoon:/^д[ен]/i,evening:/^в/i,night:/^н/i}},defaultParseWidth:"any"})};t.default=r,e.exports=t.default},63025:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(64714)),i=o(n(54206)),u=o(n(60747)),r=o(n(23362)),l=o(n(88571));function o(e){return e&&e.__esModule?e:{default:e}}var d={code:"ru",formatDistance:a.default,formatLong:i.default,formatRelative:u.default,localize:r.default,match:l.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};t.default=d,e.exports=t.default},4731:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,i.default)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))};var a,i=(a=n(2989))&&a.__esModule?a:{default:a};e.exports=t.default}}]);