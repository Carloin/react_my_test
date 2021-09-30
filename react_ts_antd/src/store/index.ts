/*
 * @Author: hft
 * @Date: 2021-09-29 14:56:41
 * @LastEditors: hft
 * @LastEditTime: 2021-09-29 15:33:13
 * @Description: file content
 */
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import admin from "./reducers/AdminReducer";
import { composeWithDevTools } from "redux-devtools-extension";
const store=createStore(admin,composeWithDevTools(applyMiddleware(thunk)));
export default store