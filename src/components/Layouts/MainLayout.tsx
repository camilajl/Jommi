import React, { useState } from "react";
import Navigation from "../UI/Navigation/Navigation";

interface MainLayoutInteface {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutInteface) => {
  return (
    <div className="h-screen flex flex-row bg-black w-full relative ">
      <Navigation />
      <div className="pt-[60px] px-10 sm:pt-10 h-full  border-primary border w-full">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
