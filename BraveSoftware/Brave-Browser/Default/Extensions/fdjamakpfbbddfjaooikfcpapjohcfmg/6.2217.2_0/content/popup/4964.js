"use strict";(self.webpackChunk_dashlane_popup=self.webpackChunk_dashlane_popup||[]).push([[4964,7656,2665,5447,1054,7556,6560,4187,7272,4418],{47656:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth,n=e.formats[a]||e.formats[e.defaultWidth];return n}},e.exports=t.default},92665:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var n,o=a||{};if("formatting"===(o.context?String(o.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,r=o.width?String(o.width):i;n=e.formattingValues[r]||e.formattingValues[i]}else{var u=e.defaultWidth,d=o.width?String(o.width):e.defaultWidth;n=e.values[d]||e.values[u]}return n[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},35447:(e,t)=>{function a(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}function n(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=o.width,r=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],u=t.match(r);if(!u)return null;var d,l=u[0],s=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth],f=Array.isArray(s)?n(s,(function(e){return e.test(l)})):a(s,(function(e){return e.test(l)}));d=e.valueCallback?e.valueCallback(f):f,d=o.valueCallback?o.valueCallback(d):d;var h=t.slice(l.length);return{value:d,rest:h}}},e.exports=t.default},1054:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(e.matchPattern);if(!n)return null;var o=n[0],i=t.match(e.parsePattern);if(!i)return null;var r=e.valueCallback?e.valueCallback(i[0]):i[0];r=a.valueCallback?a.valueCallback(r):r;var u=t.slice(o.length);return{value:r,rest:u}}},e.exports=t.default},17556:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var o,i=(n=n||{}).addSuffix?a[e].withPreposition:a[e].standalone;o="string"==typeof i?i:1===t?i.one:i.other.replace("{{count}}",t);if(n.addSuffix)return n.comparison>0?o+"లో":o+" క్రితం";return o};var a={lessThanXSeconds:{standalone:{one:"సెకను కన్నా తక్కువ",other:"{{count}} సెకన్ల కన్నా తక్కువ"},withPreposition:{one:"సెకను",other:"{{count}} సెకన్ల"}},xSeconds:{standalone:{one:"ఒక సెకను",other:"{{count}} సెకన్ల"},withPreposition:{one:"ఒక సెకను",other:"{{count}} సెకన్ల"}},halfAMinute:{standalone:"అర నిమిషం",withPreposition:"అర నిమిషం"},lessThanXMinutes:{standalone:{one:"ఒక నిమిషం కన్నా తక్కువ",other:"{{count}} నిమిషాల కన్నా తక్కువ"},withPreposition:{one:"ఒక నిమిషం",other:"{{count}} నిమిషాల"}},xMinutes:{standalone:{one:"ఒక నిమిషం",other:"{{count}} నిమిషాలు"},withPreposition:{one:"ఒక నిమిషం",other:"{{count}} నిమిషాల"}},aboutXHours:{standalone:{one:"సుమారు ఒక గంట",other:"సుమారు {{count}} గంటలు"},withPreposition:{one:"సుమారు ఒక గంట",other:"సుమారు {{count}} గంటల"}},xHours:{standalone:{one:"ఒక గంట",other:"{{count}} గంటలు"},withPreposition:{one:"ఒక గంట",other:"{{count}} గంటల"}},xDays:{standalone:{one:"ఒక రోజు",other:"{{count}} రోజులు"},withPreposition:{one:"ఒక రోజు",other:"{{count}} రోజుల"}},aboutXWeeks:{standalone:{one:"సుమారు ఒక వారం",other:"సుమారు {{count}} వారాలు"},withPreposition:{one:"సుమారు ఒక వారం",other:"సుమారు {{count}} వారాలల"}},xWeeks:{standalone:{one:"ఒక వారం",other:"{{count}} వారాలు"},withPreposition:{one:"ఒక వారం",other:"{{count}} వారాలల"}},aboutXMonths:{standalone:{one:"సుమారు ఒక నెల",other:"సుమారు {{count}} నెలలు"},withPreposition:{one:"సుమారు ఒక నెల",other:"సుమారు {{count}} నెలల"}},xMonths:{standalone:{one:"ఒక నెల",other:"{{count}} నెలలు"},withPreposition:{one:"ఒక నెల",other:"{{count}} నెలల"}},aboutXYears:{standalone:{one:"సుమారు ఒక సంవత్సరం",other:"సుమారు {{count}} సంవత్సరాలు"},withPreposition:{one:"సుమారు ఒక సంవత్సరం",other:"సుమారు {{count}} సంవత్సరాల"}},xYears:{standalone:{one:"ఒక సంవత్సరం",other:"{{count}} సంవత్సరాలు"},withPreposition:{one:"ఒక సంవత్సరం",other:"{{count}} సంవత్సరాల"}},overXYears:{standalone:{one:"ఒక సంవత్సరం పైగా",other:"{{count}} సంవత్సరాలకు పైగా"},withPreposition:{one:"ఒక సంవత్సరం",other:"{{count}} సంవత్సరాల"}},almostXYears:{standalone:{one:"దాదాపు ఒక సంవత్సరం",other:"దాదాపు {{count}} సంవత్సరాలు"},withPreposition:{one:"దాదాపు ఒక సంవత్సరం",other:"దాదాపు {{count}} సంవత్సరాల"}}};e.exports=t.default},16560:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=(n=a(47656))&&n.__esModule?n:{default:n};var i={date:(0,o.default)({formats:{full:"d, MMMM y, EEEE",long:"d MMMM, y",medium:"d MMM, y",short:"dd-MM-yy"},defaultWidth:"full"}),time:(0,o.default)({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:(0,o.default)({formats:{full:"{{date}} {{time}}'కి'",long:"{{date}} {{time}}'కి'",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};t.default=i,e.exports=t.default},34187:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n,o){return a[e]};var a={lastWeek:"'గత' eeee p",yesterday:"'నిన్న' p",today:"'ఈ రోజు' p",tomorrow:"'రేపు' p",nextWeek:"'తదుపరి' eeee p",other:"P"};e.exports=t.default},37272:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=(n=a(92665))&&n.__esModule?n:{default:n};var i={ordinalNumber:function(e,t){return Number(e)+"వ"},era:(0,o.default)({values:{narrow:["క్రీ.పూ.","క్రీ.శ."],abbreviated:["క్రీ.పూ.","క్రీ.శ."],wide:["క్రీస్తు పూర్వం","క్రీస్తుశకం"]},defaultWidth:"wide"}),quarter:(0,o.default)({values:{narrow:["1","2","3","4"],abbreviated:["త్రై1","త్రై2","త్రై3","త్రై4"],wide:["1వ త్రైమాసికం","2వ త్రైమాసికం","3వ త్రైమాసికం","4వ త్రైమాసికం"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,o.default)({values:{narrow:["జ","ఫి","మా","ఏ","మే","జూ","జు","ఆ","సె","అ","న","డి"],abbreviated:["జన","ఫిబ్ర","మార్చి","ఏప్రి","మే","జూన్","జులై","ఆగ","సెప్టెం","అక్టో","నవం","డిసెం"],wide:["జనవరి","ఫిబ్రవరి","మార్చి","ఏప్రిల్","మే","జూన్","జులై","ఆగస్టు","సెప్టెంబర్","అక్టోబర్","నవంబర్","డిసెంబర్"]},defaultWidth:"wide"}),day:(0,o.default)({values:{narrow:["ఆ","సో","మ","బు","గు","శు","శ"],short:["ఆది","సోమ","మంగళ","బుధ","గురు","శుక్ర","శని"],abbreviated:["ఆది","సోమ","మంగళ","బుధ","గురు","శుక్ర","శని"],wide:["ఆదివారం","సోమవారం","మంగళవారం","బుధవారం","గురువారం","శుక్రవారం","శనివారం"]},defaultWidth:"wide"}),dayPeriod:(0,o.default)({values:{narrow:{am:"పూర్వాహ్నం",pm:"అపరాహ్నం",midnight:"అర్ధరాత్రి",noon:"మిట్టమధ్యాహ్నం",morning:"ఉదయం",afternoon:"మధ్యాహ్నం",evening:"సాయంత్రం",night:"రాత్రి"},abbreviated:{am:"పూర్వాహ్నం",pm:"అపరాహ్నం",midnight:"అర్ధరాత్రి",noon:"మిట్టమధ్యాహ్నం",morning:"ఉదయం",afternoon:"మధ్యాహ్నం",evening:"సాయంత్రం",night:"రాత్రి"},wide:{am:"పూర్వాహ్నం",pm:"అపరాహ్నం",midnight:"అర్ధరాత్రి",noon:"మిట్టమధ్యాహ్నం",morning:"ఉదయం",afternoon:"మధ్యాహ్నం",evening:"సాయంత్రం",night:"రాత్రి"}},defaultWidth:"wide",formattingValues:{narrow:{am:"పూర్వాహ్నం",pm:"అపరాహ్నం",midnight:"అర్ధరాత్రి",noon:"మిట్టమధ్యాహ్నం",morning:"ఉదయం",afternoon:"మధ్యాహ్నం",evening:"సాయంత్రం",night:"రాత్రి"},abbreviated:{am:"పూర్వాహ్నం",pm:"అపరాహ్నం",midnight:"అర్ధరాత్రి",noon:"మిట్టమధ్యాహ్నం",morning:"ఉదయం",afternoon:"మధ్యాహ్నం",evening:"సాయంత్రం",night:"రాత్రి"},wide:{am:"పూర్వాహ్నం",pm:"అపరాహ్నం",midnight:"అర్ధరాత్రి",noon:"మిట్టమధ్యాహ్నం",morning:"ఉదయం",afternoon:"మధ్యాహ్నం",evening:"సాయంత్రం",night:"రాత్రి"}},defaultFormattingWidth:"wide"})};t.default=i,e.exports=t.default},4418:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(1054)),o=i(a(35447));function i(e){return e&&e.__esModule?e:{default:e}}var r={ordinalNumber:(0,n.default)({matchPattern:/^(\d+)(వ)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,o.default)({matchPatterns:{narrow:/^(క్రీ\.పూ\.|క్రీ\.శ\.)/i,abbreviated:/^(క్రీ\.?\s?పూ\.?|ప్ర\.?\s?శ\.?\s?పూ\.?|క్రీ\.?\s?శ\.?|సా\.?\s?శ\.?)/i,wide:/^(క్రీస్తు పూర్వం|ప్రస్తుత శకానికి పూర్వం|క్రీస్తు శకం|ప్రస్తుత శకం)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^(పూ|శ)/i,/^సా/i]},defaultParseWidth:"any"}),quarter:(0,o.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^త్రై[1234]/i,wide:/^[1234](వ)? త్రైమాసికం/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,o.default)({matchPatterns:{narrow:/^(జూ|జు|జ|ఫి|మా|ఏ|మే|ఆ|సె|అ|న|డి)/i,abbreviated:/^(జన|ఫిబ్ర|మార్చి|ఏప్రి|మే|జూన్|జులై|ఆగ|సెప్|అక్టో|నవ|డిసె)/i,wide:/^(జనవరి|ఫిబ్రవరి|మార్చి|ఏప్రిల్|మే|జూన్|జులై|ఆగస్టు|సెప్టెంబర్|అక్టోబర్|నవంబర్|డిసెంబర్)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^జ/i,/^ఫి/i,/^మా/i,/^ఏ/i,/^మే/i,/^జూ/i,/^జు/i,/^ఆ/i,/^సె/i,/^అ/i,/^న/i,/^డి/i],any:[/^జన/i,/^ఫి/i,/^మా/i,/^ఏ/i,/^మే/i,/^జూన్/i,/^జులై/i,/^ఆగ/i,/^సె/i,/^అ/i,/^న/i,/^డి/i]},defaultParseWidth:"any"}),day:(0,o.default)({matchPatterns:{narrow:/^(ఆ|సో|మ|బు|గు|శు|శ)/i,short:/^(ఆది|సోమ|మం|బుధ|గురు|శుక్ర|శని)/i,abbreviated:/^(ఆది|సోమ|మం|బుధ|గురు|శుక్ర|శని)/i,wide:/^(ఆదివారం|సోమవారం|మంగళవారం|బుధవారం|గురువారం|శుక్రవారం|శనివారం)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^ఆ/i,/^సో/i,/^మ/i,/^బు/i,/^గు/i,/^శు/i,/^శ/i],any:[/^ఆది/i,/^సోమ/i,/^మం/i,/^బుధ/i,/^గురు/i,/^శుక్ర/i,/^శని/i]},defaultParseWidth:"any"}),dayPeriod:(0,o.default)({matchPatterns:{narrow:/^(పూర్వాహ్నం|అపరాహ్నం|అర్ధరాత్రి|మిట్టమధ్యాహ్నం|ఉదయం|మధ్యాహ్నం|సాయంత్రం|రాత్రి)/i,any:/^(పూర్వాహ్నం|అపరాహ్నం|అర్ధరాత్రి|మిట్టమధ్యాహ్నం|ఉదయం|మధ్యాహ్నం|సాయంత్రం|రాత్రి)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^పూర్వాహ్నం/i,pm:/^అపరాహ్నం/i,midnight:/^అర్ధ/i,noon:/^మిట్ట/i,morning:/ఉదయం/i,afternoon:/మధ్యాహ్నం/i,evening:/సాయంత్రం/i,night:/రాత్రి/i}},defaultParseWidth:"any"})};t.default=r,e.exports=t.default},84964:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(a(17556)),o=d(a(16560)),i=d(a(34187)),r=d(a(37272)),u=d(a(4418));function d(e){return e&&e.__esModule?e:{default:e}}var l={code:"te",formatDistance:n.default,formatLong:o.default,formatRelative:i.default,localize:r.default,match:u.default,options:{weekStartsOn:0,firstWeekContainsDate:1}};t.default=l,e.exports=t.default}}]);