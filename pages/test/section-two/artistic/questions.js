import Head from 'next/head'
import { useRouter } from 'next/router'
import Header_sm from '../../../../components/Home/Header/Header_sm'
import Artistic_Feed from '../../../../components/Test/SDS/SectionTwo/Artistic_Feed';

export default function artistic(data) {
  return (

      <div className='bg-[#E6F3F9] h-screen'>
      <Head>
        <title>u-Form</title>
        <meta name="description" content="Online Shopping Site" />
        <link rel="icon" href="/Logo.ico" />
      </Head>
      <nav>
        <Header_sm />
      </nav>
     
      <main className=''>
        {/* <About_Test sections={data.data.data.section_info} id={id}/> */}
        <Artistic_Feed data={data.data.data.section_info}  /> 
      </main>

      <footer className=''>
        <div>
       
        </div>
      </footer>
    </div>
   
    
  )
}




export async function getServerSideProps (context){
  const res = await fetch('http://ummo-digital-tester.herokuapp.com/api/v1/question/test/efdfdb19-39ee-4d63-9897-a097f11deb17');
  const data = await res.json()

  return {
      props: {
          data,
      }
  }
}