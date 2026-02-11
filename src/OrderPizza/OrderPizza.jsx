import React from 'react'
import OrderHeader from './OrderHeader/OrderHeader'
import { OrderPizzaSection, ContentWrapper } from './orderPizza.style'

/* OrderPizza sayfasının içeriğini oluşturuyorum, ilk olarak Header bölümünü oluşturdum */
function OrderPizza() {
  return (
    <>
      <OrderHeader />
      <OrderPizzaSection>
        <ContentWrapper>
        </ContentWrapper>
      </OrderPizzaSection>
    </>
  )
}

export default OrderPizza