"use client";
import { Table } from "@/src/components/UI/Table";
import React from "react";
import { ButtonIcon } from "../../Buttons/ButtonIcon";
import { isMobile } from "@/src/utils/functions";
import { useIsMobile } from "@/src/hooks/useIsMobile";
import { useRouter } from "next/router";

interface TableUserProps {
  users: any; //TODO: remove any - jesús 05/27/2024
}

const thead = ["Name", "Email", "Role", "Habilitado", "Actions"];
const theadMobile = ["Name", "Email", "Actions"];

const UserTable = ({ users }: TableUserProps) => {
  // const router = useRouter();
  const { isMobileDevice } = useIsMobile();

  return (
    <Table thead={isMobileDevice ? theadMobile : thead}>
      {users?.map((item, idx) => (
        <tr
          className={idx % 2 === 0 ? "bg-black " : "bg-backgroundGrey"}
          key={item.id}
        >
          <td className="threeDots">{item?.name}</td>
          <td className="threeDots">{item?.email}</td>
          {!isMobileDevice && <td className="threeDots">{item?.role}</td>}
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
