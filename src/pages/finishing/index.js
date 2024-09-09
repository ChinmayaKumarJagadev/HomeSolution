import React from 'react'
import Header from '@/components/Home/Header'
import Footer from '../../components/Footer/index'
import FinishingHero from './components/FinshingScreenHero'
import FinishingOverviewDesign from './components/FinishingScrrenOverviewSection'

function Finishing() {
  return (
    <div>
        <Header/>
        <FinishingHero />
        <FinishingOverviewDesign />
        <Footer />
    </div>
  )
}

export default Finishing