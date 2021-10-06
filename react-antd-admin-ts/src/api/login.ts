/*
 * @Author: hft
 * @Date: 2021-10-06 11:54:17
 * @LastEditors: hft
 * @LastEditTime: 2021-10-06 12:03:14
 * @Description: file content
 */
import request from "../utils/request";

export const login = (name: string, password: string) => {
  return request({
    url: "/admin/login",
    method: "post",
    data: { name: name, password: password },
  });
};
