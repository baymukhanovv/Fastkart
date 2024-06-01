import React from 'react'
import Header from '../components/Header/Header'
import { Outlet } from 'react-router'

const Layout = ({favorites, cartItems}) => {
    return (
        <div>
            <Header favorites={favorites} cartItems={cartItems} />
            <main className="container">
                <Outlet />
            </main>
        </div>
    )
}

export default Layout