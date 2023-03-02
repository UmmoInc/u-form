import { async } from "@firebase/util";
import Head from "next/head";
import Header_sm from "../components/Home/Header/Header_sm";

// console.log(loadState())

import dynamic from "next/dynamic";
import { loadValue } from "./localStorage";
import Response_Form from "../components/Test/SDS/ResponseForm";

const SendComponent = dynamic(() => import("../components/client/SendResponse/SendComponent.js"), {
  // Do not import in server side
  ssr: false,
})

export default function response() {
  

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

      <main className=" flex justify-center pt-24">
        <SendComponent />
      </main>

      <footer className="">
        <div></div>
      </footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  // const data = await res.json()

  return {
    props: {
      // data,
    },
  };
}
