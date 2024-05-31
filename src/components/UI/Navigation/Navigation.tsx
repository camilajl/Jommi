"use client";
import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { isMobile } from "@/src/utils/functions";
import { ButtonIcon } from "../Buttons/ButtonIcon";
import { useIsMobile } from "@/src/hooks/useIsMobile";

const Navigation = () => {
  const { isMobileDevice } = useIsMobile();
  const [open, setOpen] = useState(!isMobileDevice);

  return (
    <div className="transition-all ease-in-out delay-150  ">
      <Sidebar open={open} setOpen={setOpen} />
      <div className="fixed sm:hidden  top-0 right-0 w-12 h-[40px] flex items-center justify-end">
        <div className="w-[100px] flex justify-center">
          <ButtonIcon
            iconCategory={"charm:menu-hamburger"}
            iconColor={"#505050"}
            iconExtraClassName={"h-[30px] w-[30px]"}
            onClick={() => {
              setOpen(!open);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
