
import React from 'react';
import Button from '@/src/components/UI/Buttons/Button';
import InputText from '@/src/components/UI/Input/InputText';
import InputDate from '@/src/components/UI/Input/InputDate';
import InputNumber from '@/src/components/UI/Input/InputNumber';

const StoryBrand = () => {

    return (
        <div className='flex flex-col w-full min-h-screen p-20 items-center justify-center'>
            <div className='text-center'>
                StoryBrand
            </div>
            <div className='h-[400px]  w-full  border-primary flex flex-col gap-4 items-center py-4 ' >
                <div className='flex flex-row gap-4 bg-white dark:bg-purple-custom p-4 rounded-lg'>
                    <Button text='Button' hierarchy='button-secondary' />
                    <Button text='Button' />
                    <InputText type='password' label='Input text' placeholder='texto' name='example' />
                    <InputNumber label='Number' name='number' />
                    <InputDate name='Fecha' />

                </div>


            </div>


        </div>
    )
}

export default StoryBrand