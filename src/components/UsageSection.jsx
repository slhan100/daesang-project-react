import React from 'react'
import ApexCharts from 'apexcharts' // ApexCharts를 사용하여 차트를 그리기 위한 라이브러리
import 'apexcharts/dist/apexcharts.css' // ApexCharts 스타일을 불러오기
import usageData from '../data/usageData.json' // 가상의 법인 데이터 파일
import chartData from '../data/chartData.json' // 차트 데이터 파일


function UsageSection() {
    // apexchart의 donut 차트를 사용하여 사용량을 시각화
    const chartRef = React.useRef(null)
    const chartRef2 = React.useRef(null) // 두 번째 차트 ref 추가


  React.useEffect(() => {
    const series = chartData.map(item => item.value)
    const cost = chartData.map(item => item.cost)
    const labels = chartData.map(item => item.label)

    const options = {
      chart: { type: 'donut', height: 300 },
      labels,
      legend: { position: 'bottom' }
    }

    const chart = new ApexCharts(chartRef.current, { ...options, series })
    chart.render()

     // 두 번째 차트 생성 (옵션을 다르게 하고 싶으면 options2로 따로 선언)
    const chart2 = new ApexCharts(chartRef2.current, { ...options, series : cost })
    chart2.render()

    return () => {
        chart.destroy()
        chart2.destroy() 
    }
  }, [])

  return(
  <div style={{ color: 'black' }}>
    <h3>사용량 영역</h3>
      <div style={{ display: 'flex', gap: '24px' }}>
        법인 : 
            {usageData.map(group => (
            <label key={group.id} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input type="checkbox" />
                {group.name} - {group.value}
            </label>
            ))}
           
      </div>
      <div style={{ display: 'flex', gap: '24px' }}>
        부서 
      </div>
      <div style={{ display: 'flex', gap: '24px' }}>
        LLM : 
        <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input type="checkbox" />Claude
                <input type="checkbox" />Nova
                <input type="checkbox" />Llama
                <input type="checkbox" />기타

        </label>
      </div>
      <div style={{ display: 'flex', gap: '24px' }}>
        개인
      </div>
      <div style={{ display: 'flex', gap: '24px' }}>
        기간
      </div>
      <div style={{ display: 'flex', gap: '24px' }}>
        차트
        <div ref={chartRef} style={{ width: 400, height: 300 }} />
        <div ref={chartRef2} style={{ width: 400, height: 300 }} />    
      </div>
      <div style={{ display: 'flex', gap: '24px' }}>
        토큰 & price
        </div>
  </div>
  )
}

export default UsageSection