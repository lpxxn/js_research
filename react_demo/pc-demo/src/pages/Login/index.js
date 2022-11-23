import { Form, Input, Button, Checkbox, Card } from 'antd'

import "./index.scss"
const Login = () => {
  return (
    <div className="login">
      <Card title="登录" style={{ width: 300 }}>
        <Form>
          <Form.Item>
            <Input size="large" placeholder="请输入手机号" />
          </Form.Item>
          <Form.Item>
            <Input size="large" placeholder="请输入难码" />
          </Form.Item>
          <Form.Item>
            <Checkbox className='login-checkbox-label'>我已阅读「用户协议」和「隐私条款」</Checkbox>
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