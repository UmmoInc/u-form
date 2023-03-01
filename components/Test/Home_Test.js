import Link from 'next/link'
import React from 'react'

export default function Home_Test({title, description, _id}) {

  return (
    <div  className=' px-4 bg-white rounded-3xl  py-6 tracking-wider border border-[#B0D9EC] '>
          <div className='col-span-6 space-y-2 ' >
            <p className='font-bold  text-md text-[#006592]'>{title}</p>
            <p className='text-[#3394C0] text-sm p line-clamp-2'>{description}</p>
            <div className='pt-6'>
              <Link href={`../../test/test-info/kyc`} >
                <button className='border-[#0079B0] bg-[#0079B0]  w-full  rounded-full border-2 font-semibold py-1.5 h-[50px] text-white outline-none active:bg-[#075a81]'>Take Test</button>
              </Link>
            </div>
          </div> 
    </div>
  )
}
