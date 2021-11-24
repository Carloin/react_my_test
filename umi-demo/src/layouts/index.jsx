
import React from 'react'
import { Layout, Menu } from 'antd';
import './index.less';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import DomToImg from '../pages/demo/index'
import Test from '../pages/test/index'

const { Header, Sider, Content } = Layout;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
    currentItem: ''
  };

  toggle = () => {

    this.setState({
      collapsed: !this.state.collapsed,
    });

  };
  changeItem = () => {
    
    this.setState({
      currentItem: 1
    })
    const urlParams = new URL(window.location.href);
    const pathname = urlParams?.pathname;
    console.log("urlParams", urlParams);
  }
  render() {


    return (
      <Router >
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={[this.state.currentItem]} >
              <Menu.Item key="1" icon={<UserOutlined />} onClick={this.changeItem}>
                <Link to={`/domtoimg/1`}>
                  nav 1
                </Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                <Link to={`/domtoimg/2`}>
                  nav 2
                </Link>

              </Menu.Item>
              <Menu.Item key="3" icon={<UploadOutlined />}>
                <Link to={`/domtoimg/3`}>
                  nav 3
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: this.toggle,
              })}
            </Header>

            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
              }}
            >
              <Route path="/domtoimg/1" component={DomToImg}></Route>

            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }
}
export default SiderDemo



