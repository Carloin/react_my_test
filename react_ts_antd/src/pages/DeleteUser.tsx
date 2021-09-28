/*
 * @Author: hft
 * @Date: 2021-09-28 10:53:09
 * @LastEditors: hft
 * @LastEditTime: 2021-09-28 15:20:48
 * @Description: file content
 */

import React, { Component } from 'react'
import { Button, message } from 'antd'
import { Popconfirm } from 'antd'
interface IProps {
    id: number
    callback: (id: number) => void
}
export default class DeleteUser extends Component<IProps, any> {
    deleteUser = () => {
        this.props.callback(this.props.id)
    }
    confirm = () => {
        this.deleteUser()
    }
    cancel = () => {
        message.warn('取消删除')
    }
    render() {
        return (
            <div>
                <Popconfirm
                    title="are you sure to delete this task"
                    onConfirm={this.confirm}
                    onCancel={this.cancel}
                    okText="yes"
                    cancelText='no'
                >


                    <Button type='primary' danger >删除</Button>
                </Popconfirm>
            </div>
        )
    }
}
