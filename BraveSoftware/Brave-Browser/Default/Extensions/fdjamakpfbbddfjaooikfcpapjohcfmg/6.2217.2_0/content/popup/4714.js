"use strict";(self.webpackChunk_dashlane_popup=self.webpackChunk_dashlane_popup||[]).push([[4714],{64714:(n,u)=>{function i(n,u){if(void 0!==n.one&&1===u)return n.one;var i=u%10,e=u%100;return 1===i&&11!==e?n.singularNominative.replace("{{count}}",u):i>=2&&i<=4&&(e<10||e>20)?n.singularGenitive.replace("{{count}}",u):n.pluralGenitive.replace("{{count}}",u)}function e(n){return function(u,e){return e.addSuffix?e.comparison>0?n.future?i(n.future,u):"через "+i(n.regular,u):n.past?i(n.past,u):i(n.regular,u)+" назад":i(n.regular,u)}}Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(n,u,i){return i=i||{},t[n](u,i)};var t={lessThanXSeconds:e({regular:{one:"меньше секунды",singularNominative:"меньше {{count}} секунды",singularGenitive:"меньше {{count}} секунд",pluralGenitive:"меньше {{count}} секунд"},future:{one:"меньше, чем через секунду",singularNominative:"меньше, чем через {{count}} секунду",singularGenitive:"меньше, чем через {{count}} секунды",pluralGenitive:"меньше, чем через {{count}} секунд"}}),xSeconds:e({regular:{singularNominative:"{{count}} секунда",singularGenitive:"{{count}} секунды",pluralGenitive:"{{count}} секунд"},past:{singularNominative:"{{count}} секунду назад",singularGenitive:"{{count}} секунды назад",pluralGenitive:"{{count}} секунд назад"},future:{singularNominative:"через {{count}} секунду",singularGenitive:"через {{count}} секунды",pluralGenitive:"через {{count}} секунд"}}),halfAMinute:function(n,u){return u.addSuffix?u.comparison>0?"через полминуты":"полминуты назад":"полминуты"},lessThanXMinutes:e({regular:{one:"меньше минуты",singularNominative:"меньше {{count}} минуты",singularGenitive:"меньше {{count}} минут",pluralGenitive:"меньше {{count}} минут"},future:{one:"меньше, чем через минуту",singularNominative:"меньше, чем через {{count}} минуту",singularGenitive:"меньше, чем через {{count}} минуты",pluralGenitive:"меньше, чем через {{count}} минут"}}),xMinutes:e({regular:{singularNominative:"{{count}} минута",singularGenitive:"{{count}} минуты",pluralGenitive:"{{count}} минут"},past:{singularNominative:"{{count}} минуту назад",singularGenitive:"{{count}} минуты назад",pluralGenitive:"{{count}} минут назад"},future:{singularNominative:"через {{count}} минуту",singularGenitive:"через {{count}} минуты",pluralGenitive:"через {{count}} минут"}}),aboutXHours:e({regular:{singularNominative:"около {{count}} часа",singularGenitive:"около {{count}} часов",pluralGenitive:"около {{count}} часов"},future:{singularNominative:"приблизительно через {{count}} час",singularGenitive:"приблизительно через {{count}} часа",pluralGenitive:"приблизительно через {{count}} часов"}}),xHours:e({regular:{singularNominative:"{{count}} час",singularGenitive:"{{count}} часа",pluralGenitive:"{{count}} часов"}}),xDays:e({regular:{singularNominative:"{{count}} день",singularGenitive:"{{count}} дня",pluralGenitive:"{{count}} дней"}}),aboutXWeeks:e({regular:{singularNominative:"около {{count}} недели",singularGenitive:"около {{count}} недель",pluralGenitive:"около {{count}} недель"},future:{singularNominative:"приблизительно через {{count}} неделю",singularGenitive:"приблизительно через {{count}} недели",pluralGenitive:"приблизительно через {{count}} недель"}}),xWeeks:e({regular:{singularNominative:"{{count}} неделя",singularGenitive:"{{count}} недели",pluralGenitive:"{{count}} недель"}}),aboutXMonths:e({regular:{singularNominative:"около {{count}} месяца",singularGenitive:"около {{count}} месяцев",pluralGenitive:"около {{count}} месяцев"},future:{singularNominative:"приблизительно через {{count}} месяц",singularGenitive:"приблизительно через {{count}} месяца",pluralGenitive:"приблизительно через {{count}} месяцев"}}),xMonths:e({regular:{singularNominative:"{{count}} месяц",singularGenitive:"{{count}} месяца",pluralGenitive:"{{count}} месяцев"}}),aboutXYears:e({regular:{singularNominative:"около {{count}} года",singularGenitive:"около {{count}} лет",pluralGenitive:"около {{count}} лет"},future:{singularNominative:"приблизительно через {{count}} год",singularGenitive:"приблизительно через {{count}} года",pluralGenitive:"приблизительно через {{count}} лет"}}),xYears:e({regular:{singularNominative:"{{count}} год",singularGenitive:"{{count}} года",pluralGenitive:"{{count}} лет"}}),overXYears:e({regular:{singularNominative:"больше {{count}} года",singularGenitive:"больше {{count}} лет",pluralGenitive:"больше {{count}} лет"},future:{singularNominative:"больше, чем через {{count}} год",singularGenitive:"больше, чем через {{count}} года",pluralGenitive:"больше, чем через {{count}} лет"}}),almostXYears:e({regular:{singularNominative:"почти {{count}} год",singularGenitive:"почти {{count}} года",pluralGenitive:"почти {{count}} лет"},future:{singularNominative:"почти через {{count}} год",singularGenitive:"почти через {{count}} года",pluralGenitive:"почти через {{count}} лет"}})};n.exports=u.default}}]);