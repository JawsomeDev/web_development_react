import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App2.tsx'
// import './index.css' -> 얘 사용 안하고, vite에서 미리 정의된 스타일 사용 안할거임

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
