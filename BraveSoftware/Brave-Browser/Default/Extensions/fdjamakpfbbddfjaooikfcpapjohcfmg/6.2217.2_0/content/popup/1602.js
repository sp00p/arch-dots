"use strict";(self.webpackChunk_dashlane_popup=self.webpackChunk_dashlane_popup||[]).push([[1602,7656,2665,5447,1054,3952,9726,9590,798,1252],{47656:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth,r=e.formats[a]||e.formats[e.defaultWidth];return r}},e.exports=t.default},92665:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var r,i=a||{};if("formatting"===(i.context?String(i.context):"standalone")&&e.formattingValues){var n=e.defaultFormattingWidth||e.defaultWidth,u=i.width?String(i.width):n;r=e.formattingValues[u]||e.formattingValues[n]}else{var d=e.defaultWidth,o=i.width?String(i.width):e.defaultWidth;r=e.values[o]||e.values[d]}return r[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},35447:(e,t)=>{function a(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}function r(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=i.width,u=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],d=t.match(u);if(!d)return null;var o,l=d[0],s=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],m=Array.isArray(s)?r(s,(function(e){return e.test(l)})):a(s,(function(e){return e.test(l)}));o=e.valueCallback?e.valueCallback(m):m,o=i.valueCallback?i.valueCallback(o):o;var f=t.slice(l.length);return{value:o,rest:f}}},e.exports=t.default},1054:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.match(e.matchPattern);if(!r)return null;var i=r[0],n=t.match(e.parsePattern);if(!n)return null;var u=e.valueCallback?e.valueCallback(n[0]):n[0];u=a.valueCallback?a.valueCallback(u):u;var d=t.slice(i.length);return{value:u,rest:d}}},e.exports=t.default},83952:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){var i;r=r||{},i="string"==typeof a[e]?a[e]:1===t?a[e].one:a[e].other.replace("{{count}}",t);if(r.addSuffix)return r.comparison>0?"dans "+i:"il y a "+i;return i};var a={lessThanXSeconds:{one:"moins d’une seconde",other:"moins de {{count}} secondes"},xSeconds:{one:"1 seconde",other:"{{count}} secondes"},halfAMinute:"30 secondes",lessThanXMinutes:{one:"moins d’une minute",other:"moins de {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"environ 1 heure",other:"environ {{count}} heures"},xHours:{one:"1 heure",other:"{{count}} heures"},xDays:{one:"1 jour",other:"{{count}} jours"},aboutXWeeks:{one:"environ 1 semaine",other:"environ {{count}} semaines"},xWeeks:{one:"1 semaine",other:"{{count}} semaines"},aboutXMonths:{one:"environ 1 mois",other:"environ {{count}} mois"},xMonths:{one:"1 mois",other:"{{count}} mois"},aboutXYears:{one:"environ 1 an",other:"environ {{count}} ans"},xYears:{one:"1 an",other:"{{count}} ans"},overXYears:{one:"plus d’un an",other:"plus de {{count}} ans"},almostXYears:{one:"presqu’un an",other:"presque {{count}} ans"}};e.exports=t.default},9726:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,i=(r=a(47656))&&r.__esModule?r:{default:r};var n={date:(0,i.default)({formats:{full:"EEEE d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"dd/MM/y"},defaultWidth:"full"}),time:(0,i.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,i.default)({formats:{full:"{{date}} 'à' {{time}}",long:"{{date}} 'à' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};t.default=n,e.exports=t.default},79590:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r,i){return a[e]};var a={lastWeek:"eeee 'dernier à' p",yesterday:"'hier à' p",today:"'aujourd’hui à' p",tomorrow:"'demain à' p'",nextWeek:"eeee 'prochain à' p",other:"P"};e.exports=t.default},90798:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,i=(r=a(92665))&&r.__esModule?r:{default:r};var n={ordinalNumber:function(e,t){var a=Number(e),r=String((t||{}).unit);return 0===a?a:a+("year"===r||"hour"===r||"week"===r?1===a?"ère":"ème":1===a?"er":"ème")},era:(0,i.default)({values:{narrow:["av. J.-C","ap. J.-C"],abbreviated:["av. J.-C","ap. J.-C"],wide:["avant Jésus-Christ","après Jésus-Christ"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["T1","T2","T3","T4"],abbreviated:["1er trim.","2ème trim.","3ème trim.","4ème trim."],wide:["1er trimestre","2ème trimestre","3ème trimestre","4ème trimestre"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,i.default)({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc."],wide:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["D","L","M","M","J","V","S"],short:["di","lu","ma","me","je","ve","sa"],abbreviated:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],wide:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"mat.",afternoon:"ap.m.",evening:"soir",night:"mat."},abbreviated:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"matin",afternoon:"après-midi",evening:"soir",night:"matin"},wide:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"du matin",afternoon:"de l’après-midi",evening:"du soir",night:"du matin"}},defaultWidth:"wide"})};t.default=n,e.exports=t.default},1252:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(1054)),i=n(a(35447));function n(e){return e&&e.__esModule?e:{default:e}}var u={ordinalNumber:(0,r.default)({matchPattern:/^(\d+)(ième|ère|ème|er|e)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,i.default)({matchPatterns:{narrow:/^(av\.J\.C|ap\.J\.C|ap\.J\.-C)/i,abbreviated:/^(av\.J\.-C|av\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i,wide:/^(avant Jésus-Christ|après Jésus-Christ)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^av/i,/^ap/i]},defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^t[1234]/i,wide:/^[1234](er|ème|e)? trimestre/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,i.default)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(janv|févr|mars|avr|mai|juin|juill|juil|août|sept|oct|nov|déc)\.?/i,wide:/^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^av/i,/^ma/i,/^juin/i,/^juil/i,/^ao/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:{narrow:/^[lmjvsd]/i,short:/^(di|lu|ma|me|je|ve|sa)/i,abbreviated:/^(dim|lun|mar|mer|jeu|ven|sam)\.?/i,wide:/^(dimanche|lundi|mardi|mercredi|jeudi|vendredi|samedi)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^di/i,/^lu/i,/^ma/i,/^me/i,/^je/i,/^ve/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:{narrow:/^(a|p|minuit|midi|mat\.?|ap\.?m\.?|soir|nuit)/i,any:/^([ap]\.?\s?m\.?|du matin|de l'après[-\s]midi|du soir|de la nuit)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^min/i,noon:/^mid/i,morning:/mat/i,afternoon:/ap/i,evening:/soir/i,night:/nuit/i}},defaultParseWidth:"any"})};t.default=u,e.exports=t.default},41602:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(a(83952)),i=o(a(9726)),n=o(a(79590)),u=o(a(90798)),d=o(a(1252));function o(e){return e&&e.__esModule?e:{default:e}}var l={code:"fr",formatDistance:r.default,formatLong:i.default,formatRelative:n.default,localize:u.default,match:d.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=l,e.exports=t.default}}]);