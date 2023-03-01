
import Head from 'next/head'
import Header_sm from '../../../components/Home/Header/Header_sm'
import Section_Info from '../../../components/Test/SDS/SectionOne/Section_Info'

import dynamic from "next/dynamic"

  

  const TestComponent = dynamic(() => import("../../../components/Client/SectionFour/EnterprisingQuestionComponent"), {
    // Do not import in server side
    ssr: false,
  })

export default function enterprising() {

  
    
    return (
      <div className="bg-[#E6F3F9] flex flex-col items-center h-screen">
        <Head>
          <title>u-Form</title>
          <meta name="description" content="Online Shopping Site" />
          <link rel="icon" href="/Logo.ico" />
        </Head>
        <nav className="w-full ">
          <Header_sm />
        </nav>
        
        <main className=" flex max-w-2xl pt-36">
         <TestComponent />
          
        </main>
  
        <footer className="">
          <div></div>
        </footer>
      </div>
    );
  }







