import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { loadGradeState } from "../../../../pages/localStorage";






export default function investigativeQuestions({section_info}) {

  let gradeState = loadGradeState()
  
  const [questionNumber, setQuestionNumber] = useState(1)
  const [categoryNumber, setCategoryNumber] = useState(1)
  const sectionTitle = section_info.title;
  const sectionId = section_info.section_id;
  const testId = section_info.test_id;
  const category_info = section_info.category_info[1];
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
      "category_name":categoryTitle,"section_name":sectionTitle, "option_id":questionInfo[questionNumber-1].options[0].id, "question_id":questionInfo[questionNumber-1].question_id
    }
    gradeState.push(response)
    localStorage.setItem("gradeResponse", JSON.stringify(gradeState))
  }

  const router = useRouter()

  function increament(params) {
    

        
    if (questionNumber === questionInfo.length){
        router.push('/test/section-three/artistic-questions')
        
    } else setQuestionNumber(questionNumber+1)
    
  }

  return (
    <div className=" w-96 bg-white p-4 rounded-lg border">
      <div>
        <div className="space-y-2">
          <p className="text-[#8794A1] font-light`">{categoryTitle}</p>
          <p className="font-semibold h-24">{questionInfo[questionNumber-1].question}</p>
        </div>
      </div>
      <div className="flex space-x-3">
        <button className="flex w-full border-2 rounded-xl  border-[#0079B0] text-[#0079B0] py-3  outline-none white justify-center" onClick={() => {
           
           increament()
            option_0()
        }}>
          <p>No</p>
        </button>
        <button className="flex w-full border-2 rounded-xl  border-[#0079B0] text-[#0079B0] py-3 outline-none white justify-center" onClick={() => {
            
             increament()
           option_1()
        }}>
          <p>Yes</p>
        </button>
      </div>
    </div>
  );
}
