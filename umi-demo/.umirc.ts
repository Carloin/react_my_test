/*
 * @Author: hft
 * @Date: 2021-11-23 11:30:12
 * @LastEditors: hft
 * @LastEditTime: 2021-11-23 16:32:41
 * @Description: file content
 */
import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    // {
    // path: '/',
    // component: '../pages/layouts/index',
    // routes: [
    { path: '/', component: '../pages/index' },

    // ],
    // },
  ],
  fastRefresh: {},
});
