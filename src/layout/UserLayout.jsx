import React from 'react'
import { FaQuestionCircle, FaRegUser } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";

import { NavLink } from 'react-router-dom'

const UserLayout = ({children}) => {
  return (
    <div className='h-full flex flex-col'>
        <header className='flex justi py-10 shadow px-2 md:px-10 items-center'>
            <NavLink to={'/'} className={'px-2 w-52 text-3xl text-green-700 font-semibold'}>MMPC</NavLink>
                <nav className='flex-1'>
                    <ul className='flex gap-6 text-sm font-medium text-gray-600'>
                        <li><NavLink to={'/dashboard/offering'}>Offerings</NavLink></li>
                        <li><NavLink to={'/dashboard/portfolio'}>Portfolio</NavLink></li>
                        <li><NavLink to={'/dashboard/account'}>My Account</NavLink></li>
                        <li><NavLink to={'/dashboard/document'}>My Document</NavLink></li>
                    </ul>
                </nav>
            <ul className='flex gap-8 items-center'>
            <li><NavLink><FaQuestionCircle /></NavLink></li>
            <li><NavLink to={''}><IoMdNotificationsOutline /></NavLink></li>
            <li><NavLink to={''}><FaRegUser /></NavLink></li>
            <li><NavLink to={''}>Vortech</NavLink></li>
            </ul>
        </header>
        
        <div className='flex bg-green-20 flex-1'>
            <aside className='w-72 shadow h-full'>
                <a href="/account">Accounts</a>
            </aside>

            <div className='flex-1'>
            {children}

            </div>
        </div>
       

    </div>
  )
}

export default UserLayout