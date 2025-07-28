import React from 'react';
import LineChart from '../components/charts/LineChart';
import BarChart from '../components/charts/BarChart';
import DoughnutChart from '../components/charts/DoughnutChart';
import PolarAreaChart from '../components/charts/PolarAreaChart';
import RadarChart from '../components/charts/RadarChart';
import {
  lineChartData,
  barChartData,
  doughnutChartData,
  polarAreaChartData,
  radarChartData,
} from '../data/chartData';

const ChartDashboard = () => {
  return (
    <div className="chart-dashboard">
      <div className="dashboard-header">
        <h1>📊 차트 대시보드</h1>
        <p>다양한 Chart.js 차트들을 확인해보세요</p>
      </div>

      <div className="charts-grid">
        {/* 라인 차트 */}
        <div className="chart-card">
          <LineChart 
            title="월별 매출 및 비용 추이" 
            data={lineChartData} 
          />
        </div>

        {/* 바 차트 */}
        <div className="chart-card">
          <BarChart 
            title="요일별 방문자 수" 
            data={barChartData} 
          />
        </div>

        {/* 도넛 차트 */}
        <div className="chart-card">
          <DoughnutChart 
            title="상품별 판매 비율" 
            data={doughnutChartData} 
          />
        </div>

        {/* 극좌표 영역 차트 */}
        <div className="chart-card">
          <PolarAreaChart 
            title="마케팅 채널별 성과" 
            data={polarAreaChartData} 
          />
        </div>

        {/* 레이더 차트 */}
        <div className="chart-card wide">
          <RadarChart 
            title="제품 평가 지표" 
            data={radarChartData} 
          />
        </div>
      </div>

      <div className="chart-info">
        <h2>차트 종류 설명</h2>
        <div className="info-grid">
          <div className="info-card">
            <h3>📈 라인 차트</h3>
            <p>시간에 따른 데이터 변화를 보여주는 차트입니다. 매출, 비용 등의 추이를 확인할 수 있습니다.</p>
          </div>
          <div className="info-card">
            <h3>📊 바 차트</h3>
            <p>카테고리별 데이터를 비교하기 좋은 차트입니다. 요일별 방문자 수 등을 확인할 수 있습니다.</p>
          </div>
          <div className="info-card">
            <h3>🍩 도넛 차트</h3>
            <p>전체 대비 비율을 보여주는 차트입니다. 상품별 판매 비율 등을 확인할 수 있습니다.</p>
          </div>
          <div className="info-card">
            <h3>🎯 극좌표 영역 차트</h3>
            <p>각 항목의 크기를 비교하기 좋은 차트입니다. 마케팅 채널별 성과 등을 확인할 수 있습니다.</p>
          </div>
          <div className="info-card">
            <h3>🕷️ 레이더 차트</h3>
            <p>여러 지표를 한 번에 비교하기 좋은 차트입니다. 제품 평가 지표 등을 확인할 수 있습니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartDashboard; 