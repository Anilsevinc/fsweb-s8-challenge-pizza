import React from 'react'
import { SuccessPage } from './orderSuccess.style'

function OrderSuccess() {
  return (
    <SuccessPage>
      <header>
        <img src="/images/iteration-1-images/logo.svg" alt="Teknolojik Yemekler" />
      </header>
      <div>
        <p className="tagline">lezzetin yolda</p>
        <h1>Sipariş Alındı</h1>
        <hr />
        <h2>Position Absolute Acı Pizza</h2>
        <div className="details">
          <div><span>Boyut:</span><span className="value">—</span></div>
          <div><span>Hamur:</span><span className="value">—</span></div>
          <div><span>Ek Malzemeler:</span><span className="value">—</span></div>
        </div>
        <div className="summary">
          <h3>Sipariş Toplamı</h3>
          <div className="summary-row"><span>Seçimler</span><span>—₺</span></div>
          <div className="summary-row total-row"><span>Toplam</span><span>—₺</span></div>
        </div>
      </div>
    </SuccessPage>
  )
}

export default OrderSuccess
