/*
 * @Author: hft
 * @Date: 2021-10-06 16:09:31
 * @LastEditors: hft
 * @LastEditTime: 2021-10-06 16:10:42
 * @Description: file content
 */
import { Result, Button } from 'antd'
import React, { Component } from 'react'

export default class Pages404 extends Component {
    render() {
        return (
            <div>
                <Result
                    status="404"
                    title="404"
                    subTitle="Sorry, the page you visited does not exist."
                    extra={<Button type="primary">Back Home</Button>}
                />,
            </div>
        )
    }
}
