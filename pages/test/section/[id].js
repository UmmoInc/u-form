import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Header_sm from '../../../components/Home/Header/Header_sm'
import About_Test from '../../../components/Test/About_Test'






export default function test_section(data) {

  const router = useRouter()
  const {id} = router.query

  // console.log(data.data.data.section_info);

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
        <About_Test sections={data.data.data.section_info} id={id}/>
      </main>

      <footer className=''>
        <div>
       
        </div>
      </footer>
    </div>
   
    
  )
}


export async function getStaticPaths() {
  const res = await fetch('https://ummo-digital-tester.herokuapp.com/api/v1/question/tests/')
  const data = await res.json()

  const paths = data.data.map((test) => ({
    params:  {id: test.id.toString()} ,
  }))



  return { paths, fallback: false }
}

export async function getStaticProps (context){
  const res = await fetch('http://ummo-digital-tester.herokuapp.com/api/v1/question/test/efdfdb19-39ee-4d63-9897-a097f11deb17');
  const data = await res.json()

  return {
      props: {
          data,
      }
  }
}