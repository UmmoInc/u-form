import React from 'react'
import Head from "next/head";
import clientPromise from '../lib/mongodb';
import Header_sm from '../components/Home/Header/Header_sm';



import dynamic from "next/dynamic";

const ResultComponent = dynamic(() => import("../components/client/GetResults/ResultComponent.js"), {
  // Do not import in server side
  ssr: false,
})


export default function result({reports}) {
  console.log(reports[0]);

  return (
    <div className="bg-white h-screen">
      <Head>
        <title>u-Form</title>
        <meta name="description" content="Online Shopping Site" />
        <link rel="icon" href="/Logo.ico" />
      </Head>
      <nav>
        <Header_sm />
      </nav>

      <main className=" flex justify-center py-8 items-center md:pt-24 flex-col space-y-5">
        <div className='max-w-3xl'>
          <div className='px-4 flex justify-center items-center flex-col pb-6'>
                <p className='font-semibold '>SELF-DIRECTED SEARCH TEST</p>
                <p className='font-semibold'>SUMMARY SHEET</p>
            </div>
            <div>
                <ResultComponent reports={reports} /> 
            </div>
        </div>
            
      </main>

      <footer className="">
        <div></div>
      </footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  
    const client = await clientPromise;

    const db = client.db("test");

    const results = await db
        .collection("StoreUserReport")
        .find({})
        .sort()
        .limit(20)
        .toArray();

    return {
        props: { reports: JSON.parse(JSON.stringify(results)) },
    };

}
