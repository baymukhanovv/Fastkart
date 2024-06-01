import React, { useContext } from 'react'
import styles from './FiltersBar.module.scss'
import CheckboxGroup from './CheckboxGroup'
import SearchBar from './SearchBar'
import AppContext from '../../context'

const CategoryFilter = ({
    getSearchValue,
    searchValue,
    products
}) => {
    const {selectedCategories, setSelectedCategories} = useContext(AppContext)

    return (
        <div className={styles.categories}>
            <div className={styles.wrapper}>
                <h4 className={styles.title}>Categories</h4>
                <button>
                    <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.88398 5.90234L1.16523 2.18359C0.891797 1.91016 0.891797 1.5 1.16523 1.25391L1.7668 0.625C2.04023 0.378906 2.45039 0.378906 2.69648 0.625L5.32148 3.27734L7.97383 0.625C8.21992 0.378906 8.63008 0.378906 8.90352 0.625L9.50508 1.25391C9.77852 1.5 9.77852 1.91016 9.50508 2.18359L5.78633 5.90234C5.54023 6.14844 5.13008 6.14844 4.88398 5.90234Z" fill="#222222"/>
                    </svg>
                </button>
            </div>
            <div className={styles.categoriesFilter}>
                <SearchBar
                    getSearchValue={getSearchValue}
                    searchValue={searchValue}
                />
                <CheckboxGroup
                    categories={['Vegetable', 'Cookies', 'Snacks', 'Bread']}
                    selectedCategories={selectedCategories}
                    setSelectedCategories={setSelectedCategories}
                    products={products}
                    filterBy="productCategory"
                />
            </div>
        </div>
    )
}

export default CategoryFilter