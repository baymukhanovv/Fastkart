import React from 'react'
import styles from './Dropdown.module.scss'
import { Link } from 'react-router-dom'

const Dropdown = ({label, options, isLink = false, isDarkArrow = false}) => {
    return (
        <div className={styles.dropdown}>
            <span>
                {label} 
                <img src={`../assets/icons/${isDarkArrow ? 'arrow-dark' : 'arrow'}.svg`} className={styles.arrow} alt="" />     
            </span>
            <ul className={styles.dropdownList}>
                {options.map(option => 
                    isLink 
                    ? 
                    <Link key={option} to={`/${option.includes('/') ? '' : option.toLowerCase()}`} >
                        <li>{`${option.includes('/') ? option.substring(1) : option}`}</li>
                    </Link>
                    : <li key={option}>{option}</li>
                )}
            </ul>
        </div>
    )
}

export default Dropdown