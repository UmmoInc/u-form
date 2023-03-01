import React, { useState } from "react";
import { useRouter } from "next/router";
import response from "../../../pages/response";
import { loadValue } from "../../../pages/localStorage";
import { async } from "@firebase/util";


export default function Response_Form({valueUser,token}) {
  // const token = user[0].token
  // const phone_number = user[0].phone_number
  // console.log(token);
  
  
  // const [user_id, setUserID] = useState(value.user_id);
  // const [test_id, setTestID] = useState(value.test_id);
  // const [grade_response, setGradeResponse] = useState([value.grade_response]);

  const router = useRouter();

  const handleSubmit = async () => {


      const user_id = valueUser.user_id
      const test_id = valueUser.test_id
      const grade_response = valueUser.grade_response
      let custom_grade_response = []
      for(let i = 0; i < 227; i++){
          custom_grade_response.push(grade_response[i])
          
          
          // if(isNullOrUndefined(grade_response[i].question_id)
          // || isNullOrUndefined(grade_response[i].option_id)
          // || isNullOrUndefined(grade_response[i].section_name)
          // || isNullOrUndefined(grade_response[i].category_name)){
          //   console.info('custom_grade_response')
          //   console.log(grade_response[i])
          //   console.log(i, 'Index')
          // }

          // function isNullOrUndefined(value) {
          //   return Object.is(value, null)
          //       || Object.is(value, undefined)
          //  }
      }

      {user_id, test_id, grade_response}
      let value = {
        value: JSON.stringify({
          "user_id": valueUser.user_id,
          "test_id": valueUser.test_id,
          "grade_response": 
            custom_grade_response})
      };
        console.log(value);
      fetch("https://ummo-digital-tester.herokuapp.com/api/v1/grading/grade",
       {
        method: "PUT",
        headers: {
          "Access-Control-Allow-Credentials": true,
          "Content-Type": "application/json",
        },
        body:JSON.stringify(value),
      }).then(async (response) => {
        const result = await response.json();
        console.log(result);
        if (result.status === 1) {
          console.log("SUCCESS");
          console.log(result);
          router.push(`/result`);
        }
      });
    
  }
  
    
      
      const submitData = async () => {
        if (typeof window !== "undefined") {
          const valueOld = JSON.parse(localStorage.getItem('value'))
          console.log(valueOld);
        const value = {
          user_id: valueOld.user_id,
          test_id: valueOld.test_id,
          grade_response: valueOld.grade_response,
        };
        
        console.log(value);
        const response = await fetch("/api/send-data", {
          method: "PUT",
          body: JSON.stringify({"value":value}),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const res = await response.json();
        console.log(res);
      };

      }
  return (
    <div className="bg-white rounded-2xl px-4 md:px-8 py-8 md:py-12 shadow-sm border border-[#006592] border-opacity-25 space-y-6">
      {/*Register */}
      <div>
        <p className="font-[500] text-2xl text-black ">Send Data</p>
      </div>

      {/*Form */}
     
        {/*Login Button */}
        <button
          onClick={(e)=>{
            e.preventDefault()
            handleSubmit()
          }}
          className="bg-[#0079B0] w-full py-2 font-medium rounded-xl flex items-center justify-center text-[#E6F3F9] active:bg-gray-800"
        >
          <p>Send Data </p>
        </button>
       
     
      
      {/* */}
      <div className="font-medium text-[#0079B0] space-x-2 text-sm w-full flex justify-center cursor-pointer ">
        <p className="hover:underline">Terms of Use</p>
        <p className="hover:underline">Privacy Policy</p>
      </div>
    </div>
  );
}
