import React, { Suspense } from 'react';
import './App.css';
import UserList from './UserList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Layout, Menu, Slider } from 'antd';
import {
  PieChartOutlined,
  MailOutlined,
} from '@ant-design/icons';

import About from './pages/About';
import Users from './pages/Users';
import Home from './pages/Home';
import Login from './pages/Login';
import { router } from './router';

const { SubMenu } = Menu;
const { Sider, Content } = Layout

function App() {
  return (
    <>

      {/*<Router>
         每点击一个会重新发起请求才是代码分隔成功;
        不使用是 单页面的应用，第一次加载就回把所有静态资源加载 
        <Suspense fallback={<>loading</>}>
          <Layout>
            <Sider>
              <div style={{ width: 200 }}>
                <Menu
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  mode="inline"
                  theme="dark"
                >
                  {
                    router.map((r, i) => {
                      if (r.children) {
                        return (
                          <SubMenu key={r.id} icon={<MailOutlined />} title={r.title}>
                            {
                              r.children.map((r1, index) => (
                                <Menu.Item key={r1.id}>
                                  <Link to={r1.path}>{r1.title}</Link>
                                </Menu.Item>
                              ))
                            }

                          </SubMenu>
                        )
                      } else {
                        return (
                          <Menu.Item key={r.id} icon={<PieChartOutlined />}>
                            <Link to={r.path}>{r.title}</Link>
                          </Menu.Item>

                        )
                      }
                    })
                  }
                </Menu>
              </div>
            </Sider>
            <Content>
              <Switch>
                {
                  router.map((r, index) => {
                    if (r.children) {
                      return (
                          <Switch  >
                            {
                              r.children.map((r1, i) => {
                                return(
                                <Route path={r1.path}  key={r1.id}>
                                  {r1.component}
                                </Route>  
                                )
                              })
                            }
                          </Switch>
                      
                      )
                    } else {
                      return (
                        <Route path={r.path} exact={r.exact} key={r.id}>
                          {r.component}
                        </Route>
                      )
                    }
                  })
                }
              </Switch>
            </Content>
          </Layout>

          </Suspense>
      </Router>*/}
    <Login></Login>
    </>
  );
}

export default App;