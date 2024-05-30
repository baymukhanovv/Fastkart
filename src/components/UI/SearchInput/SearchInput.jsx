import React from 'react'
import styles from './SearchInput.module.scss'

const SearchInput = () => {
    return (
        <div className={styles.searchBlock}>
            <input type="search" placeholder="I'm searching for..." />
            <button>
                <img src="../assets/icons/search-icon.svg" alt="" />
            </button>
        </div>
    )
}

export default SearchInput