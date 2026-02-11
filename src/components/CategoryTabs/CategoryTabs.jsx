import './CategoryTabs.css'

function CategoryTabs() {
  return (
    <nav className="category-tabs">
      <ul className="category-tabs-list" id="pills-tab">
        <li className="category-tab-item">
          <button className="category-tab-button" id="pills-ramen-tab">
            <img
              src="/images/iteration-2-images/icons/1.svg"
              alt="Ramen"
              className="category-tab-icon"
            />
            <span className="category-tab-text">Ramen</span>
          </button>
        </li>
        <li className="category-tab-item">
          <button
            className="category-tab-button category-tab-button-active"
            id="pills-pizza-tab"
          >
            <img
              src="/images/iteration-2-images/icons/2.svg"
              alt="Pizza"
              className="category-tab-icon"
            />
            <span className="category-tab-text">Pizza</span>
          </button>
        </li>
        <li className="category-tab-item">
          <button className="category-tab-button" id="pills-burger-tab">
            <img
              src="/images/iteration-2-images/icons/3.svg"
              alt="Burger"
              className="category-tab-icon"
            />
            <span className="category-tab-text">Burger</span>
          </button>
        </li>
        <li className="category-tab-item">
          <button className="category-tab-button" id="pills-fries-tab">
            <img
              src="/images/iteration-2-images/icons/4.svg"
              alt="French fries"
              className="category-tab-icon"
            />
            <span className="category-tab-text">French fries</span>
          </button>
        </li>
        <li className="category-tab-item">
          <button className="category-tab-button" id="pills-fastfood-tab">
            <img
              src="/images/iteration-2-images/icons/5.svg"
              alt="Fast food"
              className="category-tab-icon"
            />
            <span className="category-tab-text">Fast food</span>
          </button>
        </li>
        <li className="category-tab-item">
          <button className="category-tab-button" id="pills-drinks-tab">
            <img
              src="/images/iteration-2-images/icons/6.svg"
              alt="Soft drinks"
              className="category-tab-icon"
            />
            <span className="category-tab-text">Soft drinks</span>
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default CategoryTabs
