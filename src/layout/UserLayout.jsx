import React from 'react'
import { FaQuestionCircle, FaRegUser } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";

import { NavLink } from 'react-router-dom'

const UserLayout = ({children}) => {
  return (
    <div>
        <header>
            <NavLink to={'/'}>MMPC</NavLink>
            <nav>
                <ul>
                <li><NavLink to={'/dashboard/offering'}>Offerings</NavLink></li>
                <li><NavLink to={'/dashboard/portfolio'}>Portfolio</NavLink></li>
                <li><NavLink to={'/dashboard/account'}>My Account</NavLink></li>
                <li><NavLink to={'/dashboard/document'}>My Document</NavLink></li>
                </ul>
            </nav>
        </header>
        <ul>
        <li><NavLink><FaQuestionCircle /></NavLink></li>
        <li><NavLink to={''}><IoMdNotificationsOutline /></NavLink></li>
        <li><NavLink to={''}><FaRegUser /></NavLink></li>
        <li><NavLink to={''}>Vortech</NavLink></li>
        </ul>
        <aside>

        </aside>

        {children}
    </div>
  )
}

export default UserLayout