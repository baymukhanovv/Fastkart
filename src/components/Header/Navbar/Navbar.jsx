import React from 'react'
import styles from './Navbar.module.scss'
import Dropdown from '../../UI/Dropdown/Dropdown'

const Navbar = () => {
    return (
        <nav className={styles.navList}>
            <Dropdown isDarkArrow={true} isLink={true} label='Pages' options={['/Home', 'Favorites', 'Cart', 'Account']} />
            <Dropdown isDarkArrow={true} isLink={false} label='Shop' options={['Vegetables', 'Fruits', 'Organic']} />
            <Dropdown isDarkArrow={true} isLink={false} label='Products' options={['Bakes, cakes', 'Snacks', 'Meat, seafood']} />
            <Dropdown isDarkArrow={true} isLink={false} label='Mega menu' options={['Bakes, cakes', 'Meat, seafood', 'Milk & Dairies']} />
            <Dropdown isDarkArrow={true} isLink={false} label='Blog' options={['Blog block', 'Blog authors', 'Blog list']} />
            <Dropdown isDarkArrow={true} isLink={false} label='Sellers' options={['Seafood, meat', 'Bakes, cakes', 'Vegetables, fruits']} />
        </nav>
    )
}

export default Navbar