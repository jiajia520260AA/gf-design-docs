---
description: 字体规范来自 1.2 Font 与 1.6 Typography，覆盖字体家族、字重、字阶、行高和文字对比度。
anchors:
  - text: 字体家族
    href: '#字体家族'
  - text: 字重规则
    href: '#字重规则'
  - text: 字阶与行高
    href: '#字阶与行高'
  - text: 字色对比
    href: '#字色对比'
  - text: 使用建议
    href: '#使用建议'
---

# 字体

## 字体家族

GF Design 在不同操作系统中使用系统原生字体，保证 PC 内部系统在 Windows 与 macOS 上都具备稳定、清晰的阅读效果。

| 平台 | 中文字体 | 英文字体 | 字重 |
| --- | --- | --- | --- |
| macOS | `PingFang SC` | `San Francisco` | `Regular`、`Medium`、`Semibold` |
| Windows | `Microsoft YaHei` | `Arial` | `400`、`500`、`600` |
| 数字与西文 | `DIN Alternate` 或系统西文字体 | `SF Pro Display`、`Arial` | 建议使用 `Semibold / 600` |

```css
font-family: "Microsoft YaHei", "PingFang SC", "SF Pro Display",
  "DIN Alternate", -apple-system, "Helvetica Neue", Arial, sans-serif;
```

<div class="gf-demo-card gf-font-stack">
  <div>
    <span>中文样例</span>
    <strong>广发证券设计系统</strong>
  </div>
  <div>
    <span>English</span>
    <strong>GF SECURITIES</strong>
  </div>
  <div>
    <span>Numbers</span>
    <strong class="gf-number">0123456789.00%</strong>
  </div>
</div>

## 字重规则

标题类文字优先使用 `Medium / 500`。与 `Semibold / 600` 相比，`Medium` 在 Windows 的微软雅黑环境下兼容性更强，也更适合中后台系统的克制视觉。

正文和辅助文字使用 `Regular / 400`。当需要强调时，优先使用 `Medium / 500` 与颜色层级双重处理，不建议在同一区域堆叠过多粗体。

数字和西文面积较小，建议使用 `Semibold / 600`，用于金额、数量、比例和指标时能维持中西文混排的平衡。

<div class="gf-weight-row">
  <div><span>Regular / 400</span><strong style="font-weight: 400">广发证券</strong></div>
  <div><span>Medium / 500</span><strong style="font-weight: 500">广发证券</strong></div>
  <div><span>Semibold / 600</span><strong style="font-weight: 600">GF SECURITIES 0123456789</strong></div>
</div>

## 字阶与行高

Figma 中的字体样式使用 `T1` 到 `T7`。业务系统页面不要在同一页面使用超过 4 个字号，应更多依靠字重、颜色和间距建立层级。

<div class="gf-type-scale">
  <div><code>T7</code><strong style="font-size: 44px; line-height: 52px">广发证券设计系统的字阶和行高</strong><span>44 / 52</span></div>
  <div><code>T6</code><strong style="font-size: 34px; line-height: 44px">广发证券设计系统的字阶和行高</strong><span>34 / 44</span></div>
  <div><code>T5</code><strong style="font-size: 26px; line-height: 36px">广发证券设计系统的字阶和行高</strong><span>26 / 36</span></div>
  <div><code>T4</code><strong style="font-size: 20px; line-height: 28px">广发证券设计系统的字阶和行高</strong><span>20 / 28</span></div>
  <div><code>T3</code><strong style="font-size: 16px; line-height: 24px">广发证券设计系统的字阶和行高</strong><span>16 / 24</span></div>
  <div><code>T2</code><strong style="font-size: 14px; line-height: 20px">广发证券设计系统的字阶和行高</strong><span>14 / 20</span></div>
  <div><code>T1</code><strong style="font-size: 12px; line-height: 18px">广发证券设计系统的字阶和行高</strong><span>12 / 18</span></div>
</div>

| 行高 | 适用场景 | 说明 |
| --- | --- | --- |
| `1` | 单行文本 | 用于按钮、标签等固定高度内容 |
| `1.3` | 紧凑标题 | 标题需要更强密度时使用 |
| `1.5` | 常规正文 | 默认正文阅读行高 |
| `1.7` | 宽松段落 | 长文说明或内容页可使用 |

## 字色对比

字体与背景颜色组合至少应满足 WCAG 2.0 A 级 `3:1` 对比度。正式业务页面建议最低达到 AA 级 `4.5:1`，关键文本、风险提示和可点击文字应尽量达到更高对比度。

| 层级 | 色值 | 用途 |
| --- | --- | --- |
| 标题文字 | `#13161B` | 页面主标题、重要字段 |
| 正文文字 | `#313133` | 表格内容、普通正文 |
| 辅助强调 | `#67696E` | 小标题、说明文字 |
| 次要说明 | `#939599` | 辅助信息、备注 |
| 禁用文字 | `#C8C9CC` | 禁用、占位、弱提示 |
| 链接文字 | `#2A6CDD` | 可点击链接、文本按钮 |

## 使用建议

1. 业务系统默认正文使用 `14px / 20px`，表格、表单、导航均以此为基准。
2. 页面标题常用 `20px` 或 `24px`，区块标题常用 `16px`，辅助说明使用 `12px`。
3. 金额、百分比、数量等数字字段使用 DIN 风格字体，并在表格中右对齐。
4. 同一页面控制字号数量，优先用颜色、字重、间距和组件状态表达层级。
