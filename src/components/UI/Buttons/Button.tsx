'use client'
import React from 'react'

type ButtonType = {
    type?: 'button' | 'reset' | 'submit',
    hierarchy?: 'button-primary' | 'button-secondary' | 'button-tertiary',
    text: string
}

const Button = ({ type = 'button', text, hierarchy = 'button-primary' }: ButtonType) => {
    return (
        <button
            className={hierarchy}
            type={type}
            onClick={() => { console.log("click") }}
        >
            {text}
        </button>
    )
}

export default Button