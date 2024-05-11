'use client'
import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { isMobile } from '@/src/utils/functions';


const Navigation = () => {
    var tipoDispositivo = isMobile();
    const [open, setOpen] = useState(!tipoDispositivo)

    return (
        <div className='transition-all ease-in-out delay-150  '>
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