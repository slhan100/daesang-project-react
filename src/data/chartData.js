// 차트 데이터 유틸리티

// 라인 차트 데이터
export const lineChartData = {
  labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
  datasets: [
    {
      label: '매출',
      data: [12, 19, 3, 5, 2, 3],
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
      tension: 0.1,
    },
    {
      label: '비용',
      data: [8, 15, 2, 4, 1, 2],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      tension: 0.1,
    },
  ],
};

// 바 차트 데이터
export const barChartData = {
  labels: ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'],
  datasets: [
    {
      label: '방문자 수',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 206, 86, 0.8)',
        'rgba(75, 192, 192, 0.8)',
        'rgba(153, 102, 255, 0.8)',
        'rgba(255, 159, 64, 0.8)',
        'rgba(199, 199, 199, 0.8)',
      ],
    },
  ],
};

// 도넛 차트 데이터
export const doughnutChartData = {
  labels: ['상품 A', '상품 B', '상품 C', '상품 D'],
  datasets: [
    {
      data: [300, 50, 100, 80],
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 206, 86, 0.8)',
        'rgba(75, 192, 192, 0.8)',
      ],
      borderWidth: 2,
    },
  ],
};

// 극좌표 영역 차트 데이터
export const polarAreaChartData = {
  labels: ['웹사이트', '모바일 앱', '소셜미디어', '이메일', '전화'],
  datasets: [
    {
      label: '마케팅 채널',
      data: [11, 16, 7, 3, 14],
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 206, 86, 0.8)',
        'rgba(75, 192, 192, 0.8)',
        'rgba(153, 102, 255, 0.8)',
      ],
    },
  ],
};

// 레이더 차트 데이터
export const radarChartData = {
  labels: ['기술력', '디자인', '사용성', '성능', '보안', '지원'],
  datasets: [
    {
      label: '현재 수준',
      data: [85, 75, 90, 80, 95, 70],
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)',
    },
    {
      label: '목표 수준',
      data: [95, 90, 95, 90, 100, 85],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)',
    },
  ],
};

// 챗봇 대시보드용 차트 데이터
export const chatbotLineData = {
  labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
  datasets: [
    {
      label: '대화 수',
      data: [12, 19, 45, 67, 89, 34],
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
      tension: 0.4,
    },
  ],
};

export const chatbotBarDataCost = {
  labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
  datasets: [
    {
      label: '대화 수',
      data: [12, 19, 45, 67, 89, 34],
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
      tension: 0.4,
    },
  ],
};

export const chatbotDoughnutData = {
  labels: ['완료', '진행중', '대기', '오류'],
  datasets: [
    {
      data: [65, 20, 10, 5],
      backgroundColor: [
        'rgba(75, 192, 192, 0.8)',
        'rgba(255, 206, 86, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 99, 132, 0.8)',
      ],
      borderWidth: 2,
    },
  ],
};

export const chatbotBarData = {
  labels: ['배송 문의', '환불 신청', '상품 문의', '회원가입', '결제 문의'],
  datasets: [
    {
      label: '질문 빈도',
      data: [156, 89, 67, 45, 34],
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 206, 86, 0.8)',
        'rgba(75, 192, 192, 0.8)',
        'rgba(153, 102, 255, 0.8)',
      ],
    },
  ],
}; 