
import React from 'react'
// 1. 引入echarts 如何在react获取 dom 用 useRef 用 useEffect 获取dom节点初始化echarts

// 2 抽取定制化的参数，先把最小的demo跑起来
// 3 。按需求，定制化参数
import Bar from '@/components/Bar'


const Home = () => {
  return (<div>
    <Bar title='测试标题1' xData={['a', 'b', 'c', 'd', 'e']} yData={[1, 30, 2, 10, 69]} stype={{ width: 300, height: 300 }}></Bar>
    <Bar title='销售数量' xData={['5010', '年', '啥', '呢', '多']} yData={[600, 30, 989, 1433, 800]} stype={{ width: 300, height: 300 }}></Bar>
  </div>)
}

export default Home