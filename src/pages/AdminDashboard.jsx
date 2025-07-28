import React from 'react'
import UserSection from '../components/UserSection'
import UsageSection from '../components/UsageSection'
import LogSection from '../components/LogSection'
import PeriodLineChart from '../components/PeriodLineChart'

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <div className="dashboard-content">
        <div className="dashboard-sections">
          
          
          <div className="section">
            <h2>사용량 통계</h2>
            <UsageSection />
            {/* <PeriodLineChart /> */}
          </div>

          <div className="section">
            <h2>사용자 관리</h2>
            <UserSection />
          </div>
          
          <div className="section">
            <h2>로그 관리</h2>
            <LogSection />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard