import{_ as t,G as e,k as a,a as s,c as r,w as u,e as n,n as l,t as c,u as d,l as o,F as i,m as p,i as _,H as m,C as f,P as g,b as x,T as b,K as I,g as C}from"./index-7f77771d.js";import{S as R}from"./stu-show.929d1646.js";const h=t({__name:"stu-detail",setup(t){const m=e(),f=()=>{m.updateCurrentRouterIndex(0),console.log(m.currentRouterIndex)};return(t,e)=>{const g=a("el-col"),x=a("el-row"),b=a("el-button"),I=_;return s(),r(I,{class:"stu-detail"},{default:u((()=>[n(x,{class:"stu-detail-row",justify:"center"},{default:u((()=>[n(g,{class:"title",xs:24,sm:24,md:20},{default:u((()=>[l(c(d(m).currentStuData.title),1)])),_:1}),n(g,{class:"desc",xs:24,sm:24,md:20},{default:u((()=>[(s(!0),o(i,null,p(d(m).currentStuData.desc,((t,e)=>(s(),o("p",{key:e},c(t),1)))),128))])),_:1})])),_:1}),n(b,{onClick:f,color:"rgb(200,20,20)"},{default:u((()=>[l("返回")])),_:1})])),_:1})}}},[["__scopeId","data-v-13b0a3da"]]),w=t({__name:"outstanding-graduate",setup(t){const c=e(),o=[R,h];m((()=>{g.publish("scroll-top",{data:!0})}));const i=t=>{c.updateCurrentRouterIndex(0)},p=f((()=>c.currentStuData.imgList.length>0?c.currentStuData.imgList:""));return g.subscribe("index-student-event",((t,e)=>{c.updateCurrentRouterIndex(0)})),(t,e)=>{const m=a("AppPopup"),f=a("AppHeader"),g=a("backgroundImg"),R=a("AppBreadcrumb"),h=_,w=a("el-col"),S=a("el-row"),j=a("Footer");return s(),r(h,{class:"container"},{default:u((()=>[x("template",{class:"m-header"},[n(m),n(f)]),n(h,{class:"container-content"},{default:u((()=>[n(g,{img:0===d(c).currentRouterIndex?"":d(p)},null,8,["img"]),n(h,{class:"trans"},{default:u((()=>[n(R,{class:"bread",currentPageTxtArr:["优秀校友"],onChangePage:i}),n(S,{justify:"center"},{default:u((()=>[n(w,{xs:{span:23},sm:{span:22},xl:20},{default:u((()=>[n(h,{class:"title"},{default:u((()=>[l("优秀校友")])),_:1}),x("p",{class:"line"}),n(h,{class:"content"},{default:u((()=>[n(b,{name:"el-fade-in"},{default:u((()=>[(s(),r(I,null,[(s(),r(C(o[d(c).currentRouterIndex])))],1024))])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),n(j,{class:"footer"})])),_:1})}}},[["__scopeId","data-v-5b2691e7"]]);export{w as default};
