import{_ as e,C as s,N as a,P as l,G as t,k as n,a as c,c as d,w as u,e as r,u as o,n as f,t as i,b as _,l as m,F as h,m as p,h as v,L as g,O as k,i as x}from"./index-a9838655.js";import{T as b}from"./teacherInfo.fb16181c.js";const y=e({__name:"teacher-info",setup(e){const y=b(),w=s((()=>y.teacherInfo)),E=e=>{l.publish("teacher-event",{v:0})},C=()=>{l.publish("teacher-event",{v:0}),g()};return a((()=>{l.unsubscribe("teacher-event"),l.unsubscribe("page-scroll")})),t((()=>{l.publish("page-scroll",{scroll:!0})})),(e,s)=>{const a=n("el-image"),l=n("el-col"),t=k,g=x,b=n("el-row"),y=n("el-button");return c(),d(g,{class:"teacher-info"},{default:u((()=>[r(b,null,{default:u((()=>[r(l,{class:"teacher-img",xs:{span:24},sm:24,md:6},{default:u((()=>[r(a,{fit:"cover",src:o(w).img},null,8,["src"])])),_:1}),r(l,{class:"text-wrapper",xs:{offset:1,span:22},md:18},{default:u((()=>[r(b,null,{default:u((()=>[r(l,{xs:24,class:"name"},{default:u((()=>[f(i(o(w).name)+" ",1),r(t,{class:"title"},{default:u((()=>[f(i(o(w).title),1)])),_:1})])),_:1}),r(l,{xs:24,class:"desc"},{default:u((()=>{var e,s;return[(null==(e=o(w).desc)?void 0:e.eduExp.length)>0?(c(),d(g,{key:0,class:"desc-item"},{default:u((()=>[_("strong",null,"教育经历"),(c(!0),m(h,null,p(o(w).desc.eduExp,((e,s)=>(c(),d(g,{key:s},{default:u((()=>[f(i(e),1)])),_:2},1024)))),128))])),_:1})):v("v-if",!0),o(w).desc.honor&&(null==(s=o(w).desc)?void 0:s.honor.length)>0?(c(),d(g,{key:1,class:"desc-item"},{default:u((()=>[_("strong",null,"所获荣誉"),(c(!0),m(h,null,p(o(w).desc.honor,((e,s)=>(c(),d(g,{key:s},{default:u((()=>[f(i(e),1)])),_:2},1024)))),128))])),_:1})):v("v-if",!0),o(w).desc.area?(c(),d(g,{key:2,class:"desc-item"},{default:u((()=>[_("strong",null,"研究领域"),r(g,null,{default:u((()=>[f(i(o(w).desc.area),1)])),_:1})])),_:1})):v("v-if",!0),o(w).desc.Exp?(c(),d(g,{key:3,class:"desc-item"},{default:u((()=>[_("strong",null,"工作经历"),(c(!0),m(h,null,p(o(w).desc.Exp,((e,s)=>(c(),d(g,{key:s},{default:u((()=>[f(i(e),1)])),_:2},1024)))),128))])),_:1})):v("v-if",!0)]})),_:1})])),_:1})])),_:1})])),_:1}),r(y,{onClick:E,class:"hidden-sm-and-down"},{default:u((()=>[f("返回")])),_:1}),r(y,{onClick:C,class:"hidden-md-and-up"},{default:u((()=>[f("返回")])),_:1})])),_:1})}}},[["__scopeId","data-v-2402e07e"]]);export{y as t};
