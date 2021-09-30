/*
 * @Author: hft
 * @Date: 2021-09-28 15:31:07
 * @LastEditors: hft
 * @LastEditTime: 2021-09-29 11:10:06
 * @Description: file content
 */
import { strict } from 'assert'
import React, { Component } from 'react'
import { matchPath, Redirect, RouteComponentProps } from 'react-router'
import { withRouter } from 'react-router'

interface IPros extends RouteComponentProps {
    auth?: boolean
}

class UserDetail extends Component<IPros, any> {
    // auth = false
    // componentDidMount() {
    //     // 路由匹配
    //     const match = matchPath("user/detail/1", {
    //         path: "user/detail/:id",
    //         exact: true,
    //         strict: false
    //     })
    //     console.log(match);

    // }
    // componentDidMount() {
    //     //@ts-ignore
    //     console.log(this.props);
    //     console.log(this.props.match.path);//输出路由
    //     console.log(this.props.match.url);//输出url

    //     this.props.history.goBack()

    //     const match = matchPath(this.props.match.url, {
    //         path: "user/detail/:id",
    //         exact: true,
    //         strict: false
    //     })
    //     console.log(match);
    // }
    render() {
        // if (!this.auth) {
        //     window.location.href='/login'
        //     return null
        //     // return <Redirect to='/login' from='/user/detail' />
        // }
        return (
            <div>
                UserDetail
            </div>
        )
    }
}
// 高级组件就是传入一个组件，返回新的组件？！
export default withRouter(UserDetail)