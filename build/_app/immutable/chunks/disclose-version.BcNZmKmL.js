import{G as v}from"./runtime.DIXZcq7d.js";function T(e){console.warn("hydration_mismatch")}const g=1,P=2,w=4,O=8,x=16,H=64,L=1,b=2,M=4,U=8,p=1,I=2,A="[",S="[!",C="]",R={},Y=Symbol(),$=["touchstart","touchmove","touchend"];let o=!1;function B(e){o=e}let r;function _(e){return r=e}function E(){if(r===null)throw T(),R;return r=r.nextSibling}function F(e){o&&(r=e)}function G(){o&&E()}function V(){for(var e=0,n=r;;){if(n.nodeType===8){var t=n.data;if(t===C){if(e===0)return n;e-=1}else(t===A||t===S)&&(e+=1)}var s=n.nextSibling;n.remove(),n=s}}var m,N;function k(){if(m===void 0){m=window,N=document;var e=Element.prototype;e.__click=void 0,e.__className="",e.__attributes=null,e.__e=void 0,Text.prototype.__t=void 0}}function d(){return document.createTextNode("")}function W(e){if(!o)return e.firstChild;var n=r.firstChild;return n===null&&(n=r.appendChild(d())),_(n),n}function Z(e,n){if(!o){var t=e.firstChild;return t instanceof Comment&&t.data===""?t.nextSibling:t}return r}function j(e,n=!1){if(!o)return e.nextSibling;var t=r.nextSibling,s=t.nodeType;if(n&&s!==3){var a=d();return t==null||t.before(a),_(a),a}return _(t),t}function q(e){e.textContent=""}function h(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function i(e,n){var t;(t=v).nodes??(t.nodes={start:e,end:n})}function z(e,n){var t=(n&p)!==0,s=(n&I)!==0,a,c=!e.startsWith("<!>");return()=>{if(o)return i(r,null),r;a||(a=h(c?e:"<!>"+e),t||(a=a.firstChild));var u=s?document.importNode(a,!0):a.cloneNode(!0);if(t){var l=u.firstChild,f=u.lastChild;i(l,f)}else i(u,u);return u}}function K(e,n,t="svg"){var s=!e.startsWith("<!>"),a=`<${t}>${s?e:"<!>"+e}</${t}>`,c;return()=>{if(o)return i(r,null),r;if(!c){var u=h(a),l=u.firstChild;c=l.firstChild}var f=c.cloneNode(!0);return i(f,f),f}}function Q(){if(!o){var e=d();return i(e,e),e}var n=r;return n.nodeType!==3&&(n.before(n=d()),_(n)),i(n,n),n}function X(){if(o)return i(r,null),r;var e=document.createDocumentFragment(),n=document.createComment(""),t=d();return e.append(n,t),i(n,t),e}function J(e,n){if(o){v.nodes.end=r,E();return}e!==null&&e.before(n)}const y="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(y);export{N as $,K as A,X as B,P as C,H as D,g as E,O as F,x as G,S as H,w as I,b as P,Y as U,J as a,M as b,L as c,U as d,E as e,Z as f,_ as g,o as h,B as i,r as j,W as k,F as l,Q as m,G as n,d as o,A as p,R as q,V as r,j as s,z as t,C as u,T as v,k as w,q as x,i as y,$ as z};