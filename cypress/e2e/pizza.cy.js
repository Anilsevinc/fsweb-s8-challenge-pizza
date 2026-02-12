/*
 Sipariş formu Cypress E2E testleri
 Input'a metin giren test
 Birden fazla malzeme seçen test
 Formu gönderen test
 */

/* Sipariş formu etiketi ile  Anasayfadan "ACIKTIM" ile sipariş formuna geçip, 
isim alanına metin yazıldığını, 
birden fazla malzeme seçilebildiğini ve formun doldurulup gönderildiğinde POST isteğinin atıldığını Cypress ile doğruluyoruz. */

describe('Sipariş Formu', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.contains('button', 'ACIKTIM').click()
  })

  it('inputa bir metin girer', () => {
    cy.get('input[name="isim"]')
      .should('be.visible')
      .type('Test Kullanıcı')
    cy.get('input[name="isim"]').should('have.value', 'Test Kullanıcı')
  })

  it('birden fazla malzeme seçilebilir', () => {
    cy.get('input#Pepperoni').check({ force: true })
    cy.get('input#Sosis').check({ force: true })
    cy.get('input#Mısır').check({ force: true })
    cy.get('input#Jalapeno').check({ force: true })

    cy.get('input#Pepperoni').should('be.checked')
    cy.get('input#Sosis').should('be.checked')
    cy.get('input#Mısır').should('be.checked')
    cy.get('input#Jalapeno').should('be.checked')
  })

  it('formu gönderir', () => {
    cy.intercept('POST', 'https://reqres.in/api/pizza', {
      statusCode: 200,
      body: { id: '1', createdAt: '2026-02-12T00:00:00.000Z' }
    }).as('submitOrder')

    cy.get('input[name="isim"]').type('Test Kullanıcı')
    cy.get('input[name="boyut"][value="orta"]').check({ force: true })
    cy.get('select[name="hamur"]').select('İnce Hamur')
    cy.get('input#Pepperoni').check({ force: true })
    cy.get('input#Sosis').check({ force: true })
    cy.get('input#Mısır').check({ force: true })
    cy.get('input#Jalapeno').check({ force: true })

    cy.contains('button', 'SİPARİŞ VER').should('not.be.disabled').click()

    cy.wait('@submitOrder').its('request.method').should('eq', 'POST')
  })
})

describe('Sipariş başarı sayfası', () => {
  it('sipariş gönderildikten sonra başarı sayfasında SİPARİŞ ALINDI ve sipariş özeti görünür', () => {
    const orderPayload = {
      isim: 'Test Kullanıcı',
      boyut: 'orta',
      hamur: 'İnce Hamur',
      malzemeler: ['Pepperoni', 'Sosis', 'Mısır', 'Jalapeno'],
      miktar: 1
    }
    cy.intercept('POST', 'https://reqres.in/api/pizza', {
      statusCode: 200,
      body: { id: '1', createdAt: '2026-02-12T00:00:00.000Z', ...orderPayload }
    }).as('submitOrder')

    cy.visit('/')
    cy.contains('button', 'ACIKTIM').click()
    cy.get('input[name="isim"]').type('Test Kullanıcı')
    cy.get('input[name="boyut"][value="orta"]').check({ force: true })
    cy.get('select[name="hamur"]').select('İnce Hamur')
    cy.get('input#Pepperoni').check({ force: true })
    cy.get('input#Sosis').check({ force: true })
    cy.get('input#Mısır').check({ force: true })
    cy.get('input#Jalapeno').check({ force: true })
    cy.contains('button', 'SİPARİŞ VER').should('not.be.disabled').click()

    cy.wait('@submitOrder')
    cy.contains('h1', 'SİPARİŞ ALINDI').should('be.visible')
    cy.contains('h2', 'Position Absolute Acı Pizza').should('be.visible')
    cy.contains('Sipariş Toplamı').should('be.visible')
    cy.contains('button', 'Anasayfaya Dön').should('be.visible')
  })

  it('Anasayfaya Dön butonu ile anasayfaya dönülür', () => {
    const orderPayload = {
      isim: 'Test',
      boyut: 'orta',
      hamur: 'İnce Hamur',
      malzemeler: ['Pepperoni', 'Sosis', 'Mısır', 'Jalapeno'],
      miktar: 1
    }
    cy.intercept('POST', 'https://reqres.in/api/pizza', {
      statusCode: 200,
      body: { id: '1', createdAt: '2026-02-12T00:00:00.000Z', ...orderPayload }
    }).as('submitOrder')

    cy.visit('/')
    cy.contains('button', 'ACIKTIM').click()
    cy.get('input[name="isim"]').type('Test Kullanıcı')
    cy.get('input[name="boyut"][value="orta"]').check({ force: true })
    cy.get('select[name="hamur"]').select('İnce Hamur')
    cy.get('input#Pepperoni').check({ force: true })
    cy.get('input#Sosis').check({ force: true })
    cy.get('input#Mısır').check({ force: true })
    cy.get('input#Jalapeno').check({ force: true })
    cy.contains('button', 'SİPARİŞ VER').click()
    cy.wait('@submitOrder')
    cy.contains('h1', 'SİPARİŞ ALINDI').should('be.visible')

    cy.contains('button', 'Anasayfaya Dön').click()
    cy.contains('button', 'ACIKTIM').should('be.visible')
  })
})

describe('Form doğrulama', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.contains('button', 'ACIKTIM').click()
  })

  it('form eksikken Sipariş Ver butonu disabled kalır', () => {
    cy.contains('button', 'SİPARİŞ VER').should('be.disabled')
    cy.get('input[name="isim"]').type('Ab')
    cy.get('input[name="boyut"][value="orta"]').check({ force: true })
    cy.get('select[name="hamur"]').select('İnce Hamur')
    cy.get('input#Pepperoni').check({ force: true })
    cy.get('input#Sosis').check({ force: true })
    cy.get('input#Mısır').check({ force: true })
    cy.contains('button', 'SİPARİŞ VER').should('be.disabled')
  })

  it('en az 4 malzeme seçilmeden Sipariş Ver butonu disabled kalır', () => {
    cy.get('input[name="isim"]').type('Test Kullanıcı')
    cy.get('input[name="boyut"][value="orta"]').check({ force: true })
    cy.get('select[name="hamur"]').select('İnce Hamur')
    cy.get('label[for="Pepperoni"]').click()
    cy.get('label[for="Sosis"]').click()
    cy.get('label[for="Mısır"]').click()
    cy.get('label[for="Jalapeno"]').click()
    cy.contains('button', 'SİPARİŞ VER').should('not.be.disabled')
    cy.get('label[for="Mısır"]').click()
    cy.contains('button', 'SİPARİŞ VER').should('be.disabled')
  })
})

describe('Ağ hatası geri bildirimi', () => {
  it('POST hatası olduğunda kullanıcıya hata mesajı gösterilir', () => {
    cy.intercept('POST', 'https://reqres.in/api/pizza', {
      statusCode: 500,
      body: {}
    }).as('submitOrderFail')

    cy.visit('/')
    cy.contains('button', 'ACIKTIM').click()
    cy.get('input[name="isim"]').type('Test Kullanıcı')
    cy.get('input[name="boyut"][value="orta"]').check({ force: true })
    cy.get('select[name="hamur"]').select('İnce Hamur')
    cy.get('input#Pepperoni').check({ force: true })
    cy.get('input#Sosis').check({ force: true })
    cy.get('input#Mısır').check({ force: true })
    cy.get('input#Jalapeno').check({ force: true })
    cy.contains('button', 'SİPARİŞ VER').click()

    cy.wait('@submitOrderFail')
    cy.get('.submit-error').should('be.visible').and('contain.text', 'Sipariş gönderilemedi')
  })

  it('ağ bağlantısı yokken İnternet hatası mesajı gösterilir', () => {
    cy.intercept('POST', 'https://reqres.in/api/pizza', {
      forceNetworkError: true
    }).as('networkError')

    cy.visit('/')
    cy.contains('button', 'ACIKTIM').click()
    cy.get('input[name="isim"]').type('Test Kullanıcı')
    cy.get('input[name="boyut"][value="orta"]').check({ force: true })
    cy.get('select[name="hamur"]').select('İnce Hamur')
    cy.get('input#Pepperoni').check({ force: true })
    cy.get('input#Sosis').check({ force: true })
    cy.get('input#Mısır').check({ force: true })
    cy.get('input#Jalapeno').check({ force: true })
    cy.contains('button', 'SİPARİŞ VER').click()

    cy.wait('@networkError')
    cy.get('.submit-error').should('be.visible').and('contain.text', "İnternet'e bağlanılamadı")
  })
})
