import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducers';

// 在 indexjs 文件中引入 redux 可以再全局中使用
// 最开始创建store之后，把reducer传进去，state是undefined，所以要给state初始值

const store = createStore(rootReducer)
ReactDOM.render(
  <React.StrictMode>
    {/* 作用，Provider 将 react 与 redux 连接,将redux创建的store作用于根组件App,将两者关联起来，后续可以获取数据，更新数据 */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
