import Head from 'next/head'
import Header_sm from '../../../components/Home/Header/Header_sm'


import dynamic from "next/dynamic"

  

   const QuestionComponent = dynamic(() => import("../../../components/Client/SectionThree/ConventionalQuestionComponent"), {
     // Do not import in server side
   ssr: false,
      })

export default function conventional_question() {

  
    
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
         <QuestionComponent />
          
        </main>
  
        <footer className="">
          <div></div>
        </footer>
      </div>
    );
  }






