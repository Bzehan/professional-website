import { defineStore } from 'pinia'
import { ref } from 'vue'
export const StuInfoStore = defineStore('stuInfo', () => {
    
    //    路由下标
    const currentRouterIndex = ref(0)
    // 更新路由下标
    const updateCurrentRouterIndex = (data) => {
        currentRouterIndex.value = data;
    }
    // 校友数据
    const currentStuData = ref(
        {
            title: "斯泽夫学长在清华经管学院2021毕业典礼演讲",
            desc: ["登上大舞台融入新格局——在清华经管学院2021毕业典礼上的演讲全国政协常委，哈电集团董事长、党委书记斯泽夫2021年6月27日斯泽夫各位敬爱的老师、亲爱的同学们：大家下午好！我是斯泽夫，清华经管学院93级校友，很高兴作为今年毕业典礼的主讲嘉宾在这里跟大家分享我的观点。我学经济管理何为“经管”，我认为就是“经世济民，求社会之功；管财理家，谋大众之利”，1993年当我来到清华经管学院的时候，正是秉持着这样的理念，我",
                "何为“经管”，我认为就是“经世济民，求社会之功；管财理家，谋大众之利”，1993年当我来到清华经管学院的时候，正是秉持着这样的理念，我开始如饥似渴地开启了学习生涯，学习了西方经济学等，了解了经济学的基本原理。吸收人类先进文明成果的同时，更加感受到中华文化的伟大，我们的传统文化不仅思想深邃圆融，内容广博，高扬道德，同时，也蕴含着丰富的管理思想，正是在中西方文化的汲取中滋养了我的管理理念。清华，给了我承担重任的肩膀。"
            ],
            releaseTime: "2023-11-25",
            imgList: []
        })
    const updatecurrentStuData = (data) => {
        currentStuData.value = data;
    }
    return {
        currentRouterIndex,
        updateCurrentRouterIndex,
        currentStuData,
        updatecurrentStuData
    }
}, {
    persist: true
})