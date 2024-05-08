import React, { useState } from 'react'
import Navigation from '../UI/Navigation/Navigation'

const MainLayout = ({ children }) => {
    return (
        <div className='h-screen flex flex-row  w-full relative'>

            <Navigation />
            <div className='pt-[60px] sm:pt-0 h-full border-red-100 border w-full'>
                {children}
            </div>

        </div>
    )
}

export default MainLayout