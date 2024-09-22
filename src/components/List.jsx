import React, { useContext, useState } from 'react'
import { Context } from '../context/Context'
import doneIcon from "../assets/images/done-icon.svg"

function List() {
    const {todos, setTodos, deleteTodo} = useContext(Context)
    // const [isDone , setIsDone] = useState(false)

    function handleComplatedBtn(id){
        const findID = todos.find(item => item.id == id)
        findID.isComplated = !findID.isComplated
        setTodos([...todos])
    }
  return (
    <div className="">
        {todos.length ? todos.map((item, index) => (
            <div key={index} className='flex items-center justify-between border-b-[1px] border-b-[#DFE0EB] px-[32px]'>
                <div className="flex items-center gap-4">
                    <div onClick={() => handleComplatedBtn(item.id)} className={`cursor-pointer w-[20px] rounded-full h-[20px] border-[2px] border-[#C5C7CD] ${item.isComplated ? "bg-blue-500" : ""}`}></div>
                    {/* <div className={`cursor-pointer ${item.isComplated ? "scale-100" : "scale-0"}`}>
                        <img src={doneIcon} alt="done img"  width={20} height={20}/>
                    </div> */}
                    <p className={`py-[20px] font-semibold text-[14px] leading-[20px] text-[#252733] ${item.isComplated ? "line-through opacity-65" : ""}`}>{item.title}</p>
                </div>
                <button onClick={() => deleteTodo(item.id)} className='w-[78px] font-bold text-[15px] leading-[13px] bg-red-500 py-[8px] text-white rounded-[8px] hover:scale-[1.3] duration-300'>delete</button>
            </div>
        )) : <div className='w-full  text-center py-[68px]'><p className='text-[25px]'>there is no task </p></div>}
    </div>
  )
}

export default List
