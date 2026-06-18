---
description: Icon 组件用于承载 Figma 图标资产，第一期先提供分类、尺寸、状态和业务使用方式。
anchors:
  - text: 图标预览
    href: '#图标预览'
  - text: 组件 API
    href: '#组件-api'
  - text: 分类清单
    href: '#分类清单'
  - text: 状态与可访问性
    href: '#状态与可访问性'
---

# Icon 图标

Icon 组件用于统一渲染 Figma 图标库中的 SVG 资产。图标颜色默认继承 `currentColor`，尺寸由组件属性控制。

## 图标预览

<div class="gf-icon-grid">
  <div><span class="gf-icon-glyph">←</span><strong>ArrowLeft</strong><em>方向性</em></div>
  <div><span class="gf-icon-glyph">→</span><strong>ArrowRight</strong><em>方向性</em></div>
  <div><span class="gf-icon-glyph">+</span><strong>Plus</strong><em>提示建议</em></div>
  <div><span class="gf-icon-glyph">i</span><strong>Info</strong><em>提示建议</em></div>
  <div><span class="gf-icon-glyph">⌕</span><strong>Search</strong><em>通用</em></div>
  <div><span class="gf-icon-glyph">↻</span><strong>Refresh</strong><em>通用</em></div>
  <div><span class="gf-icon-glyph">↗</span><strong>Rise</strong><em>数据类</em></div>
  <div><span class="gf-icon-glyph">↘</span><strong>Fall</strong><em>数据类</em></div>
</div>

## 组件 API

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `name` | `string` | - | 图标名称，如 `SearchOutlined` |
| `category` | `direction`、`notice`、`common`、`data` | `common` | 图标分类 |
| `size` | `12`、`16`、`20`、`24`、`32` | `16` | 渲染尺寸 |
| `color` | `string` | `currentColor` | 图标颜色 |
| `label` | `string` | - | 仅图标按钮或功能图标的可访问标签 |

```html
<span class="gf-icon" aria-hidden="true">
  <svg viewBox="0 0 32 32"></svg>
</span>

<button class="gf-icon-button" aria-label="搜索">
  <span class="gf-icon">⌕</span>
</button>
```

## 分类清单

| 分类 | Figma 组件集 | 示例名称 |
| --- | --- | --- |
| 方向性 | `方向性图标icon` | `StepBackwardOutlined`、`ArrowRightOutlined`、`MenuFoldOutlined` |
| 提示建议性 | `提示建议性icon` | `InfoCircleOutlined`、`WarningOutlined`、`CheckCircleFilled` |
| 通用 | `通用icon` | `SearchOutlined`、`DeleteOutlined`、`UploadOutlined`、`CalendarOutlined` |
| 数据类 | `数据类图标icon` | `PieChartOutlined`、`LineChartOutlined`、`RiseFilled`、`FallFilled` |

<div class="gf-demo-card">
  <div class="gf-icon-size-row">
    <span style="font-size: 12px">⌕</span>
    <span style="font-size: 16px">⌕</span>
    <span style="font-size: 20px">⌕</span>
    <span style="font-size: 24px">⌕</span>
    <span style="font-size: 32px">⌕</span>
  </div>
</div>

## 状态与可访问性

1. 装饰性图标使用 `aria-hidden="true"`，不要让屏幕阅读器重复朗读。
2. 仅图标按钮必须提供 `aria-label` 或 Tooltip，热区不小于 `32 x 32px`。
3. 图标颜色默认继承文字颜色；选中态使用主色 `#2A6CDD`，危险态使用 `#D12B2B`。
4. 禁用态使用 `#C8C9CC`，避免只通过透明度表达禁用。
5. SVG 需要设置 `overflow: visible`，防止缩放后线条被裁剪。

```css
.gf-icon svg {
  width: 1em;
  height: 1em;
  fill: currentColor;
  stroke: currentColor;
  overflow: visible;
}
```
