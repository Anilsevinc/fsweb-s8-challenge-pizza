import React, { useState } from 'react'
import {
  FormWrapper,
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

const MALZEME_FIYATI = 5

function OrderForm() {
  const [formData, setFormData] = useState({
    isim: '',
    boyut: '',
    hamur: '',
    malzemeler: [],
    notlar: '',
    miktar: 1
  })

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

  return (
    <FormWrapper>
      <form>
        <PizzaInfo>
          <h2>Position Absolute Acı Pizza</h2>
          <div className="price-row">
            <span className="price">85.50₺</span>
            <span className="rating">4.9 (200)</span>
          </div>
          <p>
            Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre.
            Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra
            geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
            düzleştirilmiş bir ekmek bazlı İtalyan yemeğidir. Küçük bir pizzaya bazen pizzetta denir.
          </p>
        </PizzaInfo>

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
          </div>
          <div>
            <h3>Hamur Seç <span className="required">*</span></h3>
            <DoughSelect
              name="hamur"
              value={formData.hamur}
              onChange={handleInputChange}
            >
              <option value="">Hamur Kalınlığı</option>
              {HAMUR_SECENEKLERI.map(hamur => (
                <option key={hamur} value={hamur}>{hamur}</option>
              ))}
            </DoughSelect>
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
