import React from 'react'
import Header from '../components/Header/Header'
import CategoryNav from '../components/CategoryNav/CategoryNav'
import SpecialOffers from '../components/SpecialOffers/SpecialOffers'
import ProductSectionHeader from '../components/ProductSectionHeader/ProductSectionHeader'
import CategoryTabs from '../components/CategoryTabs/CategoryTabs'
import ProductCards from '../components/ProductCards/ProductCards'
import Footer from '../components/Footer/Footer'

function HomePage({ onAciktimClick }) {
  return (
    <>
      <Header onAciktimClick={onAciktimClick} />
      <CategoryNav />
      <SpecialOffers onSiparisClick={onAciktimClick} />
      <ProductSectionHeader />
      <CategoryTabs />
      <ProductCards />
      <Footer />
    </>
  )
}

export default HomePage
