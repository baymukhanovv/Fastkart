import React from 'react'
import Header from '../components/Header/Header'
import { Outlet } from 'react-router'
import Footer from '../components/Footer/Footer'

const Layout = ({favorites, cartItems}) => {
    return (
        <div>
            <Header favorites={favorites} cartItems={cartItems} />
            <main className="container">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout