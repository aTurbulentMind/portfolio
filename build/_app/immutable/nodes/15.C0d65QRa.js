import{f as me,c as s,s as e,a as u,t as m,$ as ce,r as a}from"../chunks/disclose-version.D32A8cIq.js";import{p as pe,m as R,X as be,Y as he,a as fe,g as r,s as E,K as ye,t as d,_ as h,R as te,$ as xe}from"../chunks/runtime.Cmx-9IxZ.js";import{s as l}from"../chunks/render.Dx_fi2se.js";import{i as c}from"../chunks/if.BqhT6dNd.js";import{e as re,i as ae}from"../chunks/each.DoEVNEIz.js";import{h as $e}from"../chunks/svelte-head.DsIx1nbp.js";import{r as se,s as we}from"../chunks/attributes.MW-2LmP5.js";import{e as W}from"../chunks/events.CQ8HCPju.js";import{a as ke}from"../chunks/input.L8SjnS8-.js";import{i as Ne}from"../chunks/lifecycle.DAoeH_GG.js";import{p as Fe}from"../chunks/props.BR7FjymL.js";import"../chunks/entry.Bc3QRP3G.js";var Te=m('<tr><td class="svelte-ri1gi8"> </td><td class="svelte-ri1gi8"> </td><td class="svelte-ri1gi8"> </td><td class="svelte-ri1gi8"> </td><td class="svelte-ri1gi8"><button class="ripple-btn svelte-ri1gi8">View</button></td></tr>'),Me=m('<div class="mobile-cards svelte-ri1gi8"><div class="card"><div><strong>Form Type:</strong> </div> <div><strong>Full Name:</strong> </div> <div><strong>Email:</strong> </div> <div><strong>Submitted At:</strong> <br> </div> <button class="ripple-btn svelte-ri1gi8">View</button></div></div>'),Ae=m('<div class="svelte-ri1gi8"><strong class="svelte-ri1gi8">Form Type:</strong> </div>'),De=m('<div class="svelte-ri1gi8"><strong class="svelte-ri1gi8">Full Name:</strong> </div>'),Se=m('<div class="svelte-ri1gi8"><strong class="svelte-ri1gi8">Derby Name:</strong> </div>'),Le=m('<div class="svelte-ri1gi8"><strong class="svelte-ri1gi8">Email:</strong> </div>'),Ue=m('<div class="svelte-ri1gi8"><strong class="svelte-ri1gi8">Phone Number:</strong> </div>'),Ye=m('<div class="svelte-ri1gi8"><strong class="svelte-ri1gi8">Business Name:</strong> </div>'),Ce=m('<div class="svelte-ri1gi8"><strong class="svelte-ri1gi8">League Name:</strong> </div>'),Ee=m('<div class="svelte-ri1gi8"><strong class="svelte-ri1gi8">Compliant League:</strong> </div>'),Ie=m('<div class="svelte-ri1gi8"><strong class="svelte-ri1gi8">Insurance Status:</strong> </div>'),Pe=m('<div class="svelte-ri1gi8"><strong class="svelte-ri1gi8">Preferred Date:</strong> </div>'),Ve=m('<div class="svelte-ri1gi8"><strong class="svelte-ri1gi8">Played Together:</strong> </div>'),Be=m('<div class="full-width svelte-ri1gi8"><strong class="svelte-ri1gi8">Comments:</strong> </div>'),He=m('<div class="svelte-ri1gi8"><strong class="svelte-ri1gi8">Submitted At:</strong> </div>'),Ke=m('<div class="detail-grid svelte-ri1gi8"><!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <div class="svelte-ri1gi8"><form action="?/updateMessageViewed" method="post" class="svelte-ri1gi8"><label class="svelte-ri1gi8">Has been viewed: <input type="checkbox" name="been_viewed" class="svelte-ri1gi8"></label> <input type="hidden" name="messageId" class="svelte-ri1gi8"> <button type="submit" class="svelte-ri1gi8">Update</button></form></div> <button class="ripple-btn svelte-ri1gi8">Close Message</button></div>'),Re=m('<header class="head_Line"><h1>Admin dashboard</h1></header> <h2>Welcome back</h2> <p>These are the unread messages:</p> <div class="summary svelte-ri1gi8"><table class="desktop-table svelte-ri1gi8"><thead><tr><th class="svelte-ri1gi8">Form Type</th><th class="svelte-ri1gi8">Full Name</th><th class="svelte-ri1gi8">Email</th><th class="svelte-ri1gi8">Submitted At</th></tr></thead><tbody></tbody></table> <!></div> <!>',1);function rt(ie,X){pe(X,!1);let I=Fe(X,"data"),j=I(),q=R(j.session),U=R(j.newMessages),i=R(null);const z={1:"skater",2:"sponsorship",3:"bouting"},G=_=>{E(i,_)};function ve(_){return z[_]||"Unknown Form Type"}const J=_=>z[_]||"Unknown";function O(_){const g=new Date(_);return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit"}).format(g)}be(()=>(r(q),r(U),ye(I())),()=>{(()=>{const _=I();return E(q,_.session),E(U,_.newMessages),_})()}),he(),Ne();var Q=Re();$e(_=>{ce.title="Admin page"});var P=me(Q);s(P),a(P);var oe=e(e(P,!0)),ne=e(e(oe,!0)),V=e(e(ne,!0)),B=s(V),H=s(B),Z=s(H),le=s(Z),de=e(le),_e=e(de);e(_e),a(Z),a(H);var ee=e(H);re(ee,9,()=>r(U),ae,(_,g,Y)=>{var p=Te(),f=s(p),y=s(f);d(()=>l(y,J(h(g).form_type))),a(f);var x=e(f),M=s(x);a(x);var b=e(x),A=s(b);a(b);var $=e(b),w=s($);a($);var N=e($),D=s(N),k=te(()=>()=>G(h(g)));a(N),a(p),d(()=>{l(M,h(g).full_name),l(A,h(g).email),l(w,h(g).submitted_at)}),W("click",D,function(...F){var T;return(T=r(k))==null?void 0:T.apply(this,F)},!1),u(_,p)}),a(ee),a(B);var ge=e(e(B,!0));re(ge,1,()=>r(U),ae,(_,g,Y)=>{var p=Me(),f=s(p),y=s(f),x=s(y),M=e(x,!0);d(()=>l(M,` ${J(h(g).form_type)??""}`)),a(y);var b=e(e(y,!0)),A=s(b),$=e(A,!0);a(b);var w=e(e(b,!0)),N=s(w),D=e(N,!0);a(w);var k=e(e(w,!0)),F=s(k),T=e(e(F,!0)),S=e(T,!0);d(()=>l(S,` ${O(h(g).submitted_at)??""}`)),a(k);var C=e(e(k,!0)),L=te(()=>()=>G(h(g)));a(f),a(p),d(()=>{l($,` ${h(g).full_name??""}`),l(D,` ${h(g).email??""}`)}),W("click",C,function(...K){var v;return(v=r(L))==null?void 0:v.apply(this,K)},!1),u(_,p)}),a(V);var ue=e(e(V,!0));c(ue,()=>r(i),_=>{var g=Ke(),Y=s(g);c(Y,()=>r(i).form_type,v=>{var t=Ae(),o=s(t),n=e(o,!0);d(()=>l(n,` ${ve(r(i).form_type)??""}`)),a(t),u(v,t)});var p=e(e(Y,!0));c(p,()=>r(i).full_name,v=>{var t=De(),o=s(t),n=e(o,!0);a(t),d(()=>l(n,` ${r(i).full_name??""}`)),u(v,t)});var f=e(e(p,!0));c(f,()=>r(i).derby_name,v=>{var t=Se(),o=s(t),n=e(o,!0);a(t),d(()=>l(n,` ${r(i).derby_name??""}`)),u(v,t)});var y=e(e(f,!0));c(y,()=>r(i).email,v=>{var t=Le(),o=s(t),n=e(o,!0);a(t),d(()=>l(n,` ${r(i).email??""}`)),u(v,t)});var x=e(e(y,!0));c(x,()=>r(i).phone_number,v=>{var t=Ue(),o=s(t),n=e(o,!0);a(t),d(()=>l(n,` ${r(i).phone_number??""}`)),u(v,t)});var M=e(e(x,!0));c(M,()=>r(i).business_name,v=>{var t=Ye(),o=s(t),n=e(o,!0);a(t),d(()=>l(n,` ${r(i).business_name??""}`)),u(v,t)});var b=e(e(M,!0));c(b,()=>r(i).league_name,v=>{var t=Ce(),o=s(t),n=e(o,!0);a(t),d(()=>l(n,` ${r(i).league_name??""}`)),u(v,t)});var A=e(e(b,!0));c(A,()=>r(i).compliant_league!==null,v=>{var t=Ee(),o=s(t),n=e(o,!0);a(t),d(()=>l(n,` ${(r(i).compliant_league?"Yes":"No")??""}`)),u(v,t)});var $=e(e(A,!0));c($,()=>r(i).insurance_status!==null,v=>{var t=Ie(),o=s(t),n=e(o,!0);a(t),d(()=>l(n,` ${(r(i).insurance_status?"Yes":"No")??""}`)),u(v,t)});var w=e(e($,!0));c(w,()=>r(i).preferred_date,v=>{var t=Pe(),o=s(t),n=e(o,!0);a(t),d(()=>l(n,` ${r(i).preferred_date??""}`)),u(v,t)});var N=e(e(w,!0));c(N,()=>r(i).played_together!==null,v=>{var t=Ve(),o=s(t),n=e(o,!0);a(t),d(()=>l(n,` ${(r(i).played_together?"Yes":"No")??""}`)),u(v,t)});var D=e(e(N,!0));c(D,()=>r(i).comments,v=>{var t=Be(),o=s(t),n=e(o,!0);a(t),d(()=>l(n,` ${r(i).comments??""}`)),u(v,t)});var k=e(e(D,!0));c(k,()=>r(i).submitted_at,v=>{var t=He(),o=s(t),n=e(o,!0);d(()=>l(n,` ${O(r(i).submitted_at)??""}`)),a(t),u(v,t)});var F=e(e(k,!0)),T=s(F),S=s(T),C=e(s(S));se(C),a(S);var L=e(e(S,!0));se(L),e(e(L,!0)),a(T),a(F);var K=e(e(F,!0));a(g),d(()=>we(L,r(i).vstr_id)),ke(C,()=>r(i).viewed,v=>xe(i,r(i).viewed=v)),W("click",K,()=>E(i,null),!1),u(_,g)}),u(ie,Q),fe()}export{rt as component};
