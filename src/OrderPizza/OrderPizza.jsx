import React from 'react'
import OrderHeader from './OrderHeader/OrderHeader'
import OrderForm from './OrderForm/OrderForm'
import { OrderPizzaSection } from './orderPizza.style'

function OrderPizza({ onNavigateHome, onOrderSuccess }) {
  return (
    <>
      <OrderHeader onNavigateHome={onNavigateHome} />
      <OrderPizzaSection>
        <OrderForm onOrderSuccess={onOrderSuccess} />
      </OrderPizzaSection>
    </>
  )
}

export default OrderPizza