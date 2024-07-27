<script setup lang='ts'> 
import {ref,reactive} from 'vue'
import radioGroup from '../../component/radioGroup.vue';
import html2pdf from 'html2pdf.js'
const data = ref({
  leftData: [
    {
      subtitle: '体力测评',
      data:  [
        {
          title: '走路',
          isCheckbox: false,
          currentSelect: '正常',
          dataSource: [
            {
              value: '正常',
              text: '正常'
            },
            {
              value: '费力',
              text: '费力'
            },
            {
              value: '卧床',
              text: '卧床'
            },
          ]
        },
        {
          title: '爬楼',
          isCheckbox: false,
          currentSelect: '费力',
          dataSource: [
            {
              value: '费力',
              text: '费力'
            },
            {
              value: '不费力',
              text: '不费力'
            },
          ]
        },
        {
          title: '跑步',
          isCheckbox: false,
          currentSelect: '正常',
          dataSource: [
            {
              value: '正常',
              text: '正常'
            },
            {
              value: '费力',
              text: '费力'
            },
            {
              value: '完全不能跑',
              text: '完全不能跑'
            },
          ]
        },
        {
          title: '蹲起',
          isCheckbox: false,
          currentSelect: '能做十个以上',
          dataSource: [
            {
              value: '能做十个以上',
              text: '能做十个以上'
            },
            {
              value: '完全不能做',
              text: '完全不能做'
            },
            {
              value: '能做十个以内',
              text: '能做十个以内'
            },
          ]
        },
        {
          title: '稳定性',
          isCheckbox: false,
          currentSelect: '很稳定',
          dataSource: [
            {
              value: '很稳定',
              text: '很稳定'
            },
            {
              value: '较为稳定',
              text: '较为稳定'
            },
            {
              value: '不稳定',
              text: '不稳定'
            },
          ]
        },
        {
          title: '卧床-翻身',
          isCheckbox: false,
          currentSelect: '翻身困难',
          dataSource: [
            {
              value: '翻身困难',
              text: '翻身困难'
            },
            {
              value: '翻身不困难',
              text: '翻身不困难'
            },
          ]
        },
        {
          title: '卧床-坐起',
          isCheckbox: false,
          currentSelect: '坐起吃力',
          dataSource: [
            {
              value: '坐起吃力',
              text: '坐起吃力'
            },
            {
              value: '坐起不吃力',
              text: '坐起不吃力'
            },
          ]
        },
        {
          title: '精力状况',
          isCheckbox: false,
          currentSelect: '精力好',
          dataSource: [
            {
              value: '精力好',
              text: '精力好'
            },
            {
              value: '精力较差',
              text: '精力较差'
            },
          ]
        },
        {
          title: '夫妻生活质量',
          isCheckbox: false,
          currentSelect: '质量好',
          dataSource: [
            {
              value: '质量好',
              text: '质量好'
            },
            {
              value: '质量不好',
              text: '质量不好'
            },
          ]
        },
      ]
    },
    {
      subtitle: '症状测评',
      data: [
        {
          title: '眼睛（可多选）',
          isCheckbox: true,
          currentSelect: ['没问题'],
          dataSource: [
            {
              value: '没问题',
              text: '没问题'
            },
            {
              value: '青光眼',
              text: '青光眼'
            },
            {
              value: '白内障',
              text: '白内障'
            },
            {
              value: '眼睛干涩',
              text: '眼睛干涩'
            },
            {
              value: '迎风流泪',
              text: '迎风流泪'
            },
            {
              value: '视力变差',
              text: '视力变差'
            }
          ]
        },
        {
          title: '鼻子',
          isCheckbox: false,
          currentSelect: '正常',
          dataSource: [
            {
              value: '鼻炎',
              text:  '鼻炎'
            },
            {
              value: '鼻窦炎',
              text:  '鼻窦炎'
            },
            {
              value: '鼻息肉',
              text:  '鼻息肉'
            },
            {
              value: '正常',
              text:  '正常'
            }
          ]
        },
        {
          title: '牙齿',
          isCheckbox: false,
          currentSelect: '很好',
          dataSource: [
            {
              value: '很好',
              text:  '很好'
            },
            {
              value: '松动',
              text:  '松动'
            },
            {
              value: '缺失',
              text:  '缺失'
            },
            {
              value: '经常疼痛',
              text:  '经常疼痛'
            }
          ]
        },
        {
          title: '口腔粘膜（可多选）',
          isCheckbox: true,
          currentSelect: ['正常'],
          dataSource: [
            {
              value: '正常',
              text:  '正常'
            },
            {
              value: '偶尔溃疡',
              text:  '偶尔溃疡'
            },
            {
              value: '经常溃疡',
              text:  '经常溃疡'
            },
            {
              value: '溃疡面积大',
              text:  '溃疡面积大'
            },
            {
              value: '溃疡面积小',
              text:  '溃疡面积小'
            }
          ]
        },
        {
          title: '听力',
          isCheckbox: false,
          currentSelect: '正常',
          dataSource: [
            {
              value: '正常',
              text:  '正常'
            },
            {
              value: '偶尔失聪',
              text:  '偶尔失聪'
            },
            {
              value: '失聪',
              text:  '失聪'
            },
            {
              value: '听不清',
              text:  '听不清'
            }
          ]
        },
        {
          title: '痰液',
          isCheckbox: false,
          currentSelect: '无痰',
          dataSource: [
            {
              value: '无痰',
              text:  '无痰'
            },
            {
              value: '白痰',
              text:  '白痰'
            },
            {
              value: '黄痰',
              text:  '黄痰'
            },
            {
              value: '绿痰',
              text:  '绿痰'
            }
          ]
        },
        {
          title: '呼吸',
          isCheckbox: false,
          currentSelect: '正常',
          dataSource: [
            {
              value: '正常',
              text:  '正常'
            },
            {
              value: '急',
              text:  '急'
            },
            {
              value: '气喘',
              text:  '气喘'
            }
          ]
        },
        {
          title: '心脏（可多选）',
          isCheckbox: true,
          currentSelect: ['正常'],
          dataSource: [
            {
              value: '正常',
              text:  '正常'
            },
            {
              value: '心率快',
              text:  '心率快'
            },
            {
              value: '心率慢',
              text:  '心率慢'
            },
            {
              value: '心绞痛',
              text: '心绞痛'
            },
            {
              value: '胸闷',
              text: '胸闷',
            },
            {
              value: '气短',
              text: '气短'
            },
            {
              value: '心慌',
              text: '心慌'
            }
          ]
        },
        {
          title: '关节（可多选）',
          isCheckbox: true,
          currentSelect: ['正常'],
          dataSource: [
            {
              value: '正常',
              text:  '正常'
            },
            {
              value: '偶尔疼痛',
              text:  '偶尔疼痛'
            },
            {
              value: '受天气原因疼痛',
              text:  '受天气原因疼痛'
            },
            {
              value: '活动受限',
              text:  '活动受限'
            }
          ]
        },
        {
          title: '睡眠（可多选）',
          isCheckbox: true,
          currentSelect: ['正常'],
          dataSource: [
            {
              value: '正常',
              text:  '正常'
            },
            {
              value: '失眠',
              text:  '失眠'
            },
            {
              value: '多梦',
              text:  '多梦'
            },
            {
              value: '难入睡',
              text:  '难入睡'
            },
            {
              value: '睡不醒',
              text:  '睡不醒'
            }
          ]
        },
        {
          title: '胃口',
          isCheckbox: false,
          currentSelect: '正常',
          dataSource: [
            {
              value: '正常',
              text:  '正常'
            },
            {
              value: '偶尔不好',
              text:  '偶尔不好'
            },
            {
              value: '经常不好',
              text:  '经常不好'
            },
            {
              value: '没有胃口',
              text:  '没有胃口'
            }
          ]
        },
        {
          title: '大小便（可多选）',
          isCheckbox: true,
          currentSelect: ['正常'],
          dataSource: [
            {
              value: '正常',
              text:  '正常'
            },
            {
              value: '尿频',
              text:  '尿频'
            },
            {
              value: '便秘',
              text:  '便秘'
            },
            {
              value: '腹泻',
              text:  '腹泻'
            },
            {
              value: '尿急',
              text:  '尿急'
            },
            {
              value: '尿不尽',
              text:  '尿不尽'
            },
            {
              value: '尿等待',
              text:  '尿等待'
            }
          ]
        },
        {
          title: '骨质（可多选）',
          isCheckbox: true,
          currentSelect: ['正常'],
          dataSource: [
            {
              value: '正常',
              text:  '正常'
            },
            {
              value: '骨质增生',
              text:  '骨质增生'
            },
            {
              value: '骨质疏松',
              text:  '骨质疏松'
            },
            {
              value: '骨关节炎',
              text:  '骨关节炎'
            },
            {
              value: '风湿性关节炎',
              text:  '风湿性关节炎'
            },
            {
              value: '滑膜炎',
              text:  '滑膜炎'
            }
          ]
        },
        {
          title: '前列腺（可多选）',
          isCheckbox: true,
          currentSelect: ['正常'],
          dataSource: [
            {
              value: '正常',
              text:  '正常'
            },
            {
              value: '前列腺增生',
              text:  '前列腺增生'
            },
            {
              value: '前列腺炎',
              text:  '前列腺炎'
            },
          ]
        },
      ]
    },
    {
      subtitle: '容貌变化',
      data: [
      {
          title: '头发',
          isCheckbox: false,
          currentSelect: "发量正常，颜色正常",
          dataSource: [
            {
              value: '发量正常，颜色正常',
              text:  '发量正常，颜色正常'
            },
            {
              value: '少量掉发，少量白发',
              text:  '少量掉发，少量白发'
            },
            {
              value: '掉发严重',
              text:  '掉发严重'
            },
          ]
        },
        {
          title: '皱纹',
          isCheckbox: false,
          currentSelect: "无皱纹",
          dataSource: [
            {
              value: '无皱纹',
              text:  '无皱纹'
            },
            {
              value: '有皱纹',
              text:  '有皱纹'
            },
          ]
        },
        {
          title: '皮肤质感',
          isCheckbox: false,
          currentSelect: "皮肤紧致",
          dataSource: [
            {
              value: '皮肤紧致',
              text:  '皮肤紧致'
            },
            {
              value: '皮肤松弛',
              text:  '皮肤松弛'
            },
          ]
        },
        {
          title: '老年斑',
          isCheckbox: false,
          currentSelect: "无",
          dataSource: [
            {
              value: '无',
              text:  '无'
            },
            {
              value: '少量',
              text:  '少量'
            },
            {
              value: '多',
              text:  '多'
            }
          ]
        },
        {
          title: '皮肤光滑度',
          isCheckbox: false,
          currentSelect: "皮肤光滑细腻",
          dataSource: [
            {
              value: '皮肤光滑细腻',
              text:  '皮肤光滑细腻'
            },
            {
              value: '皮肤粗糙暗沉',
              text:  '皮肤粗糙暗沉'
            }
          ]
        },
        {
          title: '皮屑',
          isCheckbox: false,
          currentSelect: "无",
          dataSource: [
            {
              value: '无',
              text:  '无'
            },
            {
              value: '少量',
              text:  '少量'
            },
            {
              value: '特别多',
              text:  '特别多'
            }
          ]
        },
      ]
    },
    {
      subtitle: '思维变化',
      data: [
        {
          title: '记忆力',
          isCheckbox: false,
          currentSelect: "正常",
          dataSource: [
            {
              value: '正常',
              text:  '正常'
            },
            {
              value: '差',
              text:  '差'
            }
          ]
        },
        {
          title: '计算能力',
          isCheckbox: false,
          currentSelect: "正常",
          dataSource: [
            {
              value: '正常',
              text:  '正常'
            },
            {
              value: '差',
              text:  '差'
            }
          ]
        },
        {
          title: '表达能力',
          isCheckbox: false,
          currentSelect: "正常",
          dataSource: [
            {
              value: '正常',
              text:  '正常'
            },
            {
              value: '差',
              text:  '差'
            }
          ]
        },
      ]
    },
    {
      subtitle: '指标变化',
      data: [
        {
          title: '血糖（可多选）',
          isCheckbox: true,
          currentSelect: ["正常"],
          dataSource: [
            {
              value: '正常',
              text:  '正常'
            },
            {
              value: '血糖偏高',
              text:  '血糖偏高'
            },
            {
              value: '糖尿病',
              text:  '糖尿病'
            },
            {
              value: '吃降糖药',
              text:  '吃降糖药'
            },
            {
              value: '打胰岛素',
              text:  '打胰岛素'
            },
            {
              value: '并发症',
              text:  '并发症'
            }
          ]
        },
        {
          title: '血压（可多选）',
          isCheckbox: true,
          currentSelect: ["正常"],
          dataSource: [
            {
              value: '正常',
              text:  '正常'
            },
            {
              value: '血压偏高',
              text:  '血压偏高'
            },
            {
              value: '高血压',
              text:  '高血压'
            },
            {
              value: '吃降压药',
              text:  '吃降压药'
            },
            {
              value: '联合用药',
              text:  '联合用药'
            },
            {
              value: '并发症',
              text:  '并发症'
            }
          ]
        },
      ]
    },
  ],
  rightData: [
    {
      subtitle: '体力测评',
      data:  [
        {
          title: '走路',
          isCheckbox: false,
          currentSelect: '正常',
          dataSource: [
            {
              value: '正常',
              text: '正常'
            },
            {
              value: '费力',
              text: '费力'
            },
            {
              value: '卧床',
              text: '卧床'
            },
          ]
        },
        {
          title: '爬楼',
          isCheckbox: false,
          currentSelect: '费力',
          dataSource: [
            {
              value: '费力',
              text: '费力'
            },
            {
              value: '不费力',
              text: '不费力'
            },
          ]
        },
        {
          title: '跑步',
          isCheckbox: false,
          currentSelect: '正常',
          dataSource: [
            {
              value: '正常',
              text: '正常'
            },
            {
              value: '费力',
              text: '费力'
            },
            {
              value: '完全不能跑',
              text: '完全不能跑'
            },
          ]
        },
        {
          title: '蹲起',
          isCheckbox: false,
          currentSelect: '能做十个以上',
          dataSource: [
            {
              value: '能做十个以上',
              text: '能做十个以上'
            },
            {
              value: '完全不能做',
              text: '完全不能做'
            },
            {
              value: '能做十个以内',
              text: '能做十个以内'
            },
          ]
        },
        {
          title: '稳定性',
          isCheckbox: false,
          currentSelect: '很稳定',
          dataSource: [
            {
              value: '很稳定',
              text: '很稳定'
            },
            {
              value: '较为稳定',
              text: '较为稳定'
            },
            {
              value: '不稳定',
              text: '不稳定'
            },
          ]
        },
        {
          title: '卧床-翻身',
          isCheckbox: false,
          currentSelect: '翻身困难',
          dataSource: [
            {
              value: '翻身困难',
              text: '翻身困难'
            },
            {
              value: '翻身不困难',
              text: '翻身不困难'
            },
          ]
        },
        {
          title: '卧床-坐起',
          isCheckbox: false,
          currentSelect: '坐起吃力',
          dataSource: [
            {
              value: '坐起吃力',
              text: '坐起吃力'
            },
            {
              value: '坐起不吃力',
              text: '坐起不吃力'
            },
          ]
        },
        {
          title: '精力状况',
          isCheckbox: false,
          currentSelect: '精力好',
          dataSource: [
            {
              value: '精力好',
              text: '精力好'
            },
            {
              value: '精力较差',
              text: '精力较差'
            },
          ]
        },
        {
          title: '夫妻生活质量',
          isCheckbox: false,
          currentSelect: '质量好',
          dataSource: [
            {
              value: '质量好',
              text: '质量好'
            },
            {
              value: '质量不好',
              text: '质量不好'
            },
          ]
        },
      ]
    },
    {
      subtitle: '症状测评',
      data: [
        {
          title: '眼睛（可多选）',
          isCheckbox: true,
          currentSelect: ['没问题'],
          dataSource: [
            {
              value: '没问题',
              text: '没问题'
            },
            {
              value: '青光眼',
              text: '青光眼'
            },
            {
              value: '白内障',
              text: '白内障'
            },
            {
              value: '眼睛干涩',
              text: '眼睛干涩'
            },
            {
              value: '迎风流泪',
              text: '迎风流泪'
            },
            {
              value: '视力变差',
              text: '视力变差'
            }
          ]
        },
        {
          title: '鼻子',
          isCheckbox: false,
          currentSelect: '正常',
          dataSource: [
            {
              value: '鼻炎',
              text:  '鼻炎'
            },
            {
              value: '鼻窦炎',
              text:  '鼻窦炎'
            },
            {
              value: '鼻息肉',
              text:  '鼻息肉'
            },
            {
              value: '正常',
              text:  '正常'
            }
          ]
        },
        {
          title: '牙齿',
          isCheckbox: false,
          currentSelect: '很好',
          dataSource: [
            {
              value: '很好',
              text:  '很好'
            },
            {
              value: '松动',
              text:  '松动'
            },
            {
              value: '缺失',
              text:  '缺失'
            },
            {
              value: '经常疼痛',
              text:  '经常疼痛'
            }
          ]
        },
        {
          title: '口腔粘膜（可多选）',
          isCheckbox: true,
          currentSelect: ['正常'],
          dataSource: [
            {
              value: '正常',
              text:  '正常'
            },
            {
              value: '偶尔溃疡',
              text:  '偶尔溃疡'
            },
            {
              value: '经常溃疡',
              text:  '经常溃疡'
            },
            {
              value: '溃疡面积大',
              text:  '溃疡面积大'
            },
            {
              value: '溃疡面积小',
              text:  '溃疡面积小'
            }
          ]
        },
        {
          title: '听力',
          isCheckbox: false,
          currentSelect: '正常',
          dataSource: [
            {
              value: '正常',
              text:  '正常'
            },
            {
              value: '偶尔失聪',
              text:  '偶尔失聪'
            },
            {
              value: '失聪',
              text:  '失聪'
            },
            {
              value: '听不清',
              text:  '听不清'
            }
          ]
        },
        {
          title: '痰液',
          isCheckbox: false,
          currentSelect: '无痰',
          dataSource: [
            {
              value: '无痰',
              text:  '无痰'
            },
            {
              value: '白痰',
              text:  '白痰'
            },
            {
              value: '黄痰',
              text:  '黄痰'
            },
            {
              value: '绿痰',
              text:  '绿痰'
            }
          ]
        },
        {
          title: '呼吸',
          isCheckbox: false,
          currentSelect: '正常',
          dataSource: [
            {
              value: '正常',
              text:  '正常'
            },
            {
              value: '急',
              text:  '急'
            },
            {
              value: '气喘',
              text:  '气喘'
            }
          ]
        },
        {
          title: '心脏（可多选）',
          isCheckbox: true,
          currentSelect: ['正常'],
          dataSource: [
            {
              value: '正常',
              text:  '正常'
            },
            {
              value: '心率快',
              text:  '心率快'
            },
            {
              value: '心率慢',
              text:  '心率慢'
            },
            {
              value: '心绞痛',
              text: '心绞痛'
            },
            {
              value: '胸闷',
              text: '胸闷',
            },
            {
              value: '气短',
              text: '气短'
            },
            {
              value: '心慌',
              text: '心慌'
            }
          ]
        },
        {
          title: '关节（可多选）',
          isCheckbox: true,
          currentSelect: ['正常'],
          dataSource: [
            {
              value: '正常',
              text:  '正常'
            },
            {
              value: '偶尔疼痛',
              text:  '偶尔疼痛'
            },
            {
              value: '受天气原因疼痛',
              text:  '受天气原因疼痛'
            },
            {
              value: '活动受限',
              text:  '活动受限'
            }
          ]
        },
        {
          title: '睡眠（可多选）',
          isCheckbox: true,
          currentSelect: ['正常'],
          dataSource: [
            {
              value: '正常',
              text:  '正常'
            },
            {
              value: '失眠',
              text:  '失眠'
            },
            {
              value: '多梦',
              text:  '多梦'
            },
            {
              value: '难入睡',
              text:  '难入睡'
            },
            {
              value: '睡不醒',
              text:  '睡不醒'
            }
          ]
        },
        {
          title: '胃口',
          isCheckbox: false,
          currentSelect: '正常',
          dataSource: [
            {
              value: '正常',
              text:  '正常'
            },
            {
              value: '偶尔不好',
              text:  '偶尔不好'
            },
            {
              value: '经常不好',
              text:  '经常不好'
            },
            {
              value: '没有胃口',
              text:  '没有胃口'
            }
          ]
        },
        {
          title: '大小便（可多选）',
          isCheckbox: true,
          currentSelect: ['正常'],
          dataSource: [
            {
              value: '正常',
              text:  '正常'
            },
            {
              value: '尿频',
              text:  '尿频'
            },
            {
              value: '便秘',
              text:  '便秘'
            },
            {
              value: '腹泻',
              text:  '腹泻'
            },
            {
              value: '尿急',
              text:  '尿急'
            },
            {
              value: '尿不尽',
              text:  '尿不尽'
            },
            {
              value: '尿等待',
              text:  '尿等待'
            }
          ]
        },
        {
          title: '骨质（可多选）',
          isCheckbox: true,
          currentSelect: ['正常'],
          dataSource: [
            {
              value: '正常',
              text:  '正常'
            },
            {
              value: '骨质增生',
              text:  '骨质增生'
            },
            {
              value: '骨质疏松',
              text:  '骨质疏松'
            },
            {
              value: '骨关节炎',
              text:  '骨关节炎'
            },
            {
              value: '风湿性关节炎',
              text:  '风湿性关节炎'
            },
            {
              value: '滑膜炎',
              text:  '滑膜炎'
            }
          ]
        },
        {
          title: '前列腺（可多选）',
          isCheckbox: true,
          currentSelect: ['正常'],
          dataSource: [
            {
              value: '正常',
              text:  '正常'
            },
            {
              value: '前列腺增生',
              text:  '前列腺增生'
            },
            {
              value: '前列腺炎',
              text:  '前列腺炎'
            },
          ]
        },
      ]
    },
    {
      subtitle: '容貌变化',
      data: [
      {
          title: '头发',
          isCheckbox: false,
          currentSelect: "发量正常，颜色正常",
          dataSource: [
            {
              value: '发量正常，颜色正常',
              text:  '发量正常，颜色正常'
            },
            {
              value: '少量掉发，少量白发',
              text:  '少量掉发，少量白发'
            },
            {
              value: '掉发严重',
              text:  '掉发严重'
            },
          ]
        },
        {
          title: '皱纹',
          isCheckbox: false,
          currentSelect: "无皱纹",
          dataSource: [
            {
              value: '无皱纹',
              text:  '无皱纹'
            },
            {
              value: '有皱纹',
              text:  '有皱纹'
            },
          ]
        },
        {
          title: '皮肤质感',
          isCheckbox: false,
          currentSelect: "皮肤紧致",
          dataSource: [
            {
              value: '皮肤紧致',
              text:  '皮肤紧致'
            },
            {
              value: '皮肤松弛',
              text:  '皮肤松弛'
            },
          ]
        },
        {
          title: '老年斑',
          isCheckbox: false,
          currentSelect: "无",
          dataSource: [
            {
              value: '无',
              text:  '无'
            },
            {
              value: '少量',
              text:  '少量'
            },
            {
              value: '多',
              text:  '多'
            }
          ]
        },
        {
          title: '皮肤光滑度',
          isCheckbox: false,
          currentSelect: "皮肤光滑细腻",
          dataSource: [
            {
              value: '皮肤光滑细腻',
              text:  '皮肤光滑细腻'
            },
            {
              value: '皮肤粗糙暗沉',
              text:  '皮肤粗糙暗沉'
            }
          ]
        },
        {
          title: '皮屑',
          isCheckbox: false,
          currentSelect: "无",
          dataSource: [
            {
              value: '无',
              text:  '无'
            },
            {
              value: '少量',
              text:  '少量'
            },
            {
              value: '特别多',
              text:  '特别多'
            }
          ]
        },
      ]
    },
    {
      subtitle: '思维变化',
      data: [
        {
          title: '记忆力',
          isCheckbox: false,
          currentSelect: "正常",
          dataSource: [
            {
              value: '正常',
              text:  '正常'
            },
            {
              value: '差',
              text:  '差'
            }
          ]
        },
        {
          title: '计算能力',
          isCheckbox: false,
          currentSelect: "正常",
          dataSource: [
            {
              value: '正常',
              text:  '正常'
            },
            {
              value: '差',
              text:  '差'
            }
          ]
        },
        {
          title: '表达能力',
          isCheckbox: false,
          currentSelect: "正常",
          dataSource: [
            {
              value: '正常',
              text:  '正常'
            },
            {
              value: '差',
              text:  '差'
            }
          ]
        },
      ]
    },
    {
      subtitle: '指标变化',
      data: [
        {
          title: '血糖（可多选）',
          isCheckbox: true,
          currentSelect: ["正常"],
          dataSource: [
            {
              value: '正常',
              text:  '正常'
            },
            {
              value: '血糖偏高',
              text:  '血糖偏高'
            },
            {
              value: '糖尿病',
              text:  '糖尿病'
            },
            {
              value: '吃降糖药',
              text:  '吃降糖药'
            },
            {
              value: '打胰岛素',
              text:  '打胰岛素'
            },
            {
              value: '并发症',
              text:  '并发症'
            }
          ]
        },
        {
          title: '血压（可多选）',
          isCheckbox: true,
          currentSelect: ["正常"],
          dataSource: [
            {
              value: '正常',
              text:  '正常'
            },
            {
              value: '血压偏高',
              text:  '血压偏高'
            },
            {
              value: '高血压',
              text:  '高血压'
            },
            {
              value: '吃降压药',
              text:  '吃降压药'
            },
            {
              value: '联合用药',
              text:  '联合用药'
            },
            {
              value: '并发症',
              text:  '并发症'
            }
          ]
        },
      ]
    },
  ]
})

function fn() {
  const element = document.getElementById('form');
  html2pdf().from(element).set({
    margin: 1,
    filename: 'form-data.pdf',
    html2canvas: { scale: 2 },
    jsPDF: { format: 'a4' }
  }).save();
}
</script>

<template>
  <el-container>
      <el-header></el-header>
      <el-main>
        <el-form :model="data" label-width="100px" id="form">
          <el-row :gutter="20">
            <el-col :span="12" class="line">
                <h1 class="title">十年前的状况</h1>
                <div  v-for="(item, index) in data.leftData" :key="index">
                  <h3 class="subTile">{{ item.subtitle }}</h3>
                  <div v-for="(i, cur) in item.data" :key="cur">
                    <h5>{{ cur + 1 }}.{{ i.title }}</h5>
                    <radio-group v-model="i.currentSelect" :dataSource="i.dataSource" :isCheckbox="i.isCheckbox"></radio-group>
                  </div>
                </div>
            </el-col>
            <el-col :span="12" class="right-part">
              <h1 class="title">十年后的状况</h1>
                <div  v-for="(item, index) in data.rightData" :key="index">
                  <h3 class="subTile">{{ item.subtitle }}</h3>
                  <div v-for="(i, cur) in item.data" :key="cur">
                    <h5>{{ cur + 1 }}.{{ i.title }}</h5>
                    <radio-group v-model="i.currentSelect" :dataSource="i.dataSource" :isCheckbox="i.isCheckbox"></radio-group>
                  </div>
                </div>
            </el-col>
          </el-row>
        </el-form>
      </el-main>
      <el-button @click="fn">导出为pdf文件</el-button>
    </el-container>
</template>

<style scoped lang='less'>
  .title {
    // position: fixed;
    top: 0px;
    color: #b71f25;
  }
  .subTile {
    color: #4d76c1;
  }
  .line {
    // padding-right: 5px;
    border-right: 1px solid #ebeef5;
  }
  .right-part {
    // padding-left: 5px;
  }
</style>