import React from 'react';
import { NavLink } from 'react-router-dom';

const Button = ({ link, children }) => (
  <NavLink className="text-sm bg-green-900 text-white rounded-full w-max px-5 py-4 block my-2 border border-green-800 hover:bg-white hover:text-gray-900" to={link}>
    {children}

  </NavLink>
);

export default Button;
