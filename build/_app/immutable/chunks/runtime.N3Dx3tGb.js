var Pn=Array.isArray,Ln=Array.from,Mn=Object.defineProperty,pt=Object.getOwnPropertyDescriptor,nn=Object.getOwnPropertyDescriptors,Hn=Object.prototype,Yn=Array.prototype,rn=Object.getPrototypeOf;const jn=()=>{};function Bn(t){return t()}function wt(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,Tt=4,B=8,ut=16,A=32,W=64,nt=128,R=256,K=512,h=1024,k=2048,b=4096,N=8192,q=16384,en=32768,mt=65536,Un=1<<17,sn=1<<19,At=1<<20,ht=Symbol("$state"),Vn=Symbol("legacy props"),Gn=Symbol("");function gt(t){return t===this.v}function ln(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function kt(t){return!ln(t,this.v)}function an(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function un(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function on(t){throw new Error("https://svelte.dev/e/effect_orphan")}function fn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Kn(){throw new Error("https://svelte.dev/e/hydration_failed")}function $n(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Zn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function zn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function _n(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function cn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let X=!1;function Jn(){X=!0}function ot(t){return{f:0,v:t,reactions:null,equals:gt,version:0}}function Wn(t){return It(ot(t))}function vn(t,n=!1){var e;const r=ot(t);return n||(r.equals=kt),X&&i!==null&&i.l!==null&&((e=i.l).s??(e.s=[])).push(r),r}function Xn(t,n=!1){return It(vn(t,n))}function It(t){return o!==null&&o.f&y&&(m===null?Sn([t]):m.push(t)),t}function Qn(t,n){return xt(t,tn(()=>Qt(t))),n}function xt(t,n){return o!==null&&ct()&&o.f&(y|ut)&&(m===null||!m.includes(t))&&cn(),pn(t,n)}function pn(t,n){return t.equals(n)||(t.v=n,t.version=$t(),Rt(t,k),ct()&&u!==null&&u.f&h&&!(u.f&A)&&(v!==null&&v.includes(t)?(T(u,k),tt(u)):g===null?Dn([t]):g.push(t))),n}function Rt(t,n){var r=t.reactions;if(r!==null)for(var e=ct(),s=r.length,l=0;l<s;l++){var a=r[l],f=a.f;f&k||!e&&a===u||(T(a,n),f&(h|R)&&(f&y?Rt(a,b):tt(a)))}}function St(t){console.warn("https://svelte.dev/e/hydration_mismatch")}const tr=1,nr=2,rr=4,er=8,sr=16,lr=1,ar=2,ur=4,or=8,ir=16,fr=1,_r=2,hn="[",dn="[!",En="]",Dt={},cr=Symbol();let x=!1;function vr(t){x=t}let w;function M(t){if(t===null)throw St(),Dt;return w=t}function pr(){return M(S(w))}function hr(t){if(x){if(S(w)!==null)throw St(),Dt;w=t}}function dr(t=1){if(x){for(var n=t,r=w;n--;)r=S(r);w=r}}function Er(){for(var t=0,n=w;;){if(n.nodeType===8){var r=n.data;if(r===En){if(t===0)return n;t-=1}else(r===hn||r===dn)&&(t+=1)}var e=S(n);n.remove(),n=e}}var dt,yn,Ot,Ct;function yr(){if(dt===void 0){dt=window,yn=document;var t=Element.prototype,n=Node.prototype;Ot=pt(n,"firstChild").get,Ct=pt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function rt(t=""){return document.createTextNode(t)}function et(t){return Ot.call(t)}function S(t){return Ct.call(t)}function wr(t,n){if(!x)return et(t);var r=et(w);if(r===null)r=w.appendChild(rt());else if(n&&r.nodeType!==3){var e=rt();return r==null||r.before(e),M(e),e}return M(r),r}function Tr(t,n){if(!x){var r=et(t);return r instanceof Comment&&r.data===""?S(r):r}return w}function mr(t,n=1,r=!1){let e=x?w:t;for(var s;n--;)s=e,e=S(e);if(!x)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var a=rt();return e===null?s==null||s.after(a):e.before(a),M(a),a}return M(e),e}function Ar(t){t.textContent=""}function wn(t){var n=y|k;u===null?n|=R:u.f|=At;var r=o!==null&&o.f&y?o:null;const e={children:null,ctx:i,deps:null,equals:gt,f:n,fn:t,reactions:null,v:null,version:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function gr(t){const n=wn(t);return n.equals=kt,n}function Nt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&y?it(e):P(e)}}}function Tn(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function bt(t){var n,r=u;J(Tn(t));try{Nt(t),n=Zt(t)}finally{J(r)}return n}function qt(t){var n=bt(t),r=(D||t.f&R)&&t.deps!==null?b:h;T(t,r),t.equals(n)||(t.v=n,t.version=$t())}function it(t){Nt(t),j(t,0),T(t,q),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Ft(t){u===null&&o===null&&on(),o!==null&&o.f&R&&un(),_t&&an()}function mn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function F(t,n,r,e=!0){var s=(t&W)!==0,l=u,a={ctx:i,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|k,first:null,fn:n,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var f=O;try{Et(!0),U(a),a.f|=en}catch(_){throw P(a),_}finally{Et(f)}}else n!==null&&tt(a);var p=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&At)===0;if(!p&&!s&&e&&(l!==null&&mn(a,l),o!==null&&o.f&y)){var d=o;(d.children??(d.children=[])).push(a)}return a}function kr(t){const n=F(B,null,!1);return T(n,h),n.teardown=t,n}function Ir(t){Ft();var n=u!==null&&(u.f&A)!==0&&i!==null&&!i.m;if(n){var r=i;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:o})}else{var e=Pt(t);return e}}function xr(t){return Ft(),ft(t)}function Rr(t){const n=F(W,t,!0);return()=>{P(n)}}function Pt(t){return F(Tt,t,!1)}function Sr(t,n){var r=i,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=ft(()=>{t(),!e.ran&&(e.ran=!0,xt(r.l.r2,!0),tn(n))})}function Dr(){var t=i;ft(()=>{if(Qt(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&h&&T(r,b),L(r)&&U(r),n.ran=!1}t.l.r2.v=!1}})}function ft(t){return F(B,t,!0)}function Or(t){return An(t)}function An(t,n=0){return F(B|ut|n,t,!0)}function Cr(t,n=!0){return F(B|A,t,!0,n)}function Lt(t){var n=t.teardown;if(n!==null){const r=_t,e=o;yt(!0),z(null);try{n.call(null)}finally{yt(r),z(e)}}}function Mt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)it(n[r])}}function Ht(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;P(r,n),r=e}}function gn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&A||P(n),n=r}}function P(t,n=!0){var r=!1;if((n||t.f&sn)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var l=e===s?null:S(e);e.remove(),e=l}r=!0}Ht(t,n&&!r),Mt(t),j(t,0),T(t,q);var a=t.transitions;if(a!==null)for(const p of a)p.stop();Lt(t);var f=t.parent;f!==null&&f.first!==null&&Yt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Yt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Nr(t,n){var r=[];jt(t,r,!0),kn(r,()=>{P(t),n&&n()})}function kn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function jt(t,n,r){if(!(t.f&N)){if(t.f^=N,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var s=e.next,l=(e.f&mt)!==0||(e.f&A)!==0;jt(e,n,l?r:!1),e=s}}}function br(t){Bt(t,!0)}function Bt(t,n){if(t.f&N){L(t)&&U(t),t.f^=N;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&mt)!==0||(r.f&A)!==0;Bt(r,s?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}const In=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let $=!1,Z=!1,st=[],lt=[];function Ut(){$=!1;const t=st.slice();st=[],wt(t)}function Vt(){Z=!1;const t=lt.slice();lt=[],wt(t)}function qr(t){$||($=!0,queueMicrotask(Ut)),st.push(t)}function Fr(t){Z||(Z=!0,In(Vt)),lt.push(t)}function xn(){$&&Ut(),Z&&Vt()}const Gt=0,Rn=1;let V=!1,G=Gt,H=!1,Y=null,O=!1,_t=!1;function Et(t){O=t}function yt(t){_t=t}let I=[],C=0;let o=null;function z(t){o=t}let u=null;function J(t){u=t}let m=null;function Sn(t){m=t}let v=null,E=0,g=null;function Dn(t){g=t}let Kt=0,D=!1,i=null;function $t(){return++Kt}function ct(){return!X||i!==null&&i.l===null}function L(t){var a,f;var n=t.f;if(n&k)return!0;if(n&b){var r=t.deps,e=(n&R)!==0;if(r!==null){var s;if(n&K){for(s=0;s<r.length;s++)((a=r[s]).reactions??(a.reactions=[])).push(t);t.f^=K}for(s=0;s<r.length;s++){var l=r[s];if(L(l)&&qt(l),e&&u!==null&&!D&&!((f=l==null?void 0:l.reactions)!=null&&f.includes(t))&&(l.reactions??(l.reactions=[])).push(t),l.version>t.version)return!0}}e||T(t,h)}return!1}function On(t,n){for(var r=n;r!==null;){if(r.f&nt)try{r.fn(t);return}catch{r.f^=nt}r=r.parent}throw V=!1,t}function Cn(t){return(t.f&q)===0&&(t.parent===null||(t.parent.f&nt)===0)}function Q(t,n,r,e){if(V){if(r===null&&(V=!1),Cn(n))throw t;return}r!==null&&(V=!0);{On(t,n);return}}function Zt(t){var vt;var n=v,r=E,e=g,s=o,l=D,a=m,f=i,p=t.f;v=null,E=0,g=null,o=p&(A|W)?null:t,D=!O&&(p&R)!==0,m=null,i=t.ctx;try{var d=(0,t.fn)(),_=t.deps;if(v!==null){var c;if(j(t,E),_!==null&&E>0)for(_.length=E+v.length,c=0;c<v.length;c++)_[E+c]=v[c];else t.deps=_=v;if(!D)for(c=E;c<_.length;c++)((vt=_[c]).reactions??(vt.reactions=[])).push(t)}else _!==null&&E<_.length&&(j(t,E),_.length=E);return d}finally{v=n,E=r,g=e,o=s,D=l,m=a,i=f}}function Nn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&y&&(v===null||!v.includes(n))&&(T(n,b),n.f&(R|K)||(n.f^=K),j(n,0))}function j(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Nn(t,r[e])}function U(t){var n=t.f;if(!(n&q)){T(t,h);var r=u,e=i;u=t;try{n&ut?gn(t):Ht(t),Mt(t),Lt(t);var s=Zt(t);t.teardown=typeof s=="function"?s:null,t.version=Kt}catch(l){Q(l,t,r,e||t.ctx)}finally{u=r}}}function zt(){if(C>1e3){C=0;try{fn()}catch(t){if(Y!==null)Q(t,Y,null);else throw t}}C++}function Jt(t){var n=t.length;if(n!==0){zt();var r=O;O=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&h||(s.f^=h);var l=[];Wt(s,l),bn(l)}}finally{O=r}}}function bn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(q|N)))try{L(e)&&(U(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Yt(e):e.fn=null))}catch(s){Q(s,e,null,e.ctx)}}}function qn(){if(H=!1,C>1001)return;const t=I;I=[],Jt(t),H||(C=0,Y=null)}function tt(t){G===Gt&&(H||(H=!0,queueMicrotask(qn))),Y=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(W|A)){if(!(r&h))return;n.f^=h}}I.push(n)}function Wt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,l=(s&A)!==0,a=l&&(s&h)!==0,f=r.next;if(!a&&!(s&N))if(s&B){if(l)r.f^=h;else try{L(r)&&U(r)}catch(c){Q(c,r,null,r.ctx)}var p=r.first;if(p!==null){r=p;continue}}else s&Tt&&e.push(r);if(f===null){let c=r.parent;for(;c!==null;){if(t===c)break t;var d=c.next;if(d!==null){r=d;continue t}c=c.parent}}r=f}for(var _=0;_<e.length;_++)p=e[_],n.push(p),Wt(p,n)}function Xt(t){var n=G,r=I;try{zt();const s=[];G=Rn,I=s,H=!1,Jt(r);var e=t==null?void 0:t();return xn(),(I.length>0||s.length>0)&&Xt(),C=0,Y=null,e}finally{G=n,I=r}}async function Pr(){await Promise.resolve(),Xt()}function Qt(t){var _;var n=t.f,r=(n&y)!==0;if(r&&n&q){var e=bt(t);return it(t),e}if(o!==null){m!==null&&m.includes(t)&&_n();var s=o.deps;v===null&&s!==null&&s[E]===t?E++:v===null?v=[t]:v.push(t),g!==null&&u!==null&&u.f&h&&!(u.f&A)&&g.includes(t)&&(T(u,k),tt(u))}else if(r&&t.deps===null)for(var l=t,a=l.parent,f=l;a!==null;)if(a.f&y){var p=a;f=p,a=p.parent}else{var d=a;(_=d.deriveds)!=null&&_.includes(f)||(d.deriveds??(d.deriveds=[])).push(f);break}return r&&(l=t,L(l)&&qt(l)),t.v}function tn(t){const n=o;try{return o=null,t()}finally{o=n}}const Fn=~(k|b|h);function T(t,n){t.f=t.f&Fn|n}function Lr(t,n=!1,r){i={p:i,c:null,e:null,m:!1,s:t,x:null,l:null},X&&!n&&(i.l={s:null,u:null,r1:[],r2:ot(!1)})}function Mr(t){const n=i;if(n!==null){const a=n.e;if(a!==null){var r=u,e=o;n.e=null;try{for(var s=0;s<a.length;s++){var l=a[s];J(l.effect),z(l.reaction),Pt(l.fn)}}finally{J(r),z(e)}}i=n.p,n.m=!0}return{}}function Hr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ht in t)at(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ht in r&&at(r)}}}function at(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{at(t[e],n)}catch{}const r=rn(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=nn(r);for(let s in e){const l=e[s].get;if(l)try{l.call(t)}catch{}}}}}export{yn as $,Jn as A,xt as B,Tr as C,Or as D,mt as E,Mr as F,Lr as G,dn as H,Xn as I,mr as J,wr as K,Gn as L,hr as M,X as N,Pn as O,z as P,J as Q,o as R,ht as S,u as T,cr as U,kr as V,Mn as W,ln as X,Hn as Y,Yn as Z,ot as _,xr as a,Zn as a0,pt as a1,zn as a2,$n as a3,ar as a4,or as a5,Vn as a6,Un as a7,ur as a8,kt as a9,pn as aA,nr as aB,jt as aC,kn as aD,P as aE,rr as aF,er as aG,sr as aH,Sr as aI,Dr as aJ,Qn as aK,jn as aL,A as aa,W as ab,lr as ac,ir as ad,gr as ae,vn as af,rt as ag,sn as ah,hn as ai,S as aj,et as ak,yr as al,Dt as am,En as an,St as ao,Kn as ap,Ar as aq,Ln as ar,Rr as as,fr as at,_r as au,Xt as av,Wn as aw,Pr as ax,N as ay,tr as az,Ir as b,i as c,Bn as d,Pt as e,wt as f,Qt as g,Hr as h,wn as i,An as j,x as k,pr as l,Er as m,dr as n,vr as o,br as p,qr as q,ft as r,M as s,Cr as t,tn as u,Nr as v,w,rn as x,nn as y,Fr as z};