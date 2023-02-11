import React, { useState } from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router';


export default function Register_Form({acknowledge}) {

  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');

  const router = useRouter;
  

      
  function handleSubmit(e) {
    e.preventDefault();

    const postData = async () => {
      const data = { firstName, surname, email};

      const response = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(data),
      });
      return response.json();
      
    };
    postData().then((data) => {
      alert(data.message);
      router.push('/home')
    });
    
    
  }

  

  return (
    <div className='bg-white rounded-2xl px-4 md:px-8 py-8 md:py-12 shadow-sm border border-[#006592] border-opacity-25 space-y-6'>

      {/*Register */}
      <div>
        <p className='font-[500] text-2xl text-black '>Register</p>
      </div>

      {/*Form */}
      <div>
        <form onSubmit={handleSubmit} className='space-y-4'>
        
          {/*First Name */}
          <div className='relative flex text-base w-full flex-col'>
            <label htmlFor='firstName' className='font-medium  flex items-center absolute -top-3 left-5 px-2 text-[#0079B0] bg-white'>First Name</label>
            <input type={'text'} 
             id='firstName'
             onChange={(e) => setFirstName(e.target.value)} 
             name='firstName'
             value={firstName}
             className='border-2 pb-2 pt-3 font-bold bg-slate-50 px-8 text-sm  rounded-xl border-[#006592] outline-none placeholder-[#B8C2CC] tracking-wider  active:bg-white '/>
          </div>

          {/*Surname */}
          <div className='relative flex text-base w-full flex-col'>
            <label htmlFor='surname' className='font-medium  flex items-center absolute -top-3 left-5 px-2 text-[#0079B0] bg-white'>Surname</label>
            <input type={'text'}  id='surname' value={surname} onChange={(e) => setSurname(e.target.value)} name='surname' className='border-2 pb-2 pt-3 font-bold bg-slate-50 px-8 text-sm  rounded-xl border-[#0079B0] outline-none placeholder-[#B8C2CC] tracking-wider  active:bg-white '/>
          </div>

          {/*Email */}
          <div className='relative flex text-base w-full flex-col'>
            <label htmlFor='email' className='font-medium  flex items-center absolute -top-3 left-5 px-2 text-[#0079B0] bg-white'>Email</label>
            <input type={'email'} id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} className='border-2 pb-2 pt-3 font-bold bg-slate-50 px-8 text-sm  rounded-xl border-[#0079B0] outline-none placeholder-[#B8C2CC] tracking-wider  active:bg-white '/>
          </div>

          <div className='flex space-x-3 '>
            <input type={'checkbox'}  />
            <p> I have read the Terms & Conditions</p>
          </div> 

          {/*Login Button */}
          <button type='submit' className='bg-[#0079B0] w-full py-2 font-medium rounded-xl flex items-center justify-center text-[#E6F3F9] active:bg-gray-800'>
            <p>Register </p>
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
