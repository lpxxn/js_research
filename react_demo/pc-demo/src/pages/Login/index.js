import { Form, Input, Button, Checkbox, Card, message } from 'antd'

import "./index.scss"
import { useStore } from '@/store'

import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { loginStore } = useStore()
  const navigate = useNavigate()
  // const onFinish = async (values) => { // 或者这么写
  async function onFinish (values) {
    console.log('Success:', values)
    try {
      await loginStore.setToken({ mobile: values.phone, code: values.code })
      // 跳转首页
      navigate('/')
      message.success('登录成功')
    } catch (e) {
      message.error(e.response?.data?.message || '登录失败')
    }
  }

  return (
    <div className="login">
      <Card title="登录" className="card">
        <Form validateTrigger={['onBlur', 'onChange']}
          initialValues={{ remember: true, code: '246810', phone: '13800138000' }}
          onFinish={onFinish}>
          <Form.Item
            name="phone"
            rules={[{ required: true, message: '请输入手机号' },
            { pattern: /^1[3456789]\d{9}$/, message: '手机号格式不正确', validateTrigger: 'onBlur' }]}
          >
            <Input size="large" placeholder="请输入手机号" />
          </Form.Item>
          <Form.Item name="code"
            rules={[{ required: true, message: 'Please input your password!' },
            { len: 6, message: '长度为6位', validateTrigger: 'onBlur' }]}
          >
            <Input size="large" placeholder="请输入难码" maxLength={6} />
          </Form.Item>
          <Form.Item name='remember' valuePropName='checked'>
            <Checkbox className='login-checkbox-label' >我已阅读「用户协议」和「隐私条款」</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType='submit' size="large" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login