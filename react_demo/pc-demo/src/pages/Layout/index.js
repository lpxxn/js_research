import React, { useEffect } from 'react'
import './index.scss'
import {
  DiffOutlined,
  EditOutlined,
  HomeOutlined,
  LaptopOutlined,
  LogoutOutlined,
  NotificationOutlined,
  UserOutlined
} from '@ant-design/icons'
import { Breadcrumb, Layout, Menu } from 'antd'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { Popconfirm } from 'antd'
import { useStore } from '@/store'

import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'

const { Header, Content, Sider } = Layout

const AppLayout = () => {
  const location = useLocation()
  // const {pathname} = useLocation()
  console.log(location)
  const { userStore, loginStore, channelStore } = useStore()
  useEffect(() => {
    userStore.getUserInfo()
    console.log('userStore userInfo name', userStore.userInfo?.name)
    channelStore.loadChannelList()
  }, [userStore, channelStore])
  const navigate = useNavigate()
  const onConfirm = () => {
    loginStore.logout()
    navigate('/login')
  }
  return (
    <Layout style={{ height: '100vh' }}>
      <Header className='header'>
        <div className='logo'></div>
        <div className='user-info'>
          <span className='user-name'>{userStore.userInfo.name}</span>
          <span className='user-logout'>
            <Popconfirm
              title='是否退出？'
              onConfirm={onConfirm}
              okText='退出'
              cancelText='取消'
              placement='bottomRight'
            >
              <LogoutOutlined /> 退出
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className='site-layout-background'>
          <Menu
            mode='inline'
            theme='dark'
            defaultSelectedKeys={[location.pathname]}
            selectedKeys={[location.pathname]}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item icon={<HomeOutlined />} key='/'>
              <Link to={'/'}>数据概览</Link>
            </Menu.Item>
            <Menu.Item icon={<DiffOutlined />} key='/article'>
              <Link to={'/article'}>内容管理</Link>
            </Menu.Item>
            <Menu.Item icon={<EditOutlined />} key='/publish'>
              <Link to='/publish'>编辑文章</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 2px 2px' }}>
          <Outlet></Outlet>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default observer(AppLayout)

// https://ant.design/components/layout-cn
// https://codesandbox.io/s/c40bxv?file=/package.json:124-134
