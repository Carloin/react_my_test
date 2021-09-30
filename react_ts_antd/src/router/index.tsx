/*
 * @Author: hft
 * @Date: 2021-09-29 10:05:02
 * @LastEditors: hft
 * @LastEditTime: 2021-09-29 14:10:38
 * @Description: file content
 */
import { ReactNode, lazy } from "react";
const Home = lazy(() => import("../pages/Home"))
const UserDetail = lazy(() => import("../pages/UserDetail"))
const Users = lazy(() => import("../pages/Users"))
// import Home from "";
// import UserDetail from "../pages/UserDetail";
// import Users from "../pages/Users";


interface IRouter {
    id: number,
    path: string,
    title: string,
    exact?: boolean,
    component?: ReactNode
    children?: IRouter[]
}
export const router: IRouter[] = [
    {
        id: 1,
        path: '/',
        title: 'index page',
        exact: true,
        component: <Home />
    },
    {
        id: 2,
        path: '/user/list',
        title: 'user list',
        component: <Users />,
        children: [
            {
                id: 3,
                path: '/user/detail/3',
                title: 'user detail 3 page',
                exact: true,
                component: <UserDetail />
            },
            {
                id: 4,
                path: '/user/detail/4',
                title: 'user detail 4 page',
                exact: true,
                component: <UserDetail />
            },
        ]
    },
]