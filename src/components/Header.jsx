import React, { useContext } from 'react'
import { Context } from '../context/Context'
import bellIcon from "../assets/images/bell-icon.svg"
import searchIcon from "../assets/images/search.svg"
import personIcon from "../assets/images/person-icon.svg"

function Header() {
  const {path}= useContext(Context)
  return (
    <div className='flex items-center justify-between mb-[54px]'>
      <h2 className='text-[28px] leading-[30px] font-bold text-[#252733]'>{path}</h2>
      <ul className="flex ">
        <li className="flex py-[10px] gap-[24px] pr-[32px] border-r-[1px] border-r-[#DFE0EB]">
          <img src={searchIcon} alt="search img" width={16} height={16} />
          <img  src={bellIcon} alt="bell img" width={16} height={16}/>
        </li>
        <li className="flex items-center gap-[14px] pl-[32px]">
          <span>Jones Ferdinand</span>
          <img src={personIcon} alt="person img" width={44} height={44}/>
        </li>
      </ul>
    </div>
  )
}

export default Header
