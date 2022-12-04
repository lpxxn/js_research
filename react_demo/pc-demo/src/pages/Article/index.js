import img404 from '@/assets/error.png'
import './index.scss'

import { Card, Breadcrumb, Form, Button, Radio, Select, DatePicker, Input, Table, Tag, Space } from 'antd'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import local from 'antd/es/date-picker/locale/zh_CN'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { http } from '@/utils'
import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { useStore } from '@/store'

const { RangePicker } = DatePicker

const Article = () => {
  // 频道列表管理
  const [channelList, setChannelList] = useState([])
  useEffect(() => {
    // 获取频道列表
    const loadChannelList = async () => {
      const resp = await http.get('/channels')
      console.log('loadChannelList resp', resp.data)
      setChannelList(resp.data.channels)
    }
    loadChannelList()
  }, [])
  const { channelStore } = useStore()

  // 文章列表
  const [articleList, setArticleList] = useState({
    list: [], // 文章列表
    count: 0, // 文章数量 
    page: 1 // 当前页码
  })

  // 文章参数 
  const [params, setArticleParams] = useState({
    page: 1, // 当前页码
    per_page: 10, // 每页数量
    // status: -1,
  })

  useEffect(() => {
    async function fetchArticleList () {
      // 这里要叫params 不然 request query 里没有
      const resp = await http.get('/mp/articles', { params })
      console.log('fetchArticleList resp', resp.data)
      const { page, results, total_count } = resp.data
      setArticleList({
        list: results,
        count: total_count,
        page
      })
    }
    fetchArticleList()
  }, [params])

  let columns = [
    {
      title: '封面',
      dataIndex: 'cover',
      width: 120,
      render: cover => {
        let image = img404
        if (cover.images.length > 0) {
          image = cover.images[0]
        }
        return <img src={image} width={80} height={60} alt="" />
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
            <Button type='primary' shape='circle' icon={<EditOutlined />} onClick={() => GoPublish(data)} />
            <Button type='primary' shape='circle' danger icon={<DeleteOutlined />} onClick={() => DeleteArticle(data)} />
          </Space>
        )
      }
    }
  ]

  const DeleteArticle = async (data) => {
    console.log('DeleteArticle', data)
    await http.delete(`/mp/articles/${data.id}`)
    setArticleParams({
      ...params,
      page: 1
    })
  }
  // 编辑
  const navigate = useNavigate()
  const GoPublish = (data) => {
    console.log('GoPublish', data)
    navigate(`/publish?id=${data.id}`)
  }

  let data = [
    {
      id: '8212',
      comment_count: 1,
      cover: {
        // images: ['https://img.alicdn.com/imgextra/i4/O1CN01Q2ZQ2Y1JZQ2ZQ2Y1J_!!6000000000000-2-tps-750-750.png']
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
    const { status, channel_id, date } = values
    // 格式化表单数据
    const articleParams = {}
    if (status !== -1) {
      articleParams.status = status
    }
    if (channel_id) {
      articleParams.channel_id = channel_id
    }
    if (date) {
      articleParams.begin_pubdate = date[0].format('YYYY-MM-DD')
      articleParams.end_pubdate = date[1].format('YYYY-MM-DD')
    }
    // 修改参数，触发接口, 会把params里的参数全部覆盖
    //setArticleParams(articleParams)
    setArticleParams({
      ...params,
      ...articleParams
    })
  }

  const pageChange = (page, pageSize) => {
    console.log('pageChange', page, pageSize)
    setArticleParams({
      ...params,
      page,
      per_page: pageSize
    })
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
            <Select placeholder="清选择文章频道" style={{ width: 250 }}>
              {channelStore.channelList.map(channel => <Select.Option key={channel.id} value={channel.id}>{channel.name}</Select.Option>)}
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
    <Card title={`根据筛选条件共查询到 ${articleList.count} 条结果：`}>
      {/* <Table rowKey="id" columns={columns} dataSource={data} */}
      <Table rowKey="id" columns={columns} dataSource={articleList.list}
        pagination={
          {
            position: ['bottomRight'],
            pageSize: params.per_page,
            total: articleList.count,
            current: articleList.page,
            onChange: pageChange
          }
        } />
    </Card>
  </div>)
}

export default observer(Article)