import{t as s,a,c as e,w as t,e as l,u as c,y as n,U as u,i as o,G as r,v as d,F as i,x as f,H as _,C as p,r as m,M as v,o as b,b as g,T as x,K as h,f as k}from"./index-4adb1453.js";import{P as w,A as j,a as y,F as I}from"./app-footer.ab5832f9.js";import{b as C,A}from"./background-img.c25b6f76.js";import{s as F}from"./1.53cffbfd.js";import{_ as M}from"./_plugin-vue_export-helper.1b428a4d.js";const P=M({__name:"stu-card",setup:r=>(r,d)=>{const i=s("el-image"),f=s("el-col"),_=o,p=s("el-icon"),m=s("el-row");return a(),e(m,{class:"stu-card"},{default:t((()=>[l(f,{xs:8,sm:8,class:"image-wrapper"},{default:t((()=>[l(i,{fit:"cover",src:c(F)},null,8,["src"])])),_:1}),l(f,{xs:16,sm:16,class:"right-text"},{default:t((()=>[l(_,{class:"title"},{default:t((()=>[n("斯泽夫学长在清华经管学院2021毕业典礼演讲")])),_:1}),l(_,{class:"line"}),l(_,{class:"desc"},{default:t((()=>[n(" 登上大舞台融入新格局——在清华经管学院2021毕业典礼上的演讲全国政协常委，哈电集团董事长、党委书记斯泽夫2021年6月27日斯泽夫各位敬爱的老师、亲爱的同学们：大家下午好！我是斯泽夫，清华经管学院93级校友，很高兴作为今年毕业典礼的主讲嘉宾在这里跟大家分享我的观点。我学经济管理何为“经管”，我认为就是“经世济民，求社会之功；管财理家，谋大众之利”，1993年当我来到清华经管学院的时候，正是秉持着这样的理念，我... ")])),_:1}),l(_,{class:"detail"},{default:t((()=>[n("查看详情"),l(p,{class:"icon",style:{"vertical-align":"middle"}},{default:t((()=>[l(c(u))])),_:1})])),_:1})])),_:1})])),_:1})}},[["__scopeId","data-v-08465def"]]),T=M({__name:"stu-show",setup:c=>(c,n)=>{const u=s("el-col"),m=s("el-row"),v=o,b=r("showMeta");return a(),e(v,{class:"stu-show"},{default:t((()=>[l(m,{justify:"space-between"},{default:t((()=>[(a(),d(i,null,f(5,(s=>_(l(u,{onClick:a=>(s=>{console.log(s),w.publish("stu-click-event",{v:1})})(s),xs:24,sm:{span:11,offset:1},md:{span:12,offset:0},class:p(s%2==1?"el-col-border":""),key:s},{default:t((()=>[l(P)])),_:2},1032,["onClick","class"]),[[b,s%2==0?"animate__fadeInRight":"animate__fadeInLeft"]]))),64))])),_:1})])),_:1})}},[["__scopeId","data-v-9fee6b3d"]]),G={__name:"stu-detail",setup(c){const u=()=>{w.publish("stu-click-event",{v:0})};return(c,r)=>{const d=s("el-button"),i=o;return a(),e(i,{class:"stu-detail"},{default:t((()=>[l(d,{onClick:u},{default:t((()=>[n("返回")])),_:1})])),_:1})}}},H=M({__name:"outstanding-graduate",setup(c){const u=m(0),r=[T,G];return w.subscribe("stu-click-event",((s,a)=>{u.value=a.v})),v((()=>{w.publish("scroll-top",{data:!0})})),b((()=>{w.unsubscribe("stu-click-event")})),(c,d)=>{const i=o,f=s("el-col"),_=s("el-row");return a(),e(i,{class:"container"},{default:t((()=>[g("template",{class:"m-header"},[l(j),l(y)]),l(i,{class:"container-content"},{default:t((()=>[l(C),l(i,{class:"trans"},{default:t((()=>[l(A,{currentPageTxtArr:["优秀校友"]}),l(_,{justify:"center"},{default:t((()=>[l(f,{xs:{span:23},sm:{span:22},xl:20},{default:t((()=>[l(i,{class:"title"},{default:t((()=>[n("优秀校友")])),_:1}),g("p",{class:"line"}),l(i,{class:"content"},{default:t((()=>[l(x,{name:"el-fade-in"},{default:t((()=>[(a(),e(h,null,[(a(),e(k(r[u.value])))],1024))])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),l(I,{class:"footer"})])),_:1})}}},[["__scopeId","data-v-cd5140c7"]]);export{H as default};