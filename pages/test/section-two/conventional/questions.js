import Head from 'next/head'
import Header_sm from '../../../../components/Home/Header/Header_sm'
import Conventional_Feed from '../../../../components/Test/SDS/SectionTwo/Conventional_Feed'

export default function conventional(data) {

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
        <Conventional_Feed data={data.data.data.section_info}  /> 
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