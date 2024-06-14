'use client';
import React from 'react';

type ButtonType = {
  type?: 'button' | 'reset' | 'submit';
  hierarchy?: 'button-primary' | 'button-secondary' | 'button-tertiary';
  text: string;
  onClick?: () => void;
};

const Button = ({
  type = 'button',
  text,
  hierarchy = 'button-primary',
  onClick,
}: ButtonType) => {
  return (
    <button className={hierarchy} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
