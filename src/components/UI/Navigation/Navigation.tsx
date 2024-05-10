'use client'
import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'

const Navigation = () => {
    const [open, setOpen] = useState(true)

    return (
        <div>
            <Sidebar open={open} setOpen={setOpen} />
            <div className='fixed sm:hidden top-0 right-0 w-full bg-red-200 h-[40px] flex items-center justify-end'>
                <div className='w-[100px]'>
                    <button onClick={() => { setOpen(!open) }}>Cuadrado</button>
                </div>

            </div>
        </div>

    )
}

export default Navigation