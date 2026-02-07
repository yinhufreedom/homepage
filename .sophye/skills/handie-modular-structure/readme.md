# 模块化目录结构

本技能帮助您创建和管理遵循 Handie 推荐的模块化目录结构模式的项目，同时兼容 Astro 框架的固定目录结构。

## 何时调用

在以下情况下调用此技能：
- 启动新的 Handie 项目并需要设置目录结构
- 向现有的 Handie 项目添加新的领域模块
- 重构项目以遵循 Handie 的模块化架构
- 检查项目结构是否符合 Handie 推荐的模式
- 在领域模块内创建视图、部件或其他组件
- 配置 Astro 项目与 Handie 模块化结构的集成

## 推荐的目录结构

### 标准 Handie 结构（适用于 Vue/React 项目）

```
project/src
├── domain
│   └── [domain-specific-module]
│       ├── views
│       │   ├── [detail-view]
│       │   │   ├── [DetailViewComponent].vue
│       │   │   ├── ...
│       │   │   └── style.scss
│       │   ├── [form-view]
│       │   │   ├── [FormViewComponent].vue
│       │   │   ├── ...
│       │   │   └── style.scss
│       │   └── [list-view]
│       │       ├── [ListViewComponent].vue
│       │       ├── ...
│       │       └── style.scss
│       ├── widgets
│       │   └── [domain-specific-widget]
│       │       └── ...
│       ├── helper.ts
│       ├── index.ts
│       ├── model.ts
│       ├── repository.ts
│       ├── typing.ts
│       └── ...
├── entry
│   ├── aspects
│   │   ├── http.ts
│   │   ├── router.ts
│   │   ├── ...
│   │   └── index.ts
│   ├── layouts
│   │   └── ...
│   ├── plugins
│   │   └── ...
│   ├── routes
│   │   └── ...
│   └── ...
├── shared
│   ├── components
│   │   ├── control
│   │   ├── widget
│   │   └── renderer
│   ├── styles
│   │   ├── normalize.scss
│   │   ├── reset.scss
│   │   └── utils.scss
│   ├── types
│   │   └── index.ts
│   ├── utils
│   │   └── index.ts
│   └── ...
├── App.vue
└── main.ts
```

### Astro 框架适配结构

```
project/src
├── content                    # Astro 固定目录：内容集合
│   ├── [content-collection]   # 内容集合（如 posts、events）
│   │   ├── [content-file].md
│   │   └── ...
│   └── config.ts              # 内容集合配置
├── pages                      # Astro 固定目录：路由页面
│   ├── [route-path]/
│   │   ├── index.astro
│   │   ├── [id].astro         # 动态路由
│   │   └── ...
│   ├── index.astro
│   └── ...
├── domain
│   └── [domain-specific-module]
│       ├── widgets
│       │   └── [domain-specific-widget]
│       │       └── ...
│       ├── helper.ts
│       ├── index.ts
│       ├── model.ts
│       ├── repository.ts
│       ├── typing.ts
│       └── ...
├── entry
│   ├── aspects
│   │   ├── http.ts
│   │   ├── router.ts
│   │   ├── ...
│   │   └── index.ts
│   ├── layouts
│   │   ├── default/
│   │   │   ├── DefaultLayout.astro
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   └── index.ts
│   │   └── home/
│   │       ├── HomeLayout.astro
│   │       └── index.ts
│   ├── plugins
│   │   └── ...
│   └── ...
├── shared
│   ├── components
│   │   ├── control
│   │   ├── widget
│   │   ├── renderer
│   │   └── react/             # React 组件（如使用 React 集成）
│   │       └── ...
│   ├── styles
│   │   ├── global.css
│   │   ├── normalize.scss
│   │   ├── reset.scss
│   │   └── utils.scss
│   ├── types
│   │   ├── content.ts         # 内容类型定义
│   │   ├── locale.ts
│   │   └── index.ts
│   ├── utils
│   │   ├── content.ts         # 内容工具函数
│   │   ├── locale.ts
│   │   ├── path.ts
│   │   └── index.ts
│   └── ...
└── env.d.ts
```

## 核心原则

### 1. 领域驱动结构
- **domain/**: 包含具有高内聚性的领域特定模块
- 每个领域模块都是自包含的，拥有自己的视图、部件和业务逻辑
- 领域模块之间应具有最小的依赖关系

### 2. 关注点分离
- **entry/**: 应用程序初始化和展示层设置
- **shared/**: 与领域/业务无关的共享资源
- **content/** (Astro): 内容集合，与领域模块对应
- **pages/** (Astro): 路由页面，使用领域模块的组件
- 清晰的依赖流向：pages → entry → domain → shared

### 3. 模块组织
在每个领域模块内：
- **views/**: 展示组件（列表、表单、详情视图）
- **widgets/**: 领域特定的可复用部件（Astro 项目主要使用 widgets）
- **model.ts**: 领域模型和数据结构
- **repository.ts**: 数据访问层（与 content 集合交互）
- **helper.ts**: 领域特定的工具函数
- **typing.ts**: 领域的类型定义
- **index.ts**: 模块的公共 API 导出

### 4. Astro 特殊目录
- **content/**: Astro 的内容集合，存储 Markdown/MDX 文件
  - 每个内容集合对应一个领域模块
  - 通过 `content/config.ts` 配置集合
- **pages/**: Astro 的路由目录，定义 URL 路由
  - 页面组件从 `domain/` 导入业务组件
  - 从 `content/` 获取数据
  - 使用 `entry/layouts/` 中的布局

### 5. 共享资源
- **components/**: 可复用的 UI 组件（control、widget、renderer）
- **styles/**: 全局样式和工具
- **types/**: 共享类型定义（包括内容类型）
- **utils/**: 共享工具函数（包括内容工具）

## 使用指南

### 路径别名
- 配置 `@` 作为 `shared` 目录的别名
- 在非共享文件中从 shared 导入时使用 `@/types`、`@/utils` 等
- 所有其他导入使用相对路径，以保持清晰的依赖关系

### 创建新的领域模块（Astro 项目）
1. 在 `domain/[module-name]` 下创建文件夹
2. 创建标准文件：`index.ts`、`model.ts`、`repository.ts`、`typing.ts`、`helper.ts`
3. 创建 `widgets/` 文件夹，包含领域特定部件
4. 在 `content/[module-name]` 下创建对应的内容集合
5. 在 `content/config.ts` 中配置新集合
6. 从 `index.ts` 导出公共 API

### 添加页面路由（Astro 项目）
1. 在 `pages/[route-path]/` 下创建页面文件（如 `index.astro`、`[id].astro`）
2. 在页面中导入 `entry/layouts/` 中的布局
3. 从 `domain/` 导入业务组件
4. 从 `content/` 获取数据（使用 `getCollection` 等 API）
5. 创建页面特定的样式文件（如需要）

### 配置内容集合（Astro 项目）
1. 在 `content/config.ts` 中定义集合 schema
2. 在 `shared/types/content.ts` 中添加类型定义
3. 在 `shared/utils/content.ts` 中添加内容工具函数
4. 确保类型与 content 集合保持同步

### 向模块添加部件（Astro 项目）
1. 在 `domain/[module]/widgets/[widget-name]` 下创建部件文件夹
2. 创建部件组件文件（如 `PostCard.astro`、`EventList.tsx`）
3. 创建 `index.ts` 导出部件
4. 在页面或其他组件中使用该部件

## 优势

- **清晰的架构**: 一目了然地理解项目结构
- **高内聚**: 相关代码在领域模块内保持在一起
- **低耦合**: 模块之间的依赖关系最小化
- **可维护性**: 需求变更时易于定位和修改代码
- **可扩展性**: 结构支持项目和团队规模的增长
- **框架兼容**: 完美适配 Astro 框架的固定目录结构
- **内容管理**: 清晰的内容与代码分离

## 常见任务

使用此技能时，您可能会被要求：
- 初始化具有模块化结构的新 Handie 项目（Vue/React）
- 初始化具有模块化结构的新 Astro 项目
- 添加具有标准文件的新领域模块
- 在领域模块内创建部件（widgets）
- 设置共享资源（components、utils、types）
- 为 shared 目录配置路径别名
- 配置 Astro 内容集合（content collections）
- 创建 Astro 页面路由
- 重构现有代码以适应模块化结构
- 验证项目是否遵循 Handie 推荐的模式
- 集成 Astro 与 Handie 模块化架构
