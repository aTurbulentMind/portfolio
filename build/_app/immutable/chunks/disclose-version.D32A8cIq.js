import{k as m}from"./runtime.Cmx-9IxZ.js";function p(n){console.warn("hydration_mismatch")}const g=1,y=2,P=4,w=8,L=16,b=64,H=1,x=2,M=4,U=8,Y=4,I=1,h=2,A="[",S="[!",C="]",N={},$=Symbol(),B=["touchstart","touchmove","touchend"];let i=!1;function k(n){i=n}let r;function d(n){return r=n}function E(){if(r===null)throw p(),N;return r=r.nextSibling}function F(n){i&&(r=n)}function G(){i&&E()}function V(){for(var n=0,e=r;;){if(e.nodeType===8){var t=e.data;if(t===C){if(n===0)return e;n-=1}else(t===A||t===S)&&(n+=1)}var o=e.nextSibling;e.remove(),e=o}}var v,R;function W(){if(v===void 0){v=window,R=document;var n=Element.prototype;n.__click=void 0,n.__className="",n.__attributes=null,n.__e=void 0,Text.prototype.__t=void 0}}function c(){return document.createTextNode("")}function Z(n){if(!i)return n.firstChild;var e=r.firstChild;return e===null&&(e=r.appendChild(c())),d(e),e}function j(n,e){if(!i){var t=n.firstChild;return t instanceof Comment&&t.data===""?t.nextSibling:t}if(e&&(r==null?void 0:r.nodeType)!==3){var o=c();return r==null||r.before(o),d(o),o}return r}function q(n,e=!1){if(!i)return n.nextSibling;var t=r.nextSibling,o=t.nodeType;if(e&&o!==3){var a=c();return t==null||t.before(a),d(a),a}return d(t),t}function z(n){n.textContent=""}function T(n){var e=document.createElement("template");return e.innerHTML=n,e.content}function s(n,e){var t;(t=m).nodes??(t.nodes={start:n,end:e})}function K(n,e){var t=(e&I)!==0,o=(e&h)!==0,a,f=!n.startsWith("<!>");return()=>{if(i)return s(r,null),r;a||(a=T(f?n:"<!>"+n),t||(a=a.firstChild));var u=o?document.importNode(a,!0):a.cloneNode(!0);if(t){var l=u.firstChild,_=u.lastChild;s(l,_)}else s(u,u);return u}}function Q(n,e,t="svg"){var o=!n.startsWith("<!>"),a=`<${t}>${o?n:"<!>"+n}</${t}>`,f;return()=>{if(i)return s(r,null),r;if(!f){var u=T(a),l=u.firstChild;f=l.firstChild}var _=f.cloneNode(!0);return s(_,_),_}}function X(){if(!i){var n=c();return s(n,n),n}var e=r;return e.nodeType!==3&&(e.before(e=c()),d(e)),s(e,e),e}function J(){if(i)return s(r,null),r;var n=document.createDocumentFragment(),e=document.createComment(""),t=c();return n.append(e,t),s(e,t),n}function nn(n,e){if(i){m.nodes.end=r,E();return}n!==null&&n.before(e)}const D="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(D);export{R as $,M as A,H as B,x as C,U as D,w as E,J as F,X as G,S as H,Q as I,B as P,Y as T,$ as U,nn as a,d as b,Z as c,E as d,c as e,j as f,V as g,i as h,k as i,r as j,C as k,g as l,y as m,G as n,b as o,z as p,L as q,F as r,q as s,K as t,P as u,A as v,N as w,p as x,W as y,s as z};