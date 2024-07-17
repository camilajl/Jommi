'use client';
import React, { useState } from 'react';
import Button from '@/src/components/UI/Buttons/Button';
import InputText from '@/src/components/UI/Input/InputText';
import InputDate from '@/src/components/UI/Input/InputDate';
import InputNumber from '@/src/components/UI/Input/InputNumber';
import { SelectInput } from '@/src/components/UI/Dropdowns/Dropdown';
import Card from '@/src/components/UI/Card/Card';

const StoryBrandPage = () => {
  //recibe query y retorna resultados del query



  const [options, setOptions] = useState([]);
  const pokemons = async (limit = 40) => {
    try {
      const staticData = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species?limit=${limit}&offset=0`
      )
        .then(async (data) => {
          const res = await data.json();
          return setOptions(
            res.results.map((el: any) => {
              return { value: el.url, label: el.name };
            })
          );
        })
        .catch(() => {});
      return staticData;
    } catch (e) {
      console.log('e ', e);
    }
  };

  return (
    <div className='flex min-h-screen w-full flex-col items-center justify-center p-20'>
      <div className='text-center'>StoryBrand</div>
      <div className='flex h-[400px] w-full flex-col items-center gap-4 border-primary py-4'>
        <div className='flex flex-col gap-4 rounded-lg bg-white p-4 md:flex-row dark:bg-purple-custom'>
          <Button text='Button' hierarchy='button-secondary' />
          <Button text='Button' />
          <InputText
            type='password'
            label='Input text'
            placeholder='texto'
            name='example'
          />
          <InputNumber label='Number' name='number' />
          <InputDate />
          <SelectInput defaultOptions={options} loadOptions={pokemons} />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default StoryBrandPage;
