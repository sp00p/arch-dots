"use strict";(self.webpackChunk_dashlane_popup=self.webpackChunk_dashlane_popup||[]).push([[9111,2665],{92665:(a,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e,t){var n,i=t||{};if("formatting"===(i.context?String(i.context):"standalone")&&a.formattingValues){var r=a.defaultFormattingWidth||a.defaultWidth,m=i.width?String(i.width):r;n=a.formattingValues[m]||a.formattingValues[r]}else{var u=a.defaultWidth,d=i.width?String(i.width):a.defaultWidth;n=a.values[d]||a.values[u]}return n[a.argumentCallback?a.argumentCallback(e):e]}},a.exports=e.default},29111:(a,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,i=(n=t(92665))&&n.__esModule?n:{default:n};var r={ordinalNumber:function(a,e){var t=Number(a);return"ke-"+t},era:(0,i.default)({values:{narrow:["SM","M"],abbreviated:["SM","M"],wide:["Sebelum Masihi","Masihi"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["S1","S2","S3","S4"],wide:["Suku pertama","Suku kedua","Suku ketiga","Suku keempat"]},defaultWidth:"wide",argumentCallback:function(a){return Number(a)-1}}),month:(0,i.default)({values:{narrow:["J","F","M","A","M","J","J","O","S","O","N","D"],abbreviated:["Jan","Feb","Mac","Apr","Mei","Jun","Jul","Ogo","Sep","Okt","Nov","Dis"],wide:["Januari","Februari","Mac","April","Mei","Jun","Julai","Ogos","September","Oktober","November","Disember"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["A","I","S","R","K","J","S"],short:["Ahd","Isn","Sel","Rab","Kha","Jum","Sab"],abbreviated:["Ahd","Isn","Sel","Rab","Kha","Jum","Sab"],wide:["Ahad","Isnin","Selasa","Rabu","Khamis","Jumaat","Sabtu"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"am",pm:"pm",midnight:"tgh malam",noon:"tgh hari",morning:"pagi",afternoon:"tengah hari",evening:"petang",night:"malam"},abbreviated:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"tengah hari",evening:"petang",night:"malam"},wide:{am:"a.m.",pm:"p.m.",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"tengah hari",evening:"petang",night:"malam"}},defaultWidth:"wide",formattingValues:{narrow:{am:"am",pm:"pm",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"tengah hari",evening:"petang",night:"malam"},abbreviated:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"tengah hari",evening:"petang",night:"malam"},wide:{am:"a.m.",pm:"p.m.",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"tengah hari",evening:"petang",night:"malam"}},defaultFormattingWidth:"wide"})};e.default=r,a.exports=e.default}}]);