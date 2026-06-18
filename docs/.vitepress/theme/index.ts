import DefaultTheme from 'vitepress/theme';
import GfLayout from './GfLayout.vue';
import './style.css';

export default {
  extends: DefaultTheme,
  Layout: GfLayout
};
