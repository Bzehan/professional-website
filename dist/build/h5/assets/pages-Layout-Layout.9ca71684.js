import{d as e,r as s,_ as i,P as a,o as t,a as n,c as o,w as r,i as l,b as c,e as d,A as p,f as u,K as m,g,T as h,h as x,j as f}from"./index-a9838655.js";import j from"./pages-index-index.c535f576.js";import b from"./pages-index-child-specialty-instruction-specialty-instruction.9065d504.js";import w from"./pages-index-child-teaching-team-teaching-team.c333ec59.js";import v from"./pages-index-child-specialized-courses-specialized-courses.eedeacc9.js";import y from"./pages-index-child-laboratory-laboratory.485576a4.js";import _ from"./pages-index-child-outstanding-graduate-outstanding-graduate.4e9f2eba.js";import z from"./pages-index-child-news-news.a0ea1449.js";import I from"./pages-index-child-enterprise-huawei.0859f13e.js";import M from"./pages-index-child-enterprise-h3c.c7313127.js";import R from"./pages-index-child-enterprise-xin-xiang-hong-fu.970fb1f0.js";import T from"./pages-index-child-enterprise-hao-jing-technology.12b2a58c.js";import k from"./pages-index-child-enterprise-tian-rong-xin.376c1b83.js";import A from"./pages-index-child-enterprise-zhong-jing.bf507a8b.js";import"./teacherInfo.fb16181c.js";import"./pagination.200a2174.js";import"./zykc.132ab1f8.js";import"./stu1.8cefa89e.js";import"./stu-show.017f3ba0.js";import"./stu.a235f363.js";import"./teacher-info.41821241.js";import"./pages-index-child-news-news-detail.0a472317.js";import"./pages-index-child-news-inform-detail.0cc3edd3.js";import"./txtRight.b3fab3cb.js";const C=e("main",(()=>{const e=s(!1),i=s(0),a=s("0"),t=new Map;return t.set("#/pages/index/child/specialty-instruction/specialty-instruction","2"),t.set("#/pages/index/child/teaching-team/teaching-team","3"),t.set("#/pages/index/child/specialized-courses/specialized-courses","4"),t.set("#/pages/index/child/laboratory/laboratory","5"),t.set("#/pages/index/child/enterprise/huawei","6"),t.set("#/pages/index/child/outstanding-graduate/outstanding-graduate","7"),t.set("#/pages/index/child/news/news","8"),{isMobile:e,setIsMobile:s=>{e.value=s},mobileScrollY:i,setMobileScrollY:e=>{i.value=e},hashMap:t,RouterIndex:a,updateRouterIndex:e=>{a.value=e}}})),L=C(),S=()=>{window.addEventListener("resize",((e,s)=>{let i;return function(...a){clearTimeout(i),i=setTimeout((()=>{e.apply(a)}),s)}})((e=>{if(window.innerWidth>=992){const e=window.location.hash;if("#/"===e)console.log("> 992 ");else{let s=L.hashMap.get(e);L.updateRouterIndex(`${s[0]}`),window.location.href="/",console.log("跳转首页")}}}),500))},Y=i({__name:"Layout",setup(e){C();const i=[[j],[b],[w],[v],[y],[I,R,M,T,k,A],[_],[z]],L=s(0),Y=s(0),$=e=>{let s=e.split("-");1===s.length?(L.value=+e-1,Y.value=0):(L.value=+s[0]-1,Y.value=+s[1]-1)};a.subscribe("navgation-event",((e,s)=>{a.publish("changeActive",{index:s.e}),console.log(s.e),$(s.e)}));const q=s(null);return a.subscribe("scroll-top",((e,s)=>{s.data&&q.value.$el.scrollTo({top:0})})),t((()=>{a.unsubscribe("navgation-event"),a.unsubscribe("scroll-top")})),S(),(e,s)=>{const a=l;return n(),o(a,{class:"layout-container",ref_key:"layout",ref:q},{default:r((()=>[c("template",{class:"pc-header"},[d(p),d(u,{onChangeComponents:$,i:L.value,j:Y.value},null,8,["i","j"])]),d(j,{class:"m"}),c("template",{class:"pc"},[d(h,{name:"el-fade-in-linear",mode:"out-in"},{default:r((()=>[(n(),o(m,null,[(n(),o(g(i[L.value][Y.value])))],1024))])),_:1})]),x(" 页脚 "),d(f,{class:"footer"})])),_:1},512)}}},[["__scopeId","data-v-0c54bc8f"]]);export{Y as default};