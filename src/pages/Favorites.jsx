import React from 'react'
import FavoriteList from '../components/FavoriteList/FavoriteList'

const Favorites = ({favorites}) => {

    return (
        <div className="favorites">
                <h1>My Favorites</h1>
                <FavoriteList favorites={favorites} />
        </div>
    )
}

export default Favorites