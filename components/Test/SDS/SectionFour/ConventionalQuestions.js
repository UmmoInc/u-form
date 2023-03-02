import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";
import { loadGradeState } from "../../../../lib/localStorage";




function ConventionalQuestions({ section_info, user }) {
  let gradeState = loadGradeState();

  const [questionNumber, setQuestionNumber] = useState(1);
  const [categoryNumber, setCategoryNumber] = useState(1);
  const sectionTitle = section_info.title;
  const sectionId = section_info.section_id;
  const testId = section_info.test_id;
  const category_info = section_info.category_info[5];
  const categoryTitle = category_info.title;
  const questionInfo = category_info.question_info;

  const user_id = user.phone_number
  console.log(user_id);

  const [gradeResponse, setGradeResponse] = useState(gradeState);

  useEffect(() => {
    localStorage.setItem("gradeResponse", JSON.stringify(gradeResponse));
  }, [gradeResponse]);

  const router = useRouter();

  function increament(params) {


    if (questionNumber === questionInfo.length) {
      let value = {user_id, "grade_response":gradeState,"test_id":testId}
      console.log(value);
      
    localStorage.setItem("value", JSON.stringify(value));
      
      router.push('../../../../response')
      
    } else setQuestionNumber(questionNumber + 1);
  }

  function option_0() {
    const response = {
      "category_name":categoryTitle,"section_name":sectionTitle, "option_id":questionInfo[questionNumber-1].options[0].id, "question_id":questionInfo[questionNumber-1].question_id
    }
    gradeState.push(response);
    localStorage.setItem("gradeResponse", JSON.stringify(gradeState));
  }

  function option_1() {
    const response = {
      "category_name":categoryTitle,"section_name":sectionTitle, "option_id":questionInfo[questionNumber-1].options[1].id, "question_id":questionInfo[questionNumber-1].question_id
    }
    gradeState.push(response);
    localStorage.setItem("gradeResponse", JSON.stringify(gradeState));
  }

  function option_2(params) {
    const response = {
      "category_name":categoryTitle,"section_name":sectionTitle, "option_id":questionInfo[questionNumber-1].options[2].id, "question_id":questionInfo[questionNumber-1].question_id
    }
    gradeState.push(response);
    localStorage.setItem("gradeResponse", JSON.stringify(gradeState));
  }
  function option_3(params) {
    const response = {
      "category_name":categoryTitle,"section_name":sectionTitle, "option_id":questionInfo[questionNumber-1].options[3].id, "question_id":questionInfo[questionNumber-1].question_id
    }
    gradeState.push(response);
    localStorage.setItem("gradeResponse", JSON.stringify(gradeState));
  }
  function option_4(params) {
    const response = {
      "category_name":categoryTitle,"section_name":sectionTitle, "option_id":questionInfo[questionNumber-1].options[4].id, "question_id":questionInfo[questionNumber-1].question_id
    }
    gradeState.push(response);
    localStorage.setItem("gradeResponse", JSON.stringify(gradeState));
  }
  function option_5(params) {
    const response = {
      "category_name":categoryTitle,"section_name":sectionTitle, "option_id":questionInfo[questionNumber-1].options[5].id, "question_id":questionInfo[questionNumber-1].question_id
    }
    gradeState.push(response);
    localStorage.setItem("gradeResponse", JSON.stringify(gradeState));
  }

  return (
    <div className=" space-y-8">
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
      <div className=" flex mx-4">
        <div className="bg-white border w-96  rounded-3xl py-8 px-4 tracking-wider space-y-8">
          <div>
            <div className="space-y-2 h-32">
              <p className="text-[#8794A1] font-light`">{categoryTitle}</p>
              <p className="font-semibold">
                {questionInfo[questionNumber - 1].question}
              </p>
            </div>
            <div className="space-x-2 py-1 w-full items-center flex justify-center ">
              <button
                type={"button"}
                onClick={() => {
                  increament();
                  option_0();
                }}
                className="h-[45px] rounded-3xl outline-none text-[#E6F3F9]  bg-[#0079B0]  w-full py-1"
              >
                1
              </button>
              <button
                type={"button"}
                onClick={() => {
                  increament();
                  option_1();
                }}
                className="h-[45px] rounded-3xl outline-none text-[#E6F3F9]  bg-[#0079B0]  w-full py-1"
              >
                2
              </button>
              <button
                type={"button"}
                onClick={() => {
                  increament();
                  option_2();
                }}
                className="h-[45px] rounded-3xl outline-none text-[#E6F3F9]  bg-[#0079B0]  w-full py-1 "
              >
                3
              </button>
            </div>
            <div className="space-x-2 py-1 w-full items-center flex justify-center">
              <button
                type={"button"}
                onClick={() => {
                  increament();
                  option_3();
                }}
                className="h-[45px] rounded-3xl outline-none text-[#E6F3F9]  bg-[#0079B0]  w-full py-1"
              >
                4
              </button>
              <button
                type={"button"}
                onClick={() => {
                  increament();
                  option_4();
                }}
                className="h-[45px] rounded-3xl outline-none text-[#E6F3F9]  bg-[#0079B0]  w-full py-1"
              >
                5
              </button>
              <button
                type={"button"}
                onClick={() => {
                  increament();
                  option_5();
                }}
                className="h-[45px] rounded-3xl outline-none text-[#E6F3F9]  bg-[#0079B0]  w-full py-1 "
              >
                6
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConventionalQuestions;
