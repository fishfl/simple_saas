# Simple Saas Starter Kit

这是基于raphael-starterkit-v1做了进一步简化重构，
面向编程小白的saas化启动套件，专为帮助开发者快速搭建支持全球用户登录和支付的网站
基于 Next.js、Supabase 和 Creem.io 构建。
别对中国大陆开发者友好。

## 🌟 简介

基于 Next.js、Supabase 和 Creem.io 生产就绪的启动套件
快速构建具有身份验证、订阅和积分系统的 SaaS 应用程序，
开发速度提升10倍

## 核心特色功能

- 🔐 **全面的身份验证系统**
  - 基于Supabase
  - 电子邮件登录支持
  - Google 登录支持

- 💳 **完整的支付与订阅系统**
  - 与Creem.io集成，支持全球信用卡收款，支持支付宝

- 📱 **响应式设计**


## 快速开始

### 前提条件

- Node.js 18+ 和 npm
- Supabase 账户
- Creem.io 账户

### 步骤 1: 克隆仓库

```bash
git clone https://github.com/fishfl/simple_saas.git
cd simple_saas
```

### 步骤 2: 安装依赖

```bash
npm i
```

### 步骤 3: 设置 Supabase

1. 在 [Supabase](https://app.supabase.com) 上创建一个新项目
   - 点击"新建项目"
   - 填写基本信息（项目名称、密码等）

2. 前往 项目设置 > Data API
   - 复制URL, 粘贴到.env文件中NEXT_PUBLIC_SUPABASE_URL
   同样，项目设置 > API Keys > Legacy anon, service_role API keys
   - NEXT_PUBLIC_SUPABASE_ANON_KEY=你的匿名密钥anon public
   - SUPABASE_SERVICE_ROLE_KEY=你的服务角色密钥service_role secret

3. 配置登录方式
   - 选择【Authentication】>【Sign In / Providers】
   - 开启email认证


4. (可选，国外用户需要用google登录) 设置Google登录
   - 进入[Google 开发者控制台](https://console.cloud.google.com)，创建新项目
   - 配置项目权限
   - 前往【API与服务】>【凭据】
   - 创建OAuth客户端ID（可能要先创建品牌塑造）
   - 添加授权来源URL和重定向URI
   - 重定向URI格式: `https://<项目ID>.supabase.co/auth/v1/callback`
     （注意是id不是name，在Supabase项目设置页面复制）
   - 复制OAuth客户端ID和密钥

   在Supabase配置Google认证
   - 选择【Authentication】>【Sign In / Providers】
   - 启用Google认证
   - 填写从Google开发者控制台获取的客户端ID和密钥

5. 设置环境变量
   ```bash
   cp .env.example .env.local
   ```
   
6. 创建数据库表结构
   - 打开supabase/migrations/20250101000000_init_schema.sql
   - 复制SQL代码到Supabase SQL编辑器
   - 执行SQL创建表结构

7 配置URL Configuration

### 步骤 4: 设置 Creem.io

1. 登录到 [Creem.io 仪表板](https://www.creem.io/)
2. 初始设置
   - 打开测试模式
   - 导航到顶部导航栏中的"开发者"部分
   - 复制API Key并粘贴到.env文件中CREEM_API_KEY

3. 创建Webhooks
   - 前往开发者 > Webhooks
   - 创建新的Webhook
   - 填写URL: `https://你的域名/api/webhooks/creem`
   - 复制Webhook密钥并粘贴到.env文件中CREEM_WEBHOOK_SECRET

4. 更新环境变量
   ```
   CREEM_API_URL=https://test-api.creem.io/v1
   ```

5. 创建收费项目
   - 在Creem.io中创建订阅项目和积分项目
   - 复制项目ID并配置到代码中

6. 完整的环境变量示例
   ```
   # Supabase配置
   NEXT_PUBLIC_SUPABASE_URL=你的supabaseURL
   NEXT_PUBLIC_SUPABASE_ANON_KEY=你的supabase pubilc key
   SUPABASE_SERVICE_ROLE_KEY=你的supabase SERVICE_ROLE key

   # Creem配置
   CREEM_WEBHOOK_SECRET=你的webhook key
   CREEM_API_KEY=你的creem key
   CREEM_API_URL=https://test-api.creem.io/v1

   # 站点URL配置
   BASE_URL=你的线上地址
   
   # 支付成功后的重定向URL
   CREEM_SUCCESS_URL=http://你的线上地址/dashboard
   ```

### 步骤 5: 运行开发服务器

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看你的应用程序。

### 步骤 6: Vercel部署

1. 将代码推送到GitHub
2. 将仓库导入到[Vercel](https://vercel.com)
3. 添加所有环境变量
4. 完成部署

### 步骤 7: 更新Webhook回调地址

1. 进入Creem.io，打开开发者模式
2. 更新Webhooks配置
   - 进入对应的Webhook设置
   - 点击"更多"，选择"编辑"
   - 将线上地址更新为: `https://你的域名/api/webhooks/creem`

### 步骤 8: 测试系统功能

1. 测试用户登录功能
2. 测试订阅支付功能（测试信用卡号: 4242 4242 4242 4242）
3. 测试积分购买功能

### 步骤 9: 设计网站首页

1. 使用组件库
   - 您可以使用[TailwindCSS](https://tailwindcss.com)上的组件
   - 复制代码到相应的组件文件中

2. 自定义页面配色
   - 调整全局色系
   - 将样式代码添加到全局CSS文件中

3. 根据需要精修页面布局

### 步骤 10: 切换到正式付款

1. 进入Creem.io，关闭测试模式
2. 创建新的正式项目，将ID更新到代码中
3. 更新环境变量，将API URL从测试环境切换到正式环境:
   ```
   # 将此行
   CREEM_API_URL=https://test-api.creem.io/v1
   
   # 替换为
   CREEM_API_URL=https://api.creem.io
   ```

## 💳 订阅系统详情

启动套件包含由 Creem.io 提供支持的完整订阅系统：

- 多级订阅方案
- 基于使用量的计费
- 积分系统
- 订阅管理
- 安全支付处理
- Webhook 集成实时更新
- 自动发票生成
- 全球支付支持（特别适合中国大陆商家）

### 设置 Webhooks

处理订阅更新和支付事件:

1. 前往 Creem.io 仪表板
2. 导航到 开发者 > Webhooks
3. 添加你的 webhook 端点: `https://your-domain.com/api/webhooks/creem`
4. 复制 webhook 密钥并添加到你的 `.env.local`:
   ```
   CREEM_WEBHOOK_SECRET=你的webhook密钥
   ```

## 项目结构

```
├── app/                   # Next.js 应用目录
│   ├── (auth-pages)/     # 身份验证页面
│   ├── dashboard/        # 仪表板页面
│   ├── api/             # API 路由
│   └── layout.tsx       # 根布局
├── components/           # React 组件
│   ├── ui/             # Shadcn/ui 组件
│   ├── dashboard/      # 仪表板组件
│   └── home/          # 登陆页面组件
│   └── layout/        # 页面布局组件
├── hooks/               # 自定义 React 钩子
├── lib/                # 工具库
├── public/             # 静态资源
├── styles/             # 全局样式
├── types/              # TypeScript 类型
└── utils/              # 工具函数
```

## 支持与联系

如果您有任何问题或需要支持，请通过微信联系我们。
