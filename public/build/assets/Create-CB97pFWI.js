import{T as g,l as _,f as i,a as t,u as o,w as n,F as x,o as r,Z as v,b as e,j as y,d as m,e as b,q as h,g as w}from"./app-C6qiOkRm.js";import{_ as V}from"./AuthenticatedLayout-Dk_3T9g3.js";import{_ as C,a as $,b as B}from"./TextInput-DJXUgZvC.js";import{P as N}from"./PrimaryButton-LXyk5vrK.js";import{_ as P}from"./SecondaryButton-DrVvxcEB.js";import"./ApplicationLogo-BYtg6B_G.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const S={class:"p-4"},k={class:"mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-6"},R={class:"bg-white p-4 shadow sm:rounded-lg sm:p-8"},T={class:"flex items-center gap-4"},U={key:0,class:"text-sm text-gray-600"},z={__name:"Create",props:{region:{type:Object,default:null},isUpdating:{type:Boolean,default:!1}},setup(d){const s=g({name:""}),l=d,u=()=>l.isUpdating?p():c(),c=()=>s.post("/regions"),p=()=>s.put(`/regions/${l.region.id}`);return _(()=>{l.region&&(s.name=l.region.name)}),(j,a)=>(r(),i(x,null,[t(o(v),{title:"Create Region"}),t(V,null,{header:n(()=>[e("div",null,[t(o(y),{href:"/regions"},{default:n(()=>[t(P,null,{default:n(()=>a[1]||(a[1]=[m("All Regions")])),_:1})]),_:1})])]),default:n(()=>[e("div",S,[e("div",k,[e("div",R,[e("section",null,[a[3]||(a[3]=e("header",null,[e("h2",{class:"text-lg font-medium text-gray-900"}," Create Region "),e("p",{class:"mt-1 text-sm text-gray-600"}," Create a region for the app. ")],-1)),e("form",{onSubmit:b(u,["prevent"]),class:"mt-6 space-y-6"},[e("div",null,[t(C,{for:"name",value:"Name"}),t($,{id:"name",type:"text",class:"w-full",modelValue:o(s).name,"onUpdate:modelValue":a[0]||(a[0]=f=>o(s).name=f),autofocus:"",autocomplete:"name"},null,8,["modelValue"]),t(B,{class:"mt-2",message:o(s).errors.name},null,8,["message"])]),e("div",T,[t(N,{disabled:o(s).processing},{default:n(()=>a[2]||(a[2]=[m("Save")])),_:1},8,["disabled"]),t(h,{"enter-active-class":"transition ease-in-out","enter-from-class":"opacity-0","leave-active-class":"transition ease-in-out","leave-to-class":"opacity-0"},{default:n(()=>[o(s).recentlySuccessful?(r(),i("p",U," Saved. ")):w("",!0)]),_:1})])],32)])])])])]),_:1})],64))}};export{z as default};
