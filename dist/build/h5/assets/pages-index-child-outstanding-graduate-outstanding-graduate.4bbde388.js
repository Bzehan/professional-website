import{h as t,a,c as s,w as e,e as r,l,t as u,u as n,j as o,F as c,k as d,i,C as _,z as f,b as m,T as p,K as g,f as x}from"./index-498dd129.js";import{_ as b,A as j,a as I,F as h,P as k}from"./app-footer.8f6b0691.js";import{A as S}from"./background-img.vue_vue_type_style_index_0_scoped_1f86ea46_lang.abc9cd93.js";import{b as w}from"./background-img.7dc41c89.js";import{S as y}from"./stu.5e3a8d69.js";import{S as C}from"./stu-show.191e7e64.js";const R=b({__name:"stu-detail",setup(_){const f=y(),m=()=>{f.updateCurrentRouterIndex(0),console.log(f.currentRouterIndex)};return(_,p)=>{const g=t("el-col"),x=t("el-row"),b=t("el-button"),j=i;return a(),s(j,{class:"stu-detail"},{default:e((()=>[r(x,{class:"stu-detail-row",justify:"center"},{default:e((()=>[r(g,{class:"title",xs:24,sm:24,md:20},{default:e((()=>[l(u(n(f).currentStuData.title),1)])),_:1}),r(g,{class:"desc",xs:24,sm:24,md:20},{default:e((()=>[(a(!0),o(c,null,d(n(f).currentStuData.desc,((t,s)=>(a(),o("p",{key:s},u(t),1)))),128))])),_:1})])),_:1}),r(b,{onClick:m,color:"rgb(200,20,20)"},{default:e((()=>[l("返回")])),_:1})])),_:1})}}},[["__scopeId","data-v-2968092d"]]),v=b({__name:"outstanding-graduate",setup(u){const o=y(),c=[C,R];_((()=>{k.publish("scroll-top",{data:!0})}));const d=t=>{o.updateCurrentRouterIndex(0)},b=f((()=>o.currentStuData.imgList.length>0?o.currentStuData.imgList:""));return(u,_)=>{const f=i,k=t("el-col"),y=t("el-row");return a(),s(f,{class:"container"},{default:e((()=>[m("template",{class:"m-header"},[r(j),r(I)]),r(f,{class:"container-content"},{default:e((()=>[r(w,{img:0===n(o).currentRouterIndex?"":n(b)},null,8,["img"]),r(f,{class:"trans"},{default:e((()=>[r(S,{class:"bread",currentPageTxtArr:["优秀校友"],onChangePage:d}),r(y,{justify:"center"},{default:e((()=>[r(k,{xs:{span:23},sm:{span:22},xl:20},{default:e((()=>[r(f,{class:"title"},{default:e((()=>[l("优秀校友")])),_:1}),m("p",{class:"line"}),r(f,{class:"content"},{default:e((()=>[r(p,{name:"el-fade-in"},{default:e((()=>[(a(),s(g,null,[(a(),s(x(c[n(o).currentRouterIndex])))],1024))])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),r(h,{class:"footer"})])),_:1})}}},[["__scopeId","data-v-fb820cd1"]]);export{v as default};