"use strict";(self.webpackChunk_dashlane_popup=self.webpackChunk_dashlane_popup||[]).push([[4901,7656,2665,5447,1054,1905,2441,9864,9038,6951],{47656:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=a.width?String(a.width):e.defaultWidth,n=e.formats[t]||e.formats[e.defaultWidth];return n}},e.exports=a.default},92665:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a,t){var n,i=t||{};if("formatting"===(i.context?String(i.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,d=i.width?String(i.width):r;n=e.formattingValues[d]||e.formattingValues[r]}else{var o=e.defaultWidth,u=i.width?String(i.width):e.defaultWidth;n=e.values[u]||e.values[o]}return n[e.argumentCallback?e.argumentCallback(a):a]}},e.exports=a.default},35447:(e,a)=>{function t(e,a){for(var t in e)if(e.hasOwnProperty(t)&&a(e[t]))return t}function n(e,a){for(var t=0;t<e.length;t++)if(a(e[t]))return t}Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=i.width,d=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],o=a.match(d);if(!o)return null;var u,l=o[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],m=Array.isArray(s)?n(s,(function(e){return e.test(l)})):t(s,(function(e){return e.test(l)}));u=e.valueCallback?e.valueCallback(m):m,u=i.valueCallback?i.valueCallback(u):u;var f=a.slice(l.length);return{value:u,rest:f}}},e.exports=a.default},1054:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a.match(e.matchPattern);if(!n)return null;var i=n[0],r=a.match(e.parsePattern);if(!r)return null;var d=e.valueCallback?e.valueCallback(r[0]):r[0];d=t.valueCallback?t.valueCallback(d):d;var o=a.slice(i.length);return{value:d,rest:o}}},e.exports=a.default},31905:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,a,n){var i;n=n||{},i="string"==typeof t[e]?t[e]:1===a?t[e].one:t[e].other.replace("{{count}}",a);if(n.addSuffix)return n.comparison>0?"nan "+i:"sa fè "+i;return i};var t={lessThanXSeconds:{one:"mwens pase yon segond",other:"mwens pase {{count}} segond"},xSeconds:{one:"1 segond",other:"{{count}} segond"},halfAMinute:"30 segond",lessThanXMinutes:{one:"mwens pase yon minit",other:"mwens pase {{count}} minit"},xMinutes:{one:"1 minit",other:"{{count}} minit"},aboutXHours:{one:"anviwon inè",other:"anviwon {{count}} è"},xHours:{one:"1 lè",other:"{{count}} lè"},xDays:{one:"1 jou",other:"{{count}} jou"},aboutXWeeks:{one:"anviwon 1 semèn",other:"anviwon {{count}} semèn"},xWeeks:{one:"1 semèn",other:"{{count}} semèn"},aboutXMonths:{one:"anviwon 1 mwa",other:"anviwon {{count}} mwa"},xMonths:{one:"1 mwa",other:"{{count}} mwa"},aboutXYears:{one:"anviwon 1 an",other:"anviwon {{count}} an"},xYears:{one:"1 an",other:"{{count}} an"},overXYears:{one:"plis pase 1 an",other:"plis pase {{count}} an"},almostXYears:{one:"prèske 1 an",other:"prèske {{count}} an"}};e.exports=a.default},82441:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n,i=(n=t(47656))&&n.__esModule?n:{default:n};var r={date:(0,i.default)({formats:{full:"EEEE d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"dd/MM/y"},defaultWidth:"full"}),time:(0,i.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,i.default)({formats:{full:"{{date}} 'nan lè' {{time}}",long:"{{date}} 'nan lè' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};a.default=r,e.exports=a.default},59864:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,a,n,i){return t[e]};var t={lastWeek:"eeee 'pase nan lè' p",yesterday:"'yè nan lè' p",today:"'jodi a' p",tomorrow:"'demen nan lè' p'",nextWeek:"eeee 'pwochen nan lè' p",other:"P"};e.exports=a.default},69038:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n,i=(n=t(92665))&&n.__esModule?n:{default:n};var r={ordinalNumber:function(e,a){var t=Number(e);return String((a||{}).unit),0===t?t:t+(1===t?"ye":"yèm")},era:(0,i.default)({values:{narrow:["av. J.-K","ap. J.-K"],abbreviated:["av. J.-K","ap. J.-K"],wide:["anvan Jezi Kris","apre Jezi Kris"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["T1","T2","T3","T4"],abbreviated:["1ye trim.","2yèm trim.","3yèm trim.","4yèm trim."],wide:["1ye trimès","2yèm trimès","3yèm trimès","4yèm trimès"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,i.default)({values:{narrow:["J","F","M","A","M","J","J","O","S","O","N","D"],abbreviated:["janv.","fevr.","mas","avr.","me","jen","jiyè","out","sept.","okt.","nov.","des."],wide:["janvye","fevrye","mas","avril","me","jen","jiyè","out","septanm","oktòb","novanm","desanm"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["D","L","M","M","J","V","S"],short:["di","le","ma","mè","je","va","sa"],abbreviated:["dim.","len.","mad.","mèk.","jed.","van.","sam."],wide:["dimanch","lendi","madi","mèkredi","jedi","vandredi","samdi"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"AM",pm:"PM",midnight:"minwit",noon:"midi",morning:"mat.",afternoon:"ap.m.",evening:"swa",night:"mat."},abbreviated:{am:"AM",pm:"PM",midnight:"minwit",noon:"midi",morning:"maten",afternoon:"aprèmidi",evening:"swa",night:"maten"},wide:{am:"AM",pm:"PM",midnight:"minwit",noon:"midi",morning:"nan maten",afternoon:"nan aprèmidi",evening:"nan aswè",night:"nan maten"}},defaultWidth:"wide"})};a.default=r,e.exports=a.default},86951:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=r(t(1054)),i=r(t(35447));function r(e){return e&&e.__esModule?e:{default:e}}var d={ordinalNumber:(0,n.default)({matchPattern:/^(\d+)(ye|yèm)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,i.default)({matchPatterns:{narrow:/^(av\.J\.K|ap\.J\.K|ap\.J\.-K)/i,abbreviated:/^(av\.J\.-K|av\.J-K|apr\.J\.-K|apr\.J-K|ap\.J-K)/i,wide:/^(avan Jezi Kris|apre Jezi Kris)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^av/i,/^ap/i]},defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^t[1234]/i,wide:/^[1234](ye|yèm)? trimès/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,i.default)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(janv|fevr|mas|avr|me|jen|jiyè|out|sept|okt|nov|des)\.?/i,wide:/^(janvye|fevrye|mas|avril|me|jen|jiyè|out|septanm|oktòb|novanm|desanm)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^o/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^ma/i,/^av/i,/^me/i,/^je/i,/^ji/i,/^ou/i,/^s/i,/^ok/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:{narrow:/^[lmjvsd]/i,short:/^(di|le|ma|me|je|va|sa)/i,abbreviated:/^(dim|len|mad|mèk|jed|van|sam)\.?/i,wide:/^(dimanch|lendi|madi|mèkredi|jedi|vandredi|samdi)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^di/i,/^le/i,/^ma/i,/^mè/i,/^je/i,/^va/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:{narrow:/^(a|p|minwit|midi|mat\.?|ap\.?m\.?|swa)/i,any:/^([ap]\.?\s?m\.?|nan maten|nan aprèmidi|nan aswè)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^min/i,noon:/^mid/i,morning:/mat/i,afternoon:/ap/i,evening:/sw/i,night:/nwit/i}},defaultParseWidth:"any"})};a.default=d,e.exports=a.default},94901:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=u(t(31905)),i=u(t(82441)),r=u(t(59864)),d=u(t(69038)),o=u(t(86951));function u(e){return e&&e.__esModule?e:{default:e}}var l={code:"ht",formatDistance:n.default,formatLong:i.default,formatRelative:r.default,localize:d.default,match:o.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};a.default=l,e.exports=a.default}}]);