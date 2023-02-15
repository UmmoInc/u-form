import Link from 'next/link';
import React from 'react'

export default function About_Test({id,sections}) {
   

    const selectedSection = sections.find((section) => section.test_id === id)
    console.log(selectedSection);

    console.log(sections);

    if (!selectedSection) {
        return <div>
            test not found
        </div>
    }

  return (
    <div className='space-y-4 px-4 py-8'>
        
        <div className='w-full  space-y-2'>
            <div className='w-full items-center flex '>
                <p className='text-xl text-[#0079B0] font-bold'>QUESTIONNAIRE</p>            
            </div>

            <div className='space-y-1'>
                <p className='font-bold'>{selectedSection.title}</p>
                <p className=''>{selectedSection.description}</p>
            </div>
        </div>
        <div>
            <Link href={'/test/section/realistic/questions'} >
                <button className='bg-[#0079B0]  w-full  rounded-full border-2 font-bold py-2.5 hover:bg-[#0079B0] outline-none  text-white'>Take Test
                </button>
            </Link>
        </div>
    </div>
  )
}
