import { Table } from "@/src/components/UI/Table";
import React from 'react'

interface TableUserProps {
    users: any; //TODO: remove any - jesús 05/27/2024
}

const thead = ["Name", "Email", "Role", "Estado"];

const UserTable = ({ users }: TableUserProps) => {
    return (
        <Table thead={thead}>
            {users?.map((item, idx) => (
                <tr
                    className={idx % 2 === 0 ? "bg-black" : "bg-backgroundGrey"}
                    key={item.id}
                >
                    <td className="threeDots">{item?.name}</td>
                    <td className="threeDots">{item?.email}</td>
                    <td className="threeDots">{item?.role}</td>
                    <td className="threeDots">{item?.enabled ? "true" : "false"}</td>
                </tr>
            ))}
        </Table>
    )
}

export default UserTable