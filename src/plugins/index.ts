import { App } from 'vue';
import { setupTailwindcss } from './tailwindcss';
import setupElementPlus from './elementplus'
import setupPinia from './pinia';
export function setupPlugins(app: App) {
  setupTailwindcss();
  // autoRegistryComponent(app);
  setupElementPlus(app)
  setupPinia(app)
}

// 自动注册全局组件
function autoRegistryComponent(app: App) {
  const components = import.meta.glob("../components/form/*.vue", { import: "default", eager: true })
  Object.keys(components).forEach(key => {
    const name = key.split('/').pop()?.split('.').shift();
    app.component(name!,components[key] as any)
  })
}
