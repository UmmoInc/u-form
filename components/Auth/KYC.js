import React, { useState } from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'


export default function KYC(id) {

    const [date_of_birth, setdate_of_birth] = useState('');
    const [gender, setgender] = useState('');
    const [id_number, setid_number] = useState('');
    const [location, setlocation] = useState('')
    const [school, setschool] = useState('')

    const [schoolInput, setSchoolInput] = useState(false)

    function showSchool() {
        setSchoolInput(true)
    }
    function closeSchool() {
        setSchoolInput(false)
    }

    const callAPI = async () => {
		try {
			const res = await fetch(
				`/api/register`
			);
			const id = await res.json();
			console.log(id.insertedId);
            const _id = id.insertedId


            let data = {
                _id, date_of_birth, gender, id_number, location, school
            }

            fetch(
                "/api/kyc",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(data),
                })
		} catch (err) {
			console.log(err);
		}
	};

    const submitData = (e) => {
        e.preventDefault();
        callAPI();
        
        
    }

  return (
    <div className='bg-white rounded-2xl px-4 md:px-8 py-8 md:py-12 shadow-sm border border-[#006592] border-opacity-25 space-y-6'>

      {/*Register */}
      <div>
        <p className='font-[500] text-2xl text-black '>Test Information</p>
      </div>

      {/*Form */}
      <div>
        <form  method='post' action='/api/kyc'   className='space-y-4'>
        
        

          {/*Date of Birth */}
          <div className='relative flex text-base w-full flex-col'>
            <label htmlFor='date_of_birth' className='font-medium  flex items-center absolute -top-3 left-5 px-2 text-[#0079B0] bg-white'>Date of Birth</label>
            <input type={'date'} 
             id='date_of_birth' 
             onChange={(e) => setdate_of_birth(e.target.value)}
             name='date_of_birth' 
             className='border-2 pb-2 pt-3 font-bold  bg-slate-50 px-8 text-sm  rounded-xl border-[#006592] outline-none placeholder-[#B8C2CC] tracking-wider  active:bg-white '/>
          </div>

          {/*Gender */}
          <div className='relative flex text-base w-full flex-col'>
            <label htmlFor='gender' className='font-medium  flex items-center absolute -top-3 left-5 px-2 text-[#0079B0] bg-white'>Gender</label>
            <div className='w-full border-2  border-[#0079B0] rounded-xl px-5 flex'>
                <select id='gender' name='gender' onChange={(e) => setgender(e.target.value)} class="
                 h-10 font-bold bg-slate-50 px-8 text-sm   border-[#0079B0] outline-none placeholder-[#B8C2CC] tracking-wider  active:bg-white w-full " aria-label=".form-select-sm example" >
                    <option selected></option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>
            
          </div>

          {/*ID Number */}
          <div className='relative flex text-base w-full flex-col'>
            <label htmlFor='id_number'  className='font-medium  flex items-center absolute -top-3 left-5 px-2 text-[#0079B0] bg-white'>ID Number</label>
            <input type={'text'} id='id_number' onChange={(e) => setid_number(e.target.value)} name='id_number' className='border-2 pb-2 pt-3 font-bold bg-slate-50 px-8 text-sm  rounded-xl border-[#0079B0] outline-none placeholder-[#B8C2CC] tracking-wider  active:bg-white '/>
          </div>

          {/*Location */}
          <div className='relative flex text-base w-full flex-col'>
            <label htmlFor='location' className='font-medium  flex items-center absolute -top-3 left-5 px-2 text-[#0079B0] bg-white'>Location</label>
            <input type={'text'} id='location' onChange={(e) => setlocation(e.target.value)} name='location' className='border-2 pb-2 pt-3 font-bold bg-slate-50 px-8 text-sm  rounded-xl border-[#0079B0] outline-none placeholder-[#B8C2CC] tracking-wider  active:bg-white '/>
          </div>

          <div>
            <label htmlFor='in_school'>In School?</label>
            <div className='flex space-x-5'>
                <div className='space-x-2'>
                    <input onClick={showSchool} className='border-[#0079B0] border' type={'radio'}/>
                    <label>Yes</label>
                </div>
                <div className='space-x-2'>
                    <input onClick={closeSchool} className='border-[#0079B0] border' type={'radio'}/>
                    <label>No</label>
                </div>
            </div>
            
          </div>

          {/*School */}
          <div className={`relative flex text-base w-full flex-col ${schoolInput? "":"hidden"}`}>
            <label htmlFor='school' className='font-medium  flex items-center absolute -top-3 left-5 px-2 text-[#0079B0] bg-white'>School</label>
            <input type={'text'} id='school' name='school' onChange={(e) => setschool(e.target.value)} className='border-2 pb-2 pt-3 font-bold bg-slate-50 px-8 text-sm  rounded-xl border-[#0079B0] outline-none placeholder-[#B8C2CC] tracking-wider  active:bg-white '/>
          </div>

        

          {/* Button */}
          <button type='submit' className='bg-[#0079B0] w-full py-2 font-medium rounded-xl flex items-center justify-center text-[#E6F3F9] active:bg-gray-800'>
            <p>Continue </p>
          </button>

          
          

        </form>
      </div>
      {/* */}
      <div className='font-medium text-[#0079B0] space-x-2 text-sm w-full flex justify-center cursor-pointer '>
            <p className='hover:underline'>Terms of Use</p>
            <p className='hover:underline'>Privacy Policy</p>
      </div>
    </div>
  )
}
