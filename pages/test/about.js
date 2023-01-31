import Head from 'next/head'
import Image from 'next/image'
import Header_sm from '../../components/Home/Header/Header_sm'
import About_Test from '../../components/Test/About_Test'

export default function About() {

 

  return (

      <div className='bg-[#f8fbfd] h-screen'>
      <Head>
        <title>u-Form</title>
        <meta name="description" content="Online Shopping Site" />
        <link rel="icon" href="/Logo.ico" />
      </Head>
      <nav>
        <Header_sm />
      </nav>
     
      <main className=''>
        <About_Test />
      </main>

      <footer className=''>
        <div>
       
        </div>
      </footer>
    </div>
   
    
  )
}


  