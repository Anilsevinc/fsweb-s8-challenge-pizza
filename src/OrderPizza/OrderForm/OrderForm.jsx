import React from 'react'
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

function OrderForm() {
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
                  <input type="radio" id={boyut.value} name="boyut" value={boyut.value} />
                  <label htmlFor={boyut.value}>{boyut.label}</label>
                </div>
              ))}
            </SizeOptions>
          </div>
          <div>
            <h3>Hamur Seç <span className="required">*</span></h3>
            <DoughSelect name="hamur">
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
              {MALZEMELER.map(malzeme => (
                <div key={malzeme} className="topping-item">
                  <input type="checkbox" id={malzeme} name="malzemeler" value={malzeme} />
                  <label htmlFor={malzeme}>{malzeme}</label>
                </div>
              ))}
            </div>
          </ToppingsGrid>
        </FormSection>

        <FormSection>
          <h3>Sipariş Notu</h3>
          <NotesTextarea
            name="notlar"
            placeholder="Siparişine eklemek istediğin bir not var mı?"
            rows={1}
          />
          <NotesSeparator />
        </FormSection>

        <QuantityRow>
          <div className="quantity-group">
            <button type="button">-</button>
            <input type="text" value="1" readOnly />
            <button type="button">+</button>
          </div>
          <SummaryCard>
            <h3 className="summary-title">Sipariş Toplamı</h3>
            <div className="summary">
              <div className="summary-row">
                <span>Seçimler</span>
                <span>0.00₺</span>
              </div>
              <div className="summary-row total-row">
                <span>Toplam</span>
                <span>85.50₺</span>
              </div>
            </div>
            <SubmitButton type="submit">SİPARİŞ VER</SubmitButton>
          </SummaryCard>
        </QuantityRow>
      </form>
    </FormWrapper>
  )
}

export default OrderForm
