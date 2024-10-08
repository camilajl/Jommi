import React from 'react';

interface TableProps {
  thead: string[];
  children?: React.ReactNode;
}

const Table = ({ thead, children }: TableProps) => (
  <div className='relative w-full'>
    <div className='overflow-x-auto px-1 pb-3'>
      <table className='w-full table-fixed'>
        {/* Table header */}
        <thead className='thead_table'>
          <tr>
            {thead?.map((itemTh) => (
              <th key={itemTh} className='p-2 text-start'>
                {itemTh}
              </th>
            ))}
          </tr>
        </thead>
        {/* Table body */}
        <tbody className='tbody_table'>{children}</tbody>
      </table>
    </div>
  </div>
);

export { Table };
