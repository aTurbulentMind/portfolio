import{a1 as ht,I as me,U as yt}from"./runtime.DIXZcq7d.js";new URL("sveltekit-internal://");function _e(t,n){return t==="/"||n==="ignore"?t:n==="never"?t.endsWith("/")?t.slice(0,-1):t:n==="always"&&!t.endsWith("/")?t+"/":t}function ye(t){return t.split("%25").map(decodeURI).join("%25")}function we(t){for(const n in t)t[n]=decodeURIComponent(t[n]);return t}function pt({href:t}){return t.split("#")[0]}const ve=["href","pathname","search","toString","toJSON"];function be(t,n,e){const r=new URL(t);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(a,o){if(o==="get"||o==="getAll"||o==="has")return s=>(e(s),a[o](s));n();const i=Reflect.get(a,o);return typeof i=="function"?i.bind(a):i}}),enumerable:!0,configurable:!0});for(const a of ve)Object.defineProperty(r,a,{get(){return n(),t[a]},enumerable:!0,configurable:!0});return r}const ke="/__data.json",Ee=".html__data.json";function Se(t){return t.endsWith(".html")?t.replace(/\.html$/,Ee):t.replace(/\/$/,"")+ke}function Ae(...t){let n=5381;for(const e of t)if(typeof e=="string"){let r=e.length;for(;r;)n=n*33^e.charCodeAt(--r)}else if(ArrayBuffer.isView(e)){const r=new Uint8Array(e.buffer,e.byteOffset,e.byteLength);let a=r.length;for(;a;)n=n*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function Re(t){const n=atob(t),e=new Uint8Array(n.length);for(let r=0;r<n.length;r++)e[r]=n.charCodeAt(r);return e.buffer}const Ht=window.fetch;window.fetch=(t,n)=>((t instanceof Request?t.method:(n==null?void 0:n.method)||"GET")!=="GET"&&z.delete(Et(t)),Ht(t,n));const z=new Map;function Ie(t,n){const e=Et(t,n),r=document.querySelector(e);if(r!=null&&r.textContent){let{body:a,...o}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&z.set(e,{body:a,init:o,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=Re(a)),Promise.resolve(new Response(a,o))}return window.fetch(t,n)}function Le(t,n,e){if(z.size>0){const r=Et(t,e),a=z.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(e==null?void 0:e.cache))return new Response(a.body,a.init);z.delete(r)}}return window.fetch(n,e)}function Et(t,n){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(n!=null&&n.headers||n!=null&&n.body){const a=[];n.headers&&a.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&a.push(n.body),r+=`[data-hash="${Ae(...a)}"]`}return r}const Pe=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Ue(t){const n=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${Te(t).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return n.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return gt(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return gt(String.fromCharCode(...c.slice(2).split("-").map(f=>parseInt(f,16))));const u=Pe.exec(c),[,h,g,d,_]=u;return n.push({name:d,matcher:_,optional:!!h,rest:!!g,chained:g?l===1&&i[0]==="":!1}),g?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return gt(c)}).join("")}).join("")}/?$`),params:n}}function xe(t){return!/^\([^)]+\)$/.test(t)}function Te(t){return t.slice(1).split("/").filter(xe)}function Ne(t,n,e){const r={},a=t.slice(1),o=a.filter(s=>s!==void 0);let i=0;for(let s=0;s<n.length;s+=1){const c=n[s];let l=a[s-i];if(c.chained&&c.rest&&i&&(l=a.slice(s-i,s+1).filter(u=>u).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||e[c.matcher](l)){r[c.name]=l;const u=n[s+1],h=a[s+1];u&&!u.rest&&u.optional&&h&&c.chained&&(i=0),!u&&!h&&Object.keys(r).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function gt(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Oe({nodes:t,server_loads:n,dictionary:e,matchers:r}){const a=new Set(n);return Object.entries(e).map(([s,[c,l,u]])=>{const{pattern:h,params:g}=Ue(s),d={id:s,exec:_=>{const f=h.exec(_);if(f)return Ne(f,g,r)},errors:[1,...u||[]].map(_=>t[_]),layouts:[0,...l||[]].map(i),leaf:o(c)};return d.errors.length=d.layouts.length=Math.max(d.errors.length,d.layouts.length),d});function o(s){const c=s<0;return c&&(s=~s),[c,t[s]]}function i(s){return s===void 0?s:[a.has(s),t[s]]}}function Bt(t,n=JSON.parse){try{return n(sessionStorage[t])}catch{}}function jt(t,n,e=JSON.stringify){const r=e(n);try{sessionStorage[t]=r}catch{}}const j=[];function St(t,n=ht){let e=null;const r=new Set;function a(s){if(me(t,s)&&(t=s,e)){const c=!j.length;for(const l of r)l[1](),j.push(l,t);if(c){for(let l=0;l<j.length;l+=2)j[l][0](j[l+1]);j.length=0}}}function o(s){a(s(t))}function i(s,c=ht){const l=[s,c];return r.add(l),r.size===1&&(e=n(a,o)||ht),s(t),()=>{r.delete(l),r.size===0&&e&&(e(),e=null)}}return{set:a,update:o,subscribe:i}}var Mt;const P=((Mt=globalThis.__sveltekit_1x5zs1m)==null?void 0:Mt.base)??"";var zt;const je=((zt=globalThis.__sveltekit_1x5zs1m)==null?void 0:zt.assets)??P,$e="1734017536181",Kt="sveltekit:snapshot",Jt="sveltekit:scroll",Yt="sveltekit:states",De="sveltekit:pageurl",C="sveltekit:history",B="sveltekit:navigation",Z={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},W=location.origin;function Wt(t){if(t instanceof URL)return t;let n=document.baseURI;if(!n){const e=document.getElementsByTagName("base");n=e.length?e[0].href:document.URL}return new URL(t,n)}function At(){return{x:pageXOffset,y:pageYOffset}}function $(t,n){return t.getAttribute(`data-sveltekit-${n}`)}const $t={...Z,"":Z.hover};function Xt(t){let n=t.assignedSlot??t.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function Zt(t,n){for(;t&&t!==n;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=Xt(t)}}function wt(t,n){let e;try{e=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const r=t instanceof SVGAElement?t.target.baseVal:t.target,a=!e||!!r||at(e,n)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(e==null?void 0:e.origin)===W&&t.hasAttribute("download");return{url:e,external:a,target:r,download:o}}function Q(t){let n=null,e=null,r=null,a=null,o=null,i=null,s=t;for(;s&&s!==document.documentElement;)r===null&&(r=$(s,"preload-code")),a===null&&(a=$(s,"preload-data")),n===null&&(n=$(s,"keepfocus")),e===null&&(e=$(s,"noscroll")),o===null&&(o=$(s,"reload")),i===null&&(i=$(s,"replacestate")),s=Xt(s);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:$t[r??"off"],preload_data:$t[a??"off"],keepfocus:c(n),noscroll:c(e),reload:c(o),replace_state:c(i)}}function Dt(t){const n=St(t);let e=!0;function r(){e=!0,n.update(i=>i)}function a(i){e=!1,n.set(i)}function o(i){let s;return n.subscribe(c=>{(s===void 0||e&&c!==s)&&i(s=c)})}return{notify:r,set:a,subscribe:o}}function Ce(){const{set:t,subscribe:n}=St(!1);let e;async function r(){clearTimeout(e);try{const a=await fetch(`${je}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==$e;return i&&(t(!0),clearTimeout(e)),i}catch{return!1}}return{subscribe:n,check:r}}function at(t,n){return t.origin!==W||!t.pathname.startsWith(n)}const Ve=-1,Fe=-2,qe=-3,Ge=-4,Me=-5,ze=-6;function on(t,n){return Qt(JSON.parse(t),n)}function Qt(t,n){if(typeof t=="number")return a(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const e=t,r=Array(e.length);function a(o,i=!1){if(o===Ve)return;if(o===qe)return NaN;if(o===Ge)return 1/0;if(o===Me)return-1/0;if(o===ze)return-0;if(i)throw new Error("Invalid input");if(o in r)return r[o];const s=e[o];if(!s||typeof s!="object")r[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],l=n==null?void 0:n[c];if(l)return r[o]=l(a(s[1]));switch(c){case"Date":r[o]=new Date(s[1]);break;case"Set":const u=new Set;r[o]=u;for(let d=1;d<s.length;d+=1)u.add(a(s[d]));break;case"Map":const h=new Map;r[o]=h;for(let d=1;d<s.length;d+=2)h.set(a(s[d]),a(s[d+1]));break;case"RegExp":r[o]=new RegExp(s[1],s[2]);break;case"Object":r[o]=Object(s[1]);break;case"BigInt":r[o]=BigInt(s[1]);break;case"null":const g=Object.create(null);r[o]=g;for(let d=1;d<s.length;d+=2)g[s[d]]=a(s[d+1]);break;default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);r[o]=c;for(let l=0;l<s.length;l+=1){const u=s[l];u!==Fe&&(c[l]=a(u))}}else{const c={};r[o]=c;for(const l in s){const u=s[l];c[l]=a(u)}}return r[o]}return a(0)}const te=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...te];const He=new Set([...te]);[...He];function Be(t){return t.filter(n=>n!=null)}class ot{constructor(n,e){this.status=n,typeof e=="string"?this.body={message:e}:e?this.body=e:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}}class ee{constructor(n,e){this.status=n,this.location=e}}class Rt extends Error{constructor(n,e,r){super(r),this.status=n,this.text=e}}const Ke="x-sveltekit-invalidated",Je="x-sveltekit-trailing-slash";function tt(t){return t instanceof ot||t instanceof Rt?t.status:500}function Ye(t){return t instanceof Rt?t.text:"Internal Error"}const O=Bt(Jt)??{},K=Bt(Kt)??{},x={url:Dt({}),page:Dt({}),navigating:St(null),updated:Ce()};function It(t){O[t]=At()}function We(t,n){let e=t+1;for(;O[e];)delete O[e],e+=1;for(e=n+1;K[e];)delete K[e],e+=1}function F(t){return location.href=t.href,new Promise(()=>{})}function Ct(){}let st,vt,et,U,bt,G;const Lt=[],nt=[];let I=null;const ne=[],Xe=[];let D=[],y={branch:[],error:null,url:null},Pt=!1,rt=!1,Vt=!0,J=!1,M=!1,re=!1,it=!1,N,S,L,A,q;const H=new Set;let mt;async function sn(t,n,e){var a,o;document.URL!==location.href&&(location.href=location.href),G=t,st=Oe(t),U=document.documentElement,bt=n,vt=t.nodes[0],et=t.nodes[1],vt(),et(),S=(a=history.state)==null?void 0:a[C],L=(o=history.state)==null?void 0:o[B],S||(S=L=Date.now(),history.replaceState({...history.state,[C]:S,[B]:L},""));const r=O[S];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),e?await rn(bt,e):en(location.href,{replaceState:!0}),nn()}async function ae(){if(await(mt||(mt=Promise.resolve())),!mt)return;mt=null;const t=ft(y.url,!0);I=null;const n=q={},e=t&&await Tt(t);if(!(!e||n!==q)){if(e.type==="redirect")return ct(new URL(e.location,y.url).href,{},1,n);e.props.page&&(A=e.props.page),y=e.state,oe(),N.$set(e.props)}}function oe(){Lt.length=0,it=!1}function se(t){nt.some(n=>n==null?void 0:n.snapshot)&&(K[t]=nt.map(n=>{var e;return(e=n==null?void 0:n.snapshot)==null?void 0:e.capture()}))}function ie(t){var n;(n=K[t])==null||n.forEach((e,r)=>{var a,o;(o=(a=nt[r])==null?void 0:a.snapshot)==null||o.restore(e)})}function Ft(){It(S),jt(Jt,O),se(L),jt(Kt,K)}async function ct(t,n,e,r){return X({type:"goto",url:Wt(t),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:e,nav_token:r,accept:()=>{n.invalidateAll&&(it=!0)}})}async function Ze(t){if(t.id!==(I==null?void 0:I.id)){const n={};H.add(n),I={id:t.id,token:n,promise:Tt({...t,preload:n}).then(e=>(H.delete(n),e.type==="loaded"&&e.state.error&&(I=null),e))}}return I.promise}async function _t(t){const n=st.find(e=>e.exec(fe(t)));n&&await Promise.all([...n.layouts,n.leaf].map(e=>e==null?void 0:e[1]()))}function ce(t,n,e){var o;y=t.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),A=t.props.page,N=new G.root({target:n,props:{...t.props,stores:x,components:nt},hydrate:e}),ie(L);const a={from:null,to:{params:y.params,route:{id:((o=y.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};D.forEach(i=>i(a)),rt=!0}function Y({url:t,params:n,branch:e,status:r,error:a,route:o,form:i}){let s="never";if(P&&(t.pathname===P||t.pathname===P+"/"))s="always";else for(const d of e)(d==null?void 0:d.slash)!==void 0&&(s=d.slash);t.pathname=_e(t.pathname,s),t.search=t.search;const c={type:"loaded",state:{url:t,params:n,branch:e,error:a,route:o},props:{constructors:Be(e).map(d=>d.node.component),page:A}};i!==void 0&&(c.props.form=i);let l={},u=!A,h=0;for(let d=0;d<Math.max(e.length,y.branch.length);d+=1){const _=e[d],f=y.branch[d];(_==null?void 0:_.data)!==(f==null?void 0:f.data)&&(u=!0),_&&(l={...l,..._.data},u&&(c.props[`data_${h}`]=l),h+=1)}return(!y.url||t.href!==y.url.href||y.error!==a||i!==void 0&&i!==A.form||u)&&(c.props.page={error:a,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:r,url:new URL(t),form:i??null,data:u?l:A.data}),c}async function Ut({loader:t,parent:n,url:e,params:r,route:a,server_data_node:o}){var u,h,g;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await t();if((u=l.universal)!=null&&u.load){let d=function(...f){for(const m of f){const{href:b}=new URL(m,e);c.dependencies.add(b)}};const _={route:new Proxy(a,{get:(f,m)=>(s&&(c.route=!0),f[m])}),params:new Proxy(r,{get:(f,m)=>(s&&c.params.add(m),f[m])}),data:(o==null?void 0:o.data)??null,url:be(e,()=>{s&&(c.url=!0)},f=>{s&&c.search_params.add(f)}),async fetch(f,m){let b;f instanceof Request?(b=f.url,m={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:f.headers,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,...m}):b=f;const R=new URL(b,e);return s&&d(R.href),R.origin===e.origin&&(b=R.href.slice(e.origin.length)),rt?Le(b,R.href,m):Ie(b,m)},setHeaders:()=>{},depends:d,parent(){return s&&(c.parent=!0),n()},untrack(f){s=!1;try{return f()}finally{s=!0}}};i=await l.universal.load.call(null,_)??null}return{node:l,loader:t,server:o,universal:(h=l.universal)!=null&&h.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((g=l.universal)==null?void 0:g.trailingSlash)??(o==null?void 0:o.slash)}}function qt(t,n,e,r,a,o){if(it)return!0;if(!a)return!1;if(a.parent&&t||a.route&&n||a.url&&e)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(o[i]!==y.params[i])return!0;for(const i of a.dependencies)if(Lt.some(s=>s(new URL(i))))return!0;return!1}function xt(t,n){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?n??null:null}function Qe(t,n){if(!t)return new Set(n.searchParams.keys());const e=new Set([...t.searchParams.keys(),...n.searchParams.keys()]);for(const r of e){const a=t.searchParams.getAll(r),o=n.searchParams.getAll(r);a.every(i=>o.includes(i))&&o.every(i=>a.includes(i))&&e.delete(r)}return e}function Gt({error:t,url:n,route:e,params:r}){return{type:"loaded",state:{error:t,url:n,route:e,params:r,branch:[]},props:{page:A,constructors:[]}}}async function Tt({id:t,invalidating:n,url:e,params:r,route:a,preload:o}){if((I==null?void 0:I.id)===t)return H.delete(I.token),I.promise;const{errors:i,layouts:s,leaf:c}=a,l=[...s,c];i.forEach(p=>p==null?void 0:p().catch(()=>{})),l.forEach(p=>p==null?void 0:p[1]().catch(()=>{}));let u=null;const h=y.url?t!==y.url.pathname+y.url.search:!1,g=y.route?a.id!==y.route.id:!1,d=Qe(y.url,e);let _=!1;const f=l.map((p,v)=>{var T;const k=y.branch[v],E=!!(p!=null&&p[0])&&((k==null?void 0:k.loader)!==p[1]||qt(_,g,h,d,(T=k.server)==null?void 0:T.uses,r));return E&&(_=!0),E});if(f.some(Boolean)){try{u=await he(e,f)}catch(p){const v=await V(p,{url:e,params:r,route:{id:t}});return H.has(o)?Gt({error:v,url:e,params:r,route:a}):lt({status:tt(p),error:v,url:e,route:a})}if(u.type==="redirect")return u}const m=u==null?void 0:u.nodes;let b=!1;const R=l.map(async(p,v)=>{var ut;if(!p)return;const k=y.branch[v],E=m==null?void 0:m[v];if((!E||E.type==="skip")&&p[1]===(k==null?void 0:k.loader)&&!qt(b,g,h,d,(ut=k.universal)==null?void 0:ut.uses,r))return k;if(b=!0,(E==null?void 0:E.type)==="error")throw E;return Ut({loader:p[1],url:e,params:r,route:a,parent:async()=>{var Ot;const Nt={};for(let dt=0;dt<v;dt+=1)Object.assign(Nt,(Ot=await R[dt])==null?void 0:Ot.data);return Nt},server_data_node:xt(E===void 0&&p[0]?{type:"skip"}:E??null,p[0]?k==null?void 0:k.server:void 0)})});for(const p of R)p.catch(()=>{});const w=[];for(let p=0;p<l.length;p+=1)if(l[p])try{w.push(await R[p])}catch(v){if(v instanceof ee)return{type:"redirect",location:v.location};if(H.has(o))return Gt({error:await V(v,{params:r,url:e,route:{id:a.id}}),url:e,params:r,route:a});let k=tt(v),E;if(m!=null&&m.includes(v))k=v.status??k,E=v.error;else if(v instanceof ot)E=v.body;else{if(await x.updated.check())return await F(e);E=await V(v,{params:r,url:e,route:{id:a.id}})}const T=await le(p,w,i);return T?Y({url:e,params:r,branch:w.slice(0,T.idx).concat(T.node),status:k,error:E,route:a}):await de(e,{id:a.id},E,k)}else w.push(void 0);return Y({url:e,params:r,branch:w,status:200,error:null,route:a,form:n?void 0:null})}async function le(t,n,e){for(;t--;)if(e[t]){let r=t;for(;!n[r];)r-=1;try{return{idx:r+1,node:{node:await e[t](),loader:e[t],data:{},server:null,universal:null}}}catch{continue}}}async function lt({status:t,error:n,url:e,route:r}){const a={};let o=null;if(G.server_loads[0]===0)try{const l=await he(e,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;o=l.nodes[0]??null}catch{(e.origin!==W||e.pathname!==location.pathname||Pt)&&await F(e)}const s=await Ut({loader:vt,url:e,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:xt(o)}),c={node:await et(),loader:et,universal:null,server:null,data:null};return Y({url:e,params:a,branch:[s,c],status:t,error:n,route:null})}function ft(t,n){if(!t||at(t,P))return;let e;try{e=G.hooks.reroute({url:new URL(t)})??t.pathname}catch{return}const r=fe(e);for(const a of st){const o=a.exec(r);if(o)return{id:t.pathname+t.search,invalidating:n,route:a,params:we(o),url:t}}}function fe(t){return ye(t.slice(P.length)||"/")}function ue({url:t,type:n,intent:e,delta:r}){let a=!1;const o=ge(y,e,t,n);r!==void 0&&(o.navigation.delta=r);const i={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return J||ne.forEach(s=>s(i)),a?null:o}async function X({type:t,url:n,popped:e,keepfocus:r,noscroll:a,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:l=Ct,block:u=Ct}){const h=ft(n,!1),g=ue({url:n,type:t,delta:e==null?void 0:e.delta,intent:h});if(!g){u();return}const d=S,_=L;l(),J=!0,rt&&x.navigating.set(g.navigation),q=c;let f=h&&await Tt(h);if(!f){if(at(n,P))return await F(n);f=await de(n,{id:null},await V(new Rt(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,q!==c)return g.reject(new Error("navigation aborted")),!1;if(f.type==="redirect")if(s>=20)f=await lt({status:500,error:await V(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return ct(new URL(f.location,n).href,{},s+1,c),!1;else f.props.page.status>=400&&await x.updated.check()&&await F(n);if(oe(),It(d),se(_),f.props.page.url.pathname!==n.pathname&&(n.pathname=f.props.page.url.pathname),i=e?e.state:i,!e){const w=o?0:1,p={[C]:S+=w,[B]:L+=w,[Yt]:i};(o?history.replaceState:history.pushState).call(history,p,"",n),o||We(S,L)}if(I=null,f.props.page.state=i,rt){y=f.state,f.props.page&&(f.props.page.url=n);const w=(await Promise.all(Xe.map(p=>p(g.navigation)))).filter(p=>typeof p=="function");if(w.length>0){let p=function(){D=D.filter(v=>!w.includes(v))};w.push(p),D.push(...w)}N.$set(f.props),re=!0}else ce(f,bt,!1);const{activeElement:m}=document;await yt();const b=e?e.scroll:a?At():null;if(Vt){const w=n.hash&&document.getElementById(decodeURIComponent(n.hash.slice(1)));b?scrollTo(b.x,b.y):w?w.scrollIntoView():scrollTo(0,0)}const R=document.activeElement!==m&&document.activeElement!==document.body;!r&&!R&&kt(),Vt=!0,f.props.page&&(A=f.props.page),J=!1,t==="popstate"&&ie(L),g.fulfil(void 0),D.forEach(w=>w(g.navigation)),x.navigating.set(null)}async function de(t,n,e,r){return t.origin===W&&t.pathname===location.pathname&&!Pt?await lt({status:r,error:e,url:t,route:n}):await F(t)}function tn(){let t;U.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(t),t=setTimeout(()=>{r(i,2)},20)});function n(o){r(o.composedPath()[0],1)}U.addEventListener("mousedown",n),U.addEventListener("touchstart",n,{passive:!0});const e=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(_t(i.target.href),e.unobserve(i.target))},{threshold:0});function r(o,i){const s=Zt(o,U);if(!s)return;const{url:c,external:l,download:u}=wt(s,P);if(l||u)return;const h=Q(s);if(!h.reload)if(i<=h.preload_data){const g=ft(c,!1);g&&Ze(g)}else i<=h.preload_code&&_t(c.pathname)}function a(){e.disconnect();for(const o of U.querySelectorAll("a")){const{url:i,external:s,download:c}=wt(o,P);if(s||c)continue;const l=Q(o);l.reload||(l.preload_code===Z.viewport&&e.observe(o),l.preload_code===Z.eager&&_t(i.pathname))}}D.push(a),a()}function V(t,n){if(t instanceof ot)return t.body;const e=tt(t),r=Ye(t);return G.hooks.handleError({error:t,event:n,status:e,message:r})??{message:r}}function en(t,n={}){return t=Wt(t),t.origin!==W?Promise.reject(new Error("goto: invalid URL")):ct(t,n,0)}function cn(t){{const{href:n}=new URL(t,location.href);Lt.push(e=>e.href===n)}return ae()}function ln(){return it=!0,ae()}async function fn(t){if(t.type==="error"){const n=new URL(location.href),{branch:e,route:r}=y;if(!r)return;const a=await le(y.branch.length,e,r.errors);if(a){const o=Y({url:n,params:y.params,branch:e.slice(0,a.idx).concat(a.node),status:t.status??500,error:t.error,route:r});y=o.state,N.$set(o.props),yt().then(kt)}}else t.type==="redirect"?ct(t.location,{invalidateAll:!0},0):(N.$set({form:null,page:{...A,form:t.data,status:t.status}}),await yt(),N.$set({form:t.data}),t.type==="success"&&kt())}function nn(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",e=>{let r=!1;if(Ft(),!J){const a=ge(y,void 0,null,"leave"),o={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};ne.forEach(i=>i(o))}r?(e.preventDefault(),e.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ft()}),(n=navigator.connection)!=null&&n.saveData||tn(),U.addEventListener("click",async e=>{var g;if(e.button||e.which!==1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)return;const r=Zt(e.composedPath()[0],U);if(!r)return;const{url:a,external:o,target:i,download:s}=wt(r,P);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=Q(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||s)return;if(o||c.reload){ue({url:a,type:"link"})?J=!0:e.preventDefault();return}const[u,h]=a.href.split("#");if(h!==void 0&&u===pt(location)){const[,d]=y.url.href.split("#");if(d===h){e.preventDefault(),h===""||h==="top"&&r.ownerDocument.getElementById("top")===null?window.scrollTo({top:0}):(g=r.ownerDocument.getElementById(h))==null||g.scrollIntoView();return}if(M=!0,It(S),t(a),!c.replace_state)return;M=!1}e.preventDefault(),await new Promise(d=>{requestAnimationFrame(()=>{setTimeout(d,0)}),setTimeout(d,100)}),X({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),U.addEventListener("submit",e=>{if(e.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(e.target),a=e.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const i=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(at(i,P))return;const s=e.target,c=Q(s);if(c.reload)return;e.preventDefault(),e.stopPropagation();const l=new FormData(s),u=a==null?void 0:a.getAttribute("name");u&&l.append(u,(a==null?void 0:a.getAttribute("value"))??""),i.search=new URLSearchParams(l).toString(),X({type:"form",url:i,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??i.href===location.href})}),addEventListener("popstate",async e=>{var r;if((r=e.state)!=null&&r[C]){const a=e.state[C];if(q={},a===S)return;const o=O[a],i=e.state[Yt]??{},s=new URL(e.state[De]??location.href),c=e.state[B],l=pt(location)===pt(y.url);if(c===L&&(re||l)){t(s),O[S]=At(),o&&scrollTo(o.x,o.y),i!==A.state&&(A={...A,state:i},N.$set({page:A})),S=a;return}const h=a-S;await X({type:"popstate",url:s,popped:{state:i,scroll:o,delta:h},accept:()=>{S=a,L=c},block:()=>{history.go(-h)},nav_token:q})}else if(!M){const a=new URL(location.href);t(a)}}),addEventListener("hashchange",()=>{M&&(M=!1,history.replaceState({...history.state,[C]:++S,[B]:L},"",location.href))});for(const e of document.querySelectorAll("link"))e.rel==="icon"&&(e.href=e.href);addEventListener("pageshow",e=>{e.persisted&&x.navigating.set(null)});function t(e){y.url=e,x.page.set({...A,url:e}),x.page.notify()}}async function rn(t,{status:n=200,error:e,node_ids:r,params:a,route:o,data:i,form:s}){Pt=!0;const c=new URL(location.href);({params:a={},route:o={id:null}}=ft(c,!1)||{});let l;try{const u=r.map(async(d,_)=>{const f=i[_];return f!=null&&f.uses&&(f.uses=pe(f.uses)),Ut({loader:G.nodes[d],url:c,params:a,route:o,parent:async()=>{const m={};for(let b=0;b<_;b+=1)Object.assign(m,(await u[b]).data);return m},server_data_node:xt(f)})}),h=await Promise.all(u),g=st.find(({id:d})=>d===o.id);if(g){const d=g.layouts;for(let _=0;_<d.length;_++)d[_]||h.splice(_,0,void 0)}l=Y({url:c,params:a,branch:h,status:n,error:e,form:s,route:g??null})}catch(u){if(u instanceof ee){await F(new URL(u.location,location.href));return}l=await lt({status:tt(u),error:await V(u,{url:c,params:a,route:o}),url:c,route:o})}l.props.page&&(l.props.page.state={}),ce(l,t,!0)}async function he(t,n){var a;const e=new URL(t);e.pathname=Se(t.pathname),t.pathname.endsWith("/")&&e.searchParams.append(Je,"1"),e.searchParams.append(Ke,n.map(o=>o?"1":"0").join(""));const r=await Ht(e.href);if(!r.ok){let o;throw(a=r.headers.get("content-type"))!=null&&a.includes("application/json")?o=await r.json():r.status===404?o="Not Found":r.status===500&&(o="Internal Error"),new ot(r.status,o)}return new Promise(async o=>{var h;const i=new Map,s=r.body.getReader(),c=new TextDecoder;function l(g){return Qt(g,{Promise:d=>new Promise((_,f)=>{i.set(d,{fulfil:_,reject:f})})})}let u="";for(;;){const{done:g,value:d}=await s.read();if(g&&!u)break;for(u+=!d&&u?`
`:c.decode(d,{stream:!0});;){const _=u.indexOf(`
`);if(_===-1)break;const f=JSON.parse(u.slice(0,_));if(u=u.slice(_+1),f.type==="redirect")return o(f);if(f.type==="data")(h=f.nodes)==null||h.forEach(m=>{(m==null?void 0:m.type)==="data"&&(m.uses=pe(m.uses),m.data=l(m.data))}),o(f);else if(f.type==="chunk"){const{id:m,data:b,error:R}=f,w=i.get(m);i.delete(m),R?w.reject(l(R)):w.fulfil(l(b))}}}})}function pe(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url),search_params:new Set((t==null?void 0:t.search_params)??[])}}function kt(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const n=document.body,e=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),e!==null?n.setAttribute("tabindex",e):n.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let o=0;o<r.rangeCount;o+=1)a.push(r.getRangeAt(o));setTimeout(()=>{if(r.rangeCount===a.length){for(let o=0;o<r.rangeCount;o+=1){const i=a[o],s=r.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}r.removeAllRanges()}})}}}function ge(t,n,e,r){var c,l;let a,o;const i=new Promise((u,h)=>{a=u,o=h});return i.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:e&&{params:(n==null?void 0:n.params)??null,route:{id:((l=n==null?void 0:n.route)==null?void 0:l.id)??null},url:e},willUnload:!n,type:r,complete:i},fulfil:a,reject:o}}export{fn as a,cn as b,ln as i,on as p,sn as s};
