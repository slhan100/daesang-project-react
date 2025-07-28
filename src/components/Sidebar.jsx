import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <ul className="sidebar-menu">
          <li className="sidebar-item">
            <Link 
              to="/" 
              className={`sidebar-link ${isActive('/') ? 'active' : ''}`}
            >
              🏠 홈
            </Link>
          </li>
          <li className="sidebar-item">
            <Link 
              to="/admin" 
              className={`sidebar-link ${isActive('/admin') ? 'active' : ''}`}
            >
              📊 사용량 관리자 대시보드
            </Link>
            <ul className="sidebar-submenu">
              <li className="sidebar-subitem">
                <Link 
                  to="/admin/users" 
                  className={`sidebar-link ${isActive('/admin/users') ? 'active' : ''}`}
                >
                  👥 사용자
                </Link>
              </li>
              <li className="sidebar-subitem">
                <Link 
                  to="/admin/analytics" 
                  className={`sidebar-link ${isActive('/admin/analytics') ? 'active' : ''}`}
                >
                  📈 사용량 로그 분석
                </Link>
              </li>
              <li className="sidebar-subitem">
                <Link 
                  to="/admin/settings" 
                  className={`sidebar-link ${isActive('/admin/settings') ? 'active' : ''}`}
                >
                  ⚙️ 설정
                </Link>
              </li>
            </ul>
          </li>
          <li className="sidebar-item">
            <Link 
              to="/chatbot" 
              className={`sidebar-link ${isActive('/chatbot') ? 'active' : ''}`}
            >
              🤖 챗봇 대시보드
            </Link>
          </li>
          <li className="sidebar-item">
            <Link 
              to="/charts" 
              className={`sidebar-link ${isActive('/charts') ? 'active' : ''}`}
            >
              📊 차트 대시보드
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar