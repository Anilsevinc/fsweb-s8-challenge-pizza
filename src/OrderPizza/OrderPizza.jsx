import React from 'react'
import OrderHeader from './OrderHeader/OrderHeader'
import OrderForm from './OrderForm/OrderForm'
import { OrderPizzaSection } from './orderPizza.style'

function OrderPizza({ onNavigateHome, onOrderSuccess }) {
  return (
    <>
      <OrderHeader />
      <OrderPizzaSection>
        <OrderForm onOrderSuccess={onOrderSuccess} onNavigateHome={onNavigateHome} />
      </OrderPizzaSection>
    </>
  )
}

export default OrderPizza