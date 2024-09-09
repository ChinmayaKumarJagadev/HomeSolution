import React from 'react'
import Header from '@/components/Home/Header'
import Footer from '../../components/Footer/index'
import ConstructionScreenHero from './components/ConstructionScreenHero'
import ConstructionScreenOverviewScreen from './components/ConstructionScrrenOverviewSection'

function ConstructionCard() {
  return (
    <div>
        <Header/>
        <ConstructionScreenHero />
        <ConstructionScreenOverviewScreen />
        <Footer />
    </div>
  )
}

export default ConstructionCard