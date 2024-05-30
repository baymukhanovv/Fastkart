import React from 'react'
import styles from './FiltersBar.module.scss'

const SearchBar = ({getSearchValue, searchValue}) => {
    return (
        <div className={styles.searchBar}>
            <input onChange={getSearchValue} value={searchValue} type="search" className={styles.searchInput} placeholder='Search' />
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.50651 16.3333C13.1884 16.3333 16.1732 13.3486 16.1732 9.66667C16.1732 5.98477 13.1884 3 9.50651 3C5.82461 3 2.83984 5.98477 2.83984 9.66667C2.83984 13.3486 5.82461 16.3333 9.50651 16.3333Z" stroke="#4a5568" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.8398 18L14.2148 14.375" stroke="#4a5568" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    )
}

export default SearchBar