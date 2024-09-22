import React from 'react'

function Trends() {

    const navData = [
        {
          id:1,
          title:"Resolved",
          nums:"449"
        },
        {
          id:2,
          title:"Received",
          nums:"16"
        },
        {
          id:3,
          title:"Average first response time",
          nums:"33m"
        },
        {
          id:4,
          title:"Average response time",
          nums:"3h 8m"
        },
        {
            id:5,
            title:"Resolution within SLA",
            nums:"94%"
        }
    ]
  return (
    
    <div className='flex items-start justify-between border-[1px] border-[#DFE0EB] rounded-[8px] mb-[30px]'>
      <div className="w-[75%] flex items-end pb-[400px] justify-between pt-[32px] px-[32px]">
        <div className="">
            <p className='font-bold text-[19px] leading-[23px] pb-[8px] '>Today’s trends</p>
            <span className='font-normal text-[12px] leading-[16px] text-[#9FA2B4]'>as of 25 May 2019, 09:41 PM</span>
        </div>
        <div className="flex items-center gap-[32px]">
            <p className='font-semibold flex text-[12px] leading-[15px] text-[#9FA2B4]'>
                <span className='w-[16px] h-[2px] my-1.5 mr-2 bg-[#3751FF]'></span>
                Today</p>
            <p className='flex font-semibold text-[12px] leading-[15px] text-[#9FA2B4]'>
                <span className='w-[16px] h-[2px] my-1.5 mr-2 bg-[#DFE0EB]'></span>
                Yesterday</p>
        </div>
      </div>
      <ul className="w-[25%]">
        {navData.map(item => (
            <li key={item.id} className=' pt-[32px] px-[32px] pb-[24px] text-center border-b-[1px] border-[#DFE0EB]'>
                <p className='font-semibold text-[16px] leading-[22px] pb-[6px] text-[#9FA2B4]'>{item.title}</p>
                <span className='font-bold text-[24px] leading-[30px] text-[#252733]'>{item.nums}</span>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Trends
