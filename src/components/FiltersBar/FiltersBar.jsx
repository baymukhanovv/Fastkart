import React from 'react'
import styles from './FiltersBar.module.scss'

const FiltersBar = ({getSearchValue, searchValue}) => {
    return (
        <div className={styles.filtersBar}>
                <div className={styles.header}>
                    <h4 className={styles.title}>Filters</h4>
                    <button className={styles.clearBtn}>Clear All</button>
                </div>
                <div className={styles.filters}>
                    <div className={styles.filter}>
                        <span>Vegetable</span>
                        <button><img src="../../../assets/icons/cross-icon.svg" alt="" /></button>
                    </div>
                    <div className={styles.filter}>
                        <span>Snacks</span>
                        <button><img src="../../../assets/icons/cross-icon.svg" alt="" /></button>
                    </div>
                    <div className={styles.filter}>
                        <span>Cookies</span>
                        <button><img src="../../../assets/icons/cross-icon.svg" alt="" /></button>
                    </div>
                </div>
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
                        <div className={styles.searchBar}>
                            <input onChange={getSearchValue} value={searchValue} type="search" className={styles.searchInput} placeholder='Search' />
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.50651 16.3333C13.1884 16.3333 16.1732 13.3486 16.1732 9.66667C16.1732 5.98477 13.1884 3 9.50651 3C5.82461 3 2.83984 5.98477 2.83984 9.66667C2.83984 13.3486 5.82461 16.3333 9.50651 16.3333Z" stroke="#4a5568" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M17.8398 18L14.2148 14.375" stroke="#4a5568" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <div className={styles.checkboxes}>
                            <div className={styles.checkbox}>
                                <input type="checkbox" className={styles.checkboxInput}/>
                                <span>Vegetables</span>
                                <span>(15)</span>
                            </div>
                            <div className={styles.checkbox}>
                                <input type="checkbox" className={styles.checkboxInput}/>
                                <span>Cookies</span>
                                <span>(10)</span>
                            </div>
                            <div className={styles.checkbox}>
                                <input type="checkbox" className={styles.checkboxInput}/>
                                <span>Snacks</span>
                                <span>(8)</span>
                            </div>
                        </div>
                        <div className={styles.foodPrefer}>
                            <div className={styles.wrapper}>
                                <h4 className={styles.title}>Foog Preference</h4>
                                <button>
                                    <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.88398 5.90234L1.16523 2.18359C0.891797 1.91016 0.891797 1.5 1.16523 1.25391L1.7668 0.625C2.04023 0.378906 2.45039 0.378906 2.69648 0.625L5.32148 3.27734L7.97383 0.625C8.21992 0.378906 8.63008 0.378906 8.90352 0.625L9.50508 1.25391C9.77852 1.5 9.77852 1.91016 9.50508 2.18359L5.78633 5.90234C5.54023 6.14844 5.13008 6.14844 4.88398 5.90234Z" fill="#222222"/>
                                    </svg>
                                </button>
                            </div>  
                            <div className={styles.checkboxes}>
                                <div className={styles.checkbox}>
                                    <input type="checkbox" className={styles.checkboxInput}/>
                                    <span>Vegetarian</span>
                                    <span>(8)</span>
                                </div>
                                <div className={styles.checkbox}>
                                    <input type="checkbox" className={styles.checkboxInput}/>
                                    <span>Non Vegetarian</span>
                                    <span>(9)</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.rating}>
                            <div className={styles.wrapper}>
                                <h4 className={styles.title}>Rating</h4>
                                <button>
                                    <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.88398 5.90234L1.16523 2.18359C0.891797 1.91016 0.891797 1.5 1.16523 1.25391L1.7668 0.625C2.04023 0.378906 2.45039 0.378906 2.69648 0.625L5.32148 3.27734L7.97383 0.625C8.21992 0.378906 8.63008 0.378906 8.90352 0.625L9.50508 1.25391C9.77852 1.5 9.77852 1.91016 9.50508 2.18359L5.78633 5.90234C5.54023 6.14844 5.13008 6.14844 4.88398 5.90234Z" fill="#222222"/>
                                    </svg>
                                </button>
                            </div>
                            <div className={styles.checkboxes}>
                                <div className={styles.checkbox}>
                                    <input type="checkbox" className={styles.checkboxInput}/>
                                    <span>
                                        <img src="../../../assets/ratings/5 Star.png" alt="" />
                                    </span>
                                    <span>(5 Star)</span>
                                </div>
                                <div className={styles.checkbox}>
                                    <input type="checkbox" className={styles.checkboxInput}/>
                                    <span>
                                        <img src="../../../assets/ratings/4 Star.png" alt="" />
                                    </span>
                                    <span>(4 Star)</span>
                                </div>
                                <div className={styles.checkbox}>
                                    <input type="checkbox" className={styles.checkboxInput}/>
                                    <span>
                                        <img src="../../../assets/ratings/3 Star.png" alt="" />
                                    </span>
                                    <span>(3 Star)</span>
                                </div>
                                <div className={styles.checkbox}>
                                    <input type="checkbox" className={styles.checkboxInput}/>
                                    <span>
                                        <img src="../../../assets/ratings/2 Star.png" alt="" />
                                    </span>
                                    <span>(2 Star)</span>
                                </div>
                                <div className={styles.checkbox}>
                                    <input type="checkbox" className={styles.checkboxInput}/>
                                    <span>
                                        <img src="../../../assets/ratings/1 Star.png" alt="" />
                                    </span>
                                    <span>(1 Star)</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.weight}>
                            <div className={styles.wrapper}>
                                <h4 className={styles.title}>Pack Size</h4>
                                <button>
                                    <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.88398 5.90234L1.16523 2.18359C0.891797 1.91016 0.891797 1.5 1.16523 1.25391L1.7668 0.625C2.04023 0.378906 2.45039 0.378906 2.69648 0.625L5.32148 3.27734L7.97383 0.625C8.21992 0.378906 8.63008 0.378906 8.90352 0.625L9.50508 1.25391C9.77852 1.5 9.77852 1.91016 9.50508 2.18359L5.78633 5.90234C5.54023 6.14844 5.13008 6.14844 4.88398 5.90234Z" fill="#222222"/>
                                    </svg>
                                </button>
                            </div>
                            <div className={styles.checkboxes}>
                                <div className={styles.checkbox}>
                                    <input type="checkbox" className={styles.checkboxInput}/>
                                    <span>50 to 300g</span>
                                    <span>(7)</span>
                                </div>
                                <div className={styles.checkbox}>
                                    <input type="checkbox" className={styles.checkboxInput}/>
                                    <span>300 to 700g</span>
                                    <span>(5)</span>
                                </div>
                                <div className={styles.checkbox}>
                                    <input type="checkbox" className={styles.checkboxInput}/>
                                    <span>700 to 1kg</span>
                                    <span>(9)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default FiltersBar