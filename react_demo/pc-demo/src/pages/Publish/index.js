import { Card, Breadcrumb, Form, Input, Select, Radio, Upload, Button } from 'antd'
import './index.scss'

import { useSearchParams, Link } from 'react-router-dom'
import { FormMethod } from 'react-router-dom'
import { PlusOutlined } from '@ant-design/icons'
import { Space } from 'antd'

const Publish = () => {
  return (<div>
    <Card
      title={
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link to="/">首页</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            {/* {id ? '编辑文章' : '发布文章'} */}

          </Breadcrumb.Item>
        </Breadcrumb>
      }>
      <Form labelCol={{ span: 4 }} wrapperCol={{ span: 16 }}>
        {/* <Form> */}
        <Form.Item label="标题" name="title" rules={[{ required: true, message: '请输入文章标题' }]}>
          <Input placeholder='请输入文章标题' stype={{ width: 400 }} />
        </Form.Item>
        <Form.Item label="频道" name="channel_id" rules={[{ required: true, message: "请选择文章频道" }]} >
          <Select placeholder="请选择文章频道" stype={{ width: 400 }}>
            <Select.Option value={0}>推荐</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="封面">
          <Form.Item name="type">
            <Radio.Group style={{ marginTop: 5 }}>
              <Radio value={1}>单图</Radio>
              <Radio value={2}>三图</Radio>
              <Radio value={3}>无图</Radio>
            </Radio.Group>
            <Upload name="image" listType='picture-card' className='avatar-uplodar' showUploadList style={{}}>
              <div style={{ marginTop: 8 }}>
                <PlusOutlined />
              </div>
            </Upload>
          </Form.Item>
        </Form.Item>
        <Form.Item label="内容" name="content" rules={[{ required: true, message: "请输入文章内容" }]}>

        </Form.Item>
        <Form.Item wrapperCol={{ offset: 4 }}>
          <Space>
            <Button type="primary" size="large" htmlType="submit" >保存</Button>
          </Space>
        </Form.Item>
      </Form>
    </Card>
  </div>)
}

export default Publish