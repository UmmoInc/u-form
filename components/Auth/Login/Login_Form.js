import React from 'react'
import Link from 'next/link'

export default function Login_Form() {
  return (
    <div className='bg-white rounded-2xl px-4 md:px-8 py-8 md:py-12 shadow-sm border border-[#006592] border-opacity-25 space-y-6'>

      {/*Login */}
      <div>
        <p className='font-[500] text-2xl text-black '>Login</p>
      </div>

      {/*Form */}
      <div>
        <form className='space-y-4'>

          {/*Cellphone */}
          <div className='relative flex text-base w-full flex-col'>
            <label htmlFor='Username' className='font-medium  flex items-center absolute -top-3 left-5 px-2 text-[#0079B0] bg-white'>Cellphone</label>
            <input type={'text'} placeholder='7*******' id='Username' name='Username' className='border-2 pb-2 pt-3 font-bold bg-slate-50 px-8 text-sm  rounded-xl border-[#0079B0] outline-none placeholder-[#B8C2CC] tracking-wider  active:bg-white '/>
          </div>

          {/*Password */}
          <div className='relative flex text-base w-full flex-col'>
            <label htmlFor='Password' className='font-medium  flex items-center absolute -top-3 left-5 px-2 text-[#0079B0] bg-white'>Password</label>
            <input type={'password'}  placeholder='*********' id='Password' name='Password' className='border-2  pb-2 pt-3 font-bold bg-slate-50 px-8 text-sm  rounded-xl border-[#0079B0] outline-none placeholder-[#B8C2CC] tracking-wider  active:bg-white '/>
          </div>

          {/*Forgot Password */}
          <div className='font-medium text-[#0079B0] tracking-wide w-full flex justify-end cursor-pointer '>
            <p className='hover:underline'>Resend OTP</p>
          </div>

          {/*Login Button */}
          <button className='bg-[#0079B0] w-full py-2  font-medium rounded-xl text-[#E6F3F9] active:bg-gray-800'>
            <p>Login </p>
          </button>

          {/*Register Link */}
          <div className='   w-full flex justify-center cursor-pointer space-x-1'>
            <p className='text-[#606F7B]'>Not registered yet?</p>
            <Link href={'./register'}>
              <p className='hover:underline font-bold text-[#0079B0]'>Register</p>
            </Link>
          </div>

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
