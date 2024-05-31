import React, { useState } from "react";
import { ButtonLink } from "../Buttons/ButtonLink";
import Button from "../Buttons/Button";
import { signOut } from "next-auth/react";
import { routes } from "@/src/utils/const";
import { ButtonLinkIcon } from "../Buttons/ButtonLinkIcon";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ButtonIcon } from "../Buttons/ButtonIcon";

const Sidebar = ({ open, setOpen }) => {
  return (
    <>
      <div
        className={`transition-all ease-in-out delay-150 resize-x fixed sm:static top-0 left-0 bg-black h-full border-primary border ${open ? "w-60 md:w-80 px-5 md:px-20" : "w-0 "} z-10   truncate  flex flex-col justify-between py-10  `}
      >
        <div className={`space-y-10 w-40 self-center    `}>
          <h1 className="text-tertiary font-primaryFont font-medium text-5xl  ">
            jommi.
          </h1>
          <div className=" ">
            {routes?.map((route) => (
              <ButtonLinkIcon
                key={route.id}
                path={route.path}
                text={route.name}
                iconCategory={route.iconCategory}
                iconColor={"#FFFFFF"}
              />
            ))}
          </div>
        </div>
        <div className={`flex justify-center md:justify-start  `}>
          <ButtonIcon
            text="Cerrar sesión"
            iconCategory={"clarity:power-solid"}
            iconColor={"#EB591B"}
            extraClassName="text-jommi_red hover:text-xl"
            onClick={() => {
              signOut();
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
