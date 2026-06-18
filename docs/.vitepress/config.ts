import { defineConfig } from 'vitepress';

export default defineConfig({
  title: '广发证券内部系统设计规范',
  description: 'PC 内部系统组件库文档站',
  cleanUrls: true,
  themeConfig: {
    search: {
      provider: 'local'
    }
  }
});
