---
description: Icon 组件用于承载 Figma 图标资产，支持按分类浏览、搜索和复制图标名称。
anchors:
  - text: 基础用法
    href: '#基础用法'
  - text: 图标列表
    href: '#图标列表'
  - text: 尺寸
    href: '#尺寸'
  - text: 使用规则
    href: '#使用规则'
---

<script setup>
import { computed, ref } from 'vue';

const keyword = ref('');
const activeCategory = ref('all');
const copiedName = ref('');

const categories = [
  { key: 'all', label: '全部' },
  { key: 'direction', label: '方向性' },
  { key: 'notice', label: '提示建议性' },
  { key: 'common', label: '通用' },
  { key: 'data', label: '数据类' }
];

const categoryMap = {
  direction: '方向性',
  notice: '提示建议性',
  common: '通用',
  data: '数据类'
};

const icons = [
  { name: 'StepBackwardOutlined', category: 'direction', symbol: '‹|' },
  { name: 'StepForwardOutlined', category: 'direction', symbol: '|›' },
  { name: 'FastBackwardOutlined', category: 'direction', symbol: '≪' },
  { name: 'FastForwardOutlined', category: 'direction', symbol: '≫' },
  { name: 'ArrowUpOutlined', category: 'direction', symbol: '↑' },
  { name: 'ArrowDownOutlined', category: 'direction', symbol: '↓' },
  { name: 'ArrowLeftOutlined', category: 'direction', symbol: '←' },
  { name: 'ArrowRightOutlined', category: 'direction', symbol: '→' },
  { name: 'CaretUpOutlined', category: 'direction', symbol: '▴' },
  { name: 'CaretDownOutlined', category: 'direction', symbol: '▾' },
  { name: 'MenuFoldOutlined', category: 'direction', symbol: '≡‹' },
  { name: 'MenuUnfoldOutlined', category: 'direction', symbol: '›≡' },
  { name: 'SwapLeftOutlined', category: 'direction', symbol: '⇐' },
  { name: 'SwapRightOutlined', category: 'direction', symbol: '⇒' },
  { name: 'RetweetOutlined', category: 'direction', symbol: '↻' },
  { name: 'RollbackOutlined', category: 'direction', symbol: '↩' },

  { name: 'InfoCircleOutlined', category: 'notice', symbol: 'i' },
  { name: 'QuestionCircleOutlined', category: 'notice', symbol: '?' },
  { name: 'WarningOutlined', category: 'notice', symbol: '!' },
  { name: 'CheckCircleOutlined', category: 'notice', symbol: '✓' },
  { name: 'CloseCircleOutlined', category: 'notice', symbol: '×' },
  { name: 'PlusCircleOutlined', category: 'notice', symbol: '+' },
  { name: 'MinusCircleOutlined', category: 'notice', symbol: '-' },
  { name: 'ClockCircleOutlined', category: 'notice', symbol: '◷' },
  { name: 'CheckSquareOutlined', category: 'notice', symbol: '☑' },
  { name: 'CloseSquareOutlined', category: 'notice', symbol: '☒' },
  { name: 'PlusSquareOutlined', category: 'notice', symbol: '⊞' },
  { name: 'MinusSquareOutlined', category: 'notice', symbol: '⊟' },

  { name: 'SearchOutlined', category: 'common', symbol: '⌕' },
  { name: 'EditOutlined', category: 'common', symbol: '✎' },
  { name: 'DeleteOutlined', category: 'common', symbol: '⌫' },
  { name: 'UploadOutlined', category: 'common', symbol: '⇧' },
  { name: 'DownloadOutlined', category: 'common', symbol: '⇩' },
  { name: 'CalendarOutlined', category: 'common', symbol: '□' },
  { name: 'FilterOutlined', category: 'common', symbol: '⊥' },
  { name: 'CloudOutlined', category: 'common', symbol: '☁' },
  { name: 'HomeOutlined', category: 'common', symbol: '⌂' },
  { name: 'UserOutlined', category: 'common', symbol: '人' },
  { name: 'FolderOutlined', category: 'common', symbol: '▣' },
  { name: 'FileOutlined', category: 'common', symbol: '▤' },
  { name: 'CopyOutlined', category: 'common', symbol: '⧉' },
  { name: 'ShareOutlined', category: 'common', symbol: '↗' },
  { name: 'StarOutlined', category: 'common', symbol: '☆' },
  { name: 'EyeOutlined', category: 'common', symbol: '◉' },
  { name: 'LockOutlined', category: 'common', symbol: '⌐' },
  { name: 'UnlockOutlined', category: 'common', symbol: '¬' },
  { name: 'TableOutlined', category: 'common', symbol: '▦' },
  { name: 'QrcodeOutlined', category: 'common', symbol: '▧' },

  { name: 'PieChartOutlined', category: 'data', symbol: '◔' },
  { name: 'LineChartOutlined', category: 'data', symbol: '⌁' },
  { name: 'BarChartOutlined', category: 'data', symbol: '▥' },
  { name: 'AreaChartOutlined', category: 'data', symbol: '▰' },
  { name: 'DotChartOutlined', category: 'data', symbol: '∴' },
  { name: 'SlidersOutlined', category: 'data', symbol: '≋' },
  { name: 'RiseOutlined', category: 'data', symbol: '↗' },
  { name: 'FallOutlined', category: 'data', symbol: '↘' },
  { name: 'RiseFilled', category: 'data', symbol: '▲' },
  { name: 'FallFilled', category: 'data', symbol: '▼' }
];

const filteredIcons = computed(() => {
  const value = keyword.value.trim().toLowerCase();
  return icons.filter((icon) => {
    const inCategory = activeCategory.value === 'all' || icon.category === activeCategory.value;
    const inKeyword =
      !value ||
      icon.name.toLowerCase().includes(value) ||
      categoryMap[icon.category].toLowerCase().includes(value);
    return inCategory && inKeyword;
  });
});

function categoryCount(key) {
  if (key === 'all') return icons.length;
  return icons.filter((icon) => icon.category === key).length;
}

async function copyIcon(name) {
  copiedName.value = name;
  try {
    if (navigator?.clipboard) {
      await navigator.clipboard.writeText(name);
    }
  } catch {
    // 本地预览或无 HTTPS 环境下可能没有剪贴板权限，仍保留复制反馈。
  }
  window.setTimeout(() => {
    if (copiedName.value === name) copiedName.value = '';
  }, 1200);
}
</script>

# Icon 图标

Icon 组件用于统一渲染 GF Design 图标资产。图标默认继承当前文字颜色，适用于按钮、表单、导航、表格操作和数据状态。

## 基础用法

```html
<GfIcon name="SearchOutlined" />
<GfIcon name="DownloadOutlined" size="20" color="#2A6CDD" />
```

<div class="gf-demo-card">
  <div class="gf-icon-basic-demo">
    <span class="gf-icon-symbol">⌕</span>
    <span class="gf-icon-symbol primary">⇩</span>
    <span class="gf-icon-symbol success">✓</span>
    <span class="gf-icon-symbol danger">!</span>
    <button class="gf-button primary"><span class="gf-button-plus">+</span>新增</button>
  </div>
</div>

## 图标列表

<div class="gf-icon-doc-panel">
  <div class="gf-icon-toolbar">
    <label class="gf-icon-search-field">
      <span>⌕</span>
      <input v-model="keyword" type="search" placeholder="搜索图标名称" />
    </label>
    <span class="gf-icon-total">{{ filteredIcons.length }} / {{ icons.length }}</span>
  </div>

  <div class="gf-icon-tabs" role="tablist" aria-label="图标分类">
    <button
      v-for="category in categories"
      :key="category.key"
      type="button"
      :class="{ active: activeCategory === category.key }"
      @click="activeCategory = category.key"
    >
      <span>{{ category.label }}</span>
      <em>{{ categoryCount(category.key) }}</em>
    </button>
  </div>

  <div v-if="filteredIcons.length" class="gf-icon-library-grid">
    <button
      v-for="icon in filteredIcons"
      :key="icon.name"
      type="button"
      class="gf-icon-library-item"
      :title="`复制 ${icon.name}`"
      @click="copyIcon(icon.name)"
    >
      <span class="gf-icon-library-symbol">{{ icon.symbol }}</span>
      <strong>{{ icon.name }}</strong>
      <em>{{ categoryMap[icon.category] }}</em>
    </button>
  </div>

  <div v-else class="gf-icon-empty">暂无匹配图标</div>
  <div v-if="copiedName" class="gf-icon-toast">已复制 {{ copiedName }}</div>
</div>

## 尺寸

<div class="gf-demo-card">
  <div class="gf-icon-size-row">
    <span style="font-size: 12px">⌕</span>
    <span style="font-size: 16px">⌕</span>
    <span style="font-size: 20px">⌕</span>
    <span style="font-size: 24px">⌕</span>
    <span style="font-size: 32px">⌕</span>
  </div>
</div>

| 尺寸 | 场景 |
| --- | --- |
| `12px` | 表格内弱提示、状态辅助 |
| `16px` | 表单、表格、菜单、输入框默认图标 |
| `20px` | 按钮图标、工具栏图标 |
| `24px` | 导航、卡片标题、功能入口 |
| `32px` | Figma 源图标绘制尺寸 |

## 使用规则

1. 图标绘制基准为 `32 x 32px`，线宽 `2px`。
2. 图标与文字并排时，默认间距使用 `8px`。
3. 仅图标按钮点击热区不小于 `32 x 32px`。
4. 选中态使用 `#2A6CDD`，危险态使用 `#D12B2B`，禁用态使用 `#C8C9CC`。
5. SVG 落地时使用 `currentColor`，让图标跟随文本或组件状态。
