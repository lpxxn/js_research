import './index.scss'

import { Card, Breadcrumb, Form, Button, Radio, Select, DatePicker, Input } from 'antd'
import { Link } from 'react-router-dom'
import local from 'antd/es/date-picker/locale/zh_CN'
const { RangePicker } = DatePicker

const Article = () => {
  return (<div>
    <Card
      title={
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link to="/">首页</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            内容管理
          </Breadcrumb.Item>
        </Breadcrumb>
      }
    >
      <Form>
        <Form.Item label="状态" name="status">
          <Radio.Group>
            <Radio value={-1}>全部</Radio>
            <Radio value={0}>草稿</Radio>
            <Radio value={1}>待审核</Radio>
            <Radio value={2}>审核通过</Radio>
            <Radio value={3}>审核失败</Radio>
          </Radio.Group>
        </Form.Item>
        <Input.Group compact>
          <Form.Item label="频道" name="channel_id">
            <Select placeholder="清选择文章频道" style={{ width: 120 }}>
              <Select.Option value="jack">Jack</Select.Option>
              <Select.Option value="lucy">Lucy</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="日期" name="date" style={{ marginLeft: 20 }} >
            {/* 传入locale属性 控制中文显示 */}
            <RangePicker locale={local} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType='submit' style={{ marginLeft: 20 }}>筛选</Button>
          </Form.Item>
        </Input.Group>
      </Form>
    </Card>
  </div>)
}

export default Article