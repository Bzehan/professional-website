import{_ as e,W as a,y as s,B as t,P as l,r as n,a as i,c,w as o,m as d,i as r,d as m,e as p,u,s as f,t as g,R as x,g as _,U as y}from"./index-03c57f0a.js";import{I as h}from"./index.6f99aa62.js";const b=e({__name:"news-detail",setup(e){const b=a(),w=s((()=>b.newsData.list.filter((e=>e.id===b.NewsDataIndex))[0]));t((()=>{l.publish("scroll-top",{data:!0})}));const k=n(null),v=()=>{l.publish("back-event",{index:0})},I=()=>{y({delta:1})};return(e,a)=>{const s=d("AppPopup"),t=d("AppHeader"),l=d("el-col"),n=d("el-icon"),y=d("el-row"),b=d("el-button"),D=d("Footer"),H=r;return i(),c(H,{class:"news-detail",ref_key:"target",ref:k},{default:o((()=>[m("template",{class:"m-header hidden-md-and-up"},[p(s),p(t)]),u(w)?(i(),c(y,{key:0,justify:"center"},{default:o((()=>[p(l,{class:"title",xs:22,md:24},{default:o((()=>[f(g(u(w).title),1)])),_:1}),p(l,{class:"time",xs:22,md:24},{default:o((()=>[p(n,{size:20,color:"rgb(200,20,20)"},{default:o((()=>[p(u(x))])),_:1}),f(g(u(w).release_time),1)])),_:1}),_(' <el-col class="content" :xs="22" :md="24">\r\n                <el-image :src="newsImage" fit="cover" />\r\n            </el-col> '),u(h)&&u(w).content?(i(),c(l,{key:0,class:"content",xs:22,md:24},{default:o((()=>[m("div",{class:"contentDIV",innerHTML:u(w).content.replace(/<img/g,'<img class="image" style="max-height:500px;max-width:1000px; margin:10px auto !important;display:block; "')},null,8,["innerHTML"])])),_:1})):_("v-if",!0),!u(h)&&u(w).content?(i(),c(l,{key:1,class:"content",xs:22,md:24},{default:o((()=>[m("div",{class:"contentDIV",innerHTML:u(w).content.replace(/<img/g,'<img class="image" style="max-height:500px;max-width:80vw; margin:10px auto !important;display:block; "')},null,8,["innerHTML"])])),_:1})):_("v-if",!0),_(' <el-col class="time" :xs="22" :md="24"><el-icon :size="20" color="rgb(200,20,20)">\r\n                    <Clock />\r\n                </el-icon>{{ NewsData.release_time }}</el-col> ')])),_:1})):_("v-if",!0),p(b,{color:"rgb(200,20,20)",class:"hidden-sm-and-down btn",type:"primary",onClick:v},{default:o((()=>[f("返回")])),_:1}),p(b,{color:"rgb(200,20,20)",class:"hidden-md-and-up btn",type:"primary",onClick:I},{default:o((()=>[f("返回")])),_:1}),p(D,{class:"hidden-md-and-up footer"})])),_:1},512)}}},[["__scopeId","data-v-c25c8a73"]]);export{b as default};