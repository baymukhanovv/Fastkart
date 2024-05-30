import React from 'react'
import styles from '../Header.module.scss'
import { Link } from 'react-router-dom'
import LocationDropdown from '../../UI/LocationDropdown/LocationDropdown'
import SearchInput from '../../UI/SearchInput/SearchInput'
import Delivery from '../Delivery/Delivery'

const HeaderMiddle = ({cartItems}) => {
    return (
        <div className={styles.headerMiddle}>
            <div className='container'>
              <div className={styles.wrapper}>
                <Link to='/'>
                  <img src="../assets/logo.png" alt="Fastkart" />
                </Link>
                <div className={styles.getInfo}>
                  <LocationDropdown locations={['Kazakhstan', 'Russia', 'USA', 'China']} />
                  <SearchInput />
                </div>
                <div className={styles.actions}>
                  <Delivery />
                  <Link to='/favorites' className={styles.favorites}>
                    <img src="../assets/icons/favorite-icon.svg" alt="" />
                  </Link>
                  <Link to='/cart' className={styles.cart}>
                    <img src="../assets/icons/cart-icon.svg" alt="" />
                    <span>{cartItems.length}</span>
                  </Link>
                  <Link to='/account' className={styles.account}>
                    <img src="../assets/icons/user-icon.svg" alt="" />
                    <div>
                      <p>Hello ,</p>
                      <b>My Account</b>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
    )
}

export default HeaderMiddle