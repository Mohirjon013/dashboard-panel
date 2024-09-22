import React from 'react'
import Num from '../components/Num'
import Trends from '../components/Trends'
import Form from '../components/Form'
import List from '../components/List'

function Overview() {
  const numData = [
    {
      id:1,
      title:"Unresolved",
      number:"60"
    },
    {
      id:2,
      title:"Overdue",
      number:"16"
    },
    {
      id:3,
      title:"Open",
      number:"43"
    },
    {
      id:4,
      title:"On hold",
      number:"63"
    }
  ]
  return (
    <div>
      <div className='flex justify-between mb-[30px]'>
        {numData.map(item => <Num key={item.id} item={item}/> )}
      </div>
      <Trends/>
      <div className="flex items-center justify-between">
        <ul className="w-[48%] pt-[32px]  border-[1px] border-[#DFE0EB] rounded-[8px]">
          <li className='flex justify-between mb-[16px] px-[32px]'>
            <div>
              <p className='font-bold text-[19px] leading-[23px] pb-[8px] text-[#252733]'>Unresolved tickets</p>
              <p className='font-semibold text-[12px] leading-[15px] text-[#4B506D]'><span className='text-[#9FA2B4]'>Group:</span> Support</p>
            </div>
            <p className='font-semibold text-[14px] leading-[20px] text-[#3751FF]'>View details</p>
          </li>
          <li className='flex items-center justify-between py-[20px] border-b-[1px] border-b-[#DFE0EB] px-[32px]'>
            <p className='font-semibold text-[14px] leading-[20px] text-[#252733]'>Waiting on Feature Request</p>
            <p className='font-semibold text-[14px] leading-[20px] text-[#9FA2B4]'>4238</p>
          </li>
          <li className='flex items-center justify-between py-[20px] border-b-[1px] border-b-[#DFE0EB] px-[32px]'>
            <p className='font-semibold text-[14px] leading-[20px] text-[#252733]'>Awaiting Customer Response</p>
            <p className='font-semibold text-[14px] leading-[20px] text-[#9FA2B4]'>1005</p>
          </li>
          <li className='flex items-center justify-between py-[20px] border-b-[1px] border-b-[#DFE0EB] px-[32px]'>
            <p className='font-semibold text-[14px] leading-[20px] text-[#252733]'>Awaiting Developer Fix</p>
            <p className='font-semibold text-[14px] leading-[20px] text-[#9FA2B4]'>914</p>
          </li>
          <li className='flex items-center justify-between py-[20px]  px-[32px]'>
            <p className='font-semibold text-[14px] leading-[20px] text-[#252733]'>Pending</p>
            <p className='font-semibold text-[14px] leading-[20px] text-[#9FA2B4]'>281</p>
          </li>
        </ul>
        <div className="w-[48%]  pt-[32px]  border-[1px] border-[#DFE0EB] rounded-[8px]">
          <Form/>
          <List/>
        </div>
      </div>
    </div>
  )
}

export default Overview
