import './Header.css'

function Header({ onAciktimClick }) {
  return (
    <header className="header-section">
      <div className="header-logo">
        <img src="/images/iteration-1-images/logo.svg" alt="Teknolojik Yemekler Logo" />
      </div>

      <div className="header-content">
        <p className="header-subtitle">fırsatı kaçırma</p>
        <h1 className="header-headline">
          <span className="header-headline-main">KOD ACIKTIRIR</span>
          <span className="header-headline-sub">PIZZA, DOYURUR</span>
        </h1>
        <button type="button" className="header-button" onClick={onAciktimClick}>
          ACIKTIM
        </button>
      </div>
    </header>
  )
}

export default Header
