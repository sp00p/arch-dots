"use strict";(self.webpackChunk_dashlane_popup=self.webpackChunk_dashlane_popup||[]).push([[7270,5447,1054],{35447:(a,t)=>{function e(a,t){for(var e in a)if(a.hasOwnProperty(e)&&t(a[e]))return e}function i(a,t){for(var e=0;e<a.length;e++)if(t(a[e]))return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(a){return function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.width,s=n&&a.matchPatterns[n]||a.matchPatterns[a.defaultMatchWidth],u=t.match(s);if(!u)return null;var d,l=u[0],p=n&&a.parsePatterns[n]||a.parsePatterns[a.defaultParseWidth],c=Array.isArray(p)?i(p,(function(a){return a.test(l)})):e(p,(function(a){return a.test(l)}));d=a.valueCallback?a.valueCallback(c):c,d=r.valueCallback?r.valueCallback(d):d;var o=t.slice(l.length);return{value:d,rest:o}}},a.exports=t.default},1054:(a,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(a){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.match(a.matchPattern);if(!i)return null;var r=i[0],n=t.match(a.parsePattern);if(!n)return null;var s=a.valueCallback?a.valueCallback(n[0]):n[0];s=e.valueCallback?e.valueCallback(s):s;var u=t.slice(r.length);return{value:s,rest:u}}},a.exports=t.default},7270:(a,t,e)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(e(1054)),r=n(e(35447));function n(a){return a&&a.__esModule?a:{default:a}}var s={ordinalNumber:(0,i.default)({matchPattern:/^(\d+)\./i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^(p\.m\.ē|m\.ē)/i,abbreviated:/^(p\. m\. ē\.|m\. ē\.)/i,wide:/^(pirms mūsu ēras|mūsu ērā)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^p/i,/^m/i]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234](\. cet\.)/i,wide:/^(pirma(is|jā)|otra(is|jā)|treša(is|jā)|ceturta(is|jā)) ceturksn(is|ī)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^1/i,/^2/i,/^3/i,/^4/i],abbreviated:[/^1/i,/^2/i,/^3/i,/^4/i],wide:[/^p/i,/^o/i,/^t/i,/^c/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,r.default)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(janv\.|febr\.|marts|apr\.|maijs|jūn\.|jūl\.|aug\.|sept\.|okt\.|nov\.|dec\.)/i,wide:/^(janvār(is|ī)|februār(is|ī)|mart[sā]|aprīl(is|ī)|maij[sā]|jūnij[sā]|jūlij[sā]|august[sā]|septembr(is|ī)|oktobr(is|ī)|novembr(is|ī)|decembr(is|ī))/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jūn/i,/^jūl/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^[spotc]/i,short:/^(sv|pi|o|t|c|pk|s)/i,abbreviated:/^(svētd\.|pirmd\.|otrd.\|trešd\.|ceturtd\.|piektd\.|sestd\.)/i,wide:/^(svētdien(a|ā)|pirmdien(a|ā)|otrdien(a|ā)|trešdien(a|ā)|ceturtdien(a|ā)|piektdien(a|ā)|sestdien(a|ā))/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^p/i,/^o/i,/^t/i,/^c/i,/^p/i,/^s/i],any:[/^sv/i,/^pi/i,/^o/i,/^t/i,/^c/i,/^p/i,/^se/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{narrow:/^(am|pm|pusn\.|pusd\.|rīt(s|ā)|dien(a|ā)|vakar(s|ā)|nakt(s|ī))/,abbreviated:/^(am|pm|pusn\.|pusd\.|rīt(s|ā)|pēcpusd\.|vakar(s|ā)|nakt(s|ī))/,wide:/^(am|pm|pusnakt(s|ī)|pusdienlaik(s|ā)|rīt(s|ā)|pēcpusdien(a|ā)|vakar(s|ā)|nakt(s|ī))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^am/i,pm:/^pm/i,midnight:/^pusn/i,noon:/^pusd/i,morning:/^r/i,afternoon:/^(d|pēc)/i,evening:/^v/i,night:/^n/i}},defaultParseWidth:"any"})};t.default=s,a.exports=t.default}}]);