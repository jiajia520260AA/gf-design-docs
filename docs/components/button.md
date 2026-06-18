---
description: Button 组件来自 1.7 按钮 Button 与 Button 组件集，覆盖尺寸、类型、状态、图标按钮、危险按钮和悬浮按钮。
anchors:
  - text: 组件预览
    href: '#组件预览'
  - text: 尺寸与宽度
    href: '#尺寸与宽度'
  - text: 类型
    href: '#类型'
  - text: 状态
    href: '#状态'
  - text: 主副按钮位置
    href: '#主副按钮位置'
  - text: 悬浮按钮
    href: '#悬浮按钮'
  - text: 使用规则
    href: '#使用规则'
---

# Button 按钮

按钮用于触发即时操作。PC 内部系统以中号按钮为默认规格，强调清晰、克制和可预期。

## 组件预览

<div class="gf-demo-card">
  <div class="gf-button-row">
    <button class="gf-button primary">主按钮</button>
    <button class="gf-button">次按钮</button>
    <button class="gf-button dashed">提示按钮</button>
    <button class="gf-button danger">警示按钮</button>
    <button class="gf-button ghost">幽灵按钮</button>
    <button class="gf-button link">文字链接</button>
  </div>
</div>

```html
<button class="gf-button primary">主按钮</button>
<button class="gf-button">次按钮</button>
<button class="gf-button danger">警示按钮</button>
```

## 尺寸与宽度

Figma 中按钮分为小、中、大三种尺寸。中按钮为默认规格。

| 尺寸 | 高度 | 最小宽度 | 字号 | 适用场景 |
| --- | ---: | ---: | ---: | --- |
| 小按钮 | `24px` | `60px` | `14px` | 表格行内、紧凑工具条 |
| 中按钮 | `32px` | `76px` | `14px` | 默认按钮、表单、弹窗底部 |
| 大按钮 | `40px` | `112px` | `16px` | 页面主操作、强引导场景 |

<div class="gf-demo-card">
  <div class="gf-button-row align-end">
    <button class="gf-button sm primary">小按钮</button>
    <button class="gf-button primary">中按钮</button>
    <button class="gf-button lg primary">大按钮</button>
  </div>
</div>

按钮文案超出最小宽度时，宽度跟随内容自适应。不要为了对齐强行截断关键动作文案。

## 类型

Button 组件集包含 `360` 个变体，由 `Size`、`Type`、`Class`、`State`、`Icon` 五类属性组合。

| 属性 | 可选值 |
| --- | --- |
| `Size` | `Large`、`Medium`、`Small` |
| `Type` | `Primary`、`Secondary`、`Dashed`、`Ghost`、`Link`、`Text` |
| `Class` | `Standard`、`Dangerous` |
| `State` | `Normal`、`Hover`、`Active`、`Disabled`、`Loading` |
| `Icon` | `Off`、`On` |

<div class="gf-demo-card">
  <div class="gf-button-row">
    <button class="gf-button primary"><span class="gf-button-plus">+</span>新增</button>
    <button class="gf-button icon" aria-label="刷新">↻</button>
    <button class="gf-button text">文字按钮</button>
    <button class="gf-button danger-solid">删除</button>
  </div>
</div>

带图标按钮在 Figma 中保持固定高度：大按钮 `40px`，中按钮 `32px`，小按钮 `24px`。图标与文字间距建议使用 `4px` 到 `8px`。

## 状态

按钮状态包括 `Normal`、`Hover`、`Active`、`Disable`、`Loading`。加载状态需要禁止重复点击，并保留原按钮宽度避免布局抖动。

<div class="gf-state-grid">
  <button class="gf-button primary">Normal</button>
  <button class="gf-button primary is-hover">Hover</button>
  <button class="gf-button primary is-active">Active</button>
  <button class="gf-button disabled">Disable</button>
  <button class="gf-button primary loading"><span class="gf-spinner"></span>Loading</button>
</div>

| 类型 | Normal | Hover | Active | Disabled |
| --- | --- | --- | --- | --- |
| 主按钮 | 主色背景，白字 | 主色 90% 或深蓝 | 深蓝强调 | 禁用背景，白字 |
| 次按钮 | 白底、N4 边框 | 浅灰背景或蓝边 | N3/N4 背景 | N3 边框、禁用文字 |
| 警示按钮 | 红色或橙色语义色 | 语义色 90% | 更深语义色 | 浅语义背景、弱文字 |
| 文字链接 | 透明背景、主色文字 | 浅色背景 | 更深文字 | 禁用文字 |

## 主副按钮位置

由于大部分内部系统运行在 Windows 平台，对话框和页面中主按钮放左侧，次按钮放右侧。若明确以 macOS 为主要平台，可反向处理。

<div class="gf-demo-card gf-dialog-demo">
  <div class="gf-dialog-panel">
    <strong>新增菜单</strong>
    <p>示例表单内容区域</p>
    <div class="gf-dialog-actions">
      <button class="gf-button primary">确定</button>
      <button class="gf-button">取消</button>
    </div>
  </div>
</div>

## 悬浮按钮

悬浮按钮来自 `1.8 FloatButton`。第一期文档站先收录使用方式，不单独拆页面。

| 类型 | 用途 |
| --- | --- |
| 基础浮动按钮 | 页面右下角快速操作 |
| 带描述的浮动按钮 | 需要解释操作含义时使用 |
| 浮动按钮组 | 聚合多个低频快捷操作 |
| 受控浮动按钮 | 由业务状态控制展开、收起或显示 |
| 含气泡卡片的悬浮按钮 | 用于提示说明或快捷帮助 |

<div class="gf-float-demo">
  <button class="gf-float-button" aria-label="返回顶部">↑</button>
  <button class="gf-float-button primary" aria-label="新增">+</button>
</div>

## 使用规则

1. 一个页面、工具条或弹窗底部只保留一个主按钮。
2. 主操作与次操作在 Windows 场景下遵循“主左次右”。
3. 警示按钮用于删除、清空、撤销等高风险操作，并配合二次确认。
4. 表格行内操作优先使用文字链接，避免整行出现过多实心按钮。
5. 仅图标按钮需提供不小于 `32 x 32px` 的热区和 Tooltip。
