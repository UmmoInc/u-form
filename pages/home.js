import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Header_sm from '../components/Home/Header/Header_sm'
import Home_Feed from '../components/Home/Main/Home_Feed'
import { store } from '../middleware/store';





export default function HomeView({data}) {
  

  
  if (typeof window !== "undefined") {
    const getTest = JSON.parse(localStorage.getItem("data"));
    console.log("TestDATA", getTest.data.data.section_info[0]);
  }



//Getting Store Contents
const state = store.getState();
const count = useSelector((state) => state.results.grading);
console.log("grade:",count);

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
     {

     }
      <main className=''>
        {/* <Home_Feed data={data}/> */}
      </main>

      <footer className=''>
        <div>
       
        </div>
      </footer>
    </div>
   
    
  )
}


// export async function getStaticProps (){
//   const res = await fetch("https://ummo-digital-tester.herokuapp.com/api/v1/question/tests/efdfdb19-39ee-4d63-9897-a097f11deb17");
//   const data = await res.json()

//   return {
//       props: {
//           data,
//       }
//   }
// }