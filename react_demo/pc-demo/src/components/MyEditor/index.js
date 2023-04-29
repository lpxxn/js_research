import React from 'react'
import ReactQuill, { Quill } from 'react-quill' // 引入 ReactQuill 组件
// import ImageResize from 'quill-image-resize'
import 'react-quill/dist/quill.snow.css'
// Quill.register('modules/ImageResize', ImageResize)
import ResizeModule from "@botom/quill-resize-module"

Quill.register("modules/resize", ResizeModule)

function MyEditor ({ value, onChange }) {
  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' }
      ],
      ['link', 'image', 'video'],
      ['clean']
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false
    },
    // ImageResize: {
    //   parchment: Quill.import('parchment')
    // }
    resize: {
      locale: {
        // change them depending on your language
        altTip: "Hold down the alt key to zoom",
        floatLeft: "Left",
        floatRight: "Right",
        center: "Center",
        restore: "Restore",
      },
    },
  }

  // 渲染组件
  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={onChange}
      modules={modules}
    />
  )

}

export default MyEditor
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