'use client'
import React from 'react';
import Button from '@/src/components/UI/Buttons/Button';

const StoryBrand = () => {
    return (
        <div className='flex flex-col w-full min-h-screen bg-slate-500 p-20 items-center justify-center'>
            <div className='text-center'>
                StoryBrand
            </div>
            <div className='h-[400px]  w-full bg-slate-50 border-primary flex flex-col gap-4 items-center py-4 ' >
                <Button text='hola' />
                <Button text='hola' hierarchy='button-secondary' />
            </div>


        </div>
    )
}

export default StoryBrand