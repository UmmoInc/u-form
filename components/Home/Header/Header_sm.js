import Image from 'next/image'
import React from 'react'
import {BiMenu} from 'react-icons/bi'


//Logo
import Logo from '../../../assets/Logo.png'

export default function Header_sm() {
  return (
    <div className='bg-[#0079B0] p-4 grid grid-cols-3 grid-flow-row items-center'>
        
        <div>
            <p>
                <BiMenu className='text-3xl text-white' />
            </p>
        </div>
        <div className='flex justify-center'>
          <Image src={Logo} width={30} objectFit='contain' />
        </div>
    </div>
  )
}
