"use client";
import { Table } from "@/src/components/UI/Table";
import React from "react";
import { ButtonIcon } from "../../Buttons/ButtonIcon";
import { isMobile } from "@/src/utils/functions";
import { useIsMobile } from "@/src/hooks/useIsMobile";
import { useRouter } from "next/router";
import { GetUsersQuery, User } from "@/src/graphql/generated";
import { useQuery } from "@apollo/client";
import { GET_USERS } from "@/src/graphql/User/users.query";

interface TableUserProps {
}

const thead = ["Name", "Email", "Role", "Habilitado", "Actions"];
const theadMobile = ["Name", "Email", "Actions"];

const UserTable = ({ }: TableUserProps) => {
  // const router = useRouter();
  const { isMobileDevice } = useIsMobile();
  const { loading, error, data } = useQuery<GetUsersQuery>(GET_USERS);
  console.log("data ", data)
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  return (
    <Table thead={isMobileDevice ? theadMobile : thead}>
      {data?.users?.map((item, idx) => (
        <tr
          className={idx % 2 === 0 ? "bg-black " : "bg-backgroundGrey"}
          key={item.id}
        >
          <td className="threeDots">{item?.name}</td>
          <td className="threeDots">{item?.email}</td>
          {!isMobileDevice && <td className="threeDots">{item?.roles.map((r) => r.name)}</td>}
          {!isMobileDevice && (
            <td className="threeDots">
              {/* {item?.enabled ? "true" : "false"  */}
              <ButtonIcon
                iconCategory={
                  item?.enabled ? "icon-park-solid:check-one" : "gg:close-o"
                }
                iconColor={item?.enabled ? "#F1DB4B" : "#ffffff"}
                iconExtraClassName={"h-[30px] w-[30px]"}
              />
            </td>
          )}

          <td className="threeDots">
            <div className="flex  md:gap-2">
              <ButtonIcon
                iconCategory={"material-symbols:edit-outline"}
                iconColor={"#ffffff"}
                iconExtraClassName={"h-[25px] w-[25px] md:h-[30px] md:w-[30px]"}
              // onClick={() => router.push(`/app/app/users/${item?.id}`)}
              />
              <ButtonIcon
                iconCategory={"material-symbols:delete-outline"}
                iconColor={"#ffffff"}
                iconExtraClassName={"h-[25px] w-[25px] md:h-[30px] md:w-[30px]"}
              />
            </div>
          </td>
        </tr>
      ))}
    </Table>
  );
};

export default UserTable;
