import React from 'react'
import styles from './Header.module.scss'
import HeaderTop from './HeaderTop/HeaderTop'
import HeaderMiddle from './HeaderMiddle/HeaderMiddle'
import HeaderBottom from './HeaderBottom/HeaderBottom'

const Header = ({cartItems }) => {
    return (
        <header className={styles.header}>
          <HeaderTop />
          <HeaderMiddle cartItems={cartItems} />
          <HeaderBottom />
        </header>
    )
}

export default Header