---
description: Grid 组件来自 2.1 栅格 Grid，用于内容层的 24 栅格布局、模块比例和响应适配。
anchors:
  - text: 组件预览
    href: '#组件预览'
  - text: 24 栅格
    href: '#24-栅格'
  - text: 比例模板
    href: '#比例模板'
  - text: 适配标注
    href: '#适配标注'
  - text: 使用规则
    href: '#使用规则'
---

# Grid 栅格

Grid 用于内容层布局，不用于全页面控制层。它规范的是模块比例，而不是固定宽度。

## 组件预览

<div class="gf-demo-card">
  <div class="gf-grid-preview" aria-label="24 栅格示意">
    <span></span><span></span><span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span><span></span><span></span>
  </div>
</div>

## 24 栅格

GF Design 在 PC 上采用 `24` 栅格体系，并以 `1440 x 900` 屏幕分辨率为基准。

| 项目 | 值 |
| --- | --- |
| 栅格列数 | `24` |
| 基础网格 | `8px` |
| 固定间隙 | `16px` |
| 内容边距 | `16px` |
| 总宽度关系 | `23 列 + 1 小列 = 总宽度` |

<div class="gf-grid-measure">
  <span>边距 16px</span>
  <strong>1 列 = 间隙 + 小列</strong>
  <span>间隙 16px</span>
</div>

## 比例模板

常用模块比例来自 Figma 布局示例。多模块适配时，优先标注比例，再让前端按容器宽度自动计算。

<div class="gf-grid-ratio-demo">
  <div style="grid-column: span 19">79.2%</div>
  <div style="grid-column: span 5">20.8%</div>
  <div style="grid-column: span 17">70.8%</div>
  <div style="grid-column: span 7">29.2%</div>
  <div style="grid-column: span 4">16.7%</div>
  <div style="grid-column: span 20">83.3%</div>
  <div style="grid-column: span 24">100%</div>
  <div style="grid-column: span 6">25%</div>
  <div style="grid-column: span 6">25%</div>
  <div style="grid-column: span 6">25%</div>
  <div style="grid-column: span 6">25%</div>
</div>

## 适配标注

完全响应式网站开发成本较高，内部系统通常按业务场景拆分 PC 与移动端。PC 多模块页面基于栅格进行适配，固定边距，标注模块比例。

当特殊页面自动适配效果不好时，需要额外设置断点，例如：

| 断点 | 用途 |
| --- | --- |
| `1200px` | 小桌面或窄屏显示 |
| `960px` | 压缩内容布局 |
| `768px` | 平板或特殊兼容场景 |

```css
.gf-grid {
  display: grid;
  grid-template-columns: repeat(24, minmax(0, 1fr));
  gap: 16px;
}
```

## 使用规则

1. 栅格只用于内容层，不约束顶部导航、侧边栏等全局控制层。
2. 页面中的列会随页面尺寸变化，间隙始终保持 `16px`。
3. 卡片内部左右边距建议从 `24px` 调整为 `16px`，兼容小于等于 `1200px` 的屏幕。
4. 系统中建议最多 `4` 个独立模块，最少 `1` 个独立模块。
5. 元素尺寸、间距、填充和边距优先使用 `8px` 倍数。
