import Header from '@/components/Home/Header'
import React from 'react'
import BedRoomDesign from './component/BedRoomDesign'
import Footer from '../../components/Footer/index'

function BedRoom() {
  return (
    <div>
        <Header />
        <BedRoomDesign/>
        <Footer />
    </div>
  )
}

export default BedRoom