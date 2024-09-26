import React, { useContext } from 'react'
import filterIcon from "../assets/images/filter.svg"
import AddIconUsers from "../assets/images/add-user.svg"
import { useNavigate } from 'react-router-dom'
import { Context } from '../context/Context'

function AddUsers() {
  const navigate = useNavigate()
  const {users, setUsers} = useContext(Context)

  function handlesubmit(e){
    e.preventDefault()
    const data = {
      id:users.length,
      name:e.target.userName.value,
      surname:e.target.userSurname.value,
      age:e.target.userAge.value,
      address:e.target.userAddress.value

    }
    setTimeout(() => {
      setUsers([...users, data])
      navigate("/users")
    }, 800);
  }
  return (
    <form onSubmit={handlesubmit}>
      <div className="flex items-center justify-between">
        <button type='button' onClick={() => navigate(-1)} className='w-[100px] border-[1px] border-[#D0D5DD] bg-[#F5F5F9] flex items-center justify-center gap-[8px] py-[10px] rounded-md'>
          <img src={filterIcon} alt="filter img" width={20} height={20} />
          <span>Back</span>
        </button>
        <button type='submit' className='w-[118px] border-[1px] border-[#7784fa] bg-[#3751FF] flex items-center justify-center gap-[8px] py-[10px] rounded-md'>
          <img src={AddIconUsers} alt="filter img" width={20} height={20} />
          <span className='text-white'>Add Users</span>
        </button> 
      </div>
      
      <div className="flex justify-between mt-[50px]">
        <div className="w-[48%]  flex flex-col gap-[20px]">
          <label className="flex flex-col">
            <span className='text-[15px] text-black'>First name :</span>
            <input className='bg-[#EEEEEE] placeholder:text-zinc-600 p-3 rounded-lg mt-2 outline-none focus:shadow  focus:shadow-gray-700' type="text" placeholder="Enter name " name="userName" autocomplete="off" required />
          </label>
          <label className="flex flex-col">
            <span className='text-[15px] text-black'>User age :</span>
            <input className='bg-[#EEEEEE] placeholder:text-zinc-600 p-3 rounded-lg mt-2 outline-none focus:shadow  focus:shadow-gray-700' type="text" placeholder="Enter age " name="userAge" autocomplete="off" required />
          </label>
        </div>

        <div className="w-[48%]  flex flex-col gap-[20px]">
          <label className="flex flex-col">
            <span className='text-[15px] text-black'>Last name :</span>
            <input className='bg-[#EEEEEE] placeholder:text-zinc-600 p-3 rounded-lg mt-2 outline-none focus:shadow  focus:shadow-gray-700' type="text" placeholder="Enter surname " name="userSurname" autocomplete="off" required />
          </label>
          <label className="flex flex-col">
            <span className='text-[15px] text-black'>User address :</span>
            <input className='bg-[#EEEEEE] placeholder:text-zinc-600 p-3 rounded-lg mt-2 outline-none focus:shadow  focus:shadow-gray-700' type="text" placeholder="Enter address " name="userAddress" autocomplete="off" required />
          </label>
        </div>
      </div>
    </form>
  )
}

export default AddUsers
