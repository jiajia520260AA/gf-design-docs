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
import {
  Activity,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  BadgeCheck,
  Bell,
  CalendarDays,
  ChartArea,
  ChartBar,
  ChartLine,
  ChartPie,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronsLeft,
  ChevronsRight,
  CircleCheck,
  CircleHelp,
  CircleMinus,
  CirclePlus,
  CircleX,
  Clock,
  Cloud,
  Copy,
  CornerDownLeft,
  CornerDownRight,
  DollarSign,
  Download,
  Ellipsis,
  Eye,
  FileText,
  Folder,
  Funnel,
  House,
  Info,
  Landmark,
  Link,
  Lock,
  LockOpen,
  MoveLeft,
  MoveRight,
  Pencil,
  QrCode,
  RefreshCw,
  RotateCcw,
  RotateCw,
  Save,
  ScatterChart,
  Search,
  Settings,
  Share2,
  ShieldAlert,
  ShieldCheck,
  SlidersHorizontal,
  Star,
  Table2,
  Trash2,
  TrendingDown,
  TrendingUp,
  TriangleAlert,
  Upload,
  User,
  Wallet
} from '@lucide/vue';

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
  { name: 'ArrowUpOutlined', category: 'direction', component: ArrowUp },
  { name: 'ArrowDownOutlined', category: 'direction', component: ArrowDown },
  { name: 'ArrowLeftOutlined', category: 'direction', component: ArrowLeft },
  { name: 'ArrowRightOutlined', category: 'direction', component: ArrowRight },
  { name: 'ChevronUpOutlined', category: 'direction', component: ChevronUp },
  { name: 'ChevronDownOutlined', category: 'direction', component: ChevronDown },
  { name: 'ChevronLeftOutlined', category: 'direction', component: ChevronLeft },
  { name: 'ChevronRightOutlined', category: 'direction', component: ChevronRight },
  { name: 'StepBackwardOutlined', category: 'direction', component: ChevronsLeft },
  { name: 'StepForwardOutlined', category: 'direction', component: ChevronsRight },
  { name: 'MoveLeftOutlined', category: 'direction', component: MoveLeft },
  { name: 'MoveRightOutlined', category: 'direction', component: MoveRight },
  { name: 'RotateLeftOutlined', category: 'direction', component: RotateCcw },
  { name: 'RotateRightOutlined', category: 'direction', component: RotateCw },
  { name: 'CornerDownLeftOutlined', category: 'direction', component: CornerDownLeft },
  { name: 'CornerDownRightOutlined', category: 'direction', component: CornerDownRight },

  { name: 'InfoCircleOutlined', category: 'notice', component: Info },
  { name: 'QuestionCircleOutlined', category: 'notice', component: CircleHelp },
  { name: 'WarningOutlined', category: 'notice', component: TriangleAlert },
  { name: 'CheckCircleOutlined', category: 'notice', component: CircleCheck },
  { name: 'CloseCircleOutlined', category: 'notice', component: CircleX },
  { name: 'PlusCircleOutlined', category: 'notice', component: CirclePlus },
  { name: 'MinusCircleOutlined', category: 'notice', component: CircleMinus },
  { name: 'ClockCircleOutlined', category: 'notice', component: Clock },
  { name: 'BellOutlined', category: 'notice', component: Bell },
  { name: 'BadgeCheckOutlined', category: 'notice', component: BadgeCheck },
  { name: 'ShieldAlertOutlined', category: 'notice', component: ShieldAlert },
  { name: 'ShieldCheckOutlined', category: 'notice', component: ShieldCheck },

  { name: 'SearchOutlined', category: 'common', component: Search },
  { name: 'EditOutlined', category: 'common', component: Pencil },
  { name: 'DeleteOutlined', category: 'common', component: Trash2 },
  { name: 'UploadOutlined', category: 'common', component: Upload },
  { name: 'DownloadOutlined', category: 'common', component: Download },
  { name: 'CalendarOutlined', category: 'common', component: CalendarDays },
  { name: 'FilterOutlined', category: 'common', component: Funnel },
  { name: 'CloudOutlined', category: 'common', component: Cloud },
  { name: 'HomeOutlined', category: 'common', component: House },
  { name: 'UserOutlined', category: 'common', component: User },
  { name: 'FolderOutlined', category: 'common', component: Folder },
  { name: 'FileTextOutlined', category: 'common', component: FileText },
  { name: 'CopyOutlined', category: 'common', component: Copy },
  { name: 'ShareOutlined', category: 'common', component: Share2 },
  { name: 'StarOutlined', category: 'common', component: Star },
  { name: 'EyeOutlined', category: 'common', component: Eye },
  { name: 'LockOutlined', category: 'common', component: Lock },
  { name: 'UnlockOutlined', category: 'common', component: LockOpen },
  { name: 'TableOutlined', category: 'common', component: Table2 },
  { name: 'QrcodeOutlined', category: 'common', component: QrCode },
  { name: 'SettingOutlined', category: 'common', component: Settings },
  { name: 'SaveOutlined', category: 'common', component: Save },
  { name: 'RefreshOutlined', category: 'common', component: RefreshCw },
  { name: 'MoreOutlined', category: 'common', component: Ellipsis },
  { name: 'LinkOutlined', category: 'common', component: Link },

  { name: 'PieChartOutlined', category: 'data', component: ChartPie },
  { name: 'LineChartOutlined', category: 'data', component: ChartLine },
  { name: 'BarChartOutlined', category: 'data', component: ChartBar },
  { name: 'AreaChartOutlined', category: 'data', component: ChartArea },
  { name: 'DotChartOutlined', category: 'data', component: ScatterChart },
  { name: 'SlidersOutlined', category: 'data', component: SlidersHorizontal },
  { name: 'RiseOutlined', category: 'data', component: TrendingUp },
  { name: 'FallOutlined', category: 'data', component: TrendingDown },
  { name: 'ActivityOutlined', category: 'data', component: Activity },
  { name: 'BankOutlined', category: 'data', component: Landmark },
  { name: 'WalletOutlined', category: 'data', component: Wallet },
  { name: 'DollarOutlined', category: 'data', component: DollarSign }
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

Icon 组件用于统一渲染 GF Design 图标资产。第一期使用 Lucide 开源图标补充预览库，图标默认继承当前文字颜色，适用于按钮、表单、导航、表格操作和数据状态。

## 基础用法

```html
<GfIcon name="SearchOutlined" />
<GfIcon name="DownloadOutlined" size="20" color="#2A6CDD" />
```

<div class="gf-demo-card">
  <div class="gf-icon-basic-demo">
    <span class="gf-icon-symbol"><Search :size="20" :stroke-width="2" /></span>
    <span class="gf-icon-symbol primary"><Download :size="20" :stroke-width="2" /></span>
    <span class="gf-icon-symbol success"><CircleCheck :size="20" :stroke-width="2" /></span>
    <span class="gf-icon-symbol danger"><TriangleAlert :size="20" :stroke-width="2" /></span>
    <button class="gf-button primary"><span class="gf-button-plus">+</span>新增</button>
  </div>
</div>

## 图标列表

<div class="gf-icon-doc-panel">
  <div class="gf-icon-toolbar">
    <label class="gf-icon-search-field">
      <Search :size="16" :stroke-width="2" aria-hidden="true" />
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
      <span class="gf-icon-library-symbol">
        <component :is="icon.component" :size="24" :stroke-width="2" aria-hidden="true" />
      </span>
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
    <span><Search :size="12" :stroke-width="2" /></span>
    <span><Search :size="16" :stroke-width="2" /></span>
    <span><Search :size="20" :stroke-width="2" /></span>
    <span><Search :size="24" :stroke-width="2" /></span>
    <span><Search :size="32" :stroke-width="2" /></span>
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
6. 当前预览图标来自 Lucide 开源图标库，后续可替换为 Figma 中的 GF Design 专属 SVG。
