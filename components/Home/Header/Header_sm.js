import Image from 'next/image'
import React, { useState } from 'react'
import {BiCloset, BiMenu, BiPlus} from 'react-icons/bi'
import {FiCrosshair, FiMenu, FiMinimize} from 'react-icons/fi'


//Logo
import Logo from '../../../assets/Logo.png'
import SideDrawer from './SideDrawer'

export default function Header_sm() {

  const [showDrawer, setShowDrawer] = useState(false)
    function showSideDrawer() {
        setShowDrawer(true)
    }
    function closeDrawer() {
        setShowDrawer(false)
    }

  return (
    <div className='relative'>
      {/*SideDrawer - MOBILE   */}
      <span className={` ease-in-out delay-100 transition-all absolute w-full h-screen ${showDrawer? "":"hidden"} `}>
        <div className=' flex fixed h-screen w-screen'>
            <div className='bg-white w-9/12'>
                <SideDrawer />
            </div>
            <div className='flex flex-grow h-screen bg-black bg-opacity-30 justify-end  text-white text-4xl'>
              <p onClick={closeDrawer}>
                <BiPlus className='rotate-45' />
              </p>
            </div>
        </div>
      </span>
      <div className='bg-[#0079B0] p-4 grid grid-cols-3 grid-flow-row items-center'>
          <div >
              <button onClick={showSideDrawer} className=''>
                  <BiMenu className='text-3xl text-white cursor-pointer' />
              </button>
          </div>
          <div className='flex justify-center'>
            <Image src={Logo} width={30} alt='u-Form Logo' />
          </div>
      </div>
    </div>
      
  )
}
