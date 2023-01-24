import Head from 'next/head'
import Image from 'next/image'
import Header_sm from '../components/Home/Header/Header_sm'
import Home_Feed from '../components/Home/Main/Home_Feed'





export default function Home() {

 

  return (

      <div className='bg-gray-200 h-screen'>
      <Head>
        <title>u-Form</title>
        <meta name="description" content="Online Shopping Site" />
        <link rel="icon" href="/Logo.ico" />
      </Head>
      <nav>
        <Header_sm />
      </nav>
     
      <main className=''>
        <Home_Feed />
      </main>

      <footer className=''>
        <div>
       
        </div>
      </footer>
    </div>
   
    
  )
}


  