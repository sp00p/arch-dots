"use strict";(self.webpackChunk_dashlane_popup=self.webpackChunk_dashlane_popup||[]).push([[1178,5447,1054],{35447:(e,t)=>{function a(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}function r(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=i.width,u=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],s=t.match(u);if(!s)return null;var d,l=s[0],o=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],h=Array.isArray(o)?r(o,(function(e){return e.test(l)})):a(o,(function(e){return e.test(l)}));d=e.valueCallback?e.valueCallback(h):h,d=i.valueCallback?i.valueCallback(d):d;var f=t.slice(l.length);return{value:d,rest:f}}},e.exports=t.default},1054:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.match(e.matchPattern);if(!r)return null;var i=r[0],n=t.match(e.parsePattern);if(!n)return null;var u=e.valueCallback?e.valueCallback(n[0]):n[0];u=a.valueCallback?a.valueCallback(u):u;var s=t.slice(i.length);return{value:u,rest:s}}},e.exports=t.default},61178:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(1054)),i=n(a(35447));function n(e){return e&&e.__esModule?e:{default:e}}var u={ordinalNumber:(0,r.default)({matchPattern:/^(\d+)(\.)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,i.default)({matchPatterns:{narrow:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,abbreviated:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,wide:/^(viru Christus|virun eiser Zäitrechnung|no Christus|eiser Zäitrechnung)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^v/i,/^n/i]},defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? Quartal/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,i.default)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mäe|abr|mee|jun|jul|aug|sep|okt|nov|dez)/i,wide:/^(januar|februar|mäerz|abrëll|mee|juni|juli|august|september|oktober|november|dezember)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mä/i,/^ab/i,/^me/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:{narrow:/^[smdf]/i,short:/^(so|mé|dë|më|do|fr|sa)/i,abbreviated:/^(son?|méi?|dën?|mët?|don?|fre?|sam?)\.?/i,wide:/^(sonndeg|méindeg|dënschdeg|mëttwoch|donneschdeg|freideg|samschdeg)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^so/i,/^mé/i,/^dë/i,/^më/i,/^do/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:{narrow:/^(mo\.?|nomë\.?|Mëtternuecht|mëttes|moies|nomëttes|owes|nuets)/i,abbreviated:/^(moi\.?|nomët\.?|Mëtternuecht|mëttes|moies|nomëttes|owes|nuets)/i,wide:/^(moies|nomëttes|Mëtternuecht|mëttes|moies|nomëttes|owes|nuets)/i},defaultMatchWidth:"wide",parsePatterns:{any:{am:/^m/i,pm:/^n/i,midnight:/^Mëtter/i,noon:/^mëttes/i,morning:/moies/i,afternoon:/nomëttes/i,evening:/owes/i,night:/nuets/i}},defaultParseWidth:"any"})};t.default=u,e.exports=t.default}}]);