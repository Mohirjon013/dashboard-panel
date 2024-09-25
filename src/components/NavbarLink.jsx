import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Context } from '../context/Context'

function NavbarLink({item}) {
  const {setPath} = useContext(Context)
  return (
    <NavLink onClick={() => setPath(item.title)} className={" pl-[32px] flex items-center gap-6 text-[#A4A6B3] relative hover:bg-[#9fa2b414]"} to={item.path}>
      {item.icon}
      <span className='font-normal text-[16px] leading-5  py-[18px]'>{item.title}</span>
    </NavLink>
  )
}

export default NavbarLink
