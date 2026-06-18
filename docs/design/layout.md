---
description: 布局规范来自 2.1 Grid、2.2 Layout、2.3 Space、2.5 Flex 与 1.4 Shadow，定义 PC 内部系统页面骨架、栅格、间距和层级。
anchors:
  - text: 布局原则
    href: '#布局原则'
  - text: 导航尺寸
    href: '#导航尺寸'
  - text: 栅格与响应
    href: '#栅格与响应'
  - text: 间距 Space
    href: '#间距-space'
  - text: 弹性布局 Flex
    href: '#弹性布局-flex'
  - text: 投影 Shadow
    href: '#投影-shadow'
---

# 布局

## 布局原则

GF Design 的布局系统通过统一画布、统一网格单位、统一栅格系统和统一视觉元素，让不同业务线保持一致的使用体验。

<div class="gf-principle-row">
  <div><strong>01</strong><span>统一的设计画布尺寸</span></div>
  <div><strong>02</strong><span>统一的网格单位</span></div>
  <div><strong>03</strong><span>统一的栅格系统</span></div>
  <div><strong>04</strong><span>统一的视觉元素</span></div>
</div>

PC 端设计基准为 `1440 x 900`。页面由固定区域与响应区域共同组成，固定区域不随页面变化改变尺寸，响应区域根据容器宽度变化。

<div class="gf-layout-shell-demo">
  <div class="gf-layout-header">Header</div>
  <div class="gf-layout-sider">Sider</div>
  <div class="gf-layout-content">Content</div>
  <div class="gf-layout-footer">Footer</div>
</div>

## 导航尺寸

一级导航项偏左靠近 logo，辅助菜单偏右放置。当前项需要在视觉上具备最高优先级。

| 模块 | 推荐尺寸 | 说明 |
| --- | --- | --- |
| 顶部导航（大部分系统） | 一级 `56px`，二级 `48px` | 高度范围公式为 `48 + 8n` |
| 顶部导航（展示类页面） | 一级 `80px`，二级 `56px` | 信息展示更强时使用 |
| 侧边导航 | `200 + 8n` | 常用展开宽度 `200px`，可折叠 |
| 内容页边距 | `24px` 或 `32px` | 紧凑系统优先 `24px` |

导航选中态可使用大色块、高亮火柴棍、字体高亮或字号强调。深色侧栏适合大色块，浅色侧栏适合火柴棍或文字高亮。

## 栅格与响应

GF Design 基于 8 点网格法制定 PC 端栅格。所有模块间距、元素尺寸、填充和边距尽量使用 8 的倍数，以保证适配和开发协作效率。

<div class="gf-spec-callout">
  栅格不用于全页面，只用于内容层；全局控制层不适用。栅格规范的是模块比例，而不是固定宽度。
</div>

核心栅格规则：

| 项目 | 规范 |
| --- | --- |
| 栅格体系 | PC 端采用 `24` 栅格 |
| 设计基准 | `1440 x 900` |
| 内容间隙 | `16px`，在栅格中始终保持不变 |
| 页面边距 | `16px` 或 `24px`，当前规范中内容层常用 `16px` |
| 总宽度关系 | `23 列 + 1 小列 = 总宽度` |
| 模块数量 | 建议 `1` 到 `4` 个独立模块 |

更多栅格组件示例见 [Grid 栅格](/components/grid)。

## 间距 Space

Space 用于避免组件紧贴在一起，适合行内元素的水平或垂直等距排列。它会为每个子元素添加包裹元素，适合按钮组、链接组、标签组等轻量布局。

| 尺寸 | 数值 | 场景 |
| --- | --- | --- |
| `small` | `8px` | 默认间距、紧凑按钮组 |
| `middle` | `16px` | 常规组件间距 |
| `large` | `24px` | 较疏的表单或内容区 |
| 自定义 | 任意 4/8 倍数 | 特殊业务区块 |

<div class="gf-demo-card">
  <div class="gf-space-demo">
    <button class="gf-button primary">查询</button>
    <button class="gf-button">重置</button>
    <a>文字链接</a>
  </div>
</div>

当表单组件需要紧凑连接并合并边框时，可使用紧凑布局组合。按钮垂直方向的紧凑组合应只用于少量操作，避免操作入口过密。

## 弹性布局 Flex

Flex 用于块级元素布局，不会为子元素添加额外包裹，适合垂直或水平方向上的复杂排布。

| 能力 | 可选值 |
| --- | --- |
| 方向 | `horizontal`、`vertical` |
| 主轴对齐 | `flex-start`、`center`、`flex-end`、`space-between`、`space-around`、`space-evenly` |
| 交叉轴对齐 | `flex-start`、`center`、`flex-end`、`stretch` |
| 间隙 | `small`、`middle`、`large` 或自定义 `gap` |
| 换行 | 支持自动换行 |

<div class="gf-demo-card">
  <div class="gf-flex-demo">
    <span>未选中项</span>
    <span class="is-active">已选中项</span>
    <span class="is-disabled">未选失效项</span>
    <button class="gf-button primary">提交</button>
  </div>
</div>

Space 更适合内联等距排列；Flex 更适合页面区块、工具条、表单行和复杂组合布局。

## 投影 Shadow

投影用于表达 UI 层级。Figma 中定义了小、中、大三个层级，并补充了 `Shadow-1` 到 `Shadow-5` 的文本阴影和特殊阴影。

<div class="gf-shadow-grid">
  <div class="gf-shadow-card s1"><strong>S1</strong><span>小投影，用于 hover、拖动、局部浮起</span></div>
  <div class="gf-shadow-card s2"><strong>S2</strong><span>大投影，用于下拉、气泡卡片、浮层</span></div>
  <div class="gf-shadow-card s3"><strong>S3</strong><span>超大投影，用于通知、弹窗和高层级反馈</span></div>
</div>

| 名称 | CSS 建议 | 场景 |
| --- | --- | --- |
| `S1` | `0 2px 8px rgba(10, 42, 97, .12)` | 表格行 hover、卡片 hover、拖拽态 |
| `S2` | `0 8px 24px rgba(10, 42, 97, .12)` | 下拉面板、Popover、Popconfirm |
| `S3` | `0 12px 32px rgba(0, 0, 0, .14)` | Dialog、Notification、Drawer |

使用投影时保持克制。默认页面结构优先通过边框、分割线和背景层级表达关系，投影只用于悬浮或遮挡层级。
