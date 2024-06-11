"use client";
import InputSearch from "@/src/components/UI/Input/InputSearch";
import UserTable from "@/src/components/UI/Table/UserTable";
import React, { useState } from "react";
const users = [
  {
    id: 1,
    name: "camila",
    email: "camilajimenez@gmail.com",
    role: "admin",
    enabled: false,
  },
  {
    id: 2,
    name: "jesus",
    email: "jesus garcia@gmail.com",
    role: "admin",
    enabled: true,
  },
  {
    id: 3,
    name: "otro user",
    email: "user@gmail.com",
    role: "admin",
    enabled: true,
  },
];
const UsersPage = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col space-y-10 ">
      {/*COMPONENTE SEARCH */}
      <div className="flex justify-end">
        <InputSearch
          name="searchUser"
          value={search}
          placeholder="Buscar usuario"
          onChange={(e) =>
            setSearch(e.target.value === "" ? null : e.target.value)
          }
          onClick={() => {}}
        />
      </div>

      <UserTable users={users} />
    </div>
  );
};

export default UsersPage;
