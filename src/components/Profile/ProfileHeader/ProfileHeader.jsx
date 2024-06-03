import React from 'react'
import cl from './ProfileHeader.module.scss'
import { Link } from 'react-router-dom'

const DashboardNavbar = () => {
    return (
        <div className={cl.dashboard}>
            <div className={cl.top}>
                <img src="../../../assets/images/background-image.png" alt="" className={cl.backImg} />
                <div className={cl.avatar}>
                    <img width={108} height={108} src="../../../assets/images/avatar-1.png" className={cl.avatarImg} alt="" />
                    <span className={cl.penBtn}>
                        <img src="../../../assets/icons/pen-icon.svg" alt="" />
                    </span>
                </div>
                <h3 className={cl.name}>Vicki E. Pope</h3>
                <p className={cl.email}>vicki.pope@gmail.com</p>
            </div>
            <nav>
                <Link to='/orders' className={cl.link}>
                    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.75 2.50342L2.375 5.67008V16.7534C2.375 17.1733 2.54181 17.5761 2.83875 17.873C3.13568 18.1699 3.53841 18.3368 3.95833 18.3368H15.0417C15.4616 18.3368 15.8643 18.1699 16.1613 17.873C16.4582 17.5761 16.625 17.1733 16.625 16.7534V5.67008L14.25 2.50342H4.75Z" stroke="#4A5568" strokeWidth="1.58333" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2.375 5.66992H16.625" stroke="#4A5568" strokeWidth="1.58333" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12.6673 8.83643C12.6673 9.67628 12.3337 10.4817 11.7398 11.0756C11.146 11.6695 10.3405 12.0031 9.50065 12.0031C8.6608 12.0031 7.85534 11.6695 7.26148 11.0756C6.66761 10.4817 6.33398 9.67628 6.33398 8.83643" stroke="#4A5568" strokeWidth="1.58333" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>My orders</span>
                </Link>
            </nav>
        </div>
    )
}

export default DashboardNavbar