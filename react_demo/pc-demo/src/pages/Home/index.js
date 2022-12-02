
import React, { useRef, useEffect } from 'react'
// 1. 引入echarts 如何在react获取 dom 用 useRef 用 useEffect 获取dom节点初始化echarts

// 2 抽取定制化的参数，先把最小的demo跑起来
// 3 。按需求，定制化参数
import Bar from '@/components/Bar'


const Home = () => {
  return (<div>
    <Bar></Bar>
    <Bar></Bar>
  </div>)
}

export default Home