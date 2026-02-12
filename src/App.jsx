import { useState } from 'react'
import './App.css'
import HomePage from './HomePage/HomePage.jsx'
import OrderPizza from './OrderPizza/OrderPizza.jsx'
import OrderSuccess from './OrderSuccess/OrderSuccess.jsx'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [orderResponse, setOrderResponse] = useState(null)

  const handleOrderSuccess = (data) => {
    setOrderResponse(data)
    setCurrentPage('success')
  }

  return (
    <div className="app-root">
      {currentPage === 'home' && (
        <HomePage onAciktimClick={() => setCurrentPage('order')} />
      )}
      {currentPage === 'order' && (
        <OrderPizza
          onNavigateHome={() => setCurrentPage('home')}
          onOrderSuccess={handleOrderSuccess}
        />
      )}
      {currentPage === 'success' && (
        <OrderSuccess
          orderData={orderResponse}
          onNavigateHome={() => {
            setCurrentPage('home')
            setOrderResponse(null)
          }}
        />
      )}
    </div>
  )
}

export default App