import * as echarts from 'echarts'
import React, { useRef, useEffect } from 'react'

function Bar ({ title, xData = ['x1', 'x2'], yData = [5, 20, 36, 10], stype = { height: 400, width: 400 } }) {
  const domRef = useRef()
  const chartInit = () => {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(domRef.current)
    // 绘制图表
    myChart.setOption({
      title: {
        text: title
      },
      tooltip: {},
      xAxis: {
        data: xData
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: yData
        }
      ]
    })
  }
  useEffect(() => {
    chartInit()
  }, [])

  return (<div>
    {/* 准备一个挂载节点 */}
    <div ref={domRef} style={stype}></div>
  </div>)
}

export default Bar