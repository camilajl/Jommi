
import StoryBrandPage from '@/src/components/Pages/story-brand';
import React from 'react';


const StoryBrand = async () => {


    return ( 
        <StoryBrandPage props={{}}></StoryBrandPage> 
        <div className='flex flex-col w-full min-h-screen p-20 items-center justify-center'>
            <div className='text-center'>
                StoryBrand
            </div>
            <div className='h-[400px]  w-full  border-primary flex flex-col gap-4 items-center py-4 ' >
                <div className='flex flex-row gap-4 bg-white dark:bg-purple-custom p-4 rounded-lg'>
                    <Button text='Button' hierarchy='button-secondary' />
                    <Button text='Button' />
                    <InputText type='password' label='Input text' placeholder='texto' name='example' />
                    <InputNumber label='Number' name='number' placeholder='number' />
                    <InputDate name='Fecha' />
                    <SelectInput defaultOptions={miArray} />
                </div>


            </div>


        </div>
    )
}

export default StoryBrand