import React, { useState } from 'react';
import LineChart from '../components/charts/LineChart';
import BarChart from '../components/charts/BarChart';
import DoughnutChart from '../components/charts/DoughnutChart';
import {
  chatbotLineData,
  chatbotBarData,
  chatbotDoughnutData,
} from '../data/chartData';
import '../App.css';

const ChatbotDashboard = () => {
  const [chatStats] = useState({
    totalConversations: 1247,
    activeUsers: 89,
    responseTime: 2.3,
    satisfactionRate: 94.2
  });

  const [recentConversations] = useState([
    {
      id: 1,
      user: "김철수",
      message: "상품 문의드립니다",
      time: "10:30",
      status: "completed"
    },
    {
      id: 2,
      user: "이영희",
      message: "배송 조회 부탁드려요",
      time: "10:25",
      status: "in-progress"
    },
    {
      id: 3,
      user: "박민수",
      message: "환불 신청하고 싶어요",
      time: "10:20",
      status: "completed"
    },
    {
      id: 4,
      user: "최지영",
      message: "회원가입 방법 알려주세요",
      time: "10:15",
      status: "completed"
    }
  ]);

  const [popularQuestions] = useState([
    { question: "배송 조회 방법", count: 156 },
    { question: "환불 신청 절차", count: 89 },
    { question: "회원가입 방법", count: 67 },
    { question: "상품 문의", count: 45 },
    { question: "결제 방법", count: 34 }
  ]);

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>🤖 챗봇 대시보드</h1>
        <p>실시간 챗봇 성능 및 통계 모니터링</p>
      </div>

      {/* 통계 카드 섹션 */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">💬</div>
          <div className="stat-content">
            <h3>총 대화 수</h3>
            <p className="stat-number">{chatStats.totalConversations.toLocaleString()}</p>
            <span className="stat-change positive">+12%</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">👥</div>
          <div className="stat-content">
            <h3>활성 사용자</h3>
            <p className="stat-number">{chatStats.activeUsers}</p>
            <span className="stat-change positive">+5%</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">⚡</div>
          <div className="stat-content">
            <h3>평균 응답 시간</h3>
            <p className="stat-number">{chatStats.responseTime}초</p>
            <span className="stat-change negative">-0.3초</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">⭐</div>
          <div className="stat-content">
            <h3>만족도</h3>
            <p className="stat-number">{chatStats.satisfactionRate}%</p>
            <span className="stat-change positive">+2.1%</span>
          </div>
        </div>
      </div>

      {/* 차트 섹션 */}
      <div className="charts-section">
        <h2>📊 챗봇 통계 차트</h2>
        <div className="charts-grid">
          <div className="chart-card">
            <LineChart 
              title="시간별 대화 수 추이" 
              data={chatbotLineData} 
            />
          </div>
          <div className="chart-card">
            <BarChart 
              title="인기 질문 빈도" 
              data={chatbotBarData} 
            />
          </div>
          <div className="chart-card">
            <DoughnutChart 
              title="대화 상태 분포" 
              data={chatbotDoughnutData} 
            />
          </div>
        </div>
      </div>

      {/* 메인 콘텐츠 섹션 */}
      <div className="dashboard-content">
        {/* 최근 대화 기록 */}
        <div className="content-section">
          <h2>최근 대화 기록</h2>
          <div className="conversations-list">
            {recentConversations.map((conversation) => (
              <div key={conversation.id} className="conversation-item">
                <div className="conversation-header">
                  <span className="user-name">{conversation.user}</span>
                  <span className={`status-badge ${conversation.status}`}>
                    {conversation.status === 'completed' ? '완료' : '진행중'}
                  </span>
                </div>
                <p className="conversation-message">{conversation.message}</p>
                <span className="conversation-time">{conversation.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 인기 질문 */}
        <div className="content-section">
          <h2>인기 질문 TOP 5</h2>
          <div className="popular-questions">
            {popularQuestions.map((item, index) => (
              <div key={index} className="question-item">
                <div className="question-rank">#{index + 1}</div>
                <div className="question-content">
                  <p className="question-text">{item.question}</p>
                  <span className="question-count">{item.count}회</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 챗봇 제어 패널 */}
      <div className="control-panel">
        <h2>챗봇 제어</h2>
        <div className="control-buttons">
          <button className="control-btn primary">챗봇 활성화</button>
          <button className="control-btn secondary">응답 시간 조정</button>
          <button className="control-btn secondary">학습 데이터 업데이트</button>
          <button className="control-btn warning">긴급 정지</button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotDashboard; 