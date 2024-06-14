'use client';
import React from 'react';

type CardType = {
  extraclassName?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  contentExtraclassName?: string;
};

const Card = ({
  extraclassName,
  children,
  contentExtraclassName,
}: CardType) => {
  return (
    <div className={`rounded-2xl font-primaryFont shadow-md ${extraclassName}`}>
      <div className={`${contentExtraclassName}`}>{children}</div>
    </div>
  );
};

export default Card;
