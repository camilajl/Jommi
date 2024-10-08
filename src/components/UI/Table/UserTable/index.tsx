'use client';
import { Table } from '@/src/components/UI/Table';
import React from 'react';
import { ButtonIcon } from '../../Buttons/ButtonIcon';
import { useIsMobile } from '@/src/hooks/useIsMobile';
import { GetUsersQuery } from '@/src/graphql/generated';
import { ButtonLinkIcon } from '../../Buttons/ButtonLinkIcon';

interface TableUserProps {
  users: GetUsersQuery['users'] | undefined;
}

const thead = ['Name', 'Email', 'Role', 'Habilitado', 'Actions'];
const theadMobile = ['Name', 'Email', 'Actions'];

const UserTable = ({ users }: TableUserProps) => {
  // const router = useRouter();
  const { isMobileDevice } = useIsMobile();
  return (
    <Table thead={isMobileDevice ? theadMobile : thead}>
      {users?.map((item, idx) => (
        <tr
          className={
            idx % 2 === 0
              ? 'bg-white dark:bg-black'
              : 'bg-tertiary_grey dark:bg-backgroundGrey'
          }
          key={item.id}
        >
          <td className='threeDots p-2'>{item?.name}</td>
          <td className='threeDots p-2'>{item?.email}</td>
          {!isMobileDevice && (
            <td className='threeDots p-2'>{item?.roles.map((r) => r.name)}</td>
          )}
          {!isMobileDevice && (
            <td className='threeDots p-2'>
              {/* {item?.enabled ? "true" : "false"  */}
              <ButtonIcon
                iconCategory={
                  item?.enabled ? 'icon-park-solid:check-one' : 'gg:close-o'
                }
                iconExtraClassName={`h-[30px] w-[30px] ${item?.enabled ? ' text-jommi_purple dark:text-tertiary' : ' text-soft_grey dark:text-white'}`}
              />
            </td>
          )}

          <td className='threeDots p-2'>
            <div className='flex md:gap-2'>
              <ButtonLinkIcon
                key={item.id}
                path={`/app/users/${item?.id}`}
                iconCategory='material-symbols:edit-outline'
                iconColor={
                  'h-[25px] w-[25px] md:h-[30px] md:w-[30px] text-black dark:text-white'
                }
              />

              <ButtonIcon
                iconCategory={'material-symbols:delete-outline'}
                iconExtraClassName={
                  'h-[25px] w-[25px] md:h-[30px] md:w-[30px] text-black dark:text-white'
                }
              />
            </div>
          </td>
        </tr>
      ))}
    </Table>
  );
};

export default UserTable;
