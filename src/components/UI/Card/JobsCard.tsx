"use client";

import Card from "@/src/components/UI/Card/Card";
import { Icon } from "@iconify/react";
import React, { useState } from "react";

interface JobsCardType {
  iconCategory?: string;
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
      <Card extraclassName="w-[250px] h-[115px]" contentExtraclassName="p-0">
        <div
          className={`flex justify-between ${backgroundColor} rounded-t-2xl p-3 h-[78px]`}
        >
          <div>
            <Icon
              icon={iconCategory}
              className={`h-[20px] w-[20px] md:h-[24px] md:w-[24px] text-primary `}
            />
          </div>
          <p className="text-primary font-bold text-lg">{categoryName}</p>
        </div>
        <div
          className={`flex justify-center items-center ${backgroundColor}  rounded-b-2xl p-3 h-[37px] bg-opacity-20 `}
        >
          <p className="text-primary text-base">Ver más</p>
        </div>
      </Card>
    </div>
  );
};

export default JobsCard;
