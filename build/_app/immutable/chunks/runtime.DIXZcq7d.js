var rt=Array.isArray,et=Array.from,lt=Object.isFrozen,ut=Object.defineProperty,st=Object.getOwnPropertyDescriptor,jn=Object.getOwnPropertyDescriptors,ot=Object.prototype,ft=Array.prototype,In=Object.getPrototypeOf;const it=()=>{};function at(n){return n()}function un(n){for(var t=0;t<n.length;t++)n[t]()}const g=2,sn=4,b=8,on=16,y=32,W=64,T=128,M=256,E=512,m=1024,C=2048,F=4096,D=8192,Ln=16384,fn=32768,_t=65536,Mn=1<<18,X=Symbol("$state"),ct=Symbol("$state.frozen"),vt=Symbol("");function an(n){return n===this.v}function Yn(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function _n(n){return!Yn(n,this.v)}function Pn(n){throw new Error("effect_in_teardown")}function Bn(){throw new Error("effect_in_unowned_derived")}function Hn(n){throw new Error("effect_orphan")}function Un(){throw new Error("effect_update_depth_exceeded")}function pt(){throw new Error("hydration_failed")}function ht(n){throw new Error("props_invalid_value")}function zn(){throw new Error("state_unsafe_mutation")}function cn(n){return{f:0,v:n,reactions:null,equals:an,version:0}}function wt(n){var r;const t=cn(n);return t.equals=_n,a!==null&&a.l!==null&&((r=a.l).s??(r.s=[])).push(t),t}function Et(n,t){return vn(n,Nn(()=>Q(n))),t}function vn(n,t){return i!==null&&G()&&i.f&g&&zn(),n.equals(t)||(n.v=t,n.version=Sn(),pn(n,m),G()&&f!==null&&f.f&E&&!(f.f&y)&&(c!==null&&c.includes(n)?(h(f,m),z(f)):d===null?Jn([n]):d.push(n))),t}function pn(n,t){var r=n.reactions;if(r!==null)for(var e=G(),u=r.length,l=0;l<u;l++){var s=r[l],o=s.f;o&m||!e&&s===f||(h(s,t),o&(E|T)&&(o&g?pn(s,C):z(s)))}}function hn(n){f===null&&i===null&&Hn(),i!==null&&i.f&T&&Bn(),Z&&Pn()}function nn(n,t){var r=t.last;r===null?t.last=t.first=n:(r.next=n,n.prev=r,t.last=n)}function R(n,t,r,e=!0){var u=(n&W)!==0,l={ctx:a,deps:null,nodes:null,f:n|m,first:null,fn:t,last:null,next:null,parent:u?null:f,prev:null,teardown:null,transitions:null,version:0};if(r){var s=S;try{tn(!0),I(l),l.f|=Ln}catch(_){throw H(l),_}finally{tn(s)}}else t!==null&&z(l);var o=r&&l.deps===null&&l.first===null&&l.nodes===null&&l.teardown===null;return!o&&!u&&e&&(f!==null&&nn(l,f),i!==null&&i.f&g&&nn(l,i)),l}function yt(n){const t=R(b,null,!1);return h(t,E),t.teardown=n,t}function dt(n){hn();var t=f!==null&&(f.f&b)!==0&&a!==null&&!a.m;if(t){var r=a;(r.e??(r.e=[])).push(n)}else{var e=wn(n);return e}}function mt(n){return hn(),B(n)}function kt(n){const t=R(W,n,!0);return()=>{H(t)}}function wn(n){return R(sn,n,!1)}function gt(n,t){var r=a,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=B(()=>{n(),!e.ran&&(e.ran=!0,vn(r.l.r2,!0),Nn(t))})}function Tt(){var n=a;B(()=>{if(Q(n.l.r2)){for(var t of n.l.r1){var r=t.effect;N(r)&&I(r),t.ran=!1}n.l.r2.v=!1}})}function B(n){return R(b,n,!0)}function qt(n){return B(n)}function Ot(n,t=0){return R(b|on|t,n,!0)}function xt(n,t=!0){return R(b|y,n,!0,t)}function En(n){var t=n.teardown;if(t!==null){const r=Z,e=i;rn(!0),en(null);try{t.call(null)}finally{rn(r),en(e)}}}function H(n,t=!0){var r=!1;if((t||n.f&Mn)&&n.nodes!==null){for(var e=n.nodes.start,u=n.nodes.end;e!==null;){var l=e===u?null:e.nextSibling;e.remove(),e=l}r=!0}if(J(n,t&&!r),U(n,0),h(n,D),n.transitions)for(const o of n.transitions)o.stop();En(n);var s=n.parent;s!==null&&n.f&y&&s.first!==null&&yn(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.parent=n.fn=n.nodes=null}function yn(n){var t=n.parent,r=n.prev,e=n.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),t!==null&&(t.first===n&&(t.first=e),t.last===n&&(t.last=r))}function St(n,t){var r=[];dn(n,r,!0),Kn(r,()=>{H(n),t&&t()})}function Kn(n,t){var r=n.length;if(r>0){var e=()=>--r||t();for(var u of n)u.out(e)}else t()}function dn(n,t,r){if(!(n.f&F)){if(n.f^=F,n.transitions!==null)for(const s of n.transitions)(s.is_global||r)&&t.push(s);for(var e=n.first;e!==null;){var u=e.next,l=(e.f&fn)!==0||(e.f&y)!==0;dn(e,t,l?r:!1),e=u}}}function At(n){mn(n,!0)}function mn(n,t){if(n.f&F){n.f^=F,N(n)&&I(n);for(var r=n.first;r!==null;){var e=r.next,u=(r.f&fn)!==0||(r.f&y)!==0;mn(r,u?t:!1),r=e}if(n.transitions!==null)for(const l of n.transitions)(l.is_global||t)&&l.in()}}const $n=typeof requestIdleCallback>"u"?n=>setTimeout(n,1):requestIdleCallback;let Y=!1,P=!1,K=[],$=[];function kn(){Y=!1;const n=K.slice();K=[],un(n)}function gn(){P=!1;const n=$.slice();$=[],un(n)}function Ft(n){Y||(Y=!0,queueMicrotask(kn)),K.push(n)}function bt(n){P||(P=!0,$n(gn)),$.push(n)}function Gn(){Y&&kn(),P&&gn()}function Vn(n){let t=g|m;f===null&&(t|=T);const r={deps:null,deriveds:null,equals:an,f:t,first:null,fn:n,last:null,reactions:null,v:null,version:0};if(i!==null&&i.f&g){var e=i;e.deriveds===null?e.deriveds=[r]:e.deriveds.push(r)}return r}function Ct(n){const t=Vn(n);return t.equals=_n,t}function Tn(n){J(n);var t=n.deriveds;if(t!==null){n.deriveds=null;for(var r=0;r<t.length;r+=1)Wn(t[r])}}function qn(n){Tn(n);var t=An(n),r=(x||n.f&T)&&n.deps!==null?C:E;h(n,r),n.equals(t)||(n.v=t,n.version=Sn())}function Wn(n){Tn(n),U(n,0),h(n,D),n.first=n.last=n.deps=n.reactions=n.fn=null}const On=0,Zn=1;let L=On,j=!1,S=!1,Z=!1;function tn(n){S=n}function rn(n){Z=n}let k=[],A=0,i=null;function en(n){i=n}let f=null,c=null,v=0,d=null;function Jn(n){d=n}let xn=0,x=!1,a=null;function Sn(){return xn++}function G(){return a!==null&&a.l===null}function N(n){var s,o;var t=n.f;if(t&m)return!0;if(t&C){var r=n.deps;if(r!==null){var e=(t&T)!==0,u;if(t&M){for(u=0;u<r.length;u++)((s=r[u]).reactions??(s.reactions=[])).push(n);n.f^=M}for(u=0;u<r.length;u++){var l=r[u];if(N(l)&&qn(l),l.version>n.version)return!0;e&&!x&&!((o=l==null?void 0:l.reactions)!=null&&o.includes(n))&&(l.reactions??(l.reactions=[])).push(n)}}h(n,E)}return!1}function Qn(n,t,r){throw n}function An(n){var t=c,r=v,e=d,u=i,l=x;c=null,v=0,d=null,i=n.f&(y|W)?null:n,x=!S&&(n.f&T)!==0;try{var s=(0,n.fn)(),o=n.deps;if(c!==null){var _,p;if(o!==null){var q=v===0?c:o.slice(0,v).concat(c),O=q.length>16?new Set(q):null;for(p=v;p<o.length;p++)_=o[p],(O!==null?!O.has(_):!q.includes(_))&&Fn(n,_)}if(o!==null&&v>0)for(o.length=v+c.length,p=0;p<c.length;p++)o[v+p]=c[p];else n.deps=o=c;if(!x)for(p=v;p<o.length;p++){_=o[p];var w=_.reactions;w===null?_.reactions=[n]:w[w.length-1]!==n&&!w.includes(n)&&w.push(n)}}else o!==null&&v<o.length&&(U(n,v),o.length=v);return s}finally{c=t,v=r,d=e,i=u,x=l}}function Fn(n,t){const r=t.reactions;let e=0;if(r!==null){e=r.length-1;const u=r.indexOf(n);u!==-1&&(e===0?t.reactions=null:(r[u]=r[e],r.pop()))}e===0&&t.f&g&&(h(t,C),t.f&(T|M)||(t.f^=M),U(t,0))}function U(n,t){var r=n.deps;if(r!==null)for(var e=t===0?null:r.slice(0,t),u=new Set,l=t;l<r.length;l++){var s=r[l];u.has(s)||(u.add(s),(e===null||!e.includes(s))&&Fn(n,s))}}function J(n,t=!1){var r=n.first;for(n.first=n.last=null;r!==null;){var e=r.next;H(r,t),r=e}}function I(n){var t=n.f;if(!(t&D)){h(n,E);var r=n.ctx,e=f,u=a;f=n,a=r;try{t&on||J(n),En(n);var l=An(n);n.teardown=typeof l=="function"?l:null,n.version=xn}catch(s){Qn(s)}finally{f=e,a=u}}}function bn(){A>1e3&&(A=0,Un()),A++}function Cn(n){var t=n.length;if(t!==0){bn();var r=S;S=!0;try{for(var e=0;e<t;e++){var u=n[e];if(u.first===null&&!(u.f&y))ln([u]);else{var l=[];Dn(u,l),ln(l)}}}finally{S=r}}}function ln(n){var t=n.length;if(t!==0)for(var r=0;r<t;r++){var e=n[r];!(e.f&(D|F))&&N(e)&&(I(e),e.deps===null&&e.first===null&&e.nodes===null&&(e.teardown===null?yn(e):e.fn=null))}}function Xn(){if(j=!1,A>1001)return;const n=k;k=[],Cn(n),j||(A=0)}function z(n){L===On&&(j||(j=!0,queueMicrotask(Xn)));for(var t=n;t.parent!==null;){t=t.parent;var r=t.f;if(r&y){if(!(r&E))return;h(t,C)}}k.push(t)}function Dn(n,t){var r=n.first,e=[];n:for(;r!==null;){var u=r.f,l=(u&(D|F))===0,s=u&y,o=(u&E)!==0,_=r.first;if(l&&(!s||!o)){if(s&&h(r,E),u&b){if(!s&&N(r)&&(I(r),_=r.first),_!==null){r=_;continue}}else if(u&sn)if(s||o){if(_!==null){r=_;continue}}else e.push(r)}var p=r.next;if(p===null){let w=r.parent;for(;w!==null;){if(n===w)break n;var q=w.next;if(q!==null){r=q;continue n}w=w.parent}}r=p}for(var O=0;O<e.length;O++)_=e[O],t.push(_),Dn(_,t)}function Rn(n){var t=L,r=k;try{bn();const u=[];L=Zn,k=u,j=!1,Cn(r);var e=n==null?void 0:n();return Gn(),(k.length>0||u.length>0)&&Rn(),A=0,e}finally{L=t,k=r}}async function Dt(){await Promise.resolve(),Rn()}function Q(n){var t=n.f;if(t&D)return n.v;if(i!==null){var r=i.deps;c===null&&r!==null&&r[v]===n?v++:(r===null||v===0||r[v-1]!==n)&&(c===null?c=[n]:c[c.length-1]!==n&&c.push(n)),d!==null&&f!==null&&f.f&E&&!(f.f&y)&&d.includes(n)&&(h(f,m),z(f))}if(t&g){var e=n;N(e)&&qn(e)}return n.v}function Nn(n){const t=i;try{return i=null,n()}finally{i=t}}const nt=~(m|C|E);function h(n,t){n.f=n.f&nt|t}function tt(n){return typeof n=="object"&&n!==null&&typeof n.f=="number"}function Rt(n,t=!1,r){a={p:a,c:null,e:null,m:!1,s:n,x:null,l:null},t||(a.l={s:null,u:null,r1:[],r2:cn(!1)})}function Nt(n){const t=a;if(t!==null){const e=t.e;if(e!==null){t.e=null;for(var r=0;r<e.length;r++)wn(e[r])}a=t.p,t.m=!0}return{}}function jt(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(X in n)V(n);else if(!Array.isArray(n))for(let t in n){const r=n[t];typeof r=="object"&&r&&X in r&&V(r)}}}function V(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let e in n)try{V(n[e],t)}catch{}const r=In(n);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=jn(r);for(let u in e){const l=e[u].get;if(l)try{l.call(n)}catch{}}}}}function It(n){return tt(n)?Q(n):n}export{Et as $,qt as A,Nt as B,pt as C,et as D,fn as E,kt as F,f as G,Mn as H,Yn as I,bt as J,vt as K,_t as L,lt as M,ct as N,ot as O,ft as P,cn as Q,In as R,X as S,Rn as T,Dt as U,F as V,dn as W,Kn as X,H as Y,gt as Z,Tt as _,Ct as a,It as a0,it as a1,Q as b,vn as c,Vn as d,wn as e,mt as f,st as g,dt as h,a as i,un as j,at as k,jt as l,wt as m,ut as n,rt as o,ht as p,Ft as q,B as r,_n as s,yt as t,Nn as u,Ot as v,At as w,xt as x,St as y,Rt as z};
