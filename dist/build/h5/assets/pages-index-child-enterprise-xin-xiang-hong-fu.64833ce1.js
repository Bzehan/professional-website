import{a,c as e,w as t,i as n,h as s,v as i,b as r,e as o,u as l,l as u,g as p,x as d}from"./index-529ce03d.js";import{A as m}from"./background-img.vue_vue_type_style_index_0_scoped_1f86ea46_lang.20e75b72.js";import{_ as c,A as y,a as g,F as f}from"./app-footer.6c99bb48.js";import{b as _}from"./background-img.6fb50d10.js";import{g as w,P as v,S as b,f as h}from"./pagination.996f4d5c.js";function x(a){let e,t,{swiper:n,extendParams:s,on:i,emit:r,params:o}=a;n.autoplay={running:!1,paused:!1,timeLeft:0},s({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let l,u,p,d,m,c,y,g=o&&o.autoplay?o.autoplay.delay:3e3,f=o&&o.autoplay?o.autoplay.delay:3e3,_=(new Date).getTime;function v(a){n&&!n.destroyed&&n.wrapperEl&&a.target===n.wrapperEl&&(n.wrapperEl.removeEventListener("transitionend",v),L())}const b=()=>{if(n.destroyed||!n.autoplay.running)return;n.autoplay.paused?u=!0:u&&(f=l,u=!1);const a=n.autoplay.paused?l:_+f-(new Date).getTime();n.autoplay.timeLeft=a,r("autoplayTimeLeft",a,a/g),t=requestAnimationFrame((()=>{b()}))},h=a=>{if(n.destroyed||!n.autoplay.running)return;cancelAnimationFrame(t),b();let s=void 0===a?n.params.autoplay.delay:a;g=n.params.autoplay.delay,f=n.params.autoplay.delay;const i=(()=>{let a;if(a=n.virtual&&n.params.virtual.enabled?n.slides.filter((a=>a.classList.contains("swiper-slide-active")))[0]:n.slides[n.activeIndex],!a)return;return parseInt(a.getAttribute("data-swiper-autoplay"),10)})();!Number.isNaN(i)&&i>0&&void 0===a&&(s=i,g=i,f=i),l=s;const o=n.params.speed,u=()=>{n&&!n.destroyed&&(n.params.autoplay.reverseDirection?!n.isBeginning||n.params.loop||n.params.rewind?(n.slidePrev(o,!0,!0),r("autoplay")):n.params.autoplay.stopOnLastSlide||(n.slideTo(n.slides.length-1,o,!0,!0),r("autoplay")):!n.isEnd||n.params.loop||n.params.rewind?(n.slideNext(o,!0,!0),r("autoplay")):n.params.autoplay.stopOnLastSlide||(n.slideTo(0,o,!0,!0),r("autoplay")),n.params.cssMode&&(_=(new Date).getTime(),requestAnimationFrame((()=>{h()}))))};return s>0?(clearTimeout(e),e=setTimeout((()=>{u()}),s)):requestAnimationFrame((()=>{u()})),s},x=()=>{n.autoplay.running=!0,h(),r("autoplayStart")},T=()=>{n.autoplay.running=!1,clearTimeout(e),cancelAnimationFrame(t),r("autoplayStop")},E=(a,t)=>{if(n.destroyed||!n.autoplay.running)return;clearTimeout(e),a||(y=!0);const s=()=>{r("autoplayPause"),n.params.autoplay.waitForTransition?n.wrapperEl.addEventListener("transitionend",v):L()};if(n.autoplay.paused=!0,t)return c&&(l=n.params.autoplay.delay),c=!1,void s();const i=l||n.params.autoplay.delay;l=i-((new Date).getTime()-_),n.isEnd&&l<0&&!n.params.loop||(l<0&&(l=0),s())},L=()=>{n.isEnd&&l<0&&!n.params.loop||n.destroyed||!n.autoplay.running||(_=(new Date).getTime(),y?(y=!1,h(l)):h(),n.autoplay.paused=!1,r("autoplayResume"))},I=()=>{if(n.destroyed||!n.autoplay.running)return;const a=w();"hidden"===a.visibilityState&&(y=!0,E(!0)),"visible"===a.visibilityState&&L()},O=a=>{"mouse"===a.pointerType&&(y=!0,n.animating||n.autoplay.paused||E(!0))},j=a=>{"mouse"===a.pointerType&&n.autoplay.paused&&L()};i("init",(()=>{n.params.autoplay.enabled&&(n.params.autoplay.pauseOnMouseEnter&&(n.el.addEventListener("pointerenter",O),n.el.addEventListener("pointerleave",j)),w().addEventListener("visibilitychange",I),_=(new Date).getTime(),x())})),i("destroy",(()=>{n.el.removeEventListener("pointerenter",O),n.el.removeEventListener("pointerleave",j),w().removeEventListener("visibilitychange",I),n.autoplay.running&&T()})),i("beforeTransitionStart",((a,e,t)=>{!n.destroyed&&n.autoplay.running&&(t||!n.params.autoplay.disableOnInteraction?E(!0,!0):T())})),i("sliderFirstMove",(()=>{!n.destroyed&&n.autoplay.running&&(n.params.autoplay.disableOnInteraction?T():(p=!0,d=!1,y=!1,m=setTimeout((()=>{y=!0,d=!0,E(!0)}),200)))})),i("touchEnd",(()=>{if(!n.destroyed&&n.autoplay.running&&p){if(clearTimeout(m),clearTimeout(e),n.params.autoplay.disableOnInteraction)return d=!1,void(p=!1);d&&n.params.cssMode&&L(),d=!1,p=!1}})),i("slideChange",(()=>{!n.destroyed&&n.autoplay.running&&(c=!0)})),Object.assign(n.autoplay,{start:x,stop:T,pause:E,resume:L})}const T=c({__name:"xin-xiang-hong-fu",setup(c){const w=[v,x],T=()=>{window.open("https://www.xinxianghf.cn/schoolIntroduction")};return(c,v)=>{const x=n,E=s("el-button"),L=s("el-col"),I=s("el-image"),O=s("el-row"),j=i("showMeta");return a(),e(x,{class:"container"},{default:t((()=>[r("template",{class:"m-header"},[o(y),o(g)]),o(x,{class:"container-content"},{default:t((()=>[o(_,{img:[l("/assets/xxhf_banner_1-c938fe08.jpg")]},null,8,["img"]),o(x,{class:"trans"},{default:t((()=>[o(m,{class:"breadcrumb",currentPageTxtArr:["合作企业","薪享宏福"]}),o(O,{justify:"center"},{default:t((()=>[o(L,{xs:{span:20},sm:{span:20},md:{span:18}},{default:t((()=>[o(x,{class:"title"},{default:t((()=>[u("薪享宏福")])),_:1}),r("p",{class:"line"}),o(x,{class:"content"},{default:t((()=>[p(" 左图右文 "),o(O,{justify:"space-between",gutter:20},{default:t((()=>[d((a(),e(L,{class:"instruction",xs:24,sm:12},{default:t((()=>[r("h2",null,"薪享宏福 专注培养云计算工程师"),r("p",null,"薪享宏福，“北京缘起宏福科技有限公司” 旗下云计算实训品牌，专注为云计算行业提供解决方案，为企业提供云计算人才定制服务。公司自 2014 年成立以来，紧随国家云计算发展战略及产业发展步伐，精准聚焦于云计算高端技术人才的培养与输送。"),r("p",null,"公司作为传统学校教育和就业市场之间的桥梁，致力于帮助社会解决“学校教育与就业市场高度不对称的问题”。公司从毕业 0-5 年的群体中挖掘被“错配的人才”，通过搭建精英化、多层次、高区分的培养体系以及充分的就业辅导，并利用公司与优质就业单位的资源和联系，为“人才”找准“位置”，最终实现提升人才附加价值，服务社会人力资源优化配置的目的。 "),o(E,{onClick:T,style:{float:"right"}},{default:t((()=>[u("了解详情")])),_:1})])),_:1})),[[j,"animate__fadeInLeft"]]),d((a(),e(L,{class:"image-wrapper",xs:24,sm:12},{default:t((()=>[o(l(b),{pagination:{dynamicBullets:!0},autoplay:{delay:3500,disableOnInteraction:!1},loop:!0,autoHeight:!0,modules:w,class:"mySwiper"},{default:t((()=>[o(l(h),null,{default:t((()=>[o(I,{src:"https://www.xinxianghf.cn/static/img/a_3.png",fit:"cover"})])),_:1}),o(l(h),null,{default:t((()=>[o(I,{src:"https://www.xinxianghf.cn/static/img/a_4.png",fit:"cover"})])),_:1}),o(l(h),null,{default:t((()=>[o(I,{src:"https://www.xinxianghf.cn/static/img/a_7.png",fit:"cover"})])),_:1}),o(l(h),null,{default:t((()=>[o(I,{src:"https://www.xinxianghf.cn/static/img/a_5.png",fit:"cover"})])),_:1})])),_:1})])),_:1})),[[j,"animate__fadeInRight"]])])),_:1}),p(" 文字 "),d((a(),e(O,{justify:"space-between",gutter:20},{default:t((()=>[o(L,{class:"instruction",xs:24,sm:24},{default:t((()=>[r("p",null,"通过整合优质教育资源，公司已持续为华为、爱立信、阿里、百度云、金山云、电信云、中国移动、光大银行、建设银行等 200+ 家企业输送云计算高端人才。")])),_:1})])),_:1})),[[j,"animate__fadeInUp"]])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),o(f,{class:"footer"})])),_:1})}}},[["__scopeId","data-v-553344b9"]]);export{T as default};