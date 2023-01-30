import Link from 'next/link'
import React from 'react'

export default function Home_Test() {
  return (
    <div className='grid grid-flow-row grid-cols-7 bg-white rounded-xl space-x-2 px-2 py-4 border border-[#B0D9EC] shadow'>
        <div className='  rounded-full flex items-center justify-end'>
            <div className=' bg-gray-200 h-12 w-12 rounded-full' />
        </div>
        
          <div className='col-span-6 '>
            <p className='text-[#66A3BE] text-xs'>Ministry of Education</p>
            <p className='font-semibold text-[#0079B0] text-md'>Self-Direct Test</p>
            <p className='text-[#3394C0] text-xs line-clamp-2'>Determine your interest, as they will be of importance when you make a career decision.</p>
          </div> 
      
            
            
        
    </div>
  )
}
