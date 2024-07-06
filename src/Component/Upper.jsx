import React from 'react'

const upper = () => {
  return (
    <div>
      <nav className='nav flex flex-row list-none gap-1 text-opacity-75 font-medium items-center text-center text-slate-600 bg-white p-2 ml-12 cursor-pointer text-sm'>
        <li><img src="/home_FILL0_wght400_GRAD0_opsz24.svg" alt="home" /></li>
        <li><img className="h-4 w-30 cursor-default" src="/arrow_forward_ios_FILL0_wght400_GRAD0_opsz24.svg" alt="" /></li>
        <li className='hover:underline'>Browse</li>
        <li><img className="h-4 w-30 cursor-default" src="/arrow_forward_ios_FILL0_wght400_GRAD0_opsz24.svg" alt="" /></li>
        <li className='hover:underline'>Business</li>
        <li><img className="h-4 w-30 cursor-default" src="/arrow_forward_ios_FILL0_wght400_GRAD0_opsz24.svg" alt="" /></li>
        <li className='hover:underline'>Leadership and Management</li>
      </nav>
    </div>
  )
}

export default upper
