import Head from 'next/head'
import Header_sm from '../../../components/Home/Header/Header_sm'
import Section_Info from '../../../components/Test/SDS/SectionThree/Section_Info'


export default function test_section(data) {



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
        <Section_Info sections={data.data.data.section_info} />
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