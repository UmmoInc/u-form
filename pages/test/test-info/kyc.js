import Head from 'next/head'
import Image from 'next/image'
import KYCForm from '../../../components/Test/SDS/TestInfo/KYCForm'


//Logo
import Logo from '../../../assets/Logo.png'

export default function KYC() {

  return (

      <div className='h-screen w-full bg-gray-200'>
      <Head>
        <title>u-Form</title>
        <meta name="description" content="Online Shopping Site" />
        <link rel="icon" href="/Logo.ico" />
      </Head>
      
     
      <main className='h-screen justify-center pt-24  w-full space-y-8 flex-col flex items-center'>
            <div className='flex w-full justify-center text-2xl font-bold '>
                <Image src={Logo} width={45} objectFit='contain' />
            </div>
            <div className=' px-4 w-full flex-grow max-w-md  '>
                <KYCForm />
            </div>
      </main>

      <footer className=''>
        <div>
       
        </div>
      </footer>
    </div>
   
    
  )
}