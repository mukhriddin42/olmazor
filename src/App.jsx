import React from 'react'
import AppRoutes from './routes/AppRoutes'
import ErrorBoundary from 'antd/es/alert/ErrorBoundary'

const App = () => {
  return (
    <ErrorBoundary>
      <AppRoutes />
    </ErrorBoundary>
  )
}

export default App