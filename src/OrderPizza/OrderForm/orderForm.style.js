import styled from 'styled-components'

export const FormWrapper = styled.div`
  width: 530px;
  max-width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 16px;

  @media (min-width: 481px) {
    padding: 0;
  }
`

/* Nav'ın olduğu div'i saran parent: sadece bej arka plan, full width */
export const BejFullWidthWrapper = styled.div`
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  box-sizing: border-box;
  background: #FAF7F2;
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

  .name-input {
    width: 100%;
    padding: 12px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    font-family: 'Barlow', sans-serif;
    font-size: 14px;
    color: #292929;
    background: #FAF7F2;
    box-sizing: border-box;
  }

  .name-input:focus {
    outline: none;
    border-color: #CE2829;
  }

  .field-error {
    font-size: 12px;
    color: #CE2829;
    margin-top: 4px;
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

  @media (max-width: 480px) {
    flex-direction: column;
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

  .field-error {
    font-size: 12px;
    color: #CE2829;
    margin-top: 4px;
  }
`

export const PizzaInfo = styled.div`
  margin-bottom: 24px;
  padding: 0 0 24px 0;
  max-width: 530px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;

  .form-banner {
    width: 100%;
    max-height: 280px;
    object-fit: cover;
    object-position: center;
    border-radius: 0;
    margin-bottom: 16px;
    display: block;
  }

  .breadcrumb {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 16px;
    font-family: 'Barlow', sans-serif;
    font-size: 14px;
    color: #5F5F5F;
  }

  .breadcrumb button {
    background: none;
    border: none;
    color: #5F5F5F;
    cursor: pointer;
    padding: 0;
  }

  .breadcrumb button:hover {
    color: #292929;
    text-decoration: underline;
  }

  .breadcrumb .sep {
    color: #5F5F5F;
  }

  .breadcrumb .current {
    color: #CE2829;
    font-weight: 600;
  }

  h2 {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 28px;
    font-weight: 400;
    color: #292929;
    margin: 0 0 8px 0;
  }

  .price-row {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
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

  .price-row .rating .rating-count {
    margin-left: 7em;
  }

  p {
    font-family: 'Barlow', sans-serif;
    font-size: 14px;
    line-height: 1.6;
    color: #5F5F5F;
    margin: 0;
  }

  /* 480px altında: navbar ve paragraf esnek */
  @media (max-width: 480px) {
    padding-left: 16px;
    padding-right: 16px;
    max-width: 100%;

    .form-banner {
      max-height: 200px;
    }

    .breadcrumb {
      flex-wrap: wrap;
      gap: 4px;
      font-size: 12px;
      margin-bottom: 12px;
    }

    .breadcrumb .sep {
      margin: 0 2px;
    }

    h2 {
      font-size: 22px;
    }

    .price-row .price {
      font-size: 20px;
    }

    .price-row .rating .rating-count {
      margin-left: 0;
    }

    p {
      font-size: 13px;
      line-height: 1.55;
      word-wrap: break-word;
      overflow-wrap: break-word;
    }
  }
`

export const SizeOptions = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  .size-option {
    position: relative;
  }

  .size-option input[type="radio"] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  .size-option label {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    font-family: 'Barlow', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: #292929;
    background: #FAF7F2;
    border: 1px solid #e0e0e0;
    cursor: pointer;
    transition: background 0.2s, border-color 0.2s;
  }

  .size-option input[type="radio"]:checked + label {
    background: #e8e8e8;
    border-color: #d0d0d0;
  }
`

export const DoughSelect = styled.select`
  width: 100%;
  padding: 12px 36px 12px 12px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-family: 'Barlow', sans-serif;
  font-size: 14px;
  color: #292929;
  background: #FAF7F2;
  box-sizing: border-box;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%235F5F5F' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;

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

  /* Dar ekranlarda 2 sütun (≤480px) */
  @media (max-width: 480px) {
    .toppings-list {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: auto;
    }
  }

  .topping-item {
    position: relative;
  }

  .topping-item input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  .topping-item label {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 12px;
    font-family: 'Barlow', sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: #292929;
    background: #fff;
    border: none;
    cursor: pointer;
    white-space: nowrap;
  }

  .topping-item label::before {
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    border: 1px solid #d0d0d0;
    border-radius: 4px;
    background: #FAF7F2;
  }

  .topping-item input[type="checkbox"]:checked + label {
    background: #fff;
    border: none;
  }

  .topping-item input[type="checkbox"]:checked + label::before {
    content: '✓';
    border-color: #d0d0d0;
    background: #FDC913;
    color: #292929;
    font-size: 14px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 24px;
    text-align: center;
  }

  .topping-item input[type="checkbox"]:disabled + label {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export const NotesTextarea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-family: 'Barlow', sans-serif;
  font-size: 14px;
  color: #292929;
  background: #FAF7F2;
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
  border-top: 1px solid #e0e0e0;
  margin-top: 16px;
`

export const QuantityRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 24px;

  /* 480px altında: üstte toplam kutusu, altta miktar + Sipariş Ver yan yana */
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;

    .quantity-submit-row {
      order: 2;
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .quantity-submit-row .btn-mobile {
      display: flex;
      flex: 1;
      min-width: 0;
      justify-content: center;
    }
  }

  /* Masaüstünde mobil butonu gizle */
  @media (min-width: 481px) {
    .quantity-submit-row .btn-mobile {
      display: none;
    }
  }

  .quantity-group {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .quantity-group {
    background: #FAF7F2;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 4px;
  }

  .quantity-group button {
    width: 36px;
    height: 36px;
    background: #FDC913;
    border: none;
    border-radius: 6px;
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
    border: none;
    background: transparent;
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
  background: #FAF7F2;
  box-sizing: border-box;

  /* 480px altında: kutu üstte tam genişlik, desktop buton gizli */
  @media (max-width: 480px) {
    order: 1;
    max-width: none;
    width: 100%;

    .btn-desktop {
      display: none;
    }
  }

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

  .submit-error {
    font-size: 12px;
    color: #CE2829;
    margin-bottom: 8px;
  }
`

export const SubmitButton = styled.button`
  width: 100%;
  padding: 16px;
  background: #FDC913;
  border: none;
  border-radius: 8px;
  font-family: 'Barlow', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #292929;
  text-transform: uppercase;
  cursor: pointer;

  &:hover:not(:disabled) {
    background: #ffd633;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
