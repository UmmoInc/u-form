import Link from 'next/link'
import React from 'react'
import Home_Test from '../../Test/Home_Test'

export default function Home_Feed() {
  return (
    <div className='px-4 py-8 space-y-4'>
        {/*Welcome Text */}
        <div>
            <p className='font-[500] text-2xl'>Welcome, Mayo!</p>
        </div>
        <div className='space-y-2'>
            <div>
                <ul className='flex space-x-4'>
                    <li className=''>
                        <p className='font-meduim text-[#606F7B] text-lg cursor-pointer'>All</p>
                    </li>
                    <li className=''>
                        <p className='font-meduim text-[#96A4AD] text-lg cursor-pointer'>Forms</p>
                    </li>
                    <li className=''>
                        <p className='font-meduim text-[#96A4AD] text-lg cursor-pointer'>Tests</p>
                    </li>
                    <li className=''>
                        <p className='font-meduim text-[#96A4AD] text-lg cursor-pointer'>Surveys</p>
                    </li>
                </ul>
            </div>
            <div>
                <Link href={'../../test/about'} >
                    <Home_Test />
                </Link>
            </div>
            
        </div>
        
    </div>
  )
}
