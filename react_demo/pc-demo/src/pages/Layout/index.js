import React from 'react'
import './index.css'
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons'
import { Breadcrumb, Layout, Menu } from 'antd'

const { Header, Content, Sider } = Layout

const AppLayout = () => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Header className='header'></Header>
      <Layout>
        <Sider width={200} className='site-layout-background'>
          <Menu style={{ height: '100%', borderRight: 0 }}></Menu>
        </Sider>
        <Layout style={{ padding: '0 2px 2px' }}>
          <Content>Layout</Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default AppLayout

// https://ant.design/components/layout-cn
// https://codesandbox.io/s/c40bxv?file=/package.json:124-134
