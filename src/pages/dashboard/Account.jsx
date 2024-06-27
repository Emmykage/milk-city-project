import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import user from '../../assets/images/icons/avatar-1299805_1280.png';

const Account = () => {
  const activeLink = 'active text-gray-600 px-5 py-1 text-sm font-medium';
  const inactiveLink = 'text-gray-600 px-5 py-1 text-sm font-medium';
  return (
    <div className="max-w-7xl mx-2 sm:m-auto  px-2 account">
      <h2 className="text-left text-gray-900 text-2xl font-semibold my-8">My Account</h2>

      <div className="w-full bg-white shadow-md p-8 flex items-center gap-10 rounded-md">
        <div className="h-28 w-28 shadow-md rounded-full border">
          <img src={user} alt="user icon" className="w-full h-full p-5 text-gray-500" />
        </div>
        <div>
          <h3 className="text-gray-600 font-semibold">Vortech</h3>
          <p className="text-sm text-gray-500 ">4263410275</p>

        </div>
      </div>
      <ul className="flex mt-8">
        <li className="relative border-b py-2">
          <NavLink className={({ isActive }) => (isActive ? activeLink : inactiveLink)} to="/dashboard/account/identity">ACCOUNT</NavLink>
          {' '}
        </li>
        <li className="relative border-b py-2">
          <NavLink className={({ isActive }) => (isActive ? activeLink : inactiveLink)} to="/dashboard/account/profile">PROFILE</NavLink>
          {' '}
        </li>
        <li className="relative border-b py-2">
          <NavLink className={({ isActive }) => (isActive ? activeLink : inactiveLink)} to="/dashboard/account/payment-method">PAYMENT METHOD</NavLink>
          {' '}
        </li>
      </ul>
      <div className="min-h-96 shadow my-4 p-4 bg-white rounded-md">
        <Outlet />

      </div>
    </div>
  );
};

export default Account;
