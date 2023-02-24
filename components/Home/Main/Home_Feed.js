import Link from 'next/link'
import React from 'react'
import Home_Test from '../../Test/Home_Test'

export default function Home_Feed(testData) {
 
    console.log(testData.testData.data.data.test_info.title);

     const  testInfo = testData.testData.data.data.test_info

    console.log(testInfo);
  return (
    <div className='px-4 py-8 space-y-4'>
        {/*Welcome Text */}
        
        <div className='space-y-2'>
            
            <div>
                
                    <div key={testInfo.test_id} className='py-1'>
                        <Home_Test 
                            key={testInfo.test_id}
                            _id={testInfo.test_id} 
                            title={testInfo.title} 
                            description={testInfo.description}
                        />
                    </div>
               
                    
            
            </div> 
            
        </div>
        
    </div>
  )
}


