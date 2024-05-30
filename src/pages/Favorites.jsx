import React from 'react'
import FavoriteList from '../components/FavoriteList/FavoriteList'

const Favorites = ({favorites}) => {

    return (
        <div className="favorites">
            <div className="container">
                <h1>My Favorites</h1>
                <FavoriteList favorites={favorites} />
            </div>
        </div>
    )
}

export default Favorites