import{z as t,a,c as s,w as e,i as r,h as l,b as u,e as n,u as c,l as o,t as d,j as i,k as m,F as _,n as f}from"./index-529ce03d.js";import{_ as g,A as p,a as x,F as b}from"./app-footer.6c99bb48.js";import{A as j}from"./background-img.vue_vue_type_style_index_0_scoped_1f86ea46_lang.20e75b72.js";import{b as k}from"./background-img.6fb50d10.js";import{S}from"./stu.19090fa9.js";const h=g({__name:"stu-detail-m",setup(g){const h=S(),y=()=>{h.updateCurrentRouterIndex(0),console.log(h.currentRouterIndex)},D=t=>{f({url:"/pages/index/child/outstanding-graduate/outstanding-graduate"})},A=t((()=>h.currentStuData.imgList.length>0?h.currentStuData.imgList:""));return(t,f)=>{const g=r,S=l("el-col"),v=l("el-row"),w=l("el-button");return a(),s(g,{class:"stu-detail"},{default:e((()=>[u("template",{class:"m-header"},[n(p),n(x)]),n(g,{class:"container-content"},{default:e((()=>[n(k,{img:c(A)},null,8,["img"]),n(g,{class:"trans"},{default:e((()=>[n(j,{class:"bread",currentPageTxtArr:["优秀校友",c(h).currentStuData.title.substring(0,8)+"..."],onChangePage:D},null,8,["currentPageTxtArr"]),n(v,{justify:"center"},{default:e((()=>[n(S,{xs:{span:23},sm:{span:22},xl:20},{default:e((()=>[n(g,{class:"title"},{default:e((()=>[o("优秀校友")])),_:1}),u("p",{class:"line"}),n(g,{class:"content"},{default:e((()=>[n(v,{class:"stu-detail-row",justify:"center"},{default:e((()=>[n(S,{class:"desc-title",xs:24,sm:24,md:20},{default:e((()=>[o(d(c(h).currentStuData.title),1)])),_:1}),n(S,{class:"desc",xs:24,sm:24,md:20},{default:e((()=>[(a(!0),i(_,null,m(c(h).currentStuData.desc,((t,s)=>(a(),i("p",{key:s},d(t),1)))),128))])),_:1})])),_:1}),n(w,{onClick:y,color:"rgb(200,20,20)"},{default:e((()=>[o("返回")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),n(b,{class:"footer"})])),_:1})}}},[["__scopeId","data-v-4f551e5d"]]);export{h as default};