import Link from 'next/link'
import React from 'react'

export default function Home_Test({testInfo, title, description, _id}) {

  return (
    <div className=' px-8 bg-white rounded-xl  py-4 border border-[#B0D9EC] shadow'>
        
        
          <div className='col-span-6 space-y-2 ' id={_id} >
            <p className='font-semibold text-[#0079B0] text-md'>{title}</p>
            <p className='text-[#3394C0] text-xs line-clamp-2'>{description}</p>
            <div className='pt-2'>
              <Link href={`../../test/section/${_id}`} >
                <button className='border-[#0079B0] text-[#0079B0]  w-full  rounded-full border-2 font-bold py-1.5 hover:bg-[#0079B0] hover:text-white'>Take Test</button>
              </Link>
            </div>
          </div> 
      
            
            
        
    </div>
  )
}
