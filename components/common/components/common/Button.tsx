import React from 'react';

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type = 'button', className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
