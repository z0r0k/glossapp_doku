import{w as d}from"./entry.DoNwMAJD.js";import{_ as j,s as H,$ as w,R as h,S as v,b as p,f as c,r,a0 as S,i as Y,h as b,n as N,a1 as B,a2 as q}from"./scheduler.Dl8g1gqD.js";import{S as L,i as R}from"./index.Dj_fQ69z.js";function T(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function V(t,e){const s={},a={},i={$$scope:1};let n=t.length;for(;n--;){const u=t[n],l=e[n];if(l){for(const o in u)o in l||(a[o]=1);for(const o in l)i[o]||(s[o]=l[o],i[o]=1);t[n]=l}else for(const o in u)i[o]=1}for(const u in a)u in s||(s[u]=void 0);return s}function U(t){return typeof t=="object"&&t!==null?t:{}}const E={navbar:[],sidebar:{},github:"https://github.com/Blackman99/sveltepress",logo:"/sveltepress.svg"};var m=function(t,e,s){if(s||arguments.length===2)for(var a=0,i=e.length,n;a<i;a++)(n||!(a in e))&&(n||(n=Array.prototype.slice.call(e,0,a)),n[a]=e[a]);return t.concat(n||Array.prototype.slice.call(e))},z=d(!0),D=d(!0),X=d(!0),Z=d([]),W=d([]),$=d(0),F=d(0),M=d("up"),I=d(!1),ee=d(!0),te=d(!0),O=d(Object.entries(E.sidebar||{}).reduce(function(t,e){var s=e[1];return m(m([],t,!0),s,!0)},[]));$.subscribe(function(t){var e=t-j(F)>0?"down":"up";e!==j(M)&&M.set(e)});O.subscribe(function(t){W.set(t.reduce(function(e,s){return Array.isArray(s.items)?m(m([],e,!0),s.items,!0):m(m([],e,!0),[s],!1)},[]))});z.subscribe(function(t){t||D.set(!0)});D.subscribe(function(t){t||z.set(!0)});function se(t){var e;if(t){var s=Object.keys(E.sidebar||{}).find(function(a){return t.startsWith(a)});s&&O.set(((e=E.sidebar)===null||e===void 0?void 0:e[s])||[])}}const re={title:"Sveltepress",description:"A content centered site build tool"};function G(t){let e,s,a,i,n,u,l,o,y=[t[0],{width:"1em"},{height:"1em"},{viewBox:"0 0 24 24"}],k={};for(let f=0;f<y.length;f+=1)k=w(k,y[f]);return{c(){e=h("svg"),s=h("g"),a=h("path"),i=h("animate"),n=h("path"),u=h("animate"),l=h("path"),o=h("animate"),this.h()},l(f){e=v(f,"svg",{width:!0,height:!0,viewBox:!0});var g=p(e);s=v(g,"g",{fill:!0,stroke:!0,strokelinecap:!0,strokelinejoin:!0,strokewidth:!0});var _=p(s);a=v(_,"path",{strokedasharray:!0,strokedashoffset:!0,d:!0});var C=p(a);i=v(C,"animate",{fill:!0,attributeName:!0,dur:!0,values:!0}),p(i).forEach(c),C.forEach(c),n=v(_,"path",{strokedasharray:!0,strokedashoffset:!0,d:!0});var x=p(n);u=v(x,"animate",{fill:!0,attributeName:!0,begin:!0,dur:!0,values:!0}),p(u).forEach(c),x.forEach(c),l=v(_,"path",{strokedasharray:!0,strokedashoffset:!0,d:!0});var A=p(l);o=v(A,"animate",{fill:!0,attributeName:!0,begin:!0,dur:!0,values:!0}),p(o).forEach(c),A.forEach(c),_.forEach(c),g.forEach(c),this.h()},h(){r(i,"fill","freeze"),r(i,"attributeName","stroke-dashoffset"),r(i,"dur","0.6s"),r(i,"values","36;0"),r(a,"strokedasharray","36"),r(a,"strokedashoffset","36"),r(a,"d","M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12"),r(u,"fill","freeze"),r(u,"attributeName","stroke-dashoffset"),r(u,"begin","0.6s"),r(u,"dur","0.3s"),r(u,"values","12;0"),r(n,"strokedasharray","12"),r(n,"strokedashoffset","12"),r(n,"d","M13 11L20 4"),r(o,"fill","freeze"),r(o,"attributeName","stroke-dashoffset"),r(o,"begin","0.9s"),r(o,"dur","0.2s"),r(o,"values","8;0"),r(l,"strokedasharray","8"),r(l,"strokedashoffset","8"),r(l,"d","M21 3H15M21 3V9"),r(s,"fill","none"),r(s,"stroke","currentColor"),r(s,"strokelinecap","round"),r(s,"strokelinejoin","round"),r(s,"strokewidth","2"),S(e,k)},m(f,g){Y(f,e,g),b(e,s),b(s,a),b(a,i),b(s,n),b(n,u),b(s,l),b(l,o)},p(f,[g]){S(e,k=V(y,[g&1&&f[0],{width:"1em"},{height:"1em"},{viewBox:"0 0 24 24"}]))},i:N,o:N,d(f){f&&c(e)}}}function J(t,e,s){const a=[];let i=B(e,a);return t.$$set=n=>{e=w(w({},e),q(n)),s(0,i=B(e,a))},[i]}class ae extends L{constructor(e){super(),R(this,e,J,G,H,{})}}export{ae as E,U as a,te as b,ee as c,Z as d,T as e,D as f,V as g,z as h,I as i,M as j,$ as k,se as l,X as n,F as o,W as p,O as r,re as s,E as t};
