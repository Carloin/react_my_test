/*
 * @Author: hft
 * @Date: 2021-09-28 14:36:37
 * @LastEditors: hft
 * @LastEditTime: 2021-09-28 17:05:10
 * @Description: file content
 */
import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";
import UserList from './UserList'
import UserDetail from './UserDetail'
export default class Users extends Component {
    render() {
        return (
            <div>
                Users page
                <Switch>

                    <Route path={'/user/list'}>
                        <UserList />
                    </Route>
                    <Route path={'/user/detail/:id'}>
                        <UserDetail />
                    </Route>
                </Switch>
            </div>
        )
    }
}
