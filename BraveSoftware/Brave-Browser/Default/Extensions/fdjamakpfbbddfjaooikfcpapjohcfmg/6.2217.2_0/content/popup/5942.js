"use strict";(self.webpackChunk_dashlane_popup=self.webpackChunk_dashlane_popup||[]).push([[5942,2665],{92665:(t,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(t){return function(a,e){var n,i=e||{};if("formatting"===(i.context?String(i.context):"standalone")&&t.formattingValues){var r=t.defaultFormattingWidth||t.defaultWidth,o=i.width?String(i.width):r;n=t.formattingValues[o]||t.formattingValues[r]}else{var d=t.defaultWidth,u=i.width?String(i.width):t.defaultWidth;n=t.values[u]||t.values[d]}return n[t.argumentCallback?t.argumentCallback(a):a]}},t.exports=a.default},85942:(t,a,e)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n,i=(n=e(92665))&&n.__esModule?n:{default:n};var r={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jän","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Jänner","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},o={narrow:r.narrow,abbreviated:["Jän.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."],wide:r.wide},d={ordinalNumber:function(t,a){return Number(t)+"."},era:(0,i.default)({values:{narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["vor Christus","nach Christus"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:(0,i.default)({values:r,formattingValues:o,defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["S","M","D","M","D","F","S"],short:["So","Mo","Di","Mi","Do","Fr","Sa"],abbreviated:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],wide:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachm.",evening:"Abend",night:"Nacht"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"}},defaultWidth:"wide",formattingValues:{narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachm.",evening:"abends",night:"nachts"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"}},defaultFormattingWidth:"wide"})};a.default=d,t.exports=a.default}}]);