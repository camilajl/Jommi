import Link from 'next/link'
import React from 'react'

export interface ButtonLinkType{
    path: string ;
    text: string ;
}

export const ButtonLink = ({path, text}:  ButtonLinkType) => {
  return (
    
        <Link href={path}>
        <p className='font-primaryFont font-bold text-sm lg:text-lg text-white'>{text}</p>
        </Link>
    
  )
}
