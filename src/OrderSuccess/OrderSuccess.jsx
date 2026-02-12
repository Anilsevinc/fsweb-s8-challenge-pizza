import React from 'react'

function OrderSuccess() {
  return (
    <section>
      <header>
        <img src="/images/iteration-1-images/logo.svg" alt="Teknolojik Yemekler" />
      </header>
      <div>
        <p>lezzetin yolda</p>
        <h1>Sipariş Alındı</h1>
        <hr />
        <h2>Position Absolute Acı Pizza</h2>
        <div>
          <div><span>Boyut:</span><span>—</span></div>
          <div><span>Hamur:</span><span>—</span></div>
          <div><span>Ek Malzemeler:</span><span>—</span></div>
        </div>
        <div>
          <h3>Sipariş Toplamı</h3>
          <div><span>Seçimler</span><span>—₺</span></div>
          <div><span>Toplam</span><span>—₺</span></div>
        </div>
      </div>
    </section>
  )
}

export default OrderSuccess
