import './App.css'
import Header from './components/Header/Header.jsx'
import CategoryNav from './components/CategoryNav/CategoryNav.jsx'
import SpecialOffers from './components/SpecialOffers/SpecialOffers.jsx'
import ProductSectionHeader from './components/ProductSectionHeader/ProductSectionHeader.jsx'
import CategoryTabs from './components/CategoryTabs/CategoryTabs.jsx'
import ProductCards from './components/ProductCards/ProductCards.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  return (
    <div className="app-root">
      <Header />
      <CategoryNav />
      <SpecialOffers />
      <ProductSectionHeader />
      <CategoryTabs />
      <ProductCards />
      <Footer />
    </div>
  )
}

export default App