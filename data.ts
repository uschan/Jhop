import { Brain, Zap, Target, Activity, Smile, Medal, Star, Crown, Flag } from 'lucide-react';
import { Section, DailyTask, Badge } from './types';

export const SECTIONS: Section[] = [
  {
    id: 'memory',
    title: '记忆黑客 (Memory Hacker)',
    icon: Brain,
    principle: '大脑自带“自动删除”功能，24小时后如果不复习，80%的内容会被清空。我们需要植入“防删除代码”（间隔重复），把知识锁进永久硬盘。',
    chartType: 'line',
    chartDescription: '看那条蓝线！只要在特定的时间点（1天/3天/7天）“刷新”一下记忆，你就能用最少的时间记住最多的东西。',
    chartData: [
      { day: '0', noReview: 100, review: 100 },
      { day: '1', noReview: 33, review: 100 },
      { day: '2', noReview: 28, review: 90 },
      { day: '3', noReview: 25, review: 95 },
      { day: '6', noReview: 21, review: 85 },
      { day: '7', noReview: 20, review: 95 },
      { day: '15', noReview: 15, review: 80 },
      { day: '30', noReview: 10, review: 90 },
    ],
    actions: [
      { 
        title: '3510 复习法', 
        desc: '别等考试前再背！在学习后的 30分钟、5小时、10小时、1天 内快速看一眼笔记。',
        expectedOutcome: '告别考前通宵突击，知识像刻在石头上一样牢固，轻松拿高分。'
      },
      { 
        title: '睡前电影回放', 
        desc: '躺在床上闭眼，像放电影一样在脑子里过一遍今天学了啥。卡住的地方，就是明天的提分点。',
        expectedOutcome: '利用睡眠时间自动整理记忆，早上醒来变聪明。'
      },
      { 
        title: '白纸复现挑战', 
        desc: '拿出一张白纸，不看书，凭记忆画出这章的思维导图或公式。',
        expectedOutcome: '一眼看穿自己哪里没懂，精准填补漏洞，不再“自以为懂了”。'
      }
    ],
    reference: 'Ebbinghaus, H. (1885). Memory: A Contribution to Experimental Psychology.'
  },
  {
    id: 'focus',
    title: '专注力引擎 (Focus Engine)',
    icon: Zap,
    principle: '专注力像手机电量，一直玩游戏（刷题）很快就没电。学会像“快充”一样高效休息，配合大脑的 90 分钟节奏，才能持续满功率输出。',
    chartType: 'area',
    chartDescription: '紫色区域是你的“超神时刻”（心流），但大概 90 分钟后就会断崖式下跌。这时候硬撑不如休息 10 分钟。',
    chartData: [
      { time: '0', energy: 60 },
      { time: '15', energy: 85 },
      { time: '30', energy: 95 },
      { time: '45', energy: 95 },
      { time: '60', energy: 90 },
      { time: '75', energy: 80 },
      { time: '90', energy: 60 },
      { time: '105', energy: 40 },
    ],
    actions: [
      { 
        title: '改良版番茄钟', 
        desc: '设定 45 分钟全神贯注（像打排位赛一样）+ 10 分钟彻底放松（发呆、喝水、伸懒腰）。',
        expectedOutcome: '写作业速度提升 50%，把省下的时间拿去玩或睡觉。'
      },
      { 
        title: '手机监狱', 
        desc: '写作业时，把手机扔到客厅或锁进抽屉。看不见，就不会想。',
        expectedOutcome: '切断多巴胺干扰，让大脑瞬间进入“深潜模式”，思考不再被打断。'
      },
      { 
        title: '极简桌面', 
        desc: '桌上只放当前科目的书和笔，其他统统收起来。',
        expectedOutcome: '减少视觉噪音，让你的注意力像激光一样聚焦。'
      }
    ],
    reference: 'Csikszentmihalyi, M. (1990). Flow: The Psychology of Optimal Experience.'
  },
  {
    id: 'strategy',
    title: '提分攻略 (Score Tactics)',
    icon: Target,
    principle: '考试不是比谁刷题多，而是比谁犯错少。把自己当成一名“错题猎人”，每一个错误都是升级的经验包，抓住了就能涨分。',
    chartType: 'line',
    chartDescription: '绿色线是“聪明人”的轨迹：死磕错题，成绩指数级暴涨。灰色线是“盲目刷题”：看起来很努力，但成绩原地踏步。',
    chartData: [
      { week: '1', blind: 60, deliberate: 60 },
      { week: '2', blind: 62, deliberate: 65 },
      { week: '4', blind: 65, deliberate: 75 },
      { week: '8', blind: 70, deliberate: 88 },
      { week: '12', blind: 75, deliberate: 96 },
    ],
    actions: [
      { 
        title: '红黑蓝三色战法', 
        desc: '黑笔做题，蓝笔写过程/修正，红笔标注“核心考点”和“思维卡点”。',
        expectedOutcome: '复习时只看红笔部分，一秒抓住重点，效率翻倍。'
      },
      { 
        title: '费曼讲题法', 
        desc: '试着把这道题讲给不会的同学（或者对着空气讲），直到能用大白话讲明白为止。',
        expectedOutcome: '如果你能讲清楚，说明你彻底懂了。这是最高级的学习方式。'
      },
      { 
        title: '限时竞速训练', 
        desc: '平时做作业也要按计时器，模拟考试的紧迫感。',
        expectedOutcome: '练就“快准狠”的手感，考试时时间充裕，不再做不完卷子。'
      }
    ],
    reference: 'Ericsson, K. A. (1993). The Role of Deliberate Practice in the Acquisition of Expert Performance.'
  },
  {
    id: 'physio',
    title: '满血状态 (Super Body)',
    icon: Activity,
    principle: '大脑是一辆跑车，身体是底盘。如果缺觉、乱吃垃圾食品，法拉利也跑不过拖拉机。保证睡眠和营养，就是给大脑加“98号汽油”。',
    chartType: 'bar',
    chartDescription: '看到橙色柱子了吗？睡够8小时的人，逻辑和记忆力吊打缺觉的人。熬夜学习其实是在“降智”。',
    chartData: [
      { label: '记忆力', shortSleep: 60, fullSleep: 90 },
      { label: '逻辑', shortSleep: 55, fullSleep: 95 },
      { label: '专注', shortSleep: 50, fullSleep: 85 },
      { label: '情绪', shortSleep: 40, fullSleep: 90 },
    ],
    actions: [
      { 
        title: '防犯困饮食', 
        desc: '考试/学习前少吃米饭面条（容易晕碳犯困），多吃鸡蛋、牛奶和坚果。',
        expectedOutcome: '整个下午头脑清醒，告别昏昏欲睡的低效状态。'
      },
      { 
        title: '20分钟快速充电', 
        desc: '午睡别超过20分钟！定个闹钟，这能让你迅速回血，又不会越睡越累。',
        expectedOutcome: '就像重启了电脑，下午的学习效率满格复活。'
      },
      { 
        title: 'BDNF 激活运动', 
        desc: '每天跳绳或慢跑20分钟，这能促进大脑分泌“脑源性神经营养因子”（BDNF）。',
        expectedOutcome: '这就好比给大脑“长脑子”的肥料，让你变聪明、记忆力更好。'
      }
    ],
    reference: 'Walker, M. (2017). Why We Sleep: Unlocking the Power of Sleep and Dreams.'
  },
  {
    id: 'mindset',
    title: '钢铁之心 (Iron Heart)',
    icon: Smile,
    principle: '紧张不是坏事，它是你的“战斗BUFF”。心跳加速说明你的身体正在为你调集能量。顶级运动员都懂得利用这种兴奋感。',
    chartType: 'line',
    chartDescription: '倒U型曲线告诉我们：一点都不紧张（无聊）或者太紧张（崩溃）都不好。保持适度兴奋（中间最高点），表现才是最棒的。',
    chartData: [
      { stress: '低 (无聊)', performance: 30 },
      { stress: '中 (最佳)', performance: 100 },
      { stress: '高 (焦虑)', performance: 40 },
    ],
    actions: [
      { 
        title: '认知重构术', 
        desc: '考试心慌时，对自己说：“太好了，我的身体启动了战斗模式，供血更足，反应更快！”',
        expectedOutcome: '把“害怕”转化为“兴奋”，从被压力压垮变成驾驭压力。'
      },
      { 
        title: '归因训练', 
        desc: '考砸了别说“我笨”，要说“我这次复习策略有问题”或“这个知识点有漏洞”。',
        expectedOutcome: '把失败变成可修复的 Bug，而不是对自己的人身攻击。信心不崩盘。'
      },
      { 
        title: '关注点转移', 
        desc: '别老盯着“排名”，盯着“我又学会了几个新题”。',
        expectedOutcome: '掌控你能掌控的（学习），放下你掌控不了的（别人考多少），心态稳如老狗。'
      }
    ],
    reference: 'Yerkes, R. M., & Dodson, J. D. (1908). The relation of strength of stimulus to rapidity of habit-formation.'
  }
];

export const DEFAULT_TASKS: DailyTask[] = [
  { id: '1', text: '早读大声朗读（激活前额叶）', completed: false },
  { id: '2', text: '消灭 3 道红笔错题', completed: false },
  { id: '3', text: '娱乐时间严格控制 < 30分钟', completed: false },
  { id: '4', text: '睡前“电影回放”复盘', completed: false },
];

export const BADGES: Badge[] = [
  {
    id: 'novice',
    name: '新手上路',
    description: '累计完成 3 个任务',
    icon: Flag,
    threshold: 30, 
    color: 'text-blue-500'
  },
  {
    id: 'warrior',
    name: '自律战士',
    description: '累计完成 20 个任务',
    icon: Zap,
    threshold: 200,
    color: 'text-yellow-500'
  },
  {
    id: 'master',
    name: '习惯大师',
    description: '累计完成 50 个任务',
    icon: Star,
    threshold: 500,
    color: 'text-purple-500'
  },
  {
    id: 'legend',
    name: '最强学霸',
    description: '累计完成 100 个任务',
    icon: Crown,
    threshold: 1000,
    color: 'text-red-500'
  },
  {
    id: 'medal',
    name: '超越自我',
    description: '累计完成 200 个任务',
    icon: Medal,
    threshold: 2000,
    color: 'text-orange-500'
  }
];
