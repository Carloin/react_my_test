/*
 * @Author: hft
 * @Date: 2021-10-06 08:48:17
 * @LastEditors: hft
 * @LastEditTime: 2021-10-06 15:15:55
 * @Description: file content
 */
export const rm = (key: string) => {
  localStorage.removeItem(key);
};
export const get = (key: string): string | null => {
  return localStorage.getItem(key);
};
export const set = (key: string, val: string) => {
  return localStorage.setItem(key, val);
};
export const clear = () => {
  return localStorage.clear();
};
