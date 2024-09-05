import React from 'react'
import LeftContainer from './components/leftContaner'
import styles from '../../styles/footer.module.css'
import MiddleConatiner from './components/middleContainer'
import LastContainer from './components/usefulLinks'

function Index() {
  return (
    <div className={styles.footerContainer}>
        <LeftContainer />
        <MiddleConatiner/>
        <LastContainer/>
    </div>
  )
}

export default Index