import { Card, Breadcrumb, Form, Input, Select, Radio, Upload, Button } from 'antd'
import './index.scss'

import { useSearchParams, Link } from 'react-router-dom'
import { PlusOutlined } from '@ant-design/icons'
import { Space } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import { useStore } from '@/store'
import { observer } from 'mobx-react-lite'
import { http } from '@/utils'
import Myeditor from '@/components/MyEditor'
import { useNavigate } from 'react-router-dom'
import { message } from 'antd'
// import ImageResize from 'quill-image-resize'
// Quill.register('modules/ImageResize', ImageResize)

const Publish = () => {
  console.log('Publish')
  // 得到 路由参数 id
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id')
  console.log('id', id)
  const form = useRef(null)
  // 数据回填 id调用接口 1. 表单回填 2. 暂存列表 3. Upload组件 fileList
  useEffect(() => {
    const loadDetail = async () => {
      const resp = await http.get(`/mp/articles/${id}`)
      console.log('loadDetail resp', resp.data)

      const data = resp.data
      form.current.setFieldsValue({
        ...data,
        type: data.cover.type
      })
      // 回填 upload
      let imgList = data.cover.images.map((item) => { return { url: item } })
      setFileList(imgList)
      // 暂存列表保存一份
      cacheImgList.current = imgList
      // 图片
      setImageCount(data.cover.type)
    }
    if (!id) return
    loadDetail()

  }, [id, form])

  const [value, setValue] = useState('')

  const { channelStore } = useStore()
  const [fileList, setFileList] = useState([])

  const onUploadChange = (rsult) => {
    const { fileList } = rsult
    console.log('info', rsult, 'fileList', fileList)
    const formatList = fileList.map(file => {
      // 上传完毕
      if (file.response) {
        return {
          url: file.response.data.url
        }
      }
      return file
    })
    console.log('formatList', formatList)
    setFileList(formatList)
    // 同时把图片列表保存到 cacheImgList里
    cacheImgList.current = formatList
  }
  // 保存文章
  const navigate = useNavigate()
  const onFinish = async (values) => {
    console.log('onFinish:', values)
    const { channel_id, content, title, type } = values
    const params = {
      channel_id, content, title, type,
      cover: {
        type: type,
        images: fileList.map(item => item.url)
      }
    }
    console.log('params', params)
    if (id) {
      await http.put(`/mp/articles/${id}?draft=false`, params)
    } else {
      await http.post('/mp/articles?draft=false', params)
    }
    navigate('/article')
    message.success(`${id ? '更新' : '发布'}文章成功`)
  }
  console.log('---------------')
  // 切换图片
  const [imgCount, setImageCount] = useState(1)
  const radioTypeChaned = (e) => {
    console.log('typeChaned', e, 'targetValue', e.target.value)
    const rawCount = e.target.value
    setImageCount(rawCount)

    // 无图
    if (cacheImgList.current.length === 0) {
      return
    }
    // 从缓存里取出图片列表
    if (rawCount === 1) {
      // const img = cacheImgList.current ? [cacheImgList.current[0]] : []
      const img = cacheImgList.current[0]
      setFileList([img])
    } else if (rawCount === 3) {
      setFileList(cacheImgList.current)
    }
  }
  // useRef 可以用于获取dom，也可以当作仓库
  const cacheImgList = useRef([])

  return (<div className='publish'>
    <Card
      title={
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link to="/">首页</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            {id ? '编辑文章' : '发布文章'}
          </Breadcrumb.Item>
        </Breadcrumb>
      }>
      <Form ref={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ type: 1, content: "测试数据" }} onFinish={onFinish}>
        <Form.Item label="标题" name="title" rules={[{ required: true, message: '请输入文章标题' }]}>
          <Input placeholder='请输入文章标题' stype={{ width: 400 }} />
        </Form.Item>
        <Form.Item label="频道" name="channel_id" rules={[{ required: true, message: "请选择文章频道" }]} >
          <Select placeholder="请选择文章频道" stype={{ width: 400 }}>
            {channelStore.channelList.map(channel => <Select.Option key={channel.id} value={channel.id}>{channel.name}</Select.Option>)}
          </Select>
        </Form.Item>
        <Form.Item label="封面">
          <Form.Item name="type">
            <Radio.Group style={{ marginTop: 5 }} onChange={radioTypeChaned}>
              <Radio value={1}>单图</Radio>
              <Radio value={3}>三图</Radio>
              <Radio value={0}> 无图</Radio>
            </Radio.Group>
          </Form.Item>
          {
            imgCount > 0 && (
              <Form.Item>
                <Upload name="image" listType='picture-card' className='avatar-uplodar' showUploadList action="http://geek.itheima.net/v1_0/upload"
                  fileList={fileList}
                  onChange={onUploadChange}
                  multiple={imgCount > 1}
                  maxCount={imgCount}
                >
                  <div style={{ marginTop: 8 }}>
                    <PlusOutlined />
                  </div>
                </Upload>
              </Form.Item>
            )
          }

        </Form.Item>
        {/* 这里的富文本组件 已经被FoonUploadChange
        {/* 他的输入内容 会在onFinished回调中收集起来 */}
        <Form.Item label="内容" name="content" rules={[{ required: true, message: "请输入文章内容" }]}>
          {/* <ReactQuill theme="snow" value={value} onChange={setValue} modules={Publish.modules} /> */}
          <Myeditor value={value} onChange={setValue} />
          {/* // formats={Publish.formats} /> */}
          {/* <Editor value={value} onChange={setValue} /> */}
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 4 }}>
          <Space>
            <Button type="primary" size="large" htmlType="submit" >发布文章</Button>
          </Space>
        </Form.Item>
      </Form>
    </Card>
  </div >)
}

export default observer(Publish)
