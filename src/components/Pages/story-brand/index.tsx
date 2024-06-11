"use client";
import React, { useState } from "react";
import Button from "@/src/components/UI/Buttons/Button";
import InputText from "@/src/components/UI/Input/InputText";
import InputDate from "@/src/components/UI/Input/InputDate";
import InputNumber from "@/src/components/UI/Input/InputNumber";
import { SelectInput } from "@/src/components/UI/Dropdowns/Dropdown";
import Card from "@/src/components/UI/Card/Card";

type BrandPageType = {};

const StoryBrandPage = ({}: BrandPageType) => {
  //recibe query y retorna resultados del query

  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const pokemons = async (limit = 40) => {
    try {
      const staticData = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species?limit=${limit}&offset=0`
      )
        .then(async (data) => {
          const res = await data.json();
          return setOptions(
            res.results.map((el) => {
              return { value: el.url, label: el.name };
            })
          );
        })
        .catch((err) => {});
      return staticData;
    } catch (e) {
      console.log("e ", e);
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen p-20 items-center justify-center">
      <div className="text-center">StoryBrand</div>
      <div className="h-[400px]  w-full  border-primary flex flex-col gap-4 items-center py-4 ">
        <div className="flex flex-col md:flex-row gap-4 bg-white dark:bg-purple-custom p-4 rounded-lg">
          <Button text="Button" hierarchy="button-secondary" />
          <Button text="Button" />
          <InputText
            type="password"
            label="Input text"
            placeholder="texto"
            name="example"
          />
          <InputNumber label="Number" name="number" />
          <InputDate name="Fecha" />
          <SelectInput defaultOptions={options} loadOptions={pokemons} />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default StoryBrandPage;
