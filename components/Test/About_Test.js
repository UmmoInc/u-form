import React from 'react'

export default function About_Test() {
  return (
    <div className='space-y-4'>
        <div className='flex items-center justify-center flex-col pt-24 space-y-2'>
            <div className='h-16 w-16 bg-gray-400 rounded-full' />
            <p className='font-bold text-lg'>Self-Direct Search Test</p>
        </div>
        <div className='w-full px-4 space-y-2'>
            <div className='w-full items-center justify-center flex '>
                <p className='text-lg text-[#0079B0] font-bold'>General Information</p>            
            </div>

            <div className='space-y-1'>
                <p className='font-bold'>1. Purpose</p>
                <p className=''>The purpose of this questionnaire is to determine your intrest, as they will be of importance when you make a career decision.</p>
            </div>
            <div className='space-y-1'>
            <p className='font-bold'>2. The Questionnaire</p>
                <p>This is a questionnaire not a test. There are therefore no correct or incorrect answers. This questionnaire contains a number of question relation to your activities, compentencies, intrest in occupations as well as questions in which you are asked to rate your abilities/skills</p>
            </div>
        </div>
    </div>
  )
}
