import './App.css'
import React from 'react'
import { Button, Input, Space, Table } from 'antd'
const { Search } = Input

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
        dataIndex: 'action',
        key: 'action',
      }

    ]
  }
  // 点击搜索图标、清除图标，或按下回车键时的回调
  onSearch = (value) => {
    console.log(value)
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
