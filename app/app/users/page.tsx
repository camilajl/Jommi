import { Table } from "@/src/components/UI/Table";
import { GET_USERS } from "@/src/graphql/client/queries/masters/users";
import { checkAccess, checkRoleOnPage } from "@/src/utils/adminFunctions";
import { useQuery } from "@apollo/client";
import React from "react";

const theadUser = ["Name", "Email", "Role", "Estado"];
const Users = () => {
  // const { data } = useQuery(GET_USERS, {
  //   fetchPolicy: "network-only",
  // });
  // console.log("data ", data);
  const users = [
    {
      id: 1,
      name: "camila",
      email: "camilajimenez@gmail.com",
      role: "admin",
      enabled: true,
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
  return (
    <div className="flex items-center justify-center">
      <Table thead={theadUser}>
        {users?.map((item, idx) => (
          <tr
            className={idx % 2 === 0 ? "bg-black" : "bg-backgroundGrey"}
            key={item.id}
          >
            <td>{item?.name}</td>
            <td>{item?.email}</td>
            <td>{item?.role}</td>
            <td>{item?.enabled ? "true" : "false"}</td>
          </tr>
        ))}
      </Table>
    </div>
  );
};

export default Users;
