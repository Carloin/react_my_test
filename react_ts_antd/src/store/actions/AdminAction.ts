/*
 * @Author: hft
 * @Date: 2021-09-29 14:55:40
 * @LastEditors: hft
 * @LastEditTime: 2021-09-29 16:29:19
 * @Description: file content
 */
import { Dispatch } from "redux";
import { AdminType } from "../types/AdminType";

export interface IAdminAction {
  type: AdminType;
  data?: any;
}
export const doLogin = (dispatch: Dispatch, admin: any) => {
  dispatch({ type: AdminType.LOADING, data: { admin, loading: false } });
};
