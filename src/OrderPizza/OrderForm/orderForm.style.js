import styled from 'styled-components'

export const FormWrapper = styled.div`
  width: 530px;
  margin: 0 auto;
`

export const FormSection = styled.div`
  margin-bottom: 24px;

  h3 {
    font-family: 'Barlow', sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: #292929;
    margin: 0 0 8px 0;
  }

  h3 .required {
    color: #CE2829;
  }
`

/* Boyut Seç + Hamur Seç yan yana */
export const SizeAndDoughRow = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 24px;

  & > div {
    flex: 1;
    min-width: 0;
  }

  h3 {
    font-family: 'Barlow', sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: #292929;
    margin: 0 0 8px 0;
  }

  h3 .required {
    color: #CE2829;
  }
`

export const PizzaInfo = styled.div`
  margin-bottom: 24px;

  h2 {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 28px;
    font-weight: 400;
    color: #292929;
    margin: 0 0 8px 0;
  }

  .price-row {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 16px;
  }

  .price-row .price {
    font-family: 'Barlow', sans-serif;
    font-size: 24px;
    font-weight: 600;
    color: #292929;
  }

  .price-row .rating {
    font-family: 'Barlow', sans-serif;
    font-size: 14px;
    color: #5F5F5F;
  }

  p {
    font-family: 'Barlow', sans-serif;
    font-size: 14px;
    line-height: 1.6;
    color: #5F5F5F;
    margin: 0;
  }
`

export const SizeOptions = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;

  .size-option {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .size-option input[type="radio"] {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }

  .size-option label {
    font-family: 'Barlow', sans-serif;
    font-size: 14px;
    color: #292929;
    cursor: pointer;
  }
`

export const DoughSelect = styled.select`
  width: 100%;
  padding: 12px;
  border: 1px solid #5F5F5F;
  border-radius: 4px;
  font-family: 'Barlow', sans-serif;
  font-size: 14px;
  color: #292929;
  background: #fff;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #CE2829;
  }
`

export const ToppingsGrid = styled.div`
  .toppings-hint {
    margin: 0 0 12px 0;
    font-family: 'Barlow', sans-serif;
    font-size: 14px;
    color: #5F5F5F;
  }

  .toppings-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, auto);
    gap: 8px 16px;
  }

  .topping-item {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .topping-item input[type="checkbox"] {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }

  .topping-item label {
    font-family: 'Barlow', sans-serif;
    font-size: 14px;
    color: #292929;
    cursor: pointer;
  }
`

export const NotesTextarea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #5F5F5F;
  border-radius: 4px;
  font-family: 'Barlow', sans-serif;
  font-size: 14px;
  color: #292929;
  resize: none;
  box-sizing: border-box;
  min-height: 44px;
  height: 44px;

  &:focus {
    outline: none;
    border-color: #CE2829;
  }

  &::placeholder {
    color: #5F5F5F;
  }
`

/* Sipariş notu kutusundan sonra, aynı genişlikte ayırıcı çizgi */
export const NotesSeparator = styled.div`
  width: 100%;
  height: 0;
  border-top: 1px solid #5F5F5F;
  margin-top: 16px;
`

export const QuantityRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 24px;

  .quantity-group {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .quantity-group button {
    width: 36px;
    height: 36px;
    background: #FDC913;
    border: none;
    border-radius: 4px;
    font-size: 18px;
    font-weight: 600;
    color: #292929;
    cursor: pointer;
  }

  .quantity-group button:hover {
    background: #ffd633;
  }

  .quantity-group input {
    width: 48px;
    text-align: center;
    padding: 8px;
    border: 1px solid #5F5F5F;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 600;
    box-sizing: border-box;
  }
`

/* Sipariş toplamı kutusu: başlık + seçimler/toplam + buton aynı kutu içinde */
export const SummaryCard = styled.div`
  flex: 1;
  min-width: 200px;
  max-width: 280px;
  padding: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: #fff;
  box-sizing: border-box;

  .summary-title {
    font-family: 'Barlow', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: #292929;
    margin: 0 0 12px 0;
  }

  .summary {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 16px;
  }

  .summary-row {
    display: flex;
    justify-content: space-between;
    font-family: 'Barlow', sans-serif;
    font-size: 14px;
    color: #292929;
  }

  .summary-row.total-row {
    color: #CE2829;
    font-weight: 600;
  }
`

export const SubmitButton = styled.button`
  width: 100%;
  padding: 16px;
  background: #FDC913;
  border: none;
  border-radius: 4px;
  font-family: 'Barlow', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #292929;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background: #ffd633;
  }
`
