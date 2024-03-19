'use client'
import React from 'react';
import Button from '@/src/components/UI/Buttons/Button';
import InputText from '@/src/components/UI/Input/InputText';
import InputNumber from '@/src/components/UI/Input/InputNumber';
import InputDate from '@/src/components/UI/Input/InputDate';

const StoryBrand = () => {
    return (
        <div className='flex flex-col w-full min-h-screen p-20 items-center justify-center'>
            <div className='text-center'>
                StoryBrand
            </div>
            <div className='h-[400px]  w-full  border-primary flex flex-col gap-4 items-center py-4 ' >
                <Button text='Button' />
                <Button text='Call to action' hierarchy='button-secondary' />
                <InputText type='password' label='Input text' placeholder='texto' name='example'/>
                <InputNumber label='Input number' placeholder='number' name='exampleNumeric' required/>
                <InputDate name='exampleDate' />

            </div>


        </div>
    )
}

export default StoryBrand