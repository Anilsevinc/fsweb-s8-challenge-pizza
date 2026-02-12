import React from 'react'
import { SuccessPage } from './orderSuccess.style'

const PIZZA_FIYATI = 85.5
const MALZEME_FIYATI = 5
const BOYUT_ETIKET = { kucuk: 'Küçük', orta: 'Orta', buyuk: 'Büyük' }

function OrderSuccess({ orderData, onNavigateHome }) {
  if (!orderData) return null

  const { boyut, hamur, malzemeler = [], miktar = 1 } = orderData
  const boyutLabel = BOYUT_ETIKET[boyut] ?? boyut
  const selections = (malzemeler.length * MALZEME_FIYATI * miktar).toFixed(2)
  const total = ((PIZZA_FIYATI + malzemeler.length * MALZEME_FIYATI) * miktar).toFixed(2)

  return (
    <SuccessPage>
      <header>
        <img src="/images/iteration-1-images/logo.svg" alt="Teknolojik Yemekler" />
      </header>
      <div>
        <p className="tagline">lezzetin yolda</p>
        <h1>SİPARİŞ ALINDI</h1>
        <hr />
        <h2>Position Absolute Acı Pizza</h2>
        <div className="details">
          <div><span>Boyut:</span><span className="value">{boyutLabel}</span></div>
          <div><span>Hamur:</span><span className="value">{hamur}</span></div>
          <div><span>Ek Malzemeler:</span><span className="value">{malzemeler.join(', ')}</span></div>
        </div>
        <div className="summary">
          <h3>Sipariş Toplamı</h3>
          <div className="summary-row"><span>Seçimler</span><span>{selections}₺</span></div>
          <div className="summary-row total-row"><span>Toplam</span><span>{total}₺</span></div>
        </div>
        {onNavigateHome && (
          <button type="button" className="back-btn" onClick={onNavigateHome}>
            Anasayfaya Dön
          </button>
        )}
      </div>
    </SuccessPage>
  )
}

export default OrderSuccess
