import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className='w-[800px] mx-auto text-center pt-[65px]'>
      <p className='text-[65px] font-bold text-neutral-800 pb-[20px]'>404 - error</p>
      <p className='text-[25px] font-semibold text-gray-600 pb-[35px]'>Your search has ventured beyond the known universe.</p>
      <Link className='text-white text-[20px] font-semibold p-3.5 rounded-2xl bg-[#363740] ' to={"/"}>
        <button className='hover:scale-[1.1] duration-300'>Back to Home</button>
      </Link>
    </div>
  )
}

export default NotFoundPage
