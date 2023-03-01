import Link from 'next/link';
import React from 'react'

export default function Section_Info({section}) {
    const sectionInfo = section;
   console.log(sectionInfo);
    
  return (
    <div className='space-y-6 px-4 py-8 tracking-wider'>
        
        <div className='w-full  space-y-8'>
            <div className='w-full items-center flex  '>
                <p className='text-xl text-[#0079B0] font-bold'>QUESTIONNAIRE</p>            
            </div>

            <div className='space-y-2'>
                <p className='font-bold'>{sectionInfo.title}</p>
                <p className=''>{sectionInfo.description}</p>
            </div>
        </div>
        <div>
            <Link href={'/test/section-one/realistic-questions'} >
                <button className='bg-[#0079B0] outline-none w-full py-2  font-semibold rounded-3xl h-[50PX] tracking-wider text-[#E6F3F9] active:bg-gray-800 '>CONTINUE
                </button>
            </Link>
        </div>
    </div>
  )
}
