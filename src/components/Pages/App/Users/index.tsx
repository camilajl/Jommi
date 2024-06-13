"use client";
import InputSearch from "@/src/components/UI/Input/InputSearch";
import UserTable from "@/src/components/UI/Table/UserTable";
import { GET_USERS } from "@/src/graphql/User/users.query";
import { GetUsersQuery } from "@/src/graphql/generated";
import { useQuery } from "@apollo/client";
import React, { useState } from "react";

const UsersPage = () => {
  const [search, setSearch] = useState("");

  const { loading, error, data } = useQuery<GetUsersQuery>(GET_USERS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
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
          onClick={() => { }}
        />
      </div>

      <UserTable users={data?.users} />
    </div>
  );
};

export default UsersPage;
