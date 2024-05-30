import React from 'react'
import styles from '../Header.module.scss'

const Delivery = () => {
    return (
        <div className={styles.delivery}>
            <img src="../assets/icons/phone-icon.svg"alt="" />
            <div>
                <p>24/7 Delivery</p>
                <a href="tel:+918881042340"><b>+91 888 104 2340</b></a>
            </div>
        </div>
    )
}

export default Delivery