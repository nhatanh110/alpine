import c from"./ContentRendererMarkdown.b3d2ea41.js";import{d as l,aa as s,ag as m,N as f}from"./entry.cf8fc1a3.js";const g=l({name:"ContentRenderer",props:{value:{type:Object,required:!1,default:()=>({})},excerpt:{type:Boolean,default:!1},tag:{type:String,default:"div"}},setup(t){s(()=>t.excerpt,n=>{var e,a,r;n&&!((e=t.value)!=null&&e.excerpt)&&(console.warn(`No excerpt found for document content/${(a=t==null?void 0:t.value)==null?void 0:a._path}.${(r=t==null?void 0:t.value)==null?void 0:r._extension}!`),console.warn("Make sure to use <!--more--> in your content if you want to use excerpt feature."))},{immediate:!0})},render(t){var u,i,o,d;const n=m(),{value:e,excerpt:a,tag:r}=t;return!((i=(u=e==null?void 0:e.body)==null?void 0:u.children)!=null&&i.length)&&(n!=null&&n.empty)?n.empty({value:e,excerpt:a,tag:r,...this.$attrs}):n!=null&&n.default?n.default({value:e,excerpt:a,tag:r,...this.$attrs}):(e==null?void 0:e._type)==="markdown"&&((d=(o=e==null?void 0:e.body)==null?void 0:o.children)!=null&&d.length)?f(c,{value:e,excerpt:a,tag:r,...this.$attrs}):f("pre",null,JSON.stringify({message:"You should use slots with <ContentRenderer>",value:e,excerpt:a,tag:r},null,2))}});export{g as default};
