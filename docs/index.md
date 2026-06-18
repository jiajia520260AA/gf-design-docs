---
anchors:
  - text: 安装
    href: '#安装'
  - text: 通过 CDN 使用
    href: '#通过-cdn-使用'
  - text: 基础使用
    href: '#基础使用'
  - text: 按需引入
    href: '#按需引入'
---

<div class="gf-hero">
  <div>
    <h1>快速上手</h1>
    <p>以下为广发证券 PC 内部系统组件库的开发指南。第一期聚焦文档站框架、设计变量、核心组件和典型业务模板。</p>
  </div>
  <img class="gf-hero-image" src="/images/hero-cloud.png" alt="" />
</div>

## 安装

请先在项目中安装基础依赖。第一期可以先使用静态 CSS 与 HTML 示例沉淀规范，后续再封装为 React 或 Vue 组件包。

```bash
npm install @gf-design/pc
```

## 通过 CDN 使用

如果只是做原型预览或规范展示，可以通过 CDN 引入样式文件。正式业务系统建议使用 npm 包，方便版本管理和按需加载。

```html
<link rel="stylesheet" href="https://cdn.example.com/gf-design/pc.css" />
```

## 基础使用

以按钮组件为例，组件默认遵循 32px 高度、2px 圆角和广发主色。

<div class="gf-demo-card">
  <div class="gf-button-row">
    <button class="gf-button primary">主要按钮</button>
    <button class="gf-button">次要按钮</button>
    <button class="gf-button danger">危险操作</button>
    <button class="gf-button disabled">禁用按钮</button>
  </div>
</div>

```html
<button class="gf-button primary">主要按钮</button>
<button class="gf-button">次要按钮</button>
```

## 按需引入

业务系统中建议只引入需要的组件和样式，避免一次加载过多模块。

```ts
import { Button } from '@gf-design/pc';
import '@gf-design/pc/button/style.css';
```
