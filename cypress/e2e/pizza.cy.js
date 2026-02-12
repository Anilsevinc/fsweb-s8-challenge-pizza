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
    cy.get('input#Pepperoni').check()
    cy.get('input#Sosis').check()
    cy.get('input#Mısır').check()
    cy.get('input#Jalapeno').check()

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
    cy.get('input[name="boyut"][value="orta"]').check()
    cy.get('select[name="hamur"]').select('İnce Hamur')
    cy.get('input#Pepperoni').check()
    cy.get('input#Sosis').check()
    cy.get('input#Mısır').check()
    cy.get('input#Jalapeno').check()

    cy.contains('button', 'SİPARİŞ VER').should('not.be.disabled').click()

    cy.wait('@submitOrder').its('request.method').should('eq', 'POST')
  })
})
