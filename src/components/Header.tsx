import React from 'react'
import { ReactComponent as HeaderIcon } from '../assets/header.svg'


const Header = () => {
    return (
        <div className='h-[140px] flex items-center justify-center bg-headersGrey sm:justify-center lg:justify-start lg:pl-20'>
            <div className='border px-4 py-4  '>
                <HeaderIcon />
            </div>

        </div>
    )
}

export default Header