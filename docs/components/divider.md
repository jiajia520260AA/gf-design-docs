---
description: Divider 组件来自 2.4 分割线 Divider，用于章节、文本段落和行内操作分隔。
anchors:
  - text: 组件预览
    href: '#组件预览'
  - text: 类型
    href: '#类型'
  - text: 带文字
    href: '#带文字'
  - text: 使用规则
    href: '#使用规则'
---

# Divider 分割线

分割线用于区隔内容关系。它适合分隔章节、文本段落，也适合在表格操作列中分隔多个行内链接。

## 组件预览

<div class="gf-demo-card gf-divider-demo">
  <p><strong>哈尔滨市各小区物业积极参与到战“疫”行动中，服务在一线构建有效防线</strong></p>
  <div class="gf-divider-line"></div>
  <p>比利时欧洲学院欧中研究中心主任门镜认为，欧盟高度重视发展对华关系，无论是双边还是多边议题，欧盟都离不开与中国合作。</p>
</div>

```html
<div class="gf-divider-line"></div>
```

## 类型

| 类型 | 用法 | 场景 |
| --- | --- | --- |
| 水平分割线 | 默认类型 | 章节、段落、卡片内部区隔 |
| 垂直分割线 | `type="vertical"` | 行内文字、表格操作列 |
| 带文字分割线 | `orientation` 指定文字位置 | 表单分段、内容说明 |
| 轻量文字分割线 | `plain` | 弱提示、轻量说明 |

<div class="gf-demo-card">
  <div class="gf-inline-actions">
    <span>文字</span>
    <span class="gf-vertical-divider"></span>
    <a>链接</a>
    <span class="gf-vertical-divider"></span>
    <a>链接</a>
  </div>
</div>

## 带文字

Figma 中带文字分割线支持居中、左侧、右侧，以及通过 `orientationMargin` 调整文字边距。

<div class="gf-demo-card gf-divider-stack">
  <div class="gf-divider-with-text"><span>Text</span></div>
  <div class="gf-divider-with-text left"><span>Left Text</span></div>
  <div class="gf-divider-with-text right"><span>Right Text</span></div>
  <div class="gf-divider-with-text plain"><span>Plain Text</span></div>
</div>

```html
<div class="gf-divider-with-text">
  <span>Text</span>
</div>
```

## 使用规则

1. 默认线色使用 `#E6EAF0`，更弱分割可使用 `#F0F2F5`。
2. 分割线只表达内容关系，不用于装饰页面。
3. 同一信息块内不要连续使用多条分割线，优先通过间距表达分组。
4. 表格操作列使用垂直分割线时，行内文字仍需保持可点击区域清晰。
5. 带文字分割线中的文字使用正文样式，不额外放大或加粗。
