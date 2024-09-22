import React, { useContext } from 'react'
import { Context } from '../context/Context'

function List() {
    const {todos, deleteTodo} = useContext(Context)
  return (
    <div className="">
        {todos.length ? todos.map((item, index) => (
            <div key={index} className='flex items-center justify-between border-b-[1px] border-b-[#DFE0EB] px-[32px]'>
                <div className="flex items-center gap-4">
                    <div className="w-[20px] rounded-full    h-[20px] border-[1px] border-[#C5C7CD]"></div>
                    <p className='py-[20px] font-semibold text-[14px] leading-[20px] text-[#252733]'>{item.title}</p>
                </div>
                <button onClick={() => deleteTodo(item.id)} className='w-[78px] font-bold text-[15px] leading-[13px] bg-red-500 py-[8px] text-white rounded-[8px]'>delete</button>
            </div>
        )) : <div className='w-full  text-center py-[68px]'><p className='text-[25px]'>there is no task </p></div>}
    </div>
  )
}

export default List
