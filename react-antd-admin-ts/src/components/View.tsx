/*
 * @Author: hft
 * @Date: 2021-10-06 15:57:06
 * @LastEditors: hft
 * @LastEditTime: 2021-10-06 16:42:35
 * @Description: file content
 */
import React, { Component, Suspense } from 'react'
import router from '../rorter'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
export default class View extends Component {
    render() {
        return (
            <div>
                {/* 使用了layz ,所以要这样写，react官文，代码分隔一章有说明 */}
                <Suspense fallback={<></>}>
                    <Router>
                        <Switch>
                            <Route path={'/'} exact>
                                <Redirect to={'/dashboard'}></Redirect>
                            </Route>
                            {
                                router.map(r => (<Route key={r.key} exact={r.exact} path={r.path}>{r.component}</Route>))
                            }
                        </Switch>
                    </Router>
                </Suspense>
            </div >
        )
    }
}
