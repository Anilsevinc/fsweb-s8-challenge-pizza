import './ProductCards.css'

function ProductCards() {
  return (
    <section className="product-cards-section">
      <article className="product-card">
        <div className="product-card-frame">
          <div className="product-card-image">
            <img
              src="/images/iteration-2-images/pictures/food-1.png"
              alt="Terminal Pizza"
            />
          </div>
          <div className="product-card-text">
            <h3 className="product-card-title">Terminal Pizza</h3>
            <div className="product-card-rating">
              <span className="product-rating-value">4.9</span>
              <span className="product-rating-count">(200)</span>
              <span className="product-card-price">60₺</span>
            </div>
          </div>
        </div>
      </article>

      <article className="product-card">
        <div className="product-card-frame">
          <div className="product-card-image">
            <img
              src="/images/iteration-2-images/pictures/food-2.png"
              alt="Position Absolute Acı Pizza"
            />
          </div>
          <div className="product-card-text">
            <h3 className="product-card-title">Position Absolute Acı Pizza</h3>
            <div className="product-card-rating">
              <span className="product-rating-value">4.9</span>
              <span className="product-rating-count">(200)</span>
              <span className="product-card-price">60₺</span>
            </div>
          </div>
        </div>
      </article>

      <article className="product-card">
        <div className="product-card-frame">
          <div className="product-card-image">
            <img
              src="/images/iteration-2-images/pictures/food-3.png"
              alt="useEffect Tavuklu Burger"
            />
          </div>
          <div className="product-card-text">
            <h3 className="product-card-title">useEffect Tavuklu Burger</h3>
            <div className="product-card-rating">
              <span className="product-rating-value">4.9</span>
              <span className="product-rating-count">(200)</span>
              <span className="product-card-price">60₺</span>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}

export default ProductCards
