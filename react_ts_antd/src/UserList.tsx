/*
 * @Author: hft
 * @Date: 2021-09-28 09:44:58
 * @LastEditors: hft
 * @LastEditTime: 2021-09-28 12:03:48
 * @Description: file content
 */
import React, { Component } from 'react'
import {Space, Table,Button} from "antd";
import DeleteUser from './pages/DeleteUser'
interface IUser{
    id:number
    name:string
}
interface IState{
    userList:IUser[]
}

export default class UserList extends Component <any,IState>{
    constructor(props:any,context:any){
        super(props,context)
        let userList:IUser[]=[]
        for(let i=1;i<20;i++){
            userList.push({
                id:i,
                name:'user'+i
            })
        }
        this.state={
            userList:userList
        }
    }
    deleteUser=(id:number)=>{
        // console.log(id);
        this.setState({
            userList:this.state.userList.filter(user=>user.id!==id)
        })
        
    }
    render() {
        return (
            <>
                <Table
                dataSource={this.state.userList}
                rowKey='id'
                >
                    <Table.Column
                        title={'ID'}
                        dataIndex='id'/>
                    <Table.Column
                        title={'用户名'}
                        dataIndex={'name'}/>    
                    <Table.Column 
                        title={'管理'}
                        render={(user:IUser)=>(
                            <Space>
                                <Button type='primary'>编辑</Button>
                                <DeleteUser id={user.id} callback={this.deleteUser}/>
                            </Space>
                        )}/>        
                </Table>
            </>
        )
    }
}
