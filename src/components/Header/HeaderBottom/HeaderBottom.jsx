import React from 'react'
import styles from '../Header.module.scss'
import Navbar from '../Navbar/Navbar'

const HeaderBottom = () => {
    return (
        <div className={styles.headerBottom}>
            <div className='container'>
              <div className={styles.wrapper}>
                <button className={styles.menuButton}>
                  <img src="../assets/icons/menu-burger.svg" alt="" />
                  All Categories
                </button>
                <Navbar />
                <button className={styles.dealToday}>
                  <img src="../assets/icons/lightning-icon.png" alt="" />
                  Deal Today
                </button>
              </div>
            </div>
          </div>
    )
}

export default HeaderBottom