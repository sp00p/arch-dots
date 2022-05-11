"use strict";(self.webpackChunk_dashlane_popup=self.webpackChunk_dashlane_popup||[]).push([[7729,7656,2665,5447,1054,2509,9642,338,1973,9435],{47656:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth,i=e.formats[a]||e.formats[e.defaultWidth];return i}},e.exports=t.default},92665:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var i,r=a||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var n=e.defaultFormattingWidth||e.defaultWidth,s=r.width?String(r.width):n;i=e.formattingValues[s]||e.formattingValues[n]}else{var o=e.defaultWidth,d=r.width?String(r.width):e.defaultWidth;i=e.values[d]||e.values[o]}return i[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},35447:(e,t)=>{function a(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}function i(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.width,s=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],o=t.match(s);if(!o)return null;var d,u=o[0],l=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],p=Array.isArray(l)?i(l,(function(e){return e.test(u)})):a(l,(function(e){return e.test(u)}));d=e.valueCallback?e.valueCallback(p):p,d=r.valueCallback?r.valueCallback(d):d;var f=t.slice(u.length);return{value:d,rest:f}}},e.exports=t.default},1054:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.match(e.matchPattern);if(!i)return null;var r=i[0],n=t.match(e.parsePattern);if(!n)return null;var s=e.valueCallback?e.valueCallback(n[0]):n[0];s=a.valueCallback?a.valueCallback(s):s;var o=t.slice(r.length);return{value:s,rest:o}}},e.exports=t.default},82509:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){r=r||{};var n,s=e.match(/about|over|almost|lessthan/i),o=e.replace(s,"");n="string"==typeof a[e]?a[e]:1===t?a[e].one(t,r.addSuffix,o.toLowerCase()+"_one"):a[e].other(t,r.addSuffix,o.toLowerCase()+"_other");s&&(n=i[s[0].toLowerCase()]+" "+n);if(r.addSuffix)return r.comparison>0?"po "+n:"prieš "+n;return n};var a={lessThanXSeconds:{one:r,other:d},xSeconds:{one:r,other:d},halfAMinute:"pusė minutės",lessThanXMinutes:{one:n,other:d},xMinutes:{one:n,other:d},aboutXHours:{one:n,other:d},xHours:{one:n,other:d},xDays:{one:n,other:d},aboutWeeks:{one:n,other:d},xWeeks:{one:n,other:d},aboutXMonths:{one:n,other:d},xMonths:{one:n,other:d},aboutXYears:{one:n,other:d},xYears:{one:n,other:d},overXYears:{one:n,other:d},almostXYears:{one:n,other:d}},i={xseconds_other:"sekundė_sekundžių_sekundes",xminutes_one:"minutė_minutės_minutę",xminutes_other:"minutės_minučių_minutes",xhours_one:"valanda_valandos_valandą",xhours_other:"valandos_valandų_valandas",xdays_one:"diena_dienos_dieną",xdays_other:"dienos_dienų_dienas",xweeks_one:"savaitė_savaitės_savaitę",xweeks_other:"savaitės_savaičių_savaites",xmonths_one:"mėnuo_mėnesio_mėnesį",xmonths_other:"mėnesiai_mėnesių_mėnesius",xyears_one:"metai_metų_metus",xyears_other:"metai_metų_metus",about:"apie",over:"daugiau nei",almost:"beveik",lessthan:"mažiau nei"};function r(e,t,a,i){return t?i?"kelių sekundžių":"kelias sekundes":"kelios sekundės"}function n(e,t,a,i){return t?i?o(a)[1]:o(a)[2]:o(a)[0]}function s(e){return e%10==0||e>10&&e<20}function o(e){return i[e].split("_")}function d(e,t,a,i){var r=e+" ";return 1===e?r+n(0,t,a[0],i):t?i?r+o(a)[1]:r+(s(e)?o(a)[1]:o(a)[2]):r+(s(e)?o(a)[1]:o(a)[0])}e.exports=t.default},48252:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,r=(i=a(47656))&&i.__esModule?i:{default:i};var n={date:(0,r.default)({formats:{full:"y 'm'. MMMM d 'd'., EEEE",long:"y 'm'. MMMM d 'd'.",medium:"y-MM-dd",short:"y-MM-dd"},defaultWidth:"full"}),time:(0,r.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,r.default)({formats:{full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};t.default=n,e.exports=t.default},90338:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,i,r){return a[e]};var a={lastWeek:"'Praėjusį' eeee p",yesterday:"'Vakar' p",today:"'Šiandien' p",tomorrow:"'Rytoj' p",nextWeek:"eeee p",other:"P"};e.exports=t.default},71973:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,r=(i=a(92665))&&i.__esModule?i:{default:i};var n={ordinalNumber:function(e,t){return Number(e)+"-oji"},era:(0,r.default)({values:{narrow:["pr. Kr.","po Kr."],abbreviated:["pr. Kr.","po Kr."],wide:["prieš Kristų","po Kristaus"]},defaultWidth:"wide"}),quarter:(0,r.default)({values:{narrow:["1","2","3","4"],abbreviated:["I ketv.","II ketv.","III ketv.","IV ketv."],wide:["I ketvirtis","II ketvirtis","III ketvirtis","IV ketvirtis"]},defaultWidth:"wide",formattingValues:{narrow:["1","2","3","4"],abbreviated:["I k.","II k.","III k.","IV k."],wide:["I ketvirtis","II ketvirtis","III ketvirtis","IV ketvirtis"]},defaultFormattingWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,r.default)({values:{narrow:["S","V","K","B","G","B","L","R","R","S","L","G"],abbreviated:["saus.","vas.","kov.","bal.","geg.","birž.","liep.","rugp.","rugs.","spal.","lapkr.","gruod."],wide:["sausis","vasaris","kovas","balandis","gegužė","birželis","liepa","rugpjūtis","rugsėjis","spalis","lapkritis","gruodis"]},defaultWidth:"wide",formattingValues:{narrow:["S","V","K","B","G","B","L","R","R","S","L","G"],abbreviated:["saus.","vas.","kov.","bal.","geg.","birž.","liep.","rugp.","rugs.","spal.","lapkr.","gruod."],wide:["sausio","vasario","kovo","balandžio","gegužės","birželio","liepos","rugpjūčio","rugsėjo","spalio","lapkričio","gruodžio"]},defaultFormattingWidth:"wide"}),day:(0,r.default)({values:{narrow:["S","P","A","T","K","P","Š"],short:["Sk","Pr","An","Tr","Kt","Pn","Št"],abbreviated:["sk","pr","an","tr","kt","pn","št"],wide:["sekmadienis","pirmadienis","antradienis","trečiadienis","ketvirtadienis","penktadienis","šeštadienis"]},defaultWidth:"wide",formattingValues:{narrow:["S","P","A","T","K","P","Š"],short:["Sk","Pr","An","Tr","Kt","Pn","Št"],abbreviated:["sk","pr","an","tr","kt","pn","št"],wide:["sekmadienį","pirmadienį","antradienį","trečiadienį","ketvirtadienį","penktadienį","šeštadienį"]},defaultFormattingWidth:"wide"}),dayPeriod:(0,r.default)({values:{narrow:{am:"pr. p.",pm:"pop.",midnight:"vidurnaktis",noon:"vidurdienis",morning:"rytas",afternoon:"diena",evening:"vakaras",night:"naktis"},abbreviated:{am:"priešpiet",pm:"popiet",midnight:"vidurnaktis",noon:"vidurdienis",morning:"rytas",afternoon:"diena",evening:"vakaras",night:"naktis"},wide:{am:"priešpiet",pm:"popiet",midnight:"vidurnaktis",noon:"vidurdienis",morning:"rytas",afternoon:"diena",evening:"vakaras",night:"naktis"}},defaultWidth:"wide",formattingValues:{narrow:{am:"pr. p.",pm:"pop.",midnight:"vidurnaktis",noon:"perpiet",morning:"rytas",afternoon:"popietė",evening:"vakaras",night:"naktis"},abbreviated:{am:"priešpiet",pm:"popiet",midnight:"vidurnaktis",noon:"perpiet",morning:"rytas",afternoon:"popietė",evening:"vakaras",night:"naktis"},wide:{am:"priešpiet",pm:"popiet",midnight:"vidurnaktis",noon:"perpiet",morning:"rytas",afternoon:"popietė",evening:"vakaras",night:"naktis"}},defaultFormattingWidth:"wide"})};t.default=n,e.exports=t.default},49435:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(1054)),r=n(a(35447));function n(e){return e&&e.__esModule?e:{default:e}}var s={ordinalNumber:(0,i.default)({matchPattern:/^(\d+)(-oji)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^p(r|o)\.?\s?(kr\.?|me)/i,abbreviated:/^(pr\.\s?(kr\.|m\.\s?e\.)|po\s?kr\.|mūsų eroje)/i,wide:/^(prieš Kristų|prieš mūsų erą|po Kristaus|mūsų eroje)/i},defaultMatchWidth:"wide",parsePatterns:{wide:[/prieš/i,/(po|mūsų)/i],any:[/^pr/i,/^(po|m)/i]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^([1234])/i,abbreviated:/^(I|II|III|IV)\s?ketv?\.?/i,wide:/^(I|II|III|IV)\s?ketvirtis/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/1/i,/2/i,/3/i,/4/i],any:[/I$/i,/II$/i,/III/i,/IV/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,r.default)({matchPatterns:{narrow:/^[svkbglr]/i,abbreviated:/^(saus\.|vas\.|kov\.|bal\.|geg\.|birž\.|liep\.|rugp\.|rugs\.|spal\.|lapkr\.|gruod\.)/i,wide:/^(sausi(s|o)|vasari(s|o)|kov(a|o)s|balandž?i(s|o)|gegužės?|birželi(s|o)|liep(a|os)|rugpjū(t|č)i(s|o)|rugsėj(is|o)|spali(s|o)|lapkri(t|č)i(s|o)|gruodž?i(s|o))/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^v/i,/^k/i,/^b/i,/^g/i,/^b/i,/^l/i,/^r/i,/^r/i,/^s/i,/^l/i,/^g/i],any:[/^saus/i,/^vas/i,/^kov/i,/^bal/i,/^geg/i,/^birž/i,/^liep/i,/^rugp/i,/^rugs/i,/^spal/i,/^lapkr/i,/^gruod/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^[spatkš]/i,short:/^(sk|pr|an|tr|kt|pn|št)/i,abbreviated:/^(sk|pr|an|tr|kt|pn|št)/i,wide:/^(sekmadien(is|į)|pirmadien(is|į)|antradien(is|į)|trečiadien(is|į)|ketvirtadien(is|į)|penktadien(is|į)|šeštadien(is|į))/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^p/i,/^a/i,/^t/i,/^k/i,/^p/i,/^š/i],wide:[/^se/i,/^pi/i,/^an/i,/^tr/i,/^ke/i,/^pe/i,/^še/i],any:[/^sk/i,/^pr/i,/^an/i,/^tr/i,/^kt/i,/^pn/i,/^št/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{narrow:/^(pr.\s?p.|pop.|vidurnaktis|(vidurdienis|perpiet)|rytas|(diena|popietė)|vakaras|naktis)/i,any:/^(priešpiet|popiet$|vidurnaktis|(vidurdienis|perpiet)|rytas|(diena|popietė)|vakaras|naktis)/i},defaultMatchWidth:"any",parsePatterns:{narrow:{am:/^pr/i,pm:/^pop./i,midnight:/^vidurnaktis/i,noon:/^(vidurdienis|perp)/i,morning:/rytas/i,afternoon:/(die|popietė)/i,evening:/vakaras/i,night:/naktis/i},any:{am:/^pr/i,pm:/^popiet$/i,midnight:/^vidurnaktis/i,noon:/^(vidurdienis|perp)/i,morning:/rytas/i,afternoon:/(die|popietė)/i,evening:/vakaras/i,night:/naktis/i}},defaultParseWidth:"any"})};t.default=s,e.exports=t.default},27729:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=d(a(82509)),r=d(a(48252)),n=d(a(90338)),s=d(a(71973)),o=d(a(49435));function d(e){return e&&e.__esModule?e:{default:e}}var u={code:"lt",formatDistance:i.default,formatLong:r.default,formatRelative:n.default,localize:s.default,match:o.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=u,e.exports=t.default}}]);