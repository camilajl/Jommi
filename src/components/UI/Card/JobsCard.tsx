'use client';

import Card from '@/src/components/UI/Card/Card';
import { Icon } from '@iconify/react';
import React from 'react';

interface JobsCardType {
  iconCategory: string;
  categoryName?: string;
  backgroundColor?: string;
}
const JobsCard = ({
  iconCategory,
  categoryName,
  backgroundColor,
}: JobsCardType) => {
  return (
    <div>
      <Card extraclassName='w-[250px] h-[115px]' contentExtraclassName='p-0'>
        <div
          className={`flex justify-between ${backgroundColor} h-[78px] rounded-t-2xl p-3`}
        >
          <div>
            <Icon
              icon={iconCategory}
              className={`h-[20px] w-[20px] text-primary md:h-[24px] md:w-[24px]`}
            />
          </div>
          <p className='text-lg font-bold text-primary'>{categoryName}</p>
        </div>
        <div
          className={`flex items-center justify-center ${backgroundColor} h-[37px] rounded-b-2xl bg-opacity-20 p-3`}
        >
          <p className='text-base text-primary'>Ver más</p>
        </div>
      </Card>
    </div>
  );
};

export default JobsCard;
