// 每个 Vue 应用都是通过 createApp 函数创建一个新的 应用实例
import { createApp } from 'vue';
import './style.css';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import router from './router/index';
import store from './store/index';

// 从一个单文件组件中导入根组件
import App from './App.vue';

// const app = createApp({
//   /* 根组件 选项 */
// });
const app = createApp(App);

// 确保在挂载应用实例之前完成所有应用配置！！！！！！！！！！

// 应用实例会暴露一个 .config 对象允许我们配置一些应用级的选项
// 例如定义一个应用级的错误处理器，它将捕获所有由子组件上抛而未被处理的错误
app.config.errorHandler = (err) => {
  /* 处理错误 */
  console.error(err);
};

// 应用实例还提供了一些方法来注册应用范围内可用的资源
// 例如注册一个组件 这使得 TodoDeleteButton 在应用的任何地方都是可用的
// app.component('TodoDeleteButton', TodoDeleteButton)

app
  .use(router)
  .use(store)
  .use(ElementPlus)
  // 应用实例必须在调用了 .mount() 方法后才会渲染出来。
  // 该方法接收一个“容器”参数，可以是一个实际的 DOM 元素或是一个 CSS 选择器字符串
  // 容器元素自己将不会被视为应用的一部分。
  // .mount() 方法应该始终在整个应用配置和资源注册完成后被调用。
  // 同时请注意，不同于其他资源注册方法，它的返回值是根组件实例而非应用实例。
  .mount('#app');
