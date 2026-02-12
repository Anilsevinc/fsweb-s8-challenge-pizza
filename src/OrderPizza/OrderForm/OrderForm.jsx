import React, { useState } from 'react'
import axios from 'axios'
import {
  FormWrapper,
  BejFullWidthWrapper,
  FormSection,
  PizzaInfo,
  SizeAndDoughRow,
  SizeOptions,
  DoughSelect,
  ToppingsGrid,
  NotesTextarea,
  NotesSeparator,
  QuantityRow,
  SummaryCard,
  SubmitButton
} from './orderForm.style'

const BOYUTLAR = [
  { value: 'kucuk', label: 'S' },
  { value: 'orta', label: 'M' },
  { value: 'buyuk', label: 'L' }
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

const MALZEME_FIYATI = 5

function OrderForm({ onOrderSuccess, onNavigateHome }) {
  const [formData, setFormData] = useState({
    isim: '',
    boyut: '',
    hamur: '',
    malzemeler: [],
    notlar: '',
    miktar: 1
  })
  const [submitError, setSubmitError] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleMalzemeChange = (malzeme) => {
    setFormData(prev => {
      const yeni = prev.malzemeler.includes(malzeme)
        ? prev.malzemeler.filter(m => m !== malzeme)
        : [...prev.malzemeler, malzeme]
      return { ...prev, malzemeler: yeni }
    })
  }

  const handleQuantityChange = (delta) => {
    setFormData(prev => ({
      ...prev,
      miktar: Math.max(1, prev.miktar + delta)
    }))
  }

  const isFormValid = () => {
    return (
      formData.isim.trim().length >= 3 &&
      formData.boyut !== '' &&
      formData.hamur !== '' &&
      formData.malzemeler.length >= 4 &&
      formData.malzemeler.length <= 10
    )
  }

  const calculateSelections = () => {
    return formData.malzemeler.length * MALZEME_FIYATI * formData.miktar
  }

  const calculateTotal = () => {
    const pizzaFiyati = 85.5
    const malzemeFiyati = formData.malzemeler.length * MALZEME_FIYATI
    return (pizzaFiyati + malzemeFiyati) * formData.miktar
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!isFormValid()) return
    setSubmitError(null)
    const apiKey = import.meta.env.VITE_REQRES_API_KEY || 'reqres-free-v1'

    axios
      .post('https://reqres.in/api/pizza', formData, {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey
        }
      })
      .then((res) => {
        console.log('Sipariş yanıtı:', res.data)
        if (onOrderSuccess) onOrderSuccess(res.data)
      })
      .catch((err) => {
        console.error('Sipariş hatası:', err)
        const message = err.code === 'ERR_NETWORK'
          ? "İnternet'e bağlanılamadı. Lütfen bağlantınızı kontrol edip tekrar deneyin."
          : 'Sipariş gönderilemedi. Lütfen tekrar deneyin.'
        setSubmitError(message)
      })
  }


  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <BejFullWidthWrapper>
          <PizzaInfo>
            <img src="/images/iteration-2-images/pictures/form-banner.png" alt="Position Absolute Acı Pizza" className="form-banner" />
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <button type="button" onClick={onNavigateHome}>Anasayfa</button>
              <span className="sep">-</span>
              <span>Seçenekler</span>
              <span className="sep">-</span>
              <span className="current">Sipariş Oluştur</span>
            </nav>
            <h2>Position Absolute Acı Pizza</h2>
            <div className="price-row">
              <span className="price">85.50₺</span>
              <span className="rating">4.9 <span className="rating-count">(200)</span></span>
            </div>
            <p>
              Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre.
              Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra
              geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
              düzleştirilmiş bir ekmek bazlı İtalyan yemeğidir. Küçük bir pizzaya bazen pizzetta denir.
            </p>
          </PizzaInfo>
        </BejFullWidthWrapper>

        <SizeAndDoughRow>
          <div>
            <h3>Boyut Seç <span className="required">*</span></h3>
            <SizeOptions>
              {BOYUTLAR.map(boyut => (
                <div key={boyut.value} className="size-option">
                  <input
                    type="radio"
                    id={boyut.value}
                    name="boyut"
                    value={boyut.value}
                    checked={formData.boyut === boyut.value}
                    onChange={handleInputChange}
                  />
                  <label htmlFor={boyut.value}>{boyut.label}</label>
                </div>
              ))}
            </SizeOptions>
            {formData.boyut === '' && (
              <div className="field-error">Boyut seçmelisiniz</div>
            )}
          </div>
          <div>
            <h3>Hamur Seç <span className="required">*</span></h3>
            <DoughSelect
              name="hamur"
              value={formData.hamur}
              onChange={handleInputChange}
            >
              <option value="">- Hamur Kalınlığı Seç -</option>
              {HAMUR_SECENEKLERI.map(hamur => (
                <option key={hamur} value={hamur}>{hamur}</option>
              ))}
            </DoughSelect>
            {formData.hamur === '' && (
              <div className="field-error">Hamur seçmelisiniz</div>
            )}
          </div>
        </SizeAndDoughRow>

        <FormSection>
          <h3>Ek Malzemeler</h3>
          <ToppingsGrid>
            <p className="toppings-hint">En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
            <div className="toppings-list">
              {MALZEMELER.map(malzeme => {
                const isChecked = formData.malzemeler.includes(malzeme)
                const isDisabled = !isChecked && formData.malzemeler.length >= 10
                return (
                  <div key={malzeme} className="topping-item">
                    <input
                      type="checkbox"
                      id={malzeme}
                      name="malzemeler"
                      value={malzeme}
                      checked={isChecked}
                      onChange={() => handleMalzemeChange(malzeme)}
                      disabled={isDisabled}
                    />
                    <label htmlFor={malzeme}>{malzeme}</label>
                  </div>
                )
              })}
            </div>
          </ToppingsGrid>
          {formData.malzemeler.length < 4 && (
            <div className="field-error">
              {formData.malzemeler.length === 0
                ? 'En az 4 malzeme seçmelisiniz'
                : `En az 4 malzeme seçmelisiniz (${formData.malzemeler.length}/4)`}
            </div>
          )}
        </FormSection>

        <FormSection>
          <h3>İsim <span className="required">*</span></h3>
          <input
            type="text"
            name="isim"
            className="name-input"
            value={formData.isim}
            onChange={handleInputChange}
            placeholder="İsminizi giriniz (en az 3 karakter)"
          />
          {formData.isim.length > 0 && formData.isim.trim().length < 3 && (
            <div className="field-error">İsim en az 3 karakter olmalıdır</div>
          )}
        </FormSection>

        <FormSection>
          <h3>Sipariş Notu</h3>
          <NotesTextarea
            name="notlar"
            placeholder="Siparişine eklemek istediğin bir not var mı?"
            rows={1}
            value={formData.notlar}
            onChange={handleInputChange}
          />
          <NotesSeparator />
        </FormSection>

        <QuantityRow>
          <div className="quantity-group">
            <button type="button" onClick={() => handleQuantityChange(-1)}>-</button>
            <input type="text" value={formData.miktar} readOnly />
            <button type="button" onClick={() => handleQuantityChange(1)}>+</button>
          </div>
          <SummaryCard>
            <h3 className="summary-title">Sipariş Toplamı</h3>
            <div className="summary">
              <div className="summary-row">
                <span>Seçimler</span>
                <span>{calculateSelections().toFixed(2)}₺</span>
              </div>
              <div className="summary-row total-row">
                <span>Toplam</span>
                <span>{calculateTotal().toFixed(2)}₺</span>
              </div>
            </div>
            {submitError && <div className="submit-error">{submitError}</div>}
            <SubmitButton type="submit" disabled={!isFormValid()}>
              SİPARİŞ VER
            </SubmitButton>
          </SummaryCard>
        </QuantityRow>
      </form>
    </FormWrapper>
  )
}

export default OrderForm
