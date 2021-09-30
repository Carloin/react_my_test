/*
 * @Author: hft
 * @Date: 2021-09-30 11:22:21
 * @LastEditors: hft
 * @LastEditTime: 2021-09-30 15:13:18
 * @Description: file content
 */
import React, { Component } from 'react'
import Modal from 'antd/lib/modal'
import { Form, Button, Input, TagProps, FormInstance } from 'antd';

const layout = {
    wrapperCol: { offset: 8, span: 16 },
};

interface IUser {
    name: string
    id: number
}
interface IProps {
    user?: IUser,
    visible: boolean,
    callback: (visible: boolean, user?: IUser) => void
}
export default class EditUser extends Component<IProps, any> {
    formRef
    constructor(props: IProps, context: any) {
        super(props, context)
        this.formRef = React.createRef<FormInstance>()
    }
    handleOk = (user?: any) => {
        this.props.callback(false, { ...this.props.user, ...user })
    }
    handleCancel = () => {
        this.props.callback(false)
    }
    saveUser=(user:IUser)=>{
        this.props.callback(false,{ ...this.props.user, ...user })
    }
    render() {
        this.formRef.current?.setFieldsValue({
            ...this.props.user
        })
        return (
            <div>
                <Modal
                    title="Basic Modal"
                    visible={this.props.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={null}
                >
                    <Form
                        onFinish={this.saveUser}
                        ref={this.formRef}
                        initialValues={{
                            ...this.props.user
                        }}

                    >
                        <Form.Item
                            shouldUpdate={(prevValues, curValues) => prevValues.additional !== curValues.additional}
                            name='name'
                            label='name'
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </div >
        )
    }
}
