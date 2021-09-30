/*
 * @Author: hft
 * @Date: 2021-09-30 15:35:34
 * @LastEditors: hft
 * @LastEditTime: 2021-09-30 16:01:31
 * @Description: file content
 */
import React, { Component, ComponentType } from 'react'

function withLee<T>(Wrap: ComponentType<T>): ComponentType<T> {
    return class extends Component<T>{
        render() {
            return <Wrap {...this.props} />
        }
    }
}
interface IProps {
    name?: string
}
class Lee extends Component<IProps>{
    render() {
        return (
            <>
                {this.props.name}
            </>
        )
    }
}
export default withLee<IProps>(Lee)