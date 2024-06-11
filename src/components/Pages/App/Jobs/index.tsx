"use client";

import JobsCard from "@/src/components/UI/Card/JobsCard";
import { jobCardItems } from "@/src/utils/const";
import React from "react";

const JobsPage = () => {
  return (
    <>
      <div className="flex gap-4">
        {jobCardItems?.map((item) => (
          <JobsCard
            key={item.id}
            categoryName={item.name}
            backgroundColor={item.backgroundColor}
            iconCategory={item.iconCategory}
          />
        ))}
      </div>
    </>
  );
};

export default JobsPage;
