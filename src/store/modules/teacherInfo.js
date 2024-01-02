import { defineStore } from 'pinia'
import { ref } from 'vue'
import wanglei from '@/static/teacher/wanglei.jpg'
import liuzhenghua from '@/static/teacher/liuzhenghua.jpg'
import fancunyong from '@/static/teacher/fancunyong.jpg'
import cuironmei from '@/static/teacher/cuironmei.jpg'
import songkai from '@/static/teacher/songkai.jpg'
import susilan from '@/static/teacher/susilan.jpg'

export const TeacherInfoStore = defineStore('teacherInfo', () => {
    // 教师数据列表
    const teacherList = ref(
        [
            {
                name: "王雷",
                title: '网络专业负责人',
                img: wanglei,
                desc: {
                    eduExp: ["2001-2005年毕业于河北师范大学计算机科学与技术专业"],
                    area: "研究方向为云计算、数据通信等。主要教授《网络服务器建设》《云计算》《路由交换技术及应用》等课程。",
                    Exp: [" 男，副教授，1981年11月生人，中共党员，工程硕士，河北省计算机学会会员。", " 多次被评为“学校先进工作者”，2017年指导学生参加河北省“互联网+”创新创业大赛获得铜奖，2019年校级师德师风先进个人，2019年校级“双十佳”教师，2019年度校级科研先进个人，2019年指导学生参加“挑战杯”河北省大学生课外学术科技作品竞赛获一等奖，2022年指导学生参加“华为ICT大赛”获得河北省实践赛-网络赛道本科组三等奖，2023年第八届“学生心中的好老师”，2022-2023学年“集团职工先进工作者”。", "自任职教师以来，发表各级各类期刊论文20余篇，其中核心期刊3篇；主持或参与省部级、市厅级、校级课题7项；主编（参编）教材三部，分别为《现代通信与网络工程实用教程》《信息技术基础教程》《融媒体技术概论》。具有华为讲师资格，管理我校华为ICT学院。联系方式：wangleilei402@139.com。"]
                }
            },
            {
                name: "刘正华",
                title: '教授',
                img: liuzhenghua,
                desc: {
                    eduExp: ['1970.8毕业于河北工业大学 专业：无线电', '1987.2毕业于日本富士通 专业：微机计算机原理及应用', '1997.12获清华大学网络工程师', '2002.9获得微软MCSE、MCP、MCDA证书'],
                    area: `专业主攻方向：计算机网络技术、现代移动通信技术和嵌入式技术。`,
                    Exp: ['本人在研究所、IT行业工作20多年，现从事高等教育工作16年，长期的科学研究和IT项目的实践，使自己积累了一定的技术功底和项目开发能力。先后担任研究所总工程师和电脑信息总部经理。十几年的教学经历，完成了二十余门课程的教学任务，专业知识系统、专业理论基础较雄厚，积累了一定的教学经验。先后编写了《网络工程应用实用教程》、《现代通信及网络工程实用教程》两本书，完成了多项科研项目，其中《SDZ253-1型精密数字毫欧计》获得河北省发明铜奖。在国家级刊物上发表多篇优秀论文，其中《VPN应用与实现》获得国家级优秀论文一等奖。',
                        '本人担任河北省计算机学会常务理事，先后授予石家庄市委员会市人民政府市劳动模范和市优秀知识分子称号。']
                },
            },
            {
                name: "范村勇",
                title: '高级工程师',
                img:fancunyong,
                desc: {
                    eduExp: ['1994-1997年毕业于河北科技大学计算机及应用专业。'],
                    area: '研究方向为数据通信、服务器技术、信息安全。主要教授《路由交换技术及应用》《高级路由交换》《操作系统》《网络服务器建设》《互联网及多媒体通信协议》《网络与媒体信息安全》等课程。',
                    Exp: ['主持过多项工程项目，实践经验、教学经验非常丰富。2010年，河北省精品课《计算机网络基础》主讲教师。2012年，河北省职业院校技能大赛“信息安全管理与评估”项目优秀指导教师。',
                        '2017年，河北省发展和改革委员会信息系统整合及大数据建设项目，资金规模1000万。2019年，河北省农村人居环境整治办高铁高速沿线环境集中整治专项行动信息采集展示系统工程项目，资金规模300万。2021年，东软全场景疫情病原体检测信息系统石家庄项目，资金规模500万。具有思科、华为高级工程师证书。联系方式：46039941@qq.com。']
                }
            },
            {
                name: "崔荣梅",
                title: '硕士研究生',
                img: cuironmei,
                desc: {
                    eduExp: ['2015-2018年毕业于西安电子科技大学，通信工程专业。英语水平六级', '读研期间曾获“优秀研究生”和“优秀学生干部”称号，连续三年获得一等奖学金。'],
                    area: "主要教授《通信原理》《信号与系统》《计算机网络技术》《路由交换技术》《程序设计基础》《高级语言程序设计》等课程。",
                    Exp: ['崔荣梅，1992年11月生人，中共党员，硕士研究生，现任河北传媒学院专职教师，研究方向为通信与信息系统，信号处理等，']
                }
            },
            {
                name: "宋凯",
                title: '硕士研究生',
                img: songkai,
                desc: {
                    eduExp: ["工学硕士，2012-2015在西安电子科技大学计算机科学与技术专业就读硕士研究生（全日制）。"],
                    area: '研究方向为计算机网络技术、网络编程。主要教授《计算机网络技术》、《网络工程综合实训》、《网络应用创新设计》、《路由交换技术》等课程。',
                    Exp: ["曾先后任职于武警石家庄指挥学校和武警部队士官学校基础部信息技术教研室讲师，现任河北传媒学院信管学院新媒体教研室老师；", "曾四次荣获部队嘉奖；多次荣获武警石家庄指挥学校优秀教员称号；2007、2008获得学校学术成果三等奖两次；2009、2010获得学校学术成果一等奖两次；《军事教学中计算机技术的应用问题刍议》获得中国军事写作协会优秀论文一等奖。", "  自任职教师以来，参与完成了十一五课题“信息技术环境下多元学与教方式有效融入日常教学的研究”的结题工作；参与完成了十二五课题子课题 “基于PDCA的信息化教学管理平台的设计与技术研究”的开题立项、研究及结题申请工作；参与撰写1部武警部队教材《通信与计算机专业士兵职业技能鉴定考核指南》和6部学校内部教材；参与了武警部队职业技能鉴定的试题库建设和保障了考评员的培训工作；发表学术论文数十篇。联系方式：1306809575@qq.com"]
                }
            },
            {
                name: "苏思岚",
                title: "工学硕士",
                desc: '1992年3月生人，中共党员，现为河北传媒学院信息技术与文化管理学院教师',
                img: susilan,
                desc: {
                    eduExp: ["工学硕士，2015-2018年毕业于华北电力大学电子与通信工程专业，在校期间曾荣获国家奖学金，发表一篇一级学报期刊及三篇发明专利。"],
                    area: "研究方向为网络工程、通信与信息系统等方向。主要教授《TCP/IP技术及应用》《计算机应用基础》等课程",
                    honor: [],
                    Exp: ['1992年3月生人，中共党员，现为河北传媒学院信息技术与文化管理学院教师。联系方式：susilan@126.com。']
                }
            }
        ]
    )
    // const teacherList = ref([])
    // 教师详情页
    const teacherInfo = ref({ name: '王雷', img:wanglei, desc: "2333333" });
    // 更新教师信息
    const updateTeacherInfo = (data) => {
        teacherInfo.value = data;
    }
    // 路由下标
    const currentStatus = ref(0)
    // 更新路由下标
    const updateCurrentStatus = (data) => {
        currentStatus.value = data;
    }

    const SetALLTeacherInfo = (data) => {
        let dataArr = data.list.map(item => {
            return {
                name: item.teacher_name,
                title: item.teacher_position,
                desc: item.teacher_work_exp,
                img: item.teacherImage[0]?.image_path,
                desc: {
                    eduExp: [item.teacher_edu_exp],
                    area: item.teacher_study_exp,
                    honor: [],
                    Exp: [item.teacher_work_exp]
                }
            }
        })
        teacherList.value.unshift(...dataArr)
    }
    return {
        // 更新单个教师数据
        updateTeacherInfo,
        teacherInfo,
        teacherList,
        currentStatus,
        updateCurrentStatus,
        // 设置所有教师数据
        SetALLTeacherInfo
    }
})