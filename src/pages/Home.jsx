import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="home-container">
      <div className="home-header">
        <h1> 대상 프로젝트에 오신 것을 환영합니다!</h1>
        <p>관리자 대시보드와 챗봇 대시보드를 통해 시스템을 관리하세요.</p>
      </div>
      
      <div className="home-content">
        <div className="welcome-section">
          <div className="logo-section">
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/pages/Home.jsx</code> and save to test HMR
            </p>
          </div>
        </div>
        
        <div className="features-grid">
          <div className="feature-card">
            <h3>📊 관리자 대시보드</h3>
            <p>시스템 전반의 통계와 관리 기능을 제공합니다.</p>
          </div>
          <div className="feature-card">
            <h3>🤖 챗봇 대시보드</h3>
            <p>챗봇 성능과 대화 기록을 모니터링합니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
// This file defines a Home component that renders the main content of the application.