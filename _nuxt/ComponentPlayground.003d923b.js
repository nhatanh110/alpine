import{u as m}from"./asyncData.17ff9b64.js";import{M as c,I as p,d as i,ah as u,r as l,N as e,l as d}from"./entry.cf8fc1a3.js";import f from"./Ellipsis.bf750981.js";import _ from"./ComponentPlaygroundData.cd00e127.js";import"./TabsHeader.d794b9f3.js";import"./ComponentPlaygroundProps.f4a87f72.js";import"./ProseH4.81417251.js";import"./ProseCodeInline.2285208e.js";import"./Badge.397909de.js";import"./ContentSlot.3e7268b5.js";import"./ProseP.2655a55f.js";import"./index.4aa9c4f4.js";import"./ComponentPlaygroundSlots.vue.b45f07d7.js";import"./ComponentPlaygroundTokens.vue.6e8d3435.js";async function y(o){const t=c(o);{const{data:n}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const g=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>u(o.component)),n=l({...o.props}),r=await y(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(_,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}});const S=d(g,[["__scopeId","data-v-ffdff82a"]]);export{S as default};
