import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [   //配置式路由
    { path: '/', component: '@/pages/index' },
    { path: '/test', component: '@/pages/test/index' },
  ],
  //如果没有看到routes配置项，则启动约定式路由(自动读取pages目录下的目录结构，进而给你【自动】生成路由)
  fastRefresh: {},
});
