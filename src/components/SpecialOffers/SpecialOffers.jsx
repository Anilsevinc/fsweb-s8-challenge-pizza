import './SpecialOffers.css'

function SpecialOffers({ onSiparisClick }) {
  return (
    <section className="special-offers">
      <article className="offer-card offer-card-large">
        <div className="offer-card-content">
          <h2 className="offer-card-title">Özel Lezzetus</h2>
          <p className="offer-card-subtitle">Position: Absolute Acı Burger</p>
          <button type="button" className="offer-card-button" onClick={onSiparisClick}>
            SİPARİŞ VER
          </button>
        </div>
      </article>

      <div className="offer-cards-right">
        <article className="offer-card offer-card-small offer-card-dark">
          <div className="offer-card-content">
            <h2 className="offer-card-title">Hackathlon Burger Menü</h2>
            <a href="#" className="offer-card-button">
              SİPARİŞ VER
            </a>
          </div>
        </article>

        <article className="offer-card offer-card-small offer-card-beige">
          <div className="offer-card-content">
            <h2 className="offer-card-title">
              <span className="offer-card-title-red">Çoooook</span> hızlı
              <br />
              npm gibi kurye
            </h2>
            <a href="#" className="offer-card-button">
              SİPARİŞ VER
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default SpecialOffers
