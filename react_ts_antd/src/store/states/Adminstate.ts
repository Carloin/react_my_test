/*
 * @Author: hft
 * @Date: 2021-09-29 14:57:21
 * @LastEditors: hft
 * @LastEditTime: 2021-09-29 14:58:28
 * @Description: file content
 */
export interface IAdmin{
    name:string
}
export interface IAdminState{
    loading:boolean
    admin:IAdmin
}