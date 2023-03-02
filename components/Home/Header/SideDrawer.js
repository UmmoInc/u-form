import React from 'react'
import { BiUser } from 'react-icons/bi'

export default function SideDrawer() {
  return (
    <div className=' flex flex-col '>
        
            <div className='p-4 -space-y-2 border-b w-full'>
              <p className='font-semibold text-[#0079B0]'>U-Form</p>
             
            </div>
            <div className='p-4'>
              <ul>
                <li className='flex items-center space-x-2'>
                  <BiUser /> 
                  <p className='font-medium'>Account</p>
                </li>
              </ul>
            </div>
        
    </div>
  )
}
