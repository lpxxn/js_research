import img404 from '@/assets/error.png'
import './index.scss'

import { Card, Breadcrumb, Form, Button, Radio, Select, DatePicker, Input, Table, Tag, Space } from 'antd'
import { Link } from 'react-router-dom'
import local from 'antd/es/date-picker/locale/zh_CN'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
const { RangePicker } = DatePicker

const Article = () => {
  let columns = [
    {
      title: '封面',
      dataIndex: 'cover',
      width: 120,
      render: cover => {
        return <img src={cover.images[0] || img404} width={80} height={60} alt="" />
      }
    },
    {
      title: '标题',
      dataIndex: 'title',
      width: 220,
    },
    {
      title: '状态',
      dataIndex: 'status',
      render: data => <Tag color="green">审核通过</Tag>
    },
    {
      title: '发布时间',
      dataIndex: 'pubdate',
    },
    {
      title: '阅读数',
      dataIndex: 'read_count',
    },
    {
      title: '评论数',
      dataIndex: 'comment_count',
    },
    {
      title: '点赞数',
      dataIndex: 'like_count',
    },
    {
      title: '操作',
      render: data => {
        return (
          <Space size="middle">
            <Button type='primary' shape='circle' icon={<EditOutlined />} />
            <Button type='primary' shape='circle' danger icon={<DeleteOutlined />} />
          </Space>
        )
      }
    }
  ]
  let data = [
    {
      id: '8212',
      comment_count: 1,
      cover: {
        images: ['https://img.alicdn.com/imgextra/i4/O1CN01Q2ZQ2Y1JZQ2ZQ2Y1J_!!6000000000000-2-tps-750-750.png']
      },
      like_count: 1,
      pubdate: '2021-08-12 12:12:12',
      read_count: 222,
      status: 2,
      title: '测试标题'
    }
  ]
  const onFinish = (values) => {
    console.log('Success:', values)
  }

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
      <Form
        onFinish={onFinish}
        initialValues={{ status: -1 }}
      >
        <Form.Item label="状态" name="status">
          <Radio.Group i>
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
    <Card title={"根据筛选条件共查询到 count 条结果："}>
      <Table rowKey="id" columns={columns} dataSource={data} />
    </Card>
  </div>)
}

export default Article