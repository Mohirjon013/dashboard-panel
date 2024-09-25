import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Context } from '../context/Context'
import filterIcon from "../assets/images/filter.svg"
import AddIconUsers from "../assets/images/add-user.svg"
function SingleUser() {

  const navigate = useNavigate()
  const {users} = useContext(Context)
  const {id} = useParams()
  const findID = users.find(item => item.id == id)
  console.log(findID);
  
  return (
    <div>

      <div className="flex items-center justify-between mb-[50px]">
        <button onClick={() => navigate(-1)} className='w-[100px] border-[1px] border-[#D0D5DD] bg-[#F5F5F9] flex items-center justify-center gap-[8px] py-[10px] rounded-md'>
          <img src={filterIcon} alt="filter img" width={20} height={20} />
          <span>Back</span>
        </button>
        <button type='submit' className='w-[138px] border-[1px] border-[#7784fa] bg-[#3751FF] flex items-center justify-center gap-[8px] py-[10px] rounded-md'>
          <img src={AddIconUsers} alt="filter img" width={20} height={20} />
          <span className='text-white'>Update Users</span>
        </button> 
      </div>
      

      <ul className="w-[600px] bg-[#F9FAFB] h-[330px] rounded-lg p-5">
        <li>
          <p className='text-black text-[35px]  pt-[10px]'>Personal information</p>
        </li>
        <li className='flex items-center gap-10 pt-[15px]'>
          <li className='space-y-2'>
            <span className='text-[25px] text-zinc-500 font-medium '>Name:</span>
            <p className='text-[35px] text-gray-800 font-bold'>{findID.name}</p>
            <br />
            <span className='text-[25px] text-zinc-500 font-medium '>Age :</span>
            <p className='text-[35px] text-gray-800 font-bold'>{findID.age}</p>
          </li>
          <li className='space-y-2'>
            <span className='text-[25px] text-zinc-500 font-medium'>Surname :</span>
            <p className='text-[35px] text-gray-800 font-bold'>{findID.surname}</p>
            <br />
            <span className='text-[25px] text-zinc-500 font-medium'>Address :</span>
            <p className='text-[35px] text-gray-800 font-bold'>{findID.address}</p>
          </li>
        </li>
      </ul>


    </div>
  )
}

export default SingleUser
