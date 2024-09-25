import React, { useContext, useState } from 'react'
import { Context } from '../context/Context'
import { Checked } from '../assets/images/icons'
function List() {
    const {todos, setTodos, deleteTodo} = useContext(Context)
    

    function handleComplatedBtn(id){
        const findID = todos.find(item => item.id == id)
        findID.isComplated = !findID.isComplated
        setTodos([...todos])
    }
  return (
    <div className="h-[160px] overflow-y-scroll ">
        {todos.length ? todos.map((item, index) => (
            <div key={index} className='flex items-center justify-between border-b-[1px] border-b-[#DFE0EB] px-[32px]'>
                <div className="flex items-center gap-4">
                    <div>
                        <button onClick={() => handleComplatedBtn(item.id)} className={`cursor-pointer w-[20px] rounded-full h-[20px] border-[2px] border-[#C5C7CD] ${item.isComplated ? "border-transparent" : ""}`}>
                        {item.isComplated ? <Checked/> : ""}
                        </button>
                    </div>
                    
                    <p className={`py-[20px] font-semibold text-[14px] leading-[20px] text-[#252733] ${item.isComplated ? "line-through opacity-65" : ""}`}>{item.title}</p>
                </div>
                <button onClick={() => deleteTodo(item.id)} className='w-[78px] font-bold text-[15px] leading-[13px] bg-red-500 py-[8px] text-white rounded-[8px] hover:scale-[1.3] duration-300'>delete</button>
            </div>
        )) : <div className='w-full  text-center py-[68px]'><p className='text-[25px]'>there is no task </p></div>}
    </div>
  )
}

export default List
