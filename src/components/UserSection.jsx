import React from "react";
import LineChart from '../components/charts/LineChart';
import {
  chatbotLineData,
  chatbotBarData,
  chatbotBarDataCost,
  chatbotDoughnutData,
} from '../data/chartData';import {
  lineChartData,
} from '../data/chartData';


function UserSection() {
  return (
  <div style={{ color: 'black' }}>

    <h3>사용량 영역</h3>

    {/* 카드 2개 */}
    <div style={{ display: 'flex', gap: '20px', width: '100%', marginBottom: '32px' }}>
      <div className="card">
        <h4>총 사용자 수</h4>
        <p>1,234명</p>
      </div>
      <div className="card">
        <h4>총 사용량</h4>
        <p>567GB</p>
      </div>
    </div>
    {/* 바 차트 */}
    <div style={{ display: 'flex', gap: '40px', width: '100%' }}>
      
          <LineChart 
            title="월별 매출 추이" 
            data={chatbotLineData}
            />
        
        
          <LineChart 
            title="월별 비용 추이" 
            data={chatbotBarDataCost}
            />
        
    </div>
        
  
  </div>
  );
}

export default UserSection;
