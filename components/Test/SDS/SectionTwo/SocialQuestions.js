import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { loadGradeState } from "../../../../pages/localStorage";


export default function SocialQuestions({section_info}) {

  let gradeState = loadGradeState()
  
  const [questionNumber, setQuestionNumber] = useState(1)


  const sectionTitle = section_info.title;
  const sectionId = section_info.section_id;
  const testId = section_info.test_id;
  const category_info = section_info.category_info[3];
  const categoryTitle = category_info.title;
  const questionInfo = category_info.question_info;


  const [gradeResponse, setGradeResponse] = useState(gradeState)

  useEffect(() => {
    localStorage.setItem("gradeResponse", JSON.stringify(gradeResponse))
  },[gradeResponse])

  function option_0() {
    const response = {
      "category_name":categoryTitle,"section_name":sectionTitle, "option_id":questionInfo[questionNumber-1].options[0].id, "question_id":questionInfo[questionNumber-1].question_id
    }
    gradeState.push(response)
    localStorage.setItem("gradeResponse", JSON.stringify(gradeState))
  }
  function option_1() {
    const response = {
      "category_name":categoryTitle,"section_name":sectionTitle, "option_id":questionInfo[questionNumber-1].options[1].id, "question_id":questionInfo[questionNumber-1].question_id
    }
    gradeState.push(response)
    localStorage.setItem("gradeResponse", JSON.stringify(gradeState))
  }

  const router = useRouter()

  function increament(params) {
    

        
    if (questionNumber === questionInfo.length){
        router.push('/test/section-two/enterprising-questions')
        
    } else setQuestionNumber(questionNumber+1)
    
  }

  return (
    <div className="space-y-8">
    <div className="">
      <div className="w-full justify-center flex flex-col items-center space-y-2">
        <p className="text-[#0079B0] font-semibold text-lg tracking-wider">
          QUESTION
        </p>
        <p className="text-[#0079B0] font-normal tracking-widest text-lg ">
          {questionNumber}/{questionInfo.length}
        </p>
      </div>
    </div>
    <div className=" w-96  bg-white p-4 rounded-3xl  tracking-wider border border-[#006592] border-opacity-25">
      <div>
        <div className="space-y-2 tracking-wider">
          <p className="text-[#8794A1] font-normal tracking-widest">
            {categoryTitle}
          </p>
          <p className="font-semibold h-24">
            {questionInfo[questionNumber - 1].question}
          </p>
        </div>
      </div>
      <div className="flex space-x-2 tracking-wider">
        <button
          className="flex w-full  rounded-3xl  bg-[#0079B0]  py-3  outline-none white justify-center text-[#E6F3F9] active:bg-[#03405c] tracking-wider"
          onClick={() => {
            increament();
            option_0();
          }}
        >
          <p>NO</p>
        </button>
        <button
          className="flex w-full  rounded-3xl  bg-[#0079B0]  py-3  outline-none white justify-center text-[#E6F3F9] active:bg-[#03405c] tracking-wider"
          onClick={() => {
            increament();
            option_1();
          }}
        >
          <p>YES</p>
        </button>
      </div>
    </div>
  </div>
  );
}
