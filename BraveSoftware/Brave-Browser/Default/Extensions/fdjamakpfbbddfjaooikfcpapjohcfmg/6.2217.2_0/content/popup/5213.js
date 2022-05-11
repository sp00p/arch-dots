"use strict";(self.webpackChunk_dashlane_popup=self.webpackChunk_dashlane_popup||[]).push([[5213,7656,2665,5447,1054,8606,2045,7179,3913,3873],{47656:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth,n=e.formats[a]||e.formats[e.defaultWidth];return n}},e.exports=t.default},92665:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var n,r=a||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=r.width?String(r.width):i;n=e.formattingValues[o]||e.formattingValues[i]}else{var u=e.defaultWidth,d=r.width?String(r.width):e.defaultWidth;n=e.values[d]||e.values[u]}return n[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},35447:(e,t)=>{function a(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}function n(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=r.width,o=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],u=t.match(o);if(!u)return null;var d,l=u[0],f=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(f)?n(f,(function(e){return e.test(l)})):a(f,(function(e){return e.test(l)}));d=e.valueCallback?e.valueCallback(s):s,d=r.valueCallback?r.valueCallback(d):d;var h=t.slice(l.length);return{value:d,rest:h}}},e.exports=t.default},1054:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(e.matchPattern);if(!n)return null;var r=n[0],i=t.match(e.parsePattern);if(!i)return null;var o=e.valueCallback?e.valueCallback(i[0]):i[0];o=a.valueCallback?a.valueCallback(o):o;var u=t.slice(r.length);return{value:o,rest:u}}},e.exports=t.default},18606:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var r;n=n||{},r="string"==typeof a[e]?a[e]:1===t?a[e].one:a[e].other.replace("{{count}}",t);if(n.addSuffix)return n.comparison>0?r+" հետո":r+" առաջ";return r};var a={lessThanXSeconds:{one:"ավելի քիչ քան 1 վայրկյան",other:"ավելի քիչ քան {{count}} վայրկյան"},xSeconds:{one:"1 վայրկյան",other:"{{count}} վայրկյան"},halfAMinute:"կես րոպե",lessThanXMinutes:{one:"ավելի քիչ քան 1 րոպե",other:"ավելի քիչ քան {{count}} րոպե"},xMinutes:{one:"1 րոպե",other:"{{count}} րոպե"},aboutXHours:{one:"մոտ 1 ժամ",other:"մոտ {{count}} ժամ"},xHours:{one:"1 ժամ",other:"{{count}} ժամ"},xDays:{one:"1 օր",other:"{{count}} օր"},aboutXWeeks:{one:"մոտ 1 շաբաթ",other:"մոտ {{count}} շաբաթ"},xWeeks:{one:"1 շաբաթ",other:"{{count}} շաբաթ"},aboutXMonths:{one:"մոտ 1 ամիս",other:"մոտ {{count}} ամիս"},xMonths:{one:"1 ամիս",other:"{{count}} ամիս"},aboutXYears:{one:"մոտ 1 տարի",other:"մոտ {{count}} տարի"},xYears:{one:"1 տարի",other:"{{count}} տարի"},overXYears:{one:"ավելի քան 1 տարի",other:"ավելի քան {{count}} տարի"},almostXYears:{one:"համարյա 1 տարի",other:"համարյա {{count}} տարի"}};e.exports=t.default},22045:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=(n=a(47656))&&n.__esModule?n:{default:n};var i={date:(0,r.default)({formats:{full:"d MMMM, y, EEEE",long:"d MMMM, y",medium:"d MMM, y",short:"dd.MM.yyyy"},defaultWidth:"full"}),time:(0,r.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,r.default)({formats:{full:"{{date}} 'ժ․'{{time}}",long:"{{date}} 'ժ․'{{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};t.default=i,e.exports=t.default},27179:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n,r){return a[e]};var a={lastWeek:"'նախորդ' eeee p'֊ին'",yesterday:"'երեկ' p'֊ին'",today:"'այսօր' p'֊ին'",tomorrow:"'վաղը' p'֊ին'",nextWeek:"'հաջորդ' eeee p'֊ին'",other:"P"};e.exports=t.default},43913:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=(n=a(92665))&&n.__esModule?n:{default:n};var i={ordinalNumber:function(e,t){var a=Number(e),n=a%100;return n<10&&n%10==1?a+"֊ին":a+"֊րդ"},era:(0,r.default)({values:{narrow:["Ք","Մ"],abbreviated:["ՔԱ","ՄԹ"],wide:["Քրիստոսից առաջ","Մեր թվարկության"]},defaultWidth:"wide"}),quarter:(0,r.default)({values:{narrow:["1","2","3","4"],abbreviated:["Ք1","Ք2","Ք3","Ք4"],wide:["1֊ին քառորդ","2֊րդ քառորդ","3֊րդ քառորդ","4֊րդ քառորդ"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,r.default)({values:{narrow:["Հ","Փ","Մ","Ա","Մ","Հ","Հ","Օ","Ս","Հ","Ն","Դ"],abbreviated:["հուն","փետ","մար","ապր","մայ","հուն","հուլ","օգս","սեպ","հոկ","նոյ","դեկ"],wide:["հունվար","փետրվար","մարտ","ապրիլ","մայիս","հունիս","հուլիս","օգոստոս","սեպտեմբեր","հոկտեմբեր","նոյեմբեր","դեկտեմբեր"]},defaultWidth:"wide"}),day:(0,r.default)({values:{narrow:["Կ","Ե","Ե","Չ","Հ","Ո","Շ"],short:["կր","եր","եք","չք","հգ","ուր","շբ"],abbreviated:["կիր","երկ","երք","չոր","հնգ","ուրբ","շաբ"],wide:["կիրակի","երկուշաբթի","երեքշաբթի","չորեքշաբթի","հինգշաբթի","ուրբաթ","շաբաթ"]},defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:{narrow:{am:"a",pm:"p",midnight:"կեսգշ",noon:"կեսօր",morning:"առավոտ",afternoon:"ցերեկ",evening:"երեկո",night:"գիշեր"},abbreviated:{am:"AM",pm:"PM",midnight:"կեսգիշեր",noon:"կեսօր",morning:"առավոտ",afternoon:"ցերեկ",evening:"երեկո",night:"գիշեր"},wide:{am:"a.m.",pm:"p.m.",midnight:"կեսգիշեր",noon:"կեսօր",morning:"առավոտ",afternoon:"ցերեկ",evening:"երեկո",night:"գիշեր"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"կեսգշ",noon:"կեսօր",morning:"առավոտը",afternoon:"ցերեկը",evening:"երեկոյան",night:"գիշերը"},abbreviated:{am:"AM",pm:"PM",midnight:"կեսգիշերին",noon:"կեսօրին",morning:"առավոտը",afternoon:"ցերեկը",evening:"երեկոյան",night:"գիշերը"},wide:{am:"a.m.",pm:"p.m.",midnight:"կեսգիշերին",noon:"կեսօրին",morning:"առավոտը",afternoon:"ցերեկը",evening:"երեկոյան",night:"գիշերը"}},defaultFormattingWidth:"wide"})};t.default=i,e.exports=t.default},13873:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(1054)),r=i(a(35447));function i(e){return e&&e.__esModule?e:{default:e}}var o={ordinalNumber:(0,n.default)({matchPattern:/^(\d+)((-|֊)?(ին|րդ))?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^(Ք|Մ)/i,abbreviated:/^(Ք\.?\s?Ա\.?|Մ\.?\s?Թ\.?\s?Ա\.?|Մ\.?\s?Թ\.?|Ք\.?\s?Հ\.?)/i,wide:/^(քրիստոսից առաջ|մեր թվարկությունից առաջ|մեր թվարկության|քրիստոսից հետո)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^(ք|մ)/i]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^ք[1234]/i,wide:/^[1234]((-|֊)?(ին|րդ)) քառորդ/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,r.default)({matchPatterns:{narrow:/^[հփմաօսնդ]/i,abbreviated:/^(հուն|փետ|մար|ապր|մայ|հուն|հուլ|օգս|սեպ|հոկ|նոյ|դեկ)/i,wide:/^(հունվար|փետրվար|մարտ|ապրիլ|մայիս|հունիս|հուլիս|օգոստոս|սեպտեմբեր|հոկտեմբեր|նոյեմբեր|դեկտեմբեր)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^հ/i,/^փ/i,/^մ/i,/^ա/i,/^մ/i,/^հ/i,/^հ/i,/^օ/i,/^ս/i,/^հ/i,/^ն/i,/^դ/i],any:[/^հու/i,/^փ/i,/^մար/i,/^ա/i,/^մայ/i,/^հուն/i,/^հուլ/i,/^օ/i,/^ս/i,/^հոկ/i,/^ն/i,/^դ/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^[եչհոշկ]/i,short:/^(կր|եր|եք|չք|հգ|ուր|շբ)/i,abbreviated:/^(կիր|երկ|երք|չոր|հնգ|ուրբ|շաբ)/i,wide:/^(կիրակի|երկուշաբթի|երեքշաբթի|չորեքշաբթի|հինգշաբթի|ուրբաթ|շաբաթ)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^կ/i,/^ե/i,/^ե/i,/^չ/i,/^հ/i,/^(ո|Ո)/,/^շ/i],short:[/^կ/i,/^եր/i,/^եք/i,/^չ/i,/^հ/i,/^(ո|Ո)/,/^շ/i],abbreviated:[/^կ/i,/^երկ/i,/^երք/i,/^չ/i,/^հ/i,/^(ո|Ո)/,/^շ/i],wide:[/^կ/i,/^երկ/i,/^երե/i,/^չ/i,/^հ/i,/^(ո|Ո)/,/^շ/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{narrow:/^([ap]|կեսգշ|կեսօր|(առավոտը?|ցերեկը?|երեկո(յան)?|գիշերը?))/i,any:/^([ap]\.?\s?m\.?|կեսգիշեր(ին)?|կեսօր(ին)?|(առավոտը?|ցերեկը?|երեկո(յան)?|գիշերը?))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/կեսգիշեր/i,noon:/կեսօր/i,morning:/առավոտ/i,afternoon:/ցերեկ/i,evening:/երեկո/i,night:/գիշեր/i}},defaultParseWidth:"any"})};t.default=o,e.exports=t.default},65213:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(a(18606)),r=d(a(22045)),i=d(a(27179)),o=d(a(43913)),u=d(a(13873));function d(e){return e&&e.__esModule?e:{default:e}}var l={code:"hy",formatDistance:n.default,formatLong:r.default,formatRelative:i.default,localize:o.default,match:u.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};t.default=l,e.exports=t.default}}]);