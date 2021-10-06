/*
 * @Author: hft
 * @Date: 2021-10-06 15:46:11
 * @LastEditors: hft
 * @LastEditTime: 2021-10-06 16:26:25
 * @Description: file content
 */
import { Layout } from 'antd'
import React, { ReactNode, lazy } from 'react'
// 使用懒加载
const Dashboard = lazy(() => import('../pages/index/Dashboard'))
const Login = lazy(() => import('../pages/Login'))
const Page404 = lazy(() => import('../pages/Pages404'))
interface IRouter {
    title: string,
    path: string,
    key: string,
    exact?: boolean,
    component?: ReactNode,
    children?: IRouter[]
}
const router: IRouter[] = [
    {
        path: '/dashboard',
        exact: true,
        title: '仪表盘',
        key: 'Dashboard',
        component: <Dashboard />
    },
    {
        path: '/login',
        title: '登录',
        key: 'login',
        component: <Login />
    },
    {
        path: '*',
        title: '404',
        key: '404',
        component: <Page404 />
    },
]
export default router