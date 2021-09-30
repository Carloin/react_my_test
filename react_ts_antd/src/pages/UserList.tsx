/*
 * @Author: hft
 * @Date: 2021-09-28 15:30:55
 * @LastEditors: hft
 * @LastEditTime: 2021-09-30 15:15:27
 * @Description: file content
 */
import { Button, Space, Table } from 'antd'
import React, { Component } from 'react'
import EditUser from './EditUser'
interface IUser {
    name: string
    id: number
}
interface IState {
    userList: IUser[],
    visible: boolean,
    user?: IUser
}

export default class UserList extends Component<any, IState> {
    constructor(props: any, context: any) {
        super(props, context)
        let userList: IUser[] = []
        for (let i = 1; i < 100; i++) {
            userList.push({
                id: i,
                name: 'user' + i
            })
        }
        this.state = {
            userList: userList,
            visible: false
        }
    }
    show = (visible: boolean, user?: IUser) => {
        this.setState({
            visible: visible,
            user: user,
            userList:this.state.userList.map((u,_)=>{
                if(user?.id===u.id){
                    return user
                }else{
                    return u
                }
            })
        })
    }
    render() {


        return (
            <div>
                <EditUser visible={this.state.visible} callback={this.show} user={this.state.user} />
                <Table
                    dataSource={this.state.userList}
                    rowKey='id'
                >
                    <Table.Column
                        title={'ID'}
                        dataIndex='id'
                    />
                    <Table.Column
                        title={'用户名'}
                        dataIndex='name'
                    />
                    <Table.Column
                        title={'编辑'}
                        render={(user: IUser) => (
                            <Space>
                                <Button type='primary' onClick={() => {
                                    this.show(true, user)
                                }}>编辑</Button>
                            </Space>
                        )}
                    />
                </Table>
            </div>
        )
    }
}
