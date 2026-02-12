import styled from 'styled-components'

/* Sayfanın ana stil dosyasını bu şekilde tanımladım  */
export const OrderPizzaSection = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 2rem clamp(0.75rem, 4vw, 1rem);
  box-sizing: border-box;
  max-width: 1200px;
  display: flex;
  justify-content: center;
`

/* Content wrapper - sayfanın diğer içerikleriyle aynı genişlikte olması için bir div oluşturdum ve sola hizaladım */
export const ContentWrapper = styled.div`
  width: 530px;
`
