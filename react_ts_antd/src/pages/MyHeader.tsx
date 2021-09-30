/*
 * @Author: hft
 * @Date: 2021-09-29 15:46:57
 * @LastEditors: hft
 * @LastEditTime: 2021-09-29 16:36:03
 * @Description: file content
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IAdminState } from '../store/states/Adminstate'

class MyHeader extends Component<any,any> {
    render() {
        if (this.props.admin.name === '') {
            return null
        }
        return (
            <div>
                我是：{this.props.admin.name}
                <hr />
            </div>
        )
    }
}
const mapStateToProps = (state: IAdminState) => {
    return {
        ...state
    }
}
export default connect(mapStateToProps)(MyHeader)