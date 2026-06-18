---
anchors:
  - text: 基础变量
    href: '#基础变量'
  - text: 命名规则
    href: '#命名规则'
---

# 设计变量

设计变量用于统一颜色、字号、间距、圆角和阴影。第一期先沉淀 CSS Variables，后续可同步到 Figma Tokens 和组件包。

## 基础变量

```css
:root {
  --gf-primary: #2a6cdd;
  --gf-bg-page: #f7f8fa;
  --gf-bg-panel: #ffffff;
  --gf-border: #d7dce0;
  --gf-text-primary: #13161b;
  --gf-radius-button: 2px;
  --gf-radius-default: 4px;
}
```

## 命名规则

变量命名遵循 `--gf-属性-语义-状态` 的方式，例如 `--gf-text-secondary`、`--gf-primary-hover`。
