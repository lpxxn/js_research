import './App.css'
import React from 'react'
import { Button, Input, Popconfirm, Space, Table } from 'antd'
import axios from 'axios'
import { responsiveArray } from 'antd/lib/_util/responsiveObserve'
const { Search } = Input
// 1. 找到对应的组件，把页面搭起来
// 2. table 渲染出来（发送请求(componentDidMount)拿到数据 提交给list(this.setState)）
class App extends React.Component {
  state = {
    List: [],
    // 列信息
    columns: [
      {
        title: '任务编号',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: '任务名称',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '任务描述',
        dataIndex: 'desc',
        key: 'desc',
      },
      {
        title: '操作',
        key: "id",
        render: (_, record) =>
          // this.state.List.length > 0 ? (
          //   <Popconfirm title="是否删除" onConfirm={() => this.hanndleDelete()}>
          //     <a>删除</a>
          //   </Popconfirm>
          // ) : null,
          <Popconfirm title="是否删除" onConfirm={() => this.hanndleDelete(_, record)}>
            <a>删除</a>
          </Popconfirm>
      }

    ]
  }
  hanndleDelete = async (_, record) => {
    console.log("record: ", record)
    await axios.delete(`http://localhost:3001/data/${record.id}`)
    // 重新获取列表
    this.loadList()
  }
  // 点击搜索图标、清除图标，或按下回车键时的回调
  onSearch = (value) => {
    console.log(value)
  }
  loadList = async () => {
    try {
      const resp = await axios.get('http://localhost:3001/data')
      console.log(resp)
      const data = resp.data
      this.setState({
        list: data
      })
    } catch (err) {
      console.log("loadList err:", err)
    }
  }
  componentDidMount () {
    this.loadList()
  }
  render () {
    return (
      <div className="container">
        {/* 搜索 */}
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={this.onSearch}
        />
        {/* Table */}
        <Table dataSource={this.state.list} columns={this.state.columns} />
      </div>
    )
  }
}


export default App
