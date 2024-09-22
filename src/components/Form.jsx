import React, { useContext, useRef } from 'react'
import plusIcon from "../assets/images/plus.svg"
import { Context } from '../context/Context'
function Form() {
    const InputRef = useRef()
    const {todos,addTodo} = useContext(Context)
    function handleSubmitBtn(e){
        e.preventDefault()
        const data = {
            id:todos.length + 1,
            title:InputRef.current.value,
            isComplated: false
        }
        addTodo(data)
        e.target.reset()
    }
  return (
    <div>
        <div className='flex justify-between mb-[16px] px-[32px]'>
            <div>
              <p className='font-bold text-[19px] leading-[23px] pb-[8px] text-[#252733]'>Tasks</p>
              <p className='font-semibold text-[12px] leading-[15px] text-[#9FA2B4]'>Today</p>
            </div>
            <p className='font-semibold text-[14px] leading-[20px] text-[#3751FF]'>View all</p>
        </div>
        <form onSubmit={handleSubmitBtn} className='w-full px-[32px] flex items-center justify-between border-b-[1px] border-b-[#DFE0EB]'>
            <input ref={InputRef} className='w-[80%] py-[20px] outline-none space-x-8 ' type="text" placeholder='Create new task' required/>
            <button type='submit' className='w-[15%]  py-[20px] '>
                <img className='ml-auto' src={plusIcon} alt="plus- img" width={20} height={20} />
            </button>
        </form>
        
    </div>
  )
}

export default Form
