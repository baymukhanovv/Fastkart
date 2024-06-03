import React, { useContext } from 'react'
import cl from './ProfileContent.module.scss'
import AppContext from '../../../context'

const DashboardContent = () => {
    const {favorites, orders} = useContext(AppContext)

    return (
        <div className={cl.content}>
            <h1 className={cl.title}>My Account</h1>
            <div className={cl.list}>
                <span></span>
                <img src="../../../assets/images/list.png" alt="" />
                <span></span>
            </div>
            <p>Hello, <b>Vicki E. Pope</b></p>
            <p>From your My Account Dashboard you have the ability to view a snapshot of your recent account activity and update your account information. Select a
            link below to view or edit information.</p>
            <div className={cl.info}>
                <div className={cl.card}>
                    <img src="../../../assets/icons/order-icon.png" alt="" className={cl.cardImg} />
                    <div>
                        <span>Total Order</span>
                        <span>{orders.length}</span>
                    </div>
                    <img src="../../../assets/icons/order-icon.png" alt="" className={cl.cardImg2} />
                </div>
                <div className={cl.card}>
                    <img src="../../../assets/icons/pending-icon.png" alt="" className={cl.cardImg} />
                    <div>
                        <span>Total Pending Order</span>
                        <span>0</span>
                    </div>
                    <img src="../../../assets/icons/pending-icon.png" alt="" className={cl.cardImg2} />
                </div>
                <div className={cl.card}>
                    <img src="../../../assets/icons/wishlist-icon.png" alt="" className={cl.cardImg} />
                    <div>
                        <span>Total Wishlist</span>
                        <span>{favorites.length}</span>
                    </div>
                    <img src="../../../assets/icons/wishlist-icon.png" alt="" className={cl.cardImg2} />
                </div>
            </div>
        </div>
    )
}

export default DashboardContent