import{r as e,t as a,G as s,a as l,c as t,w as n,v as d,F as c,x as u,H as i,e as o,y as f,z as r,g as m,i as _,u as p,N as g,b as x,A as w,M as v,C,T as h,K as k,f as y}from"./index-cf235621.js";import{P as I,A,a as j,F as b}from"./app-footer.4fa7be01.js";import{b as z,A as T}from"./background-img.f3cc8863.js";import{_ as M}from"./_plugin-vue_export-helper.1b428a4d.js";import P from"./pages-index-child-news-news-detail.d351f95b.js";import U from"./pages-index-child-news-inform-detail.86c6f683.js";const L=M({__name:"inform-modules",setup(p){const g=e(1),x=e(6),w=e(24),v=e=>{console.log(`${e} items per page`)},C=e=>{console.log(`current page: ${e}`)};return(e,p)=>{const h=_,k=a("el-col"),y=a("el-row"),A=a("el-pagination"),j=s("showMeta");return l(),t(h,{class:"inform-modules"},{default:n((()=>[(l(),d(c,null,u(5,(e=>i(o(y,{class:"inform-item",onClick:a=>(e=>{I.publish("go-to-detail",{i:e,type:"inform"})})(e),key:e},{default:n((()=>[o(k,{class:"time",xs:4,sm:4},{default:n((()=>[o(h,{class:"day"},{default:n((()=>[f(r(e+5<10?`0${e+5}`:e+5),1)])),_:2},1024),o(h,{class:"year"},{default:n((()=>[f("2023/1"+r(e),1)])),_:2},1024)])),_:2},1024),o(k,{class:"content",xs:20,sm:20},{default:n((()=>[o(h,{class:"title"},{default:n((()=>[f("恭喜 "+r(e)+"XXX 同学顺利考过华为HCIP-Cloud Computing证书！",1)])),_:2},1024),o(h,{class:"desc"})])),_:2},1024)])),_:2},1032,["onClick"]),[[j,"animate__fadeInRight"]]))),64)),m(" 分页 "),o(A,{"current-page":g.value,"onUpdate:currentPage":p[0]||(p[0]=e=>g.value=e),"page-size":x.value,"onUpdate:pageSize":p[1]||(p[1]=e=>x.value=e),background:!0,layout:"prev, pager, next",total:w.value,onSizeChange:v,onCurrentChange:C},null,8,["current-page","page-size","total"])])),_:1})}}},[["__scopeId","data-v-c3cb79bd"]]),$=M({__name:"news-modules",setup(r){const v=e(1),C=e(6),h=e(24),k=e=>{console.log(`${e} items per page`)},y=e=>{console.log(`current page: ${e}`)},A=e=>{I.publish("go-to-detail",{i:e,type:"news"})},j=()=>{w({url:"/pages/index/child/news/news-detail?id=1"})};return(e,r)=>{const w=a("el-image"),I=a("el-col"),b=_,z=a("el-row"),T=a("el-icon"),M=a("el-pagination"),P=s("showMeta");return l(),t(b,{class:"inform-modules"},{default:n((()=>[(l(),d(c,null,u(5,(e=>(l(),d(c,{key:e},[m(" Mobile "),e%2==1?i((l(),t(b,{key:0,onClick:e=>j(),class:"pc-container-r hidden-md-and-up"},{default:n((()=>[o(z,{class:"news-item"},{default:n((()=>[o(I,{xs:24,sm:6,xl:5,class:"img-wrapper"},{default:n((()=>[o(w,{class:"image",fit:"fill",src:"https://test.hebic.cn/uploadfile/2023/1121/20231121085353148.jpg"})])),_:1}),o(I,{xs:24,sm:3,xl:2,class:"time"},{default:n((()=>[o(z,null,{default:n((()=>[o(I,{xs:3,sm:24,xl:17},{default:n((()=>[o(b,{class:"year"},{default:n((()=>[f("2023")])),_:1})])),_:1}),o(I,{xs:5,sm:24},{default:n((()=>[o(b,{class:"day"},{default:n((()=>[f("11-21")])),_:1})])),_:1})])),_:1}),o(b,{class:"more hidden-sm-and-down"},{default:n((()=>[o(T,{size:26,onClick:a=>A(e)},{default:n((()=>[o(p(g))])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024),o(I,{xs:24,sm:15,class:"desc"},{default:n((()=>[o(b,{class:"desc-title"},{default:n((()=>[f("网络专业学生积极参与2023年华为ICT大赛")])),_:1}),x("p",null,"2023年11月18日，我校兴安校区举办了“华为中国大学生ICT大赛2023-2024”河北省初赛，共有229名网络工程专业学生参与了比赛。 当天上午10点，由王雷老师组织，229名网络工程专业学生参加了华为公司主办的2023年中国大学生ICT大赛河北省初赛。 ")])),_:1})])),_:2},1024)])),_:2},1032,["onClick"])),[[P,"animate__fadeInRight"]]):m("v-if",!0),e%2==0?i((l(),t(b,{key:1,onClick:e=>j(),class:"pc-container-l hidden-md-and-up"},{default:n((()=>[o(I,{xs:24,sm:6,class:"img-wrapper"},{default:n((()=>[o(w,{class:"image",fit:"fill",src:"https://7069324.s61i.faiusr.com/2/AD0IjL2vAxACGAAg7t-dvwUo4JTmrAMw3gI44AE.jpg"})])),_:1}),o(z,{class:"news-item"},{default:n((()=>[o(I,{xs:24,sm:3,xl:2,class:"time"},{default:n((()=>[o(z,null,{default:n((()=>[o(I,{xs:3,sm:24,xl:17},{default:n((()=>[o(b,{class:"year"},{default:n((()=>[f("2023")])),_:1})])),_:1}),o(I,{xs:5,sm:24},{default:n((()=>[o(b,{class:"day"},{default:n((()=>[f("11-21")])),_:1})])),_:1})])),_:1}),o(b,{class:"more hidden-sm-and-down"},{default:n((()=>[o(T,{size:26},{default:n((()=>[o(p(g))])),_:1})])),_:1})])),_:1}),o(b,{class:"more hidden-sm-and-down",onClick:a=>A(e)},{default:n((()=>[o(T,{size:26},{default:n((()=>[o(p(g))])),_:1})])),_:2},1032,["onClick"]),o(I,{xs:24,sm:15,class:"desc"},{default:n((()=>[o(b,{class:"desc-title"},{default:n((()=>[f("国家精品课程")])),_:1}),x("p",null,"是一所有理想的大学，也是清华人实现自己梦想的来到这里，你将获得学术大师对你人生梦想的指点，你将触碰到科技和学术梦想的前沿，你将沐浴在共同追寻梦想的良好氛围中 ")])),_:1})])),_:2},1024)])),_:2},1032,["onClick"])),[[P,"animate__fadeInLeft"]]):m("v-if",!0),m(" PC "),e%2==1?i((l(),t(b,{key:2,class:"pc-container-r hidden-sm-and-down"},{default:n((()=>[o(z,{class:"news-item"},{default:n((()=>[o(I,{xs:24,sm:6,xl:5,class:"img-wrapper"},{default:n((()=>[o(w,{class:"image",fit:"fill",src:"https://test.hebic.cn/uploadfile/2023/1121/20231121085353148.jpg"})])),_:1}),o(I,{xs:24,sm:3,xl:2,class:"time"},{default:n((()=>[o(z,null,{default:n((()=>[o(I,{xs:3,sm:24,xl:17},{default:n((()=>[o(b,{class:"year"},{default:n((()=>[f("2023")])),_:1})])),_:1}),o(I,{xs:5,sm:24},{default:n((()=>[o(b,{class:"day"},{default:n((()=>[f("11-21")])),_:1})])),_:1})])),_:1}),o(b,{class:"more hidden-sm-and-down"},{default:n((()=>[o(T,{size:26,onClick:a=>A(e)},{default:n((()=>[o(p(g))])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024),o(I,{xs:24,sm:15,class:"desc"},{default:n((()=>[o(b,{class:"desc-title"},{default:n((()=>[f("网络专业学生积极参与2023年华为ICT大赛")])),_:1}),x("p",null,"2023年11月18日，我校兴安校区举办了“华为中国大学生ICT大赛2023-2024”河北省初赛，共有229名网络工程专业学生参与了比赛。 当天上午10点，由王雷老师组织，229名网络工程专业学生参加了华为公司主办的2023年中国大学生ICT大赛河北省初赛。 ")])),_:1})])),_:2},1024)])),_:2},1024)),[[P,"animate__fadeInRight"]]):m("v-if",!0),e%2==0?i((l(),t(b,{key:3,class:"pc-container-l hidden-sm-and-down"},{default:n((()=>[o(z,{class:"news-item"},{default:n((()=>[o(I,{xs:24,sm:3,xl:2,class:"time"},{default:n((()=>[o(b,{class:"year"},{default:n((()=>[f("2022")])),_:1}),o(b,{class:"day"},{default:n((()=>[f("8-05")])),_:1}),o(b,{class:"more hidden-sm-and-down"},{default:n((()=>[o(T,{size:26,onClick:a=>A(e)},{default:n((()=>[o(p(g))])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024),o(I,{xs:24,sm:15,xl:17,class:"desc"},{default:n((()=>[o(b,{class:"desc-title"},{default:n((()=>[f("国家精品课程")])),_:1}),x("p",null,"是一所有理想的大学，也是清华人实现自己梦想的来到这里，你将获得学术大师对你人生梦想的指点，你将触碰到科技和学术梦想的前沿，你将沐浴在共同追寻梦想的良好氛围中 ")])),_:1}),o(I,{xs:24,sm:6,xl:5,class:"img-wrapper"},{default:n((()=>[o(w,{class:"image",fit:"fill",src:"https://7069324.s61i.faiusr.com/2/AD0IjL2vAxACGAAg7t-dvwUo4JTmrAMw3gI44AE.jpg"})])),_:1})])),_:2},1024)])),_:2},1024)),[[P,"animate__fadeInLeft"]]):m("v-if",!0)],64)))),64)),m(" 分页 "),o(M,{"current-page":v.value,"onUpdate:currentPage":r[0]||(r[0]=e=>v.value=e),"page-size":C.value,"onUpdate:pageSize":r[1]||(r[1]=e=>C.value=e),background:!0,layout:"prev, pager, next",total:h.value,onSizeChange:k,onCurrentChange:y},null,8,["current-page","page-size","total"])])),_:1})}}},[["__scopeId","data-v-c7c4916d"]]),S=M({__name:"news",setup(d){v((()=>{I.publish("scroll-top",{data:!0})}));const c=[$,L,P,U],u=e(0),g=e=>{u.value=e};I.subscribe("go-to-detail",((e,a)=>{"news"===a.type?u.value=2:u.value=3}));const w=e(null);return(e,d)=>{const v=_,I=a("el-col"),M=a("el-row"),P=s("showMeta");return l(),t(v,{class:"container-news",ref_key:"target",ref:w},{default:n((()=>[x("template",{class:"m-header"},[o(A),o(j)]),o(v,{class:"container-content"},{default:n((()=>[o(z,{img:p("/assets/sl-aacd1a1b.jpg")},null,8,["img"]),o(v,{class:"trans"},{default:n((()=>[o(T,{currentPageTxtArr:["专业新闻"]}),o(M,{justify:"center"},{default:n((()=>[o(I,{xs:{span:24},sm:{span:20},md:{span:20},xl:18},{default:n((()=>[o(v,{class:"title"},{default:n((()=>[f(r(0===u.value||2===u.value?"新闻动态":"通知公告"),1)])),_:1}),x("p",{class:"line"}),o(v,{class:"content"},{default:n((()=>[o(M,null,{default:n((()=>[m(" 菜单切换 "),i((l(),t(I,{xs:24,md:4},{default:n((()=>[o(M,{justify:"center",class:"news-menu"},{default:n((()=>[o(I,{class:C({active:0===u.value||2===u.value}),xs:12,md:24,onClick:d[0]||(d[0]=e=>g(0))},{default:n((()=>[f(" 新闻动态 ")])),_:1},8,["class"])])),_:1}),o(M,{justify:"center",class:"news-menu"},{default:n((()=>[o(I,{class:C({active:1===u.value||3===u.value}),xs:12,md:24,onClick:d[1]||(d[1]=e=>g(1))},{default:n((()=>[f(" 通知公告 ")])),_:1},8,["class"])])),_:1})])),_:1})),[[P,"animate__fadeInLeft"]]),m(" 组件切换 "),o(I,{class:"component-wrapper",xs:24,md:20},{default:n((()=>[o(h,{name:"el-fade-in",mode:"out-in"},{default:n((()=>[(l(),t(k,null,[(l(),t(y(c[u.value])))],1024))])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),o(b,{class:"footer"})])),_:1},512)}}},[["__scopeId","data-v-457e3453"]]);export{S as default};
