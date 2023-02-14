import React from 'react'

export default function Question({question_id,option_id_0,option_id_1,section_name,category_name,question}) {

    function optionNo(params) {
        console.log(option_id_0);
    }

    function optionYes(params) {
        console.log(option_id_1);
    }
   
  return (
    <div id={question_id} className='bg-white border w-full rounded-xl py-8 px-4 tracking-wider space-y-8'>
        <div className='space-y-2'>
            <p className='text-[#8794A1] font-light`'>{category_name}</p>
            <p className='font-semibold'>{question}</p>
        </div>
        
        <div className='flex space-x-2 font-semibold text'>
            <button onClick={optionNo} id={option_id_0} className='border-2 rounded-xl  border-[#0079B0] text-[#0079B0] py-3 outline-none white w-full'>
                NO
            </button>
            <button onClick={optionYes} id={option_id_1} className='border-2 rounded-xl  border-[#0079B0] text-[#0079B0] py-3 outline-none white w-full'>
                YES
            </button>
        </div>
    </div>
  )
}
