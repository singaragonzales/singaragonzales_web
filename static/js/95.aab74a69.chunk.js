"use strict";(self.webpackChunksingaragonzales_web=self.webpackChunksingaragonzales_web||[]).push([[95],{95:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var r=t(791),a=t(184),o=function(){var e=function(e){var n=e.classname,t=e.href,r=e.aria;return(0,a.jsx)("a",{href:t,className:"home__social-icon",rel:"noreferrer",target:"_blank","aria-label":r,children:(0,a.jsx)("i",{className:"".concat(n)})})};return(0,a.jsx)("div",{className:"home__social",children:[{classname:"uil uil-github",href:"https://github.com/singaragonzales",aria:"Go to my github profile"},{classname:"uil uil-linkedin",href:"https://www.linkedin.com/in/singara-gonzales-ojeda-174256213/",aria:"Go to my linkedin profile"},{classname:"bx bxl-upwork",href:"https://www.upwork.com/freelancers/~013ae06c4e2c1444f7",aria:"Go to my upwork profile"}].map((function(n,t){return(0,a.jsx)(e,{classname:n.classname,href:n.href,aria:n.aria},"link-".concat(t))}))})},i=t(437);function c(e,n,t,r){return new(t||(t=Promise))((function(a,o){function i(e){try{s(r.next(e))}catch(e){o(e)}}function c(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,c)}s((r=r.apply(e,n||[])).next())}))}function s(e,n){var t,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=n.call(e,i)}catch(e){o=[6,e],r=0}finally{t=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}}function u(e){var n="function"==typeof Symbol&&Symbol.iterator,t=n&&e[n],r=0;if(t)return t.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function l(e,n){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,a,o=t.call(e),i=[];try{for(;(void 0===n||n-- >0)&&!(r=o.next()).done;)i.push(r.value)}catch(e){a={error:e}}finally{try{r&&!r.done&&(t=o.return)&&t.call(o)}finally{if(a)throw a.error}}return i}function f(e,n,t){if(t||2===arguments.length)for(var r,a=0,o=n.length;a<o;a++)!r&&a in n||(r||(r=Array.prototype.slice.call(n,0,a)),r[a]=n[a]);return e.concat(r||Array.prototype.slice.call(n))}function h(e,n,t,r){for(var a=[],o=4;o<arguments.length;o++)a[o-4]=arguments[o];return c(this,void 0,void 0,(function(){var o,i,c,h,p,v;return s(this,(function(s){switch(s.label){case 0:s.trys.push([0,12,13,14]),o=u(a),i=o.next(),s.label=1;case 1:if(i.done)return[3,11];switch(typeof(c=i.value)){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,d(e,c,n,t,r)];case 3:return s.sent(),[3,10];case 4:return[4,m(c)];case 5:return s.sent(),[3,10];case 6:return[4,c.apply(void 0,f([e,n,t,r],l(a),!1))];case 7:return s.sent(),[3,10];case 8:return[4,c];case 9:s.sent(),s.label=10;case 10:return i=o.next(),[3,1];case 11:return[3,14];case 12:return h=s.sent(),p={error:h},[3,14];case 13:try{i&&!i.done&&(v=o.return)&&v.call(o)}finally{if(p)throw p.error}return[7];case 14:return[2]}}))}))}function d(e,n,t,r,a){return c(this,void 0,void 0,(function(){var o;return s(this,(function(i){switch(i.label){case 0:return o=function(e,n){var t=l(n).slice(0);return f(f([],l(e),!1),[NaN],!1).findIndex((function(e,n){return t[n]!==e}))}(e.textContent,n),[4,p(e,f(f([],l(y(e.textContent,o)),!1),l(v(n,o)),!1),t,r,a)];case 1:return i.sent(),[2]}}))}))}function m(e){return c(this,void 0,void 0,(function(){return s(this,(function(n){switch(n.label){case 0:return[4,new Promise((function(n){return setTimeout(n,e)}))];case 1:return n.sent(),[2]}}))}))}function p(e,n,t,r,a){return c(this,void 0,void 0,(function(){var o,i,c,l,f,h,d,p,v,y,b,x;return s(this,(function(w){switch(w.label){case 0:if(o=n,a){for(i=0,c=1;c<n.length;c++)if(l=n[c-1],(f=n[c]).length>l.length||""===f){i=c;break}o=n.slice(i,n.length)}w.label=1;case 1:w.trys.push([1,6,7,8]),h=u(function(e){var n,t,r,a,o,i,c;return s(this,(function(l){switch(l.label){case 0:n=function(e){return s(this,(function(n){switch(n.label){case 0:return[4,{op:function(n){return requestAnimationFrame((function(){return n.textContent=e}))},opCode:function(n){return""===e||n.textContent.length>e.length?"DELETE":"WRITING"}}];case 1:return n.sent(),[2]}}))},l.label=1;case 1:l.trys.push([1,6,7,8]),t=u(e),r=t.next(),l.label=2;case 2:return r.done?[3,5]:(a=r.value,[5,n(a)]);case 3:l.sent(),l.label=4;case 4:return r=t.next(),[3,2];case 5:return[3,8];case 6:return o=l.sent(),i={error:o},[3,8];case 7:try{r&&!r.done&&(c=t.return)&&c.call(t)}finally{if(i)throw i.error}return[7];case 8:return[2]}}))}(o)),d=h.next(),w.label=2;case 2:return d.done?[3,5]:(p=d.value,v="WRITING"===p.opCode(e)?t+t*(Math.random()-.5):r+r*(Math.random()-.5),p.op(e),[4,m(v)]);case 3:w.sent(),w.label=4;case 4:return d=h.next(),[3,2];case 5:return[3,8];case 6:return y=w.sent(),b={error:y},[3,8];case 7:try{d&&!d.done&&(x=h.return)&&x.call(h)}finally{if(b)throw b.error}return[7];case 8:return[2]}}))}))}function v(e,n,t){var r=l(e).slice(0);return void 0===n&&(n=0),void 0===t&&(t=r.length),s(this,(function(e){switch(e.label){case 0:return n<t?[4,r.slice(0,++n).join("")]:[3,2];case 1:return e.sent(),[3,0];case 2:return[2]}}))}function y(e,n,t){var r=l(e).slice(0);return void 0===n&&(n=0),void 0===t&&(t=r.length),s(this,(function(e){switch(e.label){case 0:return t>n?[4,r.slice(0,--t).join("")]:[3,2];case 1:return e.sent(),[3,0];case 2:return[2]}}))}!function(e,n){void 0===n&&(n={});var t=n.insertAt;if("undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===t&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}(".index-module_type__E-SaG::after {\n  content: '|';\n  animation: index-module_cursor__PQg0P 1.1s infinite step-start;\n}\n\n@keyframes index-module_cursor__PQg0P {\n  50% {\n    opacity: 0;\n  }\n}\n");var b=(0,r.memo)((function(e){var n=e.sequence,t=e.repeat,a=e.className,o=e.speed,i=void 0===o?40:o,c=e.deletionSpeed,s=e.omitDeletionAnimation,u=void 0!==s&&s,d=e.wrapper,m=void 0===d?"div":d,p=e.cursor,v=void 0===p||p,y=e.style;i=Math.abs(i-100),c=c?Math.abs(c-100):i;var b,x,w,g,_,j,N=(0,r.useRef)(null),k="index-module_type__E-SaG";b=a&&a.length>0?v?"".concat(k," ").concat(a):a:v?k:"",x=(0,r.useRef)((function(){return t===1/0?h.apply(void 0,f(f([N.current,i,c,u],l(n),!1),[h],!1)):"number"==typeof t?h.apply(void 0,f([N.current,i,c,u],l(Array(1+t).fill(n).flat()),!1)):h.apply(void 0,f([N.current,i,c,u],l(n),!1)),function(){N.current}})),w=(0,r.useRef)(),g=(0,r.useRef)(!1),_=(0,r.useRef)(!1),j=l((0,r.useState)(0),2)[1],g.current&&(_.current=!0),(0,r.useEffect)((function(){return g.current||(w.current=x.current(),g.current=!0),j((function(e){return e+1})),function(){_.current&&w.current&&w.current()}}),[]);var C=m;return r.createElement(C,{style:y,className:b,ref:N})}),(function(e,n){return!0})),x=t(110),w=function(){return(0,a.jsxs)("div",{className:"home__data",children:[(0,a.jsx)("h1",{className:"home__hello_thin",children:(0,x.t)("home.greeting")}),(0,a.jsx)(b,{sequence:["".concat((0,x.t)("name")),2e3],className:"home__title",wrapper:"div",repeat:0,cursor:!1}),(0,a.jsx)("p",{className:"home__description flex items-center",children:(0,x.t)("home.description")}),(0,a.jsxs)("div",{className:"button button--flex",onClick:function(){window.scrollTo(0,document.body.scrollHeight)},children:[(0,x.t)("home.contact.button"),(0,a.jsx)(i.vw,{})]}),(0,a.jsx)("div",{className:"home__scroll",children:(0,a.jsxs)("a",{href:"#about",className:"home__scroll-button","aria-label":"Go to about me section",children:[(0,a.jsx)(i.Xs,{}),(0,a.jsx)("span",{className:"home__scroll-name",children:(0,x.t)("scroll.down")}),(0,a.jsx)("i",{className:"uil uil-arrow-down home"})]})})]})},g=function(){return(0,a.jsx)("section",{className:"home section",id:"home",children:(0,a.jsx)("div",{className:"home__container container grid",children:(0,a.jsxs)("div",{className:"home__content grid",children:[(0,a.jsx)(o,{}),(0,a.jsx)("div",{className:"home__img",children:(0,a.jsx)(i.m1,{})}),(0,a.jsx)(w,{})]})})})}}}]);
//# sourceMappingURL=95.aab74a69.chunk.js.map