import React, { useEffect, useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Modal, Form, Input, Checkbox, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import ProTable from '@ant-design/pro-table';
import { Alert } from 'antd';
import { getTodoLists, add,edit  } from '@/services/todo';
import { connect } from 'umi';
import ProForm,{ ProFormText} from '@ant-design/pro-form';
// import proSettings from 'config/defaultSettings';
// import { add } from 'lodash';


// const data = [
//   { id: 1, title: 'TodoList列表1', status: 0 },
//   { id: 2, title: 'TodoList列表2', status: 1 },
//   { id: 3, title: 'TodoList列表3', status: 2 },
//   { id: 4, title: 'TodoList列表4', status: 0 },
// ];

const Todo = (props) => {
  let [isModalVisible, setIsModalVisible] = useState(false);
  // console.log(props)
  // 方法一：直接发起请求
  // let [data, setData] = useState([]);
  // // console.log(getTodoLists())
  // useEffect(async () => {
  //   const resData = await getTodoLists();
  //   // console.log(resData);
  //   setData(resData);
  // }, []);
  // 方法二：model请求数据
  const { todoList: data } = props.todo;
  // 打开添加表单 事件
  const showForm = () => {
    setIsModalVisible(true);
  };
  // 点击模态框关闭的事件
  const handleCancel = (value) => {
    setIsModalVisible(false)
  };
  const handleForm=async ( value )=>{
    const res = await add(value)
    if(res.code===0){
    // 刷新todolist
    props.dispatch({
      type:'todo/getTodoList',
      payload:null
    })
  }else{
    message.error(res.message)
  }
}
// 修改todo状态
const changeStatus=async (id,status)=>{
  // 调用services中的方法，修改状态
  const res= await edit({id,status})
  // 判断执行结果
  if(res.code===0){
    // 刷新todolist
    props.dispatch({
      type:'todo/getTodoList',
      payload:null
    })
  }else{
    message.error(res.message)
  }
}
const status = [
  <Alert message="待办" type="info" showIcon />,
  <Alert message="已完成" type="success" showIcon />,
  <Alert message="已取消" type="error" showIcon />,
];
const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: '标题',
    dataIndex: 'title',
  },
  {
    title: '状态',
    dataIndex: 'status',
    render: (_, record) => {
      // console.log(record);
      return status[record.status];
    },
  },
  {
    title: '修改状态',
    render: (_,record) => {
      let editOperation=[]
      if(record.status!==0){
        editOperation.push(<a onClick={()=>changeStatus(record.id,0)} key={0}>代办 </a>)
      }
      if(record.status!==1){
        editOperation.push(<a onClick={()=>changeStatus(record.id,1)} key={1}>完成 </a>)
      }
      if(record.status!==2){
        editOperation.push(<a onClick={()=>changeStatus(record.id,2)} key={2}>取消 </a>)
      }
      return editOperation
    }
  },
];
  return (
    <PageContainer>
      <ProTable
        columns={columns}
        rowKey="id"
        search={false}
        dateFormatter="string"
        headerTitle="待办事项"
        dataSource={data}
        toolBarRender={() => [
          <Button type="primary" key="primary" onClick={showForm}>
            <PlusOutlined />
            新建
          </Button>,
        ]}
      />
      <Modal title="添加待办事项" visible={isModalVisible} onCancel={handleCancel} footer={null}>
        <ProForm onFinish={value=>handleForm(value)}>
          <ProFormText name="todo" label="待办事项"rules={[{required: true}]}/>
        </ProForm>
      </Modal>
    </PageContainer>
  );
};
export default connect(({ todo }) => ({ todo }))(Todo);
