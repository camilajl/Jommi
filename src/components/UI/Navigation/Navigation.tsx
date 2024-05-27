"use client";
import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { isMobile } from "@/src/utils/functions";
import { ButtonIcon } from "../Buttons/ButtonIcon";

const Navigation = () => {
  var tipoDispositivo = isMobile();
  const [open, setOpen] = useState(!tipoDispositivo);

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
