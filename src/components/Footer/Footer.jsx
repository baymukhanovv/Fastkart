import React from 'react'
import cl from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={cl.footer}>
            <div className="container">
                <div className={cl.footerTop}>
                    <div className={cl.card}>
                        <img src="../../../assets/images/footer-1.png" alt="" /> 
                        <span>Every Fresh Products</span>   
                    </div>    
                    <div className={cl.card}>
                        <img src="../../../assets/images/footer-2.png" alt="" /> 
                        <span>Free Delivery</span>   
                    </div>    
                    <div className={cl.card}>
                        <img src="../../../assets/images/footer-3.png" alt="" /> 
                        <span>Daily Mega Discounts</span>   
                    </div>    
                    <div className={cl.card}>
                        <img src="../../../assets/images/footer-4.png" alt="" /> 
                        <span>Best Price On The Market</span>   
                    </div>    
                </div>    
                <div className={cl.footerMiddle}>
                    <div className={cl.logo}>
                        <img className={cl.footerLogo} src="../../../assets/logo.png" alt="" />
                        <p>
                            We are a friendly bar serving a variety of
                            cocktails, wines and beers. Our bar is a
                            perfect place for a couple of after work
                            drinks or weekend celebrations.
                        </p>
                        <p>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.01758 1.49414C8.15039 1.49414 7.33594 1.65234 6.57422 1.96875C5.8125 2.29688 5.14453 2.73926 4.57031 3.2959C3.99609 3.85254 3.5332 4.50586 3.18164 5.25586C2.8418 6.01758 2.66016 6.82617 2.63672 7.68164L2.61914 7.89258C2.6543 8.73633 2.8125 9.55078 3.09375 10.3359C3.375 11.1211 3.76758 11.8477 4.27148 12.5156L4.5 12.832C4.98047 13.4414 5.50781 14.0127 6.08203 14.5459C6.65625 15.0791 7.26562 15.5684 7.91016 16.0137L8.20898 16.2246L8.26172 16.2598C8.48438 16.4238 8.73047 16.5059 9 16.5059C9.26953 16.5059 9.51562 16.4238 9.73828 16.2598L9.77344 16.2246C10.2891 15.8965 10.7812 15.5391 11.25 15.1523C11.7188 14.7656 12.1641 14.3496 12.5859 13.9043C13.0195 13.459 13.4062 12.9961 13.7461 12.5156C14.0859 12.0352 14.373 11.5459 14.6074 11.0479C14.8418 10.5498 15.0293 10.043 15.1699 9.52734C15.2988 9.02344 15.3691 8.51367 15.3809 7.99805V7.91016C15.3809 7.04297 15.2227 6.22852 14.9062 5.4668C14.5781 4.70508 14.1357 4.03418 13.5791 3.4541C13.0225 2.87402 12.3691 2.41406 11.6191 2.07422C10.8691 1.72266 10.0664 1.53516 9.21094 1.51172L9.01758 1.49414ZM9.01758 2.63672C9.7207 2.63672 10.3887 2.77148 11.0215 3.04102C11.6426 3.31055 12.1875 3.67383 12.6562 4.13086C13.125 4.58789 13.5 5.12695 13.7812 5.74805C14.0625 6.36914 14.2148 7.03125 14.2383 7.73438V7.98047C14.2266 8.41406 14.168 8.84766 14.0625 9.28125C13.9453 9.72656 13.7812 10.166 13.5703 10.5996C13.3594 11.0332 13.1016 11.4609 12.7969 11.8828C12.4922 12.3047 12.1465 12.7207 11.7598 13.1309C11.373 13.5293 10.96 13.9102 10.5205 14.2734C10.0811 14.6367 9.62695 14.9707 9.1582 15.2754L9.08789 15.3281C9.06445 15.3516 9.03516 15.3633 9 15.3633C8.96484 15.3633 8.93555 15.3516 8.91211 15.3281L8.8418 15.2754C8.13867 14.8184 7.47949 14.2998 6.86426 13.7197C6.24902 13.1396 5.68359 12.5098 5.16797 11.8301C4.75781 11.291 4.43555 10.708 4.20117 10.0811C3.9668 9.4541 3.82617 8.80664 3.7793 8.13867L3.76172 7.875C3.76172 7.16016 3.89648 6.49219 4.16602 5.87109C4.42383 5.25 4.78418 4.70215 5.24707 4.22754C5.70996 3.75293 6.24609 3.375 6.85547 3.09375C7.47656 2.8125 8.13867 2.66016 8.8418 2.63672H9.01758ZM9 5.55469C8.33203 5.55469 7.76074 5.79199 7.28613 6.2666C6.81152 6.74121 6.57422 7.3125 6.57422 7.98047C6.57422 8.66016 6.81152 9.2373 7.28613 9.71191C7.76074 10.1865 8.33203 10.4238 9 10.4238C9.66797 10.4238 10.2393 10.1865 10.7139 9.71191C11.1885 9.2373 11.4258 8.66016 11.4258 7.98047C11.4258 7.3125 11.1885 6.74121 10.7139 6.2666C10.2393 5.79199 9.66797 5.55469 9 5.55469ZM9 6.69727C9.35156 6.69727 9.65625 6.82324 9.91406 7.0752C10.1719 7.32715 10.3008 7.62891 10.3008 7.98047C10.3008 8.34375 10.1719 8.65137 9.91406 8.90332C9.65625 9.15527 9.35156 9.28125 9 9.28125C8.64844 9.28125 8.34375 9.15527 8.08594 8.90332C7.82812 8.65137 7.69922 8.34375 7.69922 7.98047C7.69922 7.62891 7.82812 7.32715 8.08594 7.0752C8.34375 6.82324 8.64844 6.69727 9 6.69727Z" fill="#4A5568"/>
                            </svg>  
                            <span>1418 Riverwood Drive, CA 96052, US</span>
                        </p>
                        <p>
                            <img src="../../../assets/icons/email-icon.svg" alt="" />
                            <span>
                                <a href='mailto:support@fastkart.com'>
                                    support@fastkart.com
                                </a>
                            </span>
                        </p>
                    </div>
                    <div className={cl.col}>
                        <h3 className={cl.title}>Categories</h3>
                        <ul>
                            <li>Vegetables & Fruit</li>
                            <li>Beverages</li>
                            <li>Meats & Seafood</li>
                            <li>Frozen Foods</li>
                            <li>Biscuits & Snacks</li>
                            <li>Grocery & Staples</li>
                        </ul>
                    </div>
                    <div className={cl.col}>
                        <h3 className={cl.title}>Useful Links</h3>
                        <ul>
                            <li>Home</li>
                            <li>Cart</li>
                            <li>Orders</li>
                            <li>Favorites</li>
                            <li>Account</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                    <div className={cl.col}>
                        <h3 className={cl.title}>Help Center</h3>
                        <ul>
                            <li>Your Order</li>
                            <li>Your Account</li>
                            <li>Track Order</li>
                            <li>Your Wishlist</li>
                            <li>Search</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <div className={cl.contact}>
                        <h3 className={cl.title}>Contact Us</h3>
                        <div className={cl.contactInfo}>
                            <img width={18} height={19} src="../../../assets/icons/phone-icon.svg" alt="" />
                            <div>
                                <p>Hotline 24/7 :</p>
                                <a href="tel:+918881042340">+91 888 104 2340</a>
                            </div>
                        </div>
                        <div className={cl.contactInfo}>
                            <img src="../../../assets/icons/email-icon.svg" alt="" />
                            <div>
                                <p>Email Address:</p>
                                <a href="mailto:fastkart@hotmail.com">fastkart@hotmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cl.footerBottom}>
                    <span>©2022 Fastkart All rights reserved</span>
                </div>
            </div>             
        </div>
    )
}

export default Footer