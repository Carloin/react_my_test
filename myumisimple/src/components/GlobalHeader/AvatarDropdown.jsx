import { LogoutOutlined, SettingOutlined, UserOutlined,UnorderedListOutlined } from '@ant-design/icons';
import { Avatar, Badge, Menu, Spin} from 'antd';
import React from 'react';
import { history, connect } from 'umi';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';
import {getTodoLists} from '@/services/todo'

class AvatarDropdown extends React.Component {
  state={
    todoNum:0
  }
  async componentDidMount(){
    // 方法一：发送请求获取数据
    // const todoList=await getTodoLists()
    // const todoNum=todoList.filter(item=>item.status===0).length
    // this.setState({todoNum})
    // 方法二：使用model获取数据
    // console.log(this.props)
    const {dispatch}=this.props
    dispatch({
      type:'todo/getTodoList',
      payload:null
    })
    //  console.log(this.props)

  }

  onMenuClick = (event) => {
    const { key } = event;

    if(key==='todo'){
      history.push('/todo')
      return
    }
    if (key === 'logout') {
      const { dispatch } = this.props;

      if (dispatch) {
        dispatch({
          type: 'login/logout',
        });
      }

      return;
    }

    history.push(`/account/${key}`);
  };

  render() {
    // console.log(this.props.todo)
    const {todoList}=this.props.todo
    const todoNum=todoList.filter(item=>item.status===0).length
    const {
      currentUser = {
        avatar: '',
        name: '',
      },
      menu,
    } = this.props;
    const menuHeaderDropdown = (
      <Menu className={styles.menu} selectedKeys={[]} onClick={this.onMenuClick}>
        {menu && (
          <Menu.Item key="center">
            <UserOutlined />
            个人中心
          </Menu.Item>
        )}
        {menu && (
          <Menu.Item key="settings">
            <SettingOutlined />
            个人设置
          </Menu.Item>
        )}
        {menu && <Menu.Divider />}
        <Menu.Item key="todo">
          <UnorderedListOutlined />
          待办事项
          <Badge count={todoNum} offset={[10,0]}></Badge>
        </Menu.Item>
        <Menu.Item key="logout">
          <LogoutOutlined />
          退出登录
        </Menu.Item>
      </Menu>
    );
    return currentUser && currentUser.name ? (
      <HeaderDropdown overlay={menuHeaderDropdown}>
        <span className={`${styles.action} ${styles.account}`}>
          <Avatar size="small" className={styles.avatar} src={currentUser.avatar} alt="avatar" />
          <span className={`${styles.name} anticon`}>{currentUser.name}
          <Badge count={todoNum} dot={true}></Badge>
          </span>
        </span>
      </HeaderDropdown>
    ) : (
      <span className={`${styles.action} ${styles.account}`}>
        <Spin
          size="small"
          style={{
            marginLeft: 8,
            marginRight: 8,
          }}
        />
      </span>
    );
  }
}

export default connect(({ user,todo }) => ({
  currentUser: user.currentUser,
  todo,
}))(AvatarDropdown);
