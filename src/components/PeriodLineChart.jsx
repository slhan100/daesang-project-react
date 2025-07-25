import React, { useEffect, useRef } from 'react'
import ApexCharts from 'apexcharts'
import periodChartData from '../data/periodChartData.json'

function PeriodLineChart() {
  const chartRefToken = useRef(null)
  const chartRefPrice = useRef(null)

  useEffect(() => {
    const categories = periodChartData.map(item => item.date)

    // 토큰 사용량 차트
    const seriesToken = [{
      name: '토큰 사용량',
      data: periodChartData.map(item => item.value)
    }]
    const optionsToken = {
      chart: { type: 'line', height: 300 },
      colors: ['#fb3200ff'], 
      xaxis: { categories, title: { text: '날짜' } },
      yaxis: { title: { text: '토큰 사용량' } },
      stroke: { curve: 'straight' },
      markers: { size: 4 }
    }
    const chartToken = new ApexCharts(chartRefToken.current, { ...optionsToken, series: seriesToken })
    chartToken.render()

    // Price 차트
    const seriesPrice = [{
      name: 'Price',
      data: periodChartData.map(item => item.price)
    }]
    const optionsPrice = {
      chart: { type: 'line', height: 300 },
      colors: ['#1035eeff'], 
      xaxis: { categories, title: { text: '날짜' } },
      yaxis: { title: { text: 'Price' } },
      stroke: { curve: 'straight' },
      markers: { size: 4 }
    }
    const chartPrice = new ApexCharts(chartRefPrice.current, { ...optionsPrice, series: seriesPrice })
    chartPrice.render()

    return () => {
      chartToken.destroy()
      chartPrice.destroy()
    }
  }, [])

  return (
    <div style={{ display: 'flex', gap: '24px' }}>
      <div ref={chartRefToken} style={{ width: 450, height: 300 }} />
      <div ref={chartRefPrice} style={{ width: 450, height: 300 }} />
    </div>
  )
}

export default PeriodLineChart