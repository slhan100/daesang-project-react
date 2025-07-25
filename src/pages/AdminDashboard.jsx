import React, { useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
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
    <div>
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar selected={selected} onSelect={setSelected} />
        <main style={{ flex: 1, padding: '32px' }}>
          {content}
        </main>
      </div>
    </div>
  )
}

export default AdminDashboard