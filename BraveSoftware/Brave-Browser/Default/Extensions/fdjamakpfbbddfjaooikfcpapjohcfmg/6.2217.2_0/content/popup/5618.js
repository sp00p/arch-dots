"use strict";(self.webpackChunk_dashlane_popup=self.webpackChunk_dashlane_popup||[]).push([[5618,2665],{92665:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var r,u=a||{};if("formatting"===(u.context?String(u.context):"standalone")&&e.formattingValues){var n=e.defaultFormattingWidth||e.defaultWidth,d=u.width?String(u.width):n;r=e.formattingValues[d]||e.formattingValues[n]}else{var i=e.defaultWidth,l=u.width?String(u.width):e.defaultWidth;r=e.values[l]||e.values[i]}return r[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},35618:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,u=(r=a(92665))&&r.__esModule?r:{default:r};function n(e,t,a,r,u){var n=function(e){return"quarter"===e}(t)?u:function(e){return"year"===e||"week"===e||"minute"===e||"second"===e}(t)?r:a;return e+"-"+n}var d={ordinalNumber:function(e,t){var a=String((t||{}).unit),r=Number(e);if(0===r)return n(0,a,"ев","ева","ево");if(r%1e3==0)return n(r,a,"ен","на","но");if(r%100==0)return n(r,a,"тен","тна","тно");var u=r%100;if(u>20||u<10)switch(u%10){case 1:return n(r,a,"ви","ва","во");case 2:return n(r,a,"ри","ра","ро");case 7:case 8:return n(r,a,"ми","ма","мо")}return n(r,a,"ти","та","то")},era:(0,u.default)({values:{narrow:["пр.н.е.","н.е."],abbreviated:["преди н. е.","н. е."],wide:["преди новата ера","новата ера"]},defaultWidth:"wide"}),quarter:(0,u.default)({values:{narrow:["1","2","3","4"],abbreviated:["1-во тримес.","2-ро тримес.","3-то тримес.","4-то тримес."],wide:["1-во тримесечие","2-ро тримесечие","3-то тримесечие","4-то тримесечие"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,u.default)({values:{abbreviated:["яну","фев","мар","апр","май","юни","юли","авг","сеп","окт","ное","дек"],wide:["януари","февруари","март","април","май","юни","юли","август","септември","октомври","ноември","декември"]},defaultWidth:"wide"}),day:(0,u.default)({values:{narrow:["Н","П","В","С","Ч","П","С"],short:["нд","пн","вт","ср","чт","пт","сб"],abbreviated:["нед","пон","вто","сря","чет","пет","съб"],wide:["неделя","понеделник","вторник","сряда","четвъртък","петък","събота"]},defaultWidth:"wide"}),dayPeriod:(0,u.default)({values:{wide:{am:"преди обяд",pm:"след обяд",midnight:"в полунощ",noon:"на обяд",morning:"сутринта",afternoon:"следобед",evening:"вечерта",night:"през нощта"}},defaultWidth:"wide"})};t.default=d,e.exports=t.default}}]);