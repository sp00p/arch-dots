"use strict";(self.webpackChunk_dashlane_popup=self.webpackChunk_dashlane_popup||[]).push([[9378,5447,1054],{35447:(a,e)=>{function t(a,e){for(var t in a)if(a.hasOwnProperty(t)&&e(a[t]))return t}function i(a,e){for(var t=0;t<a.length;t++)if(e(a[t]))return t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.width,l=n&&a.matchPatterns[n]||a.matchPatterns[a.defaultMatchWidth],u=e.match(l);if(!u)return null;var d,s=u[0],f=n&&a.parsePatterns[n]||a.parsePatterns[a.defaultParseWidth],c=Array.isArray(f)?i(f,(function(a){return a.test(s)})):t(f,(function(a){return a.test(s)}));d=a.valueCallback?a.valueCallback(c):c,d=r.valueCallback?r.valueCallback(d):d;var h=e.slice(s.length);return{value:d,rest:h}}},a.exports=e.default},1054:(a,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.match(a.matchPattern);if(!i)return null;var r=i[0],n=e.match(a.parsePattern);if(!n)return null;var l=a.valueCallback?a.valueCallback(n[0]):n[0];l=t.valueCallback?t.valueCallback(l):l;var u=e.slice(r.length);return{value:l,rest:u}}},a.exports=e.default},52724:(a,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(t(1054)),r=n(t(35447));function n(a){return a&&a.__esModule?a:{default:a}}var l={ordinalNumber:(0,i.default)({matchPattern:/^(\d+)(-?(е|й|є|а|я))?/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^((до )?н\.?\s?е\.?)/i,abbreviated:/^((до )?н\.?\s?е\.?)/i,wide:/^(до нашої ери|нашої ери|наша ера)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^д/i,/^н/i]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234](-?[иі]?й?)? кв.?/i,wide:/^[1234](-?[иі]?й?)? квартал/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,r.default)({matchPatterns:{narrow:/^[слбктчвжг]/i,abbreviated:/^(січ|лют|бер|берез|кві|трав?|чер|лип|сер|вер|жов|лис(топ)?|груд)\.?/i,wide:/^(січень|січня|лютий|лютого|березень|березня|квітень|квітня|травень|травня|липень|липня|серпень|серпня|вересень|вересня|жовтень|жовтня|листопада?|грудень|грудня)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^с/i,/^л/i,/^б/i,/^к/i,/^т/i,/^ч/i,/^л/i,/^с/i,/^в/i,/^ж/i,/^л/i,/^г/i],any:[/^сі/i,/^лю/i,/^б/i,/^к/i,/^т/i,/^ч/i,/^лип/i,/^се/i,/^в/i,/^ж/i,/^лис/i,/^г/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^[нпвсч]/i,short:/^(нд|пн|вт|ср|чт|пт|сб)\.?/i,abbreviated:/^(нед|пон|вів|сер|че?тв|птн?|суб)\.?/i,wide:/^(неділ[яі]|понеділ[ок][ка]|вівтор[ок][ка]|серед[аи]|четвер(га)?|п\W*?ятниц[яі]|субот[аи])/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^н/i,/^п/i,/^в/i,/^с/i,/^ч/i,/^п/i,/^с/i],any:[/^н/i,/^п[он]/i,/^в/i,/^с[ер]/i,/^ч/i,/^п\W*?[ят]/i,/^с[уб]/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{narrow:/^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,abbreviated:/^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,wide:/^([дп]п|північ|полудень|ранок|ранку|день|дня|вечір|вечора|ніч|ночі)/i},defaultMatchWidth:"wide",parsePatterns:{any:{am:/^дп/i,pm:/^пп/i,midnight:/^півн/i,noon:/^пол/i,morning:/^р/i,afternoon:/^д[ен]/i,evening:/^в/i,night:/^н/i}},defaultParseWidth:"any"})};e.default=l,a.exports=e.default}}]);