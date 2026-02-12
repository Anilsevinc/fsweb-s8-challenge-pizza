import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header.jsx'
import OrderPizza from './OrderPizza/OrderPizza.jsx'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <div className="app-root">
      {currentPage === 'home' && (
        <Header onAciktimClick={() => setCurrentPage('order')} />
      )}
      {currentPage === 'order' && (
        <OrderPizza onNavigateHome={() => setCurrentPage('home')} />
      )}
    </div>
  )
}

export default App