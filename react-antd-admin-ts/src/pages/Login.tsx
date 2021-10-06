/*
 * @Author: hft
 * @Date: 2021-10-06 11:00:15
 * @LastEditors: hft
 * @LastEditTime: 2021-10-06 15:21:41
 * @Description: file content
 */
import { FormInstance, Form, Input, Button, Space, message } from 'antd'
import React, { Component, createRef, RefObject } from 'react'
import { login } from '../api/login'
import '../static/css/login.css'
import { set } from '../utils/storage'
const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 }
}
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 }
}

export default class Login extends Component {
    formRef: RefObject<FormInstance>
    constructor(props: any, context: any) {
        super(props, context)
        this.formRef = createRef<FormInstance>()
    }
    login = (form: any) => {
        // (response:any)单写response  data.token报错
        login(form.name, form.password).then((response:any) => {
            const { code, msg, data } = response.data
            if (code === 0) {
                set('token', data.token)
                window.location.href = '/'
                message.success(msg)
            } else {
                message.error(msg)
            }
        })
    }
    render() {
        return (
            <div>
                <Form
                    id='login-form'
                    {...layout}
                    ref={this.formRef}
                    onFinish={this.login}
                >
                    <Form.Item
                        label='用户名'
                        name='name'
                        rules={[{
                            type: 'string',
                            required: true
                        }]}
                    >

                        <Input />
                    </Form.Item>
                    <Form.Item
                        label='用户名'
                        name='password'
                        rules={[{
                            type: 'string',
                            required: true
                        }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Space>
                            <Button type='primary' htmlType='submit'>
                                登录
                            </Button>
                            <Button type='primary' htmlType='reset'>
                                重置
                            </Button>
                        </Space>

                    </Form.Item>
                </Form>
            </div>
        )
    }
}

