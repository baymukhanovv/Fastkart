import React from 'react'
import ProfileHeader from './ProfileHeader/ProfileHeader'
import ProfileContent from './ProfileContent/ProfileContent'
import cl from './Profile.module.scss'

const Profile = () => {
    return (
        <div className={cl.profile}>
            <ProfileHeader />
            <ProfileContent />
        </div>
    )
}

export default Profile