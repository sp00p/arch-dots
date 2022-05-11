"use strict";(self.webpackChunk_dashlane_popup=self.webpackChunk_dashlane_popup||[]).push([[3415,7656,2665,5447,1054,7756,5740,9503,7573,3109],{47656:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth,o=e.formats[a]||e.formats[e.defaultWidth];return o}},e.exports=t.default},92665:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var o,n=a||{};if("formatting"===(n.context?String(n.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,r=n.width?String(n.width):i;o=e.formattingValues[r]||e.formattingValues[i]}else{var u=e.defaultWidth,d=n.width?String(n.width):e.defaultWidth;o=e.values[d]||e.values[u]}return o[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},35447:(e,t)=>{function a(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}function o(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.width,r=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],u=t.match(r);if(!u)return null;var d,s=u[0],l=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth],p=Array.isArray(l)?o(l,(function(e){return e.test(s)})):a(l,(function(e){return e.test(s)}));d=e.valueCallback?e.valueCallback(p):p,d=n.valueCallback?n.valueCallback(d):d;var f=t.slice(s.length);return{value:d,rest:f}}},e.exports=t.default},1054:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.match(e.matchPattern);if(!o)return null;var n=o[0],i=t.match(e.parsePattern);if(!i)return null;var r=e.valueCallback?e.valueCallback(i[0]):i[0];r=a.valueCallback?a.valueCallback(r):r;var u=t.slice(n.length);return{value:r,rest:u}}},e.exports=t.default},77756:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,o){var n;o=o||{},n="string"==typeof a[e]?a[e]:1===t?o.addSuffix?o.comparison>0?a[e].one.withPrepositionIn:a[e].one.withPrepositionAgo:a[e].one.standalone:t%10>1&&t%10<5&&"1"!==String(t).substr(-2,1)?a[e].dual.replace("{{count}}",t):a[e].other.replace("{{count}}",t);if(o.addSuffix)return o.comparison>0?"za "+n:"prije "+n;return n};var a={lessThanXSeconds:{one:{standalone:"manje od 1 sekunde",withPrepositionAgo:"manje od 1 sekunde",withPrepositionIn:"manje od 1 sekundu"},dual:"manje od {{count}} sekunde",other:"manje od {{count}} sekundi"},xSeconds:{one:{standalone:"1 sekunda",withPrepositionAgo:"1 sekunde",withPrepositionIn:"1 sekundu"},dual:"{{count}} sekunde",other:"{{count}} sekundi"},halfAMinute:"pola minute",lessThanXMinutes:{one:{standalone:"manje od 1 minute",withPrepositionAgo:"manje od 1 minute",withPrepositionIn:"manje od 1 minutu"},dual:"manje od {{count}} minute",other:"manje od {{count}} minuta"},xMinutes:{one:{standalone:"1 minuta",withPrepositionAgo:"1 minute",withPrepositionIn:"1 minutu"},dual:"{{count}} minute",other:"{{count}} minuta"},aboutXHours:{one:{standalone:"oko 1 sat",withPrepositionAgo:"oko 1 sat",withPrepositionIn:"oko 1 sat"},dual:"oko {{count}} sata",other:"oko {{count}} sati"},xHours:{one:{standalone:"1 sat",withPrepositionAgo:"1 sat",withPrepositionIn:"1 sat"},dual:"{{count}} sata",other:"{{count}} sati"},xDays:{one:{standalone:"1 dan",withPrepositionAgo:"1 dan",withPrepositionIn:"1 dan"},dual:"{{count}} dana",other:"{{count}} dana"},aboutXWeeks:{one:{standalone:"oko 1 tjedan",withPrepositionAgo:"oko 1 tjedan",withPrepositionIn:"oko 1 tjedan"},dual:"oko {{count}} tjedna",other:"oko {{count}} tjedana"},xWeeks:{one:{standalone:"1 tjedan",withPrepositionAgo:"1 tjedan",withPrepositionIn:"1 tjedan"},dual:"{{count}} tjedna",other:"{{count}} tjedana"},aboutXMonths:{one:{standalone:"oko 1 mjesec",withPrepositionAgo:"oko 1 mjesec",withPrepositionIn:"oko 1 mjesec"},dual:"oko {{count}} mjeseca",other:"oko {{count}} mjeseci"},xMonths:{one:{standalone:"1 mjesec",withPrepositionAgo:"1 mjesec",withPrepositionIn:"1 mjesec"},dual:"{{count}} mjeseca",other:"{{count}} mjeseci"},aboutXYears:{one:{standalone:"oko 1 godinu",withPrepositionAgo:"oko 1 godinu",withPrepositionIn:"oko 1 godinu"},dual:"oko {{count}} godine",other:"oko {{count}} godina"},xYears:{one:{standalone:"1 godina",withPrepositionAgo:"1 godine",withPrepositionIn:"1 godinu"},dual:"{{count}} godine",other:"{{count}} godina"},overXYears:{one:{standalone:"preko 1 godinu",withPrepositionAgo:"preko 1 godinu",withPrepositionIn:"preko 1 godinu"},dual:"preko {{count}} godine",other:"preko {{count}} godina"},almostXYears:{one:{standalone:"gotovo 1 godinu",withPrepositionAgo:"gotovo 1 godinu",withPrepositionIn:"gotovo 1 godinu"},dual:"gotovo {{count}} godine",other:"gotovo {{count}} godina"}};e.exports=t.default},85740:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,n=(o=a(47656))&&o.__esModule?o:{default:o};var i={date:(0,n.default)({formats:{full:"EEEE, d. MMMM y.",long:"d. MMMM y.",medium:"d. MMM y.",short:"dd. MM. y."},defaultWidth:"full"}),time:(0,n.default)({formats:{full:"HH:mm:ss (zzzz)",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,n.default)({formats:{full:"{{date}} 'u' {{time}}",long:"{{date}} 'u' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};t.default=i,e.exports=t.default},59503:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,o,n){var i=a[e];if("function"==typeof i)return i(t);return i};var a={lastWeek:function(e){switch(e.getUTCDay()){case 0:return"'prošlu nedjelju u' p";case 3:return"'prošlu srijedu u' p";case 6:return"'prošlu subotu u' p";default:return"'prošli' EEEE 'u' p"}},yesterday:"'jučer u' p",today:"'danas u' p",tomorrow:"'sutra u' p",nextWeek:function(e){switch(e.getUTCDay()){case 0:return"'iduću nedjelju u' p";case 3:return"'iduću srijedu u' p";case 6:return"'iduću subotu u' p";default:return"'prošli' EEEE 'u' p"}},other:"P"};e.exports=t.default},7573:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,n=(o=a(92665))&&o.__esModule?o:{default:o};var i={ordinalNumber:function(e){var t=Number(e);return String(t).concat(".")},era:(0,n.default)({values:{narrow:["pr.n.e.","AD"],abbreviated:["pr. Kr.","po. Kr."],wide:["Prije Krista","Poslije Krista"]},defaultWidth:"wide"}),quarter:(0,n.default)({values:{narrow:["1.","2.","3.","4."],abbreviated:["1. kv.","2. kv.","3. kv.","4. kv."],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,n.default)({values:{narrow:["1.","2.","3.","4.","5.","6.","7.","8.","9.","10.","11.","12."],abbreviated:["sij","velj","ožu","tra","svi","lip","srp","kol","ruj","lis","stu","pro"],wide:["siječanj","veljača","ožujak","travanj","svibanj","lipanj","srpanj","kolovoz","rujan","listopad","studeni","prosinac"]},defaultWidth:"wide",formattingValues:{narrow:["1.","2.","3.","4.","5.","6.","7.","8.","9.","10.","11.","12."],abbreviated:["sij","velj","ožu","tra","svi","lip","srp","kol","ruj","lis","stu","pro"],wide:["siječnja","veljače","ožujka","travnja","svibnja","lipnja","srpnja","kolovoza","rujna","listopada","studenog","prosinca"]},defaultFormattingWidth:"wide"}),day:(0,n.default)({values:{narrow:["N","P","U","S","Č","P","S"],short:["ned","pon","uto","sri","čet","pet","sub"],abbreviated:["ned","pon","uto","sri","čet","pet","sub"],wide:["nedjelja","ponedjeljak","utorak","srijeda","četvrtak","petak","subota"]},defaultWidth:"wide"}),dayPeriod:(0,n.default)({values:{narrow:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutro",afternoon:"popodne",evening:"navečer",night:"noću"},abbreviated:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutro",afternoon:"popodne",evening:"navečer",night:"noću"},wide:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutro",afternoon:"poslije podne",evening:"navečer",night:"noću"}},defaultWidth:"wide",formattingValues:{narrow:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutro",afternoon:"popodne",evening:"navečer",night:"noću"},abbreviated:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutro",afternoon:"popodne",evening:"navečer",night:"noću"},wide:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutro",afternoon:"poslije podne",evening:"navečer",night:"noću"}},defaultFormattingWidth:"wide"})};t.default=i,e.exports=t.default},53109:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(35447));function n(e){return e&&e.__esModule?e:{default:e}}var i={ordinalNumber:(0,n(a(1054)).default)({matchPattern:/^(\d+)\./i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,o.default)({matchPatterns:{narrow:/^(pr\.n\.e\.|AD)/i,abbreviated:/^(pr\.\s?Kr\.|po\.\s?Kr\.)/i,wide:/^(Prije Krista|prije nove ere|Poslije Krista|nova era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^pr/i,/^(po|nova)/i]},defaultParseWidth:"any"}),quarter:(0,o.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234]\.\s?kv\.?/i,wide:/^[1234]\. kvartal/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,o.default)({matchPatterns:{narrow:/^(10|11|12|[123456789])\./i,abbreviated:/^(sij|velj|(ožu|ozu)|tra|svi|lip|srp|kol|ruj|lis|stu|pro)/i,wide:/^((siječanj|siječnja|sijecanj|sijecnja)|(veljača|veljače|veljaca|veljace)|(ožujak|ožujka|ozujak|ozujka)|(travanj|travnja)|(svibanj|svibnja)|(lipanj|lipnja)|(srpanj|srpnja)|(kolovoz|kolovoza)|(rujan|rujna)|(listopad|listopada)|(studeni|studenog)|(prosinac|prosinca))/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/(10|11|12|[123456789])/i],abbreviated:[/^sij/i,/^velj/i,/^(ožu|ozu)/i,/^tra/i,/^svi/i,/^lip/i,/^srp/i,/^kol/i,/^ruj/i,/^lis/i,/^stu/i,/^pro/i],wide:[/^sij/i,/^velj/i,/^(ožu|ozu)/i,/^tra/i,/^svi/i,/^lip/i,/^srp/i,/^kol/i,/^ruj/i,/^lis/i,/^stu/i,/^pro/i]},defaultParseWidth:"wide"}),day:(0,o.default)({matchPatterns:{narrow:/^[npusčc]/i,short:/^(ned|pon|uto|sri|(čet|cet)|pet|sub)/i,abbreviated:/^(ned|pon|uto|sri|(čet|cet)|pet|sub)/i,wide:/^(nedjelja|ponedjeljak|utorak|srijeda|(četvrtak|cetvrtak)|petak|subota)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:(0,o.default)({matchPatterns:{any:/^(am|pm|ponoc|ponoć|(po)?podne|navecer|navečer|noću|poslije podne|ujutro)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^pono/i,noon:/^pod/i,morning:/jutro/i,afternoon:/(poslije\s|po)+podne/i,evening:/(navece|naveče)/i,night:/(nocu|noću)/i}},defaultParseWidth:"any"})};t.default=i,e.exports=t.default},73415:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=d(a(77756)),n=d(a(85740)),i=d(a(59503)),r=d(a(7573)),u=d(a(53109));function d(e){return e&&e.__esModule?e:{default:e}}var s={code:"hr",formatDistance:o.default,formatLong:n.default,formatRelative:i.default,localize:r.default,match:u.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};t.default=s,e.exports=t.default}}]);