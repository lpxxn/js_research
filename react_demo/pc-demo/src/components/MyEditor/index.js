import React from 'react'
import ReactQuill from 'react-quill' // 引入 ReactQuill 组件

class MyEditor extends React.Component {
  // 构造函数
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  // 处理编辑器内容变化
  handleChange (value) {
    this.setState({ text: value })
  }

  // 渲染组件
  render () {
    return (
      <ReactQuill
        value={this.state.text}
        onChange={this.handleChange}
        modules={{
          // 启用图片模块
          image: true,
          // 自定义图片模块，支持拖拽改变大小
          ImageResize: {
            modules: ['Resize', 'DisplaySize', 'Toolbar'],
            handleStyles: {
              backgroundColor: 'black',
              border: 'none',
              color: 'white'
            },
            displayStyles: {
              backgroundColor: 'black',
              border: 'none',
              color: 'white'
            },
            toolbarStyles: {
              backgroundColor: 'black',
              color: 'white'
            }
          }
        }}
      />
    )
  }
}
/*
import MyEditor from './MyEditor'; // 引入组件

class App extends React.Component {
  // 构造函数
  constructor(props) {
    super(props);
    this.state = {
      // 初始内容
      content: '<h1>Hello, World!</h1>'
    }
  }

  // 处理编辑器内容变化
  handleChange(value) {
    this.setState({ content: value });
  }

  // 渲染组件
  render() {
    return (
      <div>
        <MyEditor
          value={this.state.content}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}



import MyEditor from './MyEditor'; // 引入组件

class MyPage extends React.Component {
  // 构造函数
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    }
  }

  // 加载已有的内容
  componentDidMount() {
    fetch('/api/content')
      .then(res => res.json())
      .then(content => {
        this.setState({ content });
      });
  }

  // 处理编辑器内容变化
  handleChange(content) {
    this.setState({ content });
  }

  render() {
    return (
      <div>
        <MyEditor
          content={this.state.content}
          onChange={this.handleChange}
        />
      </div>

*/