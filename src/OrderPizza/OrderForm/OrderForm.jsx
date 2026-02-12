import React from 'react'

const BOYUTLAR = [
  { value: 'kucuk', label: 'Küçük' },
  { value: 'orta', label: 'Orta' },
  { value: 'buyuk', label: 'Büyük' }
]

const HAMUR_SECENEKLERI = [
  'İnce Hamur',
  'Normal Hamur',
  'Kalın Hamur'
]

const MALZEMELER = [
  'Pepperoni',
  'Sosis',
  'Mısır',
  'Jalapeno',
  'Ananas',
  'Kanada Jambonu',
  'Tavuk Izgara',
  'Soğan',
  'Domates',
  'Sucuk',
  'Sarımsak',
  'Biber',
  'Kabak',
  'Kanat'
]

function OrderForm() {
  return (
    <div style={{ width: '530px', margin: '0 auto' }}>
      <form>
        {/* 1. Pizza bilgileri */}
        <div>
          <h2>Position Absolute Acı Pizza</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
            <span>85.50₺</span>
            <span>4.9 (200)</span>
          </div>
          <p>
            Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre.
            Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra
            geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
            düzleştirilmiş bir ekmek bazlı İtalyan yemeğidir. Küçük bir pizzaya bazen pizzetta denir.
          </p>
        </div>

        {/* Boyut seçimi */}
        <div>
          <h3>Boyut Seç *</h3>
          <div>
            {BOYUTLAR.map(boyut => (
              <div key={boyut.value}>
                <input type="radio" id={boyut.value} name="boyut" value={boyut.value} />
                <label htmlFor={boyut.value}>{boyut.label}</label>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Hamur seçimi */}
        <div>
          <h3>Hamur Seç *</h3>
          <select name="hamur">
            <option value="">Hamur Kalınlığı</option>
            {HAMUR_SECENEKLERI.map(hamur => (
              <option key={hamur} value={hamur}>{hamur}</option>
            ))}
          </select>
        </div>

        {/* 5. Ek malzemeler */}
        <div>
          <h3>Ek Malzemeler</h3>
          <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
          <div>
            {MALZEMELER.map(malzeme => (
              <div key={malzeme}>
                <input type="checkbox" id={malzeme} name="malzemeler" value={malzeme} />
                <label htmlFor={malzeme}>{malzeme}</label>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Sipariş notu */}
        <div>
          <h3>Sipariş Notu</h3>
          <textarea
            name="notlar"
            placeholder="Siparişine eklemek istediğin bir not var mı?"
            rows="4"
          />
        </div>

        {/* 7. Miktar seçici + 8. Sipariş toplamı */}
        <div>
          <div>
            <button type="button">-</button>
            <input type="text" value="1" readOnly />
            <button type="button">+</button>
          </div>
          <div>
            <div>
              <span>Seçimler</span>
              <span>0.00₺</span>
            </div>
            <div>
              <span style={{ fontWeight: 'bold' }}>Toplam</span>
              <span style={{ fontWeight: 'bold' }}>85.50₺</span>
            </div>
          </div>
        </div>

        {/* 9. Sipariş Ver butonu */}
        <button type="submit">SİPARİŞ VER</button>
      </form>
    </div>
  )
}

export default OrderForm
