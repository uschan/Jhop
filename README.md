# JHOP (Junior High Optimization Protocol) - 初中生学习逐优指南

JHOP 是一个专为初中生设计的**科学学习优化系统**。它不教你具体的数学公式，而是教你如何使用大脑，将神经科学、心理学（心流、遗忘曲线）和游戏化机制结合，打造你的学习“外挂”。

![Project Banner](https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1000&auto=format&fit=crop)

## 🚀 核心功能 (Core Features)

### 1. 🎮 游戏化仪表盘 (Gamified Dashboard)
- **每日必做清单**: 每日凌晨自动重置任务，养成良好的学习微习惯。
- **能量积分系统**: 完成任务获得能量值 (+10 XP)，能量值永久累积。
- **成就勋章墙**: 从“新手上路”到“最强学霸”，可视化的成就系统激励学生持续进步。
- **诊断档案室**: 自动保存所有的 AI 诊断报告，支持随时复盘、查看、复制、分享和删除。

### 2. 🧠 五大科学模块 (Scientific Modules)
- **记忆黑客 (Memory Hacker)**: 基于艾宾浩斯遗忘曲线，提供间隔复习的可视化图表和实操策略。
- **专注力引擎 (Focus Engine)**: 基于心流理论，教授如何利用番茄钟和环境隔离提升效率。
- **提分攻略 (Score Tactics)**: 强调刻意练习（Deliberate Practice）和费曼学习法。
- **满血状态 (Super Body)**: 睡眠与运动对大脑 BDNF 因子影响的可视化数据。
- **钢铁之心 (Iron Heart)**: 耶克斯-多德森定律（倒 U 型曲线），教你如何利用考前焦虑。

### 3. 🤖 AI 战队教练 (AI Coach)
- 基于 **Google Gemini API** (`gemini-2.5-flash`) 的智能诊断系统。
- 根据学生的年级、排位和具体困扰，生成幽默、鼓励性且符合脑科学的“通关攻略”。
- 支持一键复制全文或调用系统分享功能发送给好友/家长。

### 4. 🌬️ 考前定心工具 (Breathing Tool)
- 内置可视化呼吸引导工具，帮助学生在考前 1 分钟快速激活副交感神经，降低皮质醇，缓解紧张。

---

## 🛠️ 技术栈 (Tech Stack)

- **前端框架**: React 19 + TypeScript
- **构建工具**: Vite
- **样式库**: Tailwind CSS
- **图标库**: Lucide React
- **图表库**: Recharts (用于可视化科学原理)
- **AI 模型**: Google Gemini API (@google/genai)

---

## 📦 安装与运行 (Installation)

### 1. 克隆项目
```bash
git clone https://github.com/yourusername/jhop-optimization.git
cd jhop-optimization
```

### 2. 安装依赖
```bash
npm install
```

### 3. 配置环境变量
在项目根目录创建 `.env` 文件，并添加你的 Google Gemini API Key：
```env
API_KEY=AIzaSyDxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```
> 注意：必须配置有效的 API Key 才能使用 AI 诊断功能。

### 4. 启动开发服务器
```bash
npm run dev
```
打开浏览器访问 `http://localhost:5173`。

### 5. 构建生产版本
```bash
npm run build
```

---

## 📱 移动端适配

本项目采用**响应式设计 (Responsive Design)**，在手机、平板和桌面端均有良好的显示效果。
- 移动端支持侧边栏抽屉导航。
- 触摸友好的交互设计。

---

## 📄 许可证 (License)

MIT License
