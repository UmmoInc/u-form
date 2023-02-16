import Head from 'next/head'
import Image from 'next/image'
import Login_Form from '../components/Auth/Login/Login_Form'
import Header_sm from '../components/Home/Header/Header_sm'
import { authentication } from '../middleware/firebase'
import {RecaptchaVerifier} from 'firebase/auth'
//Logo
import Logo from '../assets/Logo.png'

export default function Home() {

  return (

      <div className='h-screen w-full bg-[#E6F3F9]'>
      <Head>
        <title>u-Form</title>
        <meta name="description" content="Online Shopping Site" />
        <link rel="icon" href="/Logo.ico" />
      </Head>
      
     
      <main className='h-screen justify-center md:pt-48 pt-24  w-full space-y-8 flex-col flex items-center'>
            <div className='flex w-full justify-center text-2xl font-bold '>
                <Image src={Logo} width={45}  alt='Logo' priority={true} />
            </div>
            <div className=' px-4 w-full flex-grow max-w-md  '>
                <Login_Form />
            </div>
      </main>

      <footer className=''>
        <div>
       
        </div>
      </footer>
    </div>
   
    
  )
}


  