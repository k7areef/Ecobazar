/**
 * @typedef {Object} BlogSidebarDrawerProps
 * @prop {function} onClose
 * @prop {boolean} isOpen
 */

import React from 'react'
import Drawer from '@components/UI/Drawer'
import BlogSidebar from './BlogSidebar';

/**
 * @param {BlogSidebarDrawerProps} props
 */
function BlogSidebarDrawer({ isOpen, onClose }) {
    return (
        <Drawer isOpen={isOpen} closeDrawer={onClose}>
            <BlogSidebar className='p-5 pb-0 overflow-y-auto ms-auto h-screen' onClose={onClose} />
        </Drawer>
    )
}

export default BlogSidebarDrawer;