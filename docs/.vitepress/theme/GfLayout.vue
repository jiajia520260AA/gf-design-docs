<script setup lang="ts">
import { computed } from 'vue';
import { useData, useRoute } from 'vitepress';

const { frontmatter, page } = useData();
const route = useRoute();

const navGroups = [
  {
    title: '开发指南',
    items: [
      { text: '快速上手', link: '/' },
      { text: '设计变量', link: '/guide/tokens' },
      { text: '常见问题', link: '/guide/faq' },
      { text: '设计资源', link: '/guide/resources' }
    ]
  },
  {
    title: '设计指南',
    items: [
      { text: '设计原则', link: '/design/principles' },
      { text: '色彩', link: '/design/colors' },
      { text: '字体', link: '/design/typography' },
      { text: '图标', link: '/design/icons' },
      { text: '布局', link: '/design/layout' }
    ]
  },
  {
    title: '组件',
    items: [
      { text: '通用', muted: true },
      { text: '按钮 Button', link: '/components/button' },
      { text: '图标 Icon', link: '/components/icon' },
      { text: '布局', muted: true },
      { text: '分割线 Divider', link: '/components/divider' },
      { text: '栅格 Grid', link: '/components/grid' },
      { text: '表单', muted: true },
      { text: '输入框 Input', link: '/components/input' },
      { text: '选择器 Select', link: '/components/select' },
      { text: '数据展示', muted: true },
      { text: '表格 Table', link: '/components/table' }
    ]
  },
  {
    title: '页面模板',
    items: [
      { text: '查询列表页', link: '/templates/list' },
      { text: '表单页', link: '/templates/form' },
      { text: '审批页', link: '/templates/approval' }
    ]
  }
];

const anchors = computed(() => frontmatter.value.anchors ?? []);
const isHome = computed(() => route.path === '/' || route.path === '/index.html');
const pageTitle = computed(() => frontmatter.value.title || page.value.title);

function isActive(link?: string) {
  if (!link) return false;
  if (link === '/') return route.path === '/';
  return route.path.startsWith(link);
}
</script>

<template>
  <div class="gf-docs-shell">
    <header class="gf-topbar">
      <a class="gf-brand" href="/" aria-label="返回首页">
        <img class="gf-brand-image" src="/images/gf-brand-full.png" alt="广发证券设计系统" />
      </a>
      <button class="gf-search" type="button" aria-label="搜索文档">
        <span class="gf-search-icon">⌕</span>
        <span>搜索</span>
        <kbd>⌘ K</kbd>
      </button>
    </header>

    <div class="gf-docs-frame">
      <aside class="gf-sidebar" aria-label="文档导航">
        <nav v-for="group in navGroups" :key="group.title" class="gf-nav-group">
          <div class="gf-nav-title">
            <span>{{ group.title }}</span>
            <span class="gf-nav-chevron">⌃</span>
          </div>
          <a
            v-for="item in group.items"
            :key="item.text"
            :href="item.link || '#'"
            :class="[
              'gf-nav-link',
              { 'is-active': isActive(item.link), 'is-muted': item.muted }
            ]"
          >
            {{ item.text }}
          </a>
        </nav>
      </aside>

      <main class="gf-main">
        <article class="gf-doc">
          <header v-if="!isHome" class="gf-page-hero">
            <div class="gf-page-hero-copy">
              <h1>{{ pageTitle }}</h1>
              <p v-if="frontmatter.description">{{ frontmatter.description }}</p>
            </div>
            <img class="gf-page-hero-image" src="/images/hero-cloud.png" alt="" />
          </header>
          <div :class="['gf-content', { 'has-page-hero': !isHome }]">
            <Content />
          </div>
        </article>
      </main>

      <aside class="gf-toc" aria-label="页内目录">
        <a v-for="anchor in anchors" :key="anchor.href" :href="anchor.href">
          {{ anchor.text }}
        </a>
      </aside>
    </div>
  </div>
</template>
