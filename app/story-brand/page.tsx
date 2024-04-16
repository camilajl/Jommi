
import React from 'react';
import Button from '@/src/components/UI/Buttons/Button';
import InputText from '@/src/components/UI/Input/InputText';
import InputDate from '@/src/components/UI/Input/InputDate';
import InputNumber from '@/src/components/UI/Input/InputNumber';
import { SelectInput } from '@/src/components/UI/Dropdowns/Dropdown';

const StoryBrand = async () => {

    const pokemons = async () => {
        try {
            const staticData = await fetch(`https://pokeapi.co/api/v2/ability/?limit=20&offset=20`).then(async data => {
                const res = await data.json()
                //console.log("res ", res)
            }).catch((err) => {
            });
            return staticData
        } catch (e) {
            console.log("e ", e)
        }
    }

    const miArray = await pokemons()
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
                    <SelectInput defaultOptions={miArray} />
                </div>


            </div>


        </div>
    )
}

export default StoryBrand