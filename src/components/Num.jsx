import React from 'react'

function Num({item}) {
  return (
    
    <div className="w-[258px] py-[24px] text-center border-[1px] rounded-[8px] border-[#DFE0EB]">
        <p className='font-bold text-[19px] leading-[23px] pb-[12px] text-[#9FA2B4]'>{item.title}</p>
        <span className='font-bold text-[40px] leading-[50px] text-[#252733]'>{item.number}</span>
    </div>
  )
}

export default Num
