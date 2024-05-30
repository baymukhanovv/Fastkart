import React from 'react'
import styles from './QuantityCounter.module.scss'

const QuantityCounter = ({minusCount, count, plusCount}) => {

    return (
        <div className={styles.modalCounter}>
            <button className={styles.minus} onClick={minusCount}></button>
            <span>{count}</span>
            <button className={styles.plus} onClick={plusCount}></button>
        </div>
    )
}

export default QuantityCounter