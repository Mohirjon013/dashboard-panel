import React, { useContext, useState } from 'react'
import filterIcon from "../assets/images/filter.svg"
import AddUsers from "../assets/images/add-user.svg"
import MoreIcon from "../assets/images/more-add.svg"
import deleteUser from "../assets/images/delete-add.svg"
import searchAdd from "../assets/images/search-add.svg"
import { Context } from '../context/Context'
import { useNavigate } from 'react-router-dom'
import UserImg from "../assets/images/user-img.svg"
function Users() {
  const navigate = useNavigate()
  const { users, setUsers, deleteUsers} = useContext(Context)
  const [filterUsers, setFilteredUsers] = useState(users)
  
  function handleSearch(e){
    const inputValue = e.target.value.toLowerCase()
    const userFilter = users.filter(item => item.name.toLowerCase().includes(inputValue) || item.age.toString().includes(inputValue))
    // console.log(userFilter);
    
    setFilteredUsers(userFilter)  
    
  }


  function handleSort(e){
    const sotredUsers = [...users].sort((a, b) => a.name > b.name ? 1 : -1)
    setFilteredUsers(sotredUsers)
    // console.log(users);
    
  }

  return (
    <div className=''>
      
      {/* <img src={card} alt="" /> */}
      <ul className="w-full flex justify-between mb-[52px]">
        <li className="w-[23%] flex items-center gap-6 py-[24px] pl-[24px] bg-[#F9FAFB] shadow-md">
          <img src={UserImg} alt="user img " width={68} height={68} />
          <div className="">
            <p className='mb-[8px] text-[#9199AC] text-[20px] font-semibold '>Total Sales</p>
            <strong className=' text-[23px] font-semibold '>$560K</strong>
          </div>
        </li>
        <li className="w-[23%] flex items-center gap-6 py-[24px] pl-[24px] bg-[#F9FAFB] shadow-md">
          <img src={UserImg} alt="user img " width={68} height={68} />
          <div className="">
            <p className='mb-[8px] text-[#9199AC] text-[20px] font-semibold '>Total Sales</p>
            <strong className=' text-[23px] font-semibold '>$560K</strong>
          </div>
        </li>
        <li className="w-[23%] flex items-center gap-6 py-[24px] pl-[24px] bg-[#F9FAFB] shadow-md">
          <img src={UserImg} alt="user img " width={68} height={68} />
          <div className="">
            <p className='mb-[8px] text-[#9199AC] text-[20px] font-semibold '>Total Sales</p>
            <strong className=' text-[23px] font-semibold '>$560K</strong>
          </div>
        </li>
        <li className="w-[23%] flex items-center gap-6 py-[24px] pl-[24px] bg-[#F9FAFB] shadow-md">
          <img src={UserImg} alt="user img " width={68} height={68} />
          <div className="">
            <p className='mb-[8px] text-[#9199AC] text-[20px] font-semibold '>Total Sales</p>
            <strong className=' text-[23px] font-semibold '>$560K</strong>
          </div>
        </li>
      </ul>

      <div className="flex justify-between mb-[20px]">
       <div className="flex space-x-3">
        <button onClick={handleSort} className='w-[100px] cursor-pointer border-[1px] border-[#D0D5DD] bg-[#F5F5F9] flex items-center justify-center gap-[8px] py-[10px] rounded-md'>
          <img src={filterIcon} alt="filter img" width={20} height={20} />
          <span>Filters</span>
        </button>
        <button onClick={() => navigate("/users/add")} className='w-[118px] cursor-pointer border-[1px] border-[#7784fa] bg-[#3751FF] flex items-center justify-center gap-[8px] py-[10px] rounded-md'>
          <img src={AddUsers} alt="filter img" width={20} height={20} />
          <span className='text-white'>Add Users</span>
        </button> 
       </div>
        <label className='w-[320px] flex border-[1px] border-[#D0D5DD] bg-[#F5F5F9] rounded-md px-[14px]'>
          <img src={searchAdd} alt="search img" width={20} height={20} />
          <input onInput={handleSearch} className='py-[10px] w-[80%] ml-[8px] bg-[#F5F5F9] outline-none' type="text" placeholder='Search' />
          
        </label>
        
      </div>

      <table className='bg-[#F9FAFB] w-full shadow-md rounded-lg'>
        <thead className=''>
          <tr>
            <th className='p-2 border-b-[1px] border-[#EAECF0] text-[#8A92A6] text-[15px] font-semibold '>ID</th>
            <th className='p-2 border-b-[1px] border-[#EAECF0] text-[#8A92A6] text-[15px] font-semibold '>Name</th>
            <th className='p-2 border-b-[1px] border-[#EAECF0] text-[#8A92A6] text-[15px] font-semibold '>Surname</th>
            <th className='p-2 border-b-[1px] border-[#EAECF0] text-[#8A92A6] text-[15px] font-semibold '>Age</th>
            <th className='p-2 border-b-[1px] border-[#EAECF0] text-[#8A92A6] text-[15px] font-semibold '>Address</th>
            <th className='p-2 border-b-[1px] border-[#EAECF0] text-[#8A92A6] text-[15px] font-semibold '>Action</th>
          </tr>
        </thead>
        <tbody>
          {filterUsers.map((item, index) => (
            <tr  key={index}>
              <td className='text-center p-2 text-[20px]'>{index + 1}</td>
              <td className='text-center p-2 text-[20px]'>{item.name}</td>
              <td className='text-center p-2 text-[20px]'>{item.surname}</td>
              <td className='text-center p-2 text-[20px]'>{item.age}</td>
              <td className='text-center p-2 text-[20px]'>{item.address}</td>
              <td className='text-center flex justify-center p-2 space-x-5 '>
                
                <button onClick={() => deleteUsers(item.id)}>
                  <img className='hover:scale-[1.3] duration-300' src={deleteUser} alt="delete" width={20} height={20} />
                </button>
                <button onClick={() => navigate(`/users/${item.id}`)}>
                  <img className='hover:scale-[1.3] duration-300' src={MoreIcon} alt="delete" width={20} height={20} />
                </button>
                
              </td>
            </tr>
          ))}
            <tr className='h-[5px]' >
              <td className=' text-start pl-8 p-2 text-[20px] border-t-[1px] border-[#EAECF0]'>
                <button className='w-[86px] py-[8px] text-[15px] text-[#344054] border-[1px] border-[#D0D5DD] bg-[#F5F5F9] rounded-lg'>Previous</button>
              </td>
              <td className='text-center  p-2 text-[20px]  border-t-[1px] border-[#EAECF0]'></td>
              <td className='text-center p-2 text-[20px]  border-t-[1px] border-[#EAECF0]'>
               <span className='text-[15px] font-semibold text-[#344054]'>Page 1 of 7</span>
              </td>
              <td className='text-center p-2 text-[20px]  border-t-[1px] border-[#EAECF0]'></td>
              <td className='text-center p-2 text-[20px]  border-t-[1px] border-[#EAECF0]'></td>
              <td className='text-end pr-8 p-2 text-[20px]  border-t-[1px] border-[#EAECF0]'>
              <button className='w-[86px] py-[8px] text-[15px] text-[#344054] border-[1px] border-[#D0D5DD] bg-[#F5F5F9] rounded-lg'>Next</button>
              </td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Users
