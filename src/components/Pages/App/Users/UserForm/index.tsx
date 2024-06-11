"use client";

import { SelectInput } from "@/src/components/UI/Dropdowns/Dropdown";
import InputText from "@/src/components/UI/Input/InputText";
import React from "react";

const UserForm = () => {
  return (
    <div className="flex flex-col space-y-10 ">
      <form action="">
        <div className="grid grid-cols-3 gap-3">
          <InputText label={"Nombre"} placeholder={"Nombre"} />
          <InputText
            label={"Email"}
            placeholder={"Email@example.com"}
            type="email"
          />
          <SelectInput label="Rol" defaultOptions={[]} />
          <SelectInput label={"Habilitado"} defaultOptions={[]} />
        </div>
      </form>
    </div>
  );
};

export default UserForm;
