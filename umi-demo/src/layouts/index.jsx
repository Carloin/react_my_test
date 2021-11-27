
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
import getQueryVariable from '../utils/urlparameter';
const { Header, Sider, Content } = Layout;



class SiderDemo extends React.Component {

  state = {
    collapsed: false,
    currentItem: '',
    menuData: []
  };
  componentDidMount = () => {
    const menuData = [
      {
        menuUrl: '/domtoimg/1', menuName: 'nav 1', menuIcon: <UserOutlined />
      },
      {
        menuUrl: '/domtoimg/2', menuName: 'nav 2', menuIcon: <VideoCameraOutlined />
      },
      {
        menuUrl: '/domtoimg/3', menuName: 'nav 3', menuIcon: <UploadOutlined />
      }

    ]
    // this.setState({
    //   menuData
    // }) 

    let id = getQueryVariable('id')
    this.setState({
      menuData,
      currentItem: id
    })
  }
  toggle = () => {

    this.setState({
      collapsed: !this.state.collapsed,
    });

  };
  changeItem = (e) => {
    this.setState({
      currentItem: e.key
    })
  }
  render() {
    return (
      <Router >
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            {/* 
            使用的是通过获取路由参数让menu栏已选中的数据刷新后不会重置
            注意defaultSelectedKeys要改成selectedKeys
             */}
            <Menu theme="dark" mode="inline" selectedKeys={[this.state.currentItem]} >
              {

                this.state.menuData.map((item, index) => {
                  // 记得return返回数据，否则侧栏数据显示不了
                  return (<Menu.Item key={index} icon={item.menuIcon} onClick={(e) => this.changeItem(e)}>
                    <Link to={{ pathname: item.menuUrl, query: { id: index } }}>
                      {item.menuName}
                    </Link>
                  </Menu.Item>)
                })
              }

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
              {/* <Route path="/:id" component={DomToImg}></Route> */}
              <Route path="/domtoimg/1" component={DomToImg}></Route>

            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }
}
export default SiderDemo



