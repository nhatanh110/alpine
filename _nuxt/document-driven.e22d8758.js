import P from"./DocumentDrivenEmpty.b4748090.js";import h from"./ContentRenderer.895c3431.js";import L from"./DocumentDrivenNotFound.187ea235.js";import{k as x,d as c,G as R,P as g,i as k,H as C,I as b,r as B,J as y,K as N,L as S,M as u,N as i,T,O as j,Q as A,S as w,R as D,U as E,V as O,W as H,b as d,c as $,g as f,w as _,X as v}from"./entry.cf8fc1a3.js";import"./ContentRendererMarkdown.b3d2ea41.js";const q=c({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(n,e){const t=await y[n.name]().then(o=>o.default||o);return()=>i(t,n.layoutProps,e.slots)}}),I=c({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(n,e){const t=x(),o=R(g),a=o===k()?C():o,s=b(()=>u(n.name)??a.meta.layout??"default"),r=B();e.expose({layoutRef:r});const m=t.deferHydration();return()=>{const p=s.value&&s.value in y,l=a.meta.layoutTransition??N;return S(T,p&&l,{default:()=>i(w,{suspensible:!0,onResolve:()=>{A(m)}},{default:()=>i(M,{layoutProps:j(e.attrs,{ref:r}),key:s.value,name:s.value,shouldProvide:!n.name,hasTransition:!!l},e.slots)})}).default()}}}),M=c({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(n,e){const t=n.name;return n.shouldProvide&&D(E,{isCurrent:o=>t===(o.meta.layout??"default")}),()=>{var o,a;return!t||typeof t=="string"&&!(t in y)?(a=(o=e.slots).default)==null?void 0:a.call(o):i(q,{key:t,layoutProps:n.layoutProps,name:t},e.slots)}}}),V={class:"document-driven-page"},U=c({__name:"document-driven",setup(n){const{page:e,layout:t}=O();return e.value,H(e),(o,a)=>{const s=P,r=h,m=L,p=I;return d(),$("div",V,[f(p,{name:u(t)||"default"},{default:_(()=>[u(e)?(d(),v(r,{key:u(e)._id,value:u(e)},{empty:_(({value:l})=>[f(s,{value:l},null,8,["value"])]),_:1},8,["value"])):(d(),v(m,{key:1}))]),_:1},8,["name"])])}}});export{U as default};
