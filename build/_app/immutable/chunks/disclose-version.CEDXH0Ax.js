import{h as v}from"./runtime.CHkJIc7z.js";function h(e){console.warn("hydration_mismatch")}const g=1,w=2,x=4,C=8,O=16,I=1,E=2,y="[",N="[!",R="]",p={},b=Symbol();let a=!1;function D(e){a=e}let r;function c(e){if(e===null)throw h(),p;return r=e}function S(){return c(r.nextSibling)}function L(e){if(a){if(r.nextSibling!==null)throw h(),p;r=e}}function M(){a&&S()}function U(){for(var e=0,n=r;;){if(n.nodeType===8){var t=n.data;if(t===R){if(e===0)return n;e-=1}else(t===y||t===N)&&(e+=1)}var s=n.nextSibling;n.remove(),n=s}}var m;function H(){if(m===void 0){m=window;var e=Element.prototype;e.__click=void 0,e.__className="",e.__attributes=null,e.__e=void 0,Text.prototype.__t=void 0}}function l(){return document.createTextNode("")}function B(e){if(!a)return e.firstChild;var n=r.firstChild;return n===null&&(n=r.appendChild(l())),c(n),n}function Y(e,n){if(!a){var t=e.firstChild;return t instanceof Comment&&t.data===""?t.nextSibling:t}return r}function $(e,n=!1){if(!a)return e.nextSibling;var t=r.nextSibling,s=t.nodeType;if(n&&s!==3){var i=l();return t==null||t.before(i),c(i),i}return c(t),t}function k(e){e.textContent=""}function T(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function o(e,n){var t;(t=v).nodes??(t.nodes={start:e,end:n})}function F(e,n){var t=(n&I)!==0,s=(n&E)!==0,i,f=!e.startsWith("<!>");return()=>{if(a)return o(r,null),r;i||(i=T(f?e:"<!>"+e),t||(i=i.firstChild));var u=s?document.importNode(i,!0):i.cloneNode(!0);if(t){var _=u.firstChild,d=u.lastChild;o(_,d)}else o(u,u);return u}}function W(e,n,t="svg"){var s=!e.startsWith("<!>"),i=`<${t}>${s?e:"<!>"+e}</${t}>`,f;return()=>{if(a)return o(r,null),r;if(!f){var u=T(i),_=u.firstChild;f=_.firstChild}var d=f.cloneNode(!0);return o(d,d),d}}function Z(){if(!a){var e=l();return o(e,e),e}var n=r;return n.nodeType!==3&&(n.before(n=l()),c(n)),o(n,n),n}function j(){if(a)return o(r,null),r;var e=document.createDocumentFragment(),n=document.createComment(""),t=l();return e.append(n,t),o(n,t),e}function q(e,n){if(a){v.nodes.end=r,S();return}e!==null&&e.before(n)}const A="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(A);export{W as A,M as B,y as H,x as P,b as U,p as a,c as b,r as c,R as d,l as e,h as f,k as g,S as h,H as i,a as j,o as k,N as l,g as m,w as n,C as o,O as p,Y as q,U as r,D as s,$ as t,q as u,F as v,j as w,B as x,Z as y,L as z};