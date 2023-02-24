import Link from 'next/link'
import React from 'react'

export default function Home_Test({title, description, _id}) {

  return (
    <div  className=' px-8 bg-white rounded-xl  py-4 border border-[#B0D9EC] shadow'>
          <div className='col-span-6 space-y-2 ' >
            <p className='font-semibold  text-md'>{title}</p>
            <p className='text-[#3394C0] text-xs line-clamp-2'>{description}</p>
            <div className='pt-2'>
              <Link href={`../../test/section-one/section_info`} >
                <button className='border-[#0079B0] bg-[#0079B0]  w-full  rounded-full border-2 font-bold py-1.5 text-white outline-none'>Take Test</button>
              </Link>
            </div>
          </div> 
    </div>
  )
}
