import React, { useState } from "react";
import { useRouter } from "next/router";

export default function Response_Form({ acknowledge }) {
  // const token = user[0].token
  // const phone_number = user[0].phone_number
  // console.log(token);
  const [first_name, setFirstName] = useState("");
  const [last_name, setSurname] = useState("");
  const [email, setEmail] = useState("");

  const router = useRouter();

  const handleSubmit = async () => {
    

    if (typeof window !== "undefined") {
      const value = JSON.parse(localStorage.getItem("value"));
      console.log(value);
      try {
         await fetch("http://ummo-digital-tester.herokuapp.com/api/v1/grading/grade", {
            
          method: "put",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          },
          body: JSON.stringify(value),
        }).then(async (response) => {
          const result = await response.json();
          console.log(result);
          if (result.status === 1) {
            console.log("SUCCESS");
            console.log(result);
            
          }
        });
      } catch (error) {}
    //   router.push(`/home`);
    }
  }

  return (
    <div className="bg-white rounded-2xl px-4 md:px-8 py-8 md:py-12 shadow-sm border border-[#006592] border-opacity-25 space-y-6">
      {/*Register */}
      <div>
        <p className="font-[500] text-2xl text-black ">Register</p>
      </div>

      {/*Form */}
      <div>
        
          

          {/*Login Button */}
          <button
            onClick={handleSubmit}
            className="bg-[#0079B0] w-full py-2 font-medium rounded-xl flex items-center justify-center text-[#E6F3F9] active:bg-gray-800"
          >
            <p>Register </p>
          </button>
        
      </div>
      {/* */}
      <div className="font-medium text-[#0079B0] space-x-2 text-sm w-full flex justify-center cursor-pointer ">
        <p className="hover:underline">Terms of Use</p>
        <p className="hover:underline">Privacy Policy</p>
      </div>
    </div>
  );
}
