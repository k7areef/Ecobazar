/**
 * @typedef {Object} RecentOrderHistoryProps
 * @prop {string} [className]
 */

import { useProfile } from '@contexts/providers/UserProfileContext';
import React from 'react';
import DefaultAvatar from '@assets/images/default-avatar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

/**
 * @param {RecentOrderHistoryProps} props
 */

function UserAvatar({ className }) {

    const { loading, profile } = useProfile();

    return (
        <div className={`user-avatar p-3 md:p-5 border border-grey-100 rounded-lg space-y-3${className ? ` ${className}` : ''}`}>
            {/* Avatar */}
            <div className="avatar w-36 h-36 rounded-full mx-auto overflow-hidden bg-green-50">
                {
                    loading ? (
                        <div className='loading w-full h-full flex items-center justify-center gap-2'>
                            <FontAwesomeIcon icon={faSpinner} className='animate-spin' />
                            <span>Loading...</span>
                        </div>
                    ) : (
                        <img
                            src={profile.avatar_url || DefaultAvatar}
                            alt='User Avatar'
                            className='w-full h-full object-cover'
                        />
                    )
                }
            </div>
            {/* Name */}
            <h3 className='font-semibold text-lg text-center'>
                {
                    loading ? (
                        <div className='loading w-full h-full flex items-center justify-center gap-2'>
                            <FontAwesomeIcon icon={faSpinner} className='animate-spin' />
                            <span>Loading...</span>
                        </div>
                    ) : (
                        profile.full_name || "User Name"
                    )
                }
            </h3>
            {/* Edit Profile */}
            <Link to={'/dashboard/settings'} className='font-medium text-primary block w-fit mx-auto'>
                Edit Profile
            </Link>
        </div>
    )
}

export default UserAvatar;