import { async } from "@firebase/util";
import Head from "next/head";
import Header_sm from "../components/Home/Header/Header_sm";

import dynamic from "next/dynamic"
import HomePage from "../components/Pages/HomePage";



export default function HomeView() {


   




  return (
    <div className="bg-[#E6F3F9] h-screen">
      <Head>
        <title>u-Form</title>
        <meta name="description" content="Online Shopping Site" />
        <link rel="icon" href="/Logo.ico" />
      </Head>
      <nav>
        <Header_sm />
      </nav>
      
      <main className=" flex justify-center">
        <div className="max-w-2xl">
          <HomePage />
        </div>
      </main>

      <footer className="">
        <div></div>
      </footer>
    </div>
  );
}

export async function getServerSideProps (context){
  
  // const data = await res.json()

  return {
      props: {
          // data,
      }
  }
}