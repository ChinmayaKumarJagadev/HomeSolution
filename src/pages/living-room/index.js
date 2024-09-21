import Header from '@/components/Home/Header'
import React from 'react'
import LivingRoomHeroSection from './components/LivingRoomHeroSection'
import Footer from '../../components/Footer/index'

function LivingRoom() {
  return (
    <div>
        <Header/>
        <LivingRoomHeroSection />
        <Footer/>
    </div>
  )
}

export default LivingRoom