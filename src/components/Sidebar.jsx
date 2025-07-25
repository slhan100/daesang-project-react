import React from 'react'

function Sidebar({ selected, onSelect }) {
  return (
    <aside style={{
      width: '200px',
      background: '#f4f4f4',
      height: '100vh',
      padding: '24px 0',
      boxSizing: 'border-box'
    }}>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li
            style={{
              margin: '16px 0',
              padding: '8px 16px',
              background: selected === 'user' ? '#ddd' : 'transparent',
              cursor: 'pointer'
            }}
            onClick={() => onSelect('user')}
          >
            사용자
          </li>
          <li
            style={{
              margin: '16px 0',
              padding: '8px 16px',
              background: selected === 'usage' ? '#ddd' : 'transparent',
              cursor: 'pointer'
            }}
            onClick={() => onSelect('usage')}
          >
            사용량
          </li>
          <li
            style={{
              margin: '16px 0',
              padding: '8px 16px',
              background: selected === 'log' ? '#ddd' : 'transparent',
              cursor: 'pointer'
            }}
            onClick={() => onSelect('log')}
          >
            로그
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar