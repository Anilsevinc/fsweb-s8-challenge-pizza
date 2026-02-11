import './CategoryNav.css'

function CategoryNav() {
  return (
    <nav className="category-nav">
      <ul className="category-list">
        <li className="category-item">
          <img
            src="/images/iteration-2-images/icons/1.svg"
            alt="Kore"
            className="category-icon"
          />
          <span className="category-text">YENİ! Kore</span>
        </li>
        <li className="category-item">
          <img
            src="/images/iteration-2-images/icons/2.svg"
            alt="Pizza"
            className="category-icon"
          />
          <span className="category-text">Pizza</span>
        </li>
        <li className="category-item">
          <img
            src="/images/iteration-2-images/icons/3.svg"
            alt="Burger"
            className="category-icon"
          />
          <span className="category-text">Burger</span>
        </li>
        <li className="category-item">
          <img
            src="/images/iteration-2-images/icons/4.svg"
            alt="Kızartmalar"
            className="category-icon"
          />
          <span className="category-text">Kızartmalar</span>
        </li>
        <li className="category-item">
          <img
            src="/images/iteration-2-images/icons/5.svg"
            alt="Fast food"
            className="category-icon"
          />
          <span className="category-text">Fast food</span>
        </li>
        <li className="category-item">
          <img
            src="/images/iteration-2-images/icons/6.svg"
            alt="Gazlı İçecek"
            className="category-icon"
          />
          <span className="category-text">Gazlı İçecek</span>
        </li>
      </ul>
    </nav>
  )
}

export default CategoryNav
