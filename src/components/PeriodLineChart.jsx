import React, { useState } from 'react'
import UserSection from '../components/UserSection'
import UsageSection from '../components/UsageSection'
import LogSection from '../components/LogSection'
import PeriodLineChart from '../components/PeriodLineChart'

function AdminDashboard() {
  const [selected, setSelected] = useState('user')

  let content
  if (selected === 'user') content = <UserSection />
  else if (selected === 'usage') content = (
    <>
      <UsageSection />
      <PeriodLineChart /> {/* 같이 렌더링 */}
    </>
  ) 
  else if (selected === 'log') content = <LogSection />

  return (
    <div className="admin-dashboard">
      <div className="dashboard-content">
        {content}
      </div>
    </div>
  )
}

export default AdminDashboard