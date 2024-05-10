import React, { useState } from 'react'
import { ButtonLink } from '../Buttons/ButtonLink'
import Button from '../Buttons/Button'
import { signOut } from 'next-auth/react'
import { routes } from '@/src/utils/const'
import { ButtonLinkIcon } from '../Buttons/ButtonLinkIcon'
import { Icon } from '@iconify/react/dist/iconify.js'
import { ButtonIcon } from '../Buttons/ButtonIcon'

const Sidebar = ({ open, setOpen }) => {


    return (
        <>
    <div className={`fixed sm:static top-0 left-0 bg-blackish_grey h-full border-white border ${open ? "w-80" : "w-0 hidden"} z-10  sm:w-52 md:w-80 flex flex-col justify-between py-10 px-[20%]`}>
        <div className='space-y-10'> 
        <h1 className='text-tertiary font-primaryFont font-medium text-6xl'>jommi.</h1>
        <div>
        {routes?.map(route => (
        <ButtonLinkIcon key={route.id} path={route.path} text={route.name} iconCategory={route.iconCategory} iconColor={'#FFFFFF'}/>

        ))}
        </div>
       
    
        </div>
    
    <ButtonIcon text='Cerrar sesión'  iconCategory={'clarity:power-solid'} iconColor={'#EB591B'}  extraClassName='text-jommi_red'
    onClick={() => {
            signOut()
        } } />
     <span className='absolute top-[50%] left-[306px] rounded-full bg-jommi_red '>
        <ButtonIcon  
        iconCategory={'gravity-ui:arrow-left'} 
        iconColor={'#FFFFFF'} 
        onClick={() => {setOpen(!open)} }/>
    </span>
    </div>
   
    </>
        
        
    )
}

export default Sidebar