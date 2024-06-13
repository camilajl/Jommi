"use client";
import React from "react";

type CardType = {
  extraclassName?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  contentExtraclassName?: string;
};

const Card = ({
  extraclassName,
  children,
  onClick,
  contentExtraclassName,
}: CardType) => {
  return (
    <div className={`rounded-2xl shadow-md font-primaryFont ${extraclassName}`}>
      <div className={`${contentExtraclassName}`}>{children}</div>
    </div>
  );
};

export default Card;
