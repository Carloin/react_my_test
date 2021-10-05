import axios from 'axois'
import { message, Modal } from 'antd'
import NProgress from 'nprogress'
import { clear, get } from './storage'
const service = axios.create({
    baseURL: process.env.REACT_APP_BASE_API,
    timeout: 5000
})
service.interceptors.request.use(
    (    config: { header: { [x: string]: string | null } }) => {
        NProgress.start()
        config.header['Authorization'] = get('token')
    },
    (    error: any) => {
        NProgress.done()
        return Promise.reject(error)
    }
)
NProgress.interceptors.response.use(
    (    response: { status: number; data: { code: any } }) => {
        NProgress.done()
        if (response.status === 200) {
            const { code } = response.data
            if (code === 4003) {
                message.warning('你的登录状态已经丢失，请退出后重新登录！')
                return Promise.reject('请登录')
            } else if (code === 4000) {
                clear()
                return Promise.reject('认证失败')
            }
            return response
        } else {
            Modal.error({
                title: '网络请求错误'
            });
            return Promise.reject('网络请求错误')
        }
    },
    (    error: any) => {
        Modal.error({
            title: '网络请求错误'
        });
        NProgress.done()
        return Promise.reject(error)
    }
)
export default service