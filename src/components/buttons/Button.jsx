import React from 'react'
import { NavLink } from 'react-router-dom'

const Button = ({link, children}) => {
  return (
    <NavLink className='text-sm bg-green-900 text-white rounded-full w-max px-3 py-2 block my-2' to={link}>{children}

    </NavLink>
  )
}

export default Button