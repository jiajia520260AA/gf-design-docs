---
description: 图标规范来自 1.3 图标 Icon，覆盖绘制尺寸、线宽、分类、命名和使用边界。
anchors:
  - text: 绘制规则
    href: '#绘制规则'
  - text: 图标分类
    href: '#图标分类'
  - text: 命名与尺寸
    href: '#命名与尺寸'
  - text: 使用建议
    href: '#使用建议'
---

# 图标

## 绘制规则

GF Design 图标以 `32 x 32px` 的两倍尺寸绘制，线条宽度为 `2px`。图标风格减少圆角使用，以建立商务、严肃、专业的金融系统气质。

<div class="gf-demo-card gf-icon-rule-demo">
  <div class="gf-icon-keyline">
    <span></span>
    <b>32</b>
  </div>
  <div>
    <strong>绘制建议</strong>
    <p>使用带 keyline 辅助线的模板定义网格和边界，确保图形比例平衡。落地到界面时可按 16px、20px、24px 等尺寸缩放。</p>
  </div>
</div>

图标需要保持视觉重量一致。线型图标用于默认状态，填充图标用于选中、成功、告警或更强的状态表达。

## 图标分类

Figma 中图标组件集分为四类，全部以 `32 x 32px` 规格沉淀。

| 分类 | 数量 | 示例 | 用途 |
| --- | ---: | --- | --- |
| 方向性图标 | 56 | `ArrowRightOutlined`、`DownOutlined`、`MenuFoldOutlined` | 导航、展开收起、翻页、排序方向 |
| 提示建议性图标 | 23 | `InfoCircleOutlined`、`WarningOutlined`、`CheckCircleFilled` | 成功、错误、提醒、帮助、确认 |
| 通用图标 | 101 | `SearchOutlined`、`DeleteOutlined`、`CalendarOutlined`、`DownloadOutlined` | 常规业务操作和系统功能 |
| 数据类图标 | 10 | `PieChartOutlined`、`LineChartOutlined`、`RiseFilled`、`FallFilled` | 图表、指标、涨跌、数据分析 |

<div class="gf-icon-category-grid">
  <div><span class="gf-icon-glyph">→</span><strong>方向性</strong><em>Arrow / Menu / Caret</em></div>
  <div><span class="gf-icon-glyph">i</span><strong>提示建议</strong><em>Info / Check / Warning</em></div>
  <div><span class="gf-icon-glyph">⌕</span><strong>通用</strong><em>Search / Edit / Upload</em></div>
  <div><span class="gf-icon-glyph">↗</span><strong>数据类</strong><em>Chart / Rise / Fall</em></div>
</div>

## 命名与尺寸

图标名称保持语义化，推荐使用 `分类=图标名` 的组件属性，例如 `方向性icon=ArrowRightOutlined`、`通用=SearchOutlined`。

| 界面尺寸 | 使用位置 | 说明 |
| --- | --- | --- |
| `12px` | 表格内弱提示、状态点旁辅助图标 | 只用于低密度辅助 |
| `16px` | 表单、表格、菜单、输入框 | 默认使用尺寸 |
| `20px` | 按钮图标、工具栏图标 | 适合与 14px 文本搭配 |
| `24px` | 导航、卡片标题、功能入口 | 强识别入口 |
| `32px` | 图标源组件、功能图标 | Figma 绘制尺寸 |

## 使用建议

1. 同一业务区域内保持线型或填充风格一致，不在一组操作中混用视觉重量差异大的图标。
2. 图标与文字并排时，默认间距使用 `8px`；紧凑场景可使用 `4px`。
3. 图标按钮点击热区不小于 `32 x 32px`，仅图标按钮必须提供 Tooltip 或明确的可访问标签。
4. 禁用图标使用禁用文字色 `#C8C9CC`，不要只降低透明度导致可读性不足。
5. SVG 实现建议使用 `currentColor`，让图标颜色继承文本或组件状态。

更多组件级用法见 [Icon 图标](/components/icon)。
