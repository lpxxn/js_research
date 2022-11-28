import React from 'react'
import './index.scss'
import { DiffOutlined, EditOutlined, HomeOutlined, LaptopOutlined, LogoutOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons'
import { Breadcrumb, Layout, Menu } from 'antd'
import { Outlet, Link } from 'react-router-dom'
import { Popconfirm } from 'antd'

const { Header, Content, Sider } = Layout

const AppLayout = () => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Header className='header'>
        <div className='logo' >
          <div className='user-info'>
            <span className='user-name'>name</span>
            <span className='user-logout'>
              <Popconfirm title="是否退出？" okText="退出" cancelText="取消">
                <LogoutOutlined /> 退出
              </Popconfirm>
            </span>
          </div>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className='site-layout-background'>
          <Menu mode='inline' theme='dark' defaultSelectedKeys={['1']}
            style={{ height: '100%', borderRight: 0 }}>
            <Menu.Item icon={<HomeOutlined />} key="1">
              <Link to={'/'}>数据概览</Link>
            </Menu.Item>
            <Menu.Item icon={<DiffOutlined />} key="2">
              <Link to={'/article'}>内容管理</Link>
            </Menu.Item>
            <Menu.Item icon={<EditOutlined />} key="3">
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

export default AppLayout

// https://ant.design/components/layout-cn
// https://codesandbox.io/s/c40bxv?file=/package.json:124-134
