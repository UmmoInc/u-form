import React, { useImperativeHandle, forwardRef, useEffect } from 'react'

export default function Question({question_id,category_name,question,}) {
  return (
    <div id={question_id} className='bg-white border w-full h-56 rounded-xl py-8 px-4 tracking-wider space-y-8'>
        <div className='space-y-2'>
            <p  className='text-[#8794A1] font-light`'>{category_name}</p>
            <p className='font-semibold'>{question}</p>
        </div> 
        
       
    </div>
  )
}
