import React from 'react'
import styles from './FavoriteList.module.scss'
import FavoriteCard from './FavoriteCard/FavoriteCard'

const FavoriteList = ({favorites}) => {
    return (
        <div className={styles.favoriteLayout}>
            {favorites.length === 0 
                ? 
                <p style={{fontSize: '20px', fontWeight: '600'}}>You don't have favorite products:(</p>
                :
                <div className={styles.favoriteContent}>
                    {favorites.map(product => 
                        <FavoriteCard
                            key={product.id}
                            {...product}
                        />
                    )}
                </div>
            }       
        </div>
    )
}

export default FavoriteList