import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../../../middleware/store";
import { addToGrading } from "../../../features/counter/counterSlice";
import Loader_Image from "../../../../assets/1490.gif";
import Image from "next/image";
import { useRouter } from "next/router";
import { loadGradeState } from "../../../../pages/localStorage";

function GroupOneQuestions({ section_info }) {
  let gradeState = loadGradeState();

  const [questionNumber, setQuestionNumber] = useState(1);
  const [categoryNumber, setCategoryNumber] = useState(1);

  const sectionTitle = section_info.title;
  const sectionId = section_info.section_id;
  const testId = section_info.test_id;
  const category_info = section_info.category_info[0];
  const categoryTitle = category_info.title;
  const questionInfo = category_info.question_info;

  const [gradeResponse, setGradeResponse] = useState(gradeState);

  useEffect(() => {
    localStorage.setItem("gradeResponse", JSON.stringify(gradeResponse));
  }, [gradeResponse]);

  const router = useRouter();

  function increament(params) {
    if (questionNumber === questionInfo.length) {
      router.push("/test/section-four/group-two-questions");
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
      "category_name":categoryTitle,"section_name":sectionTitle, "option_id":questionInfo[questionNumber-1].options[0].id, "question_id":questionInfo[questionNumber-1].question_id
    }
    gradeState.push(response);
    localStorage.setItem("gradeResponse", JSON.stringify(gradeState));
  }

  function option_2(params) {
    const response = {
      "category_name":categoryTitle,"section_name":sectionTitle, "option_id":questionInfo[questionNumber-1].options[0].id, "question_id":questionInfo[questionNumber-1].question_id
    }
    gradeState.push(response);
    localStorage.setItem("gradeResponse", JSON.stringify(gradeState));
  }
  function option_3(params) {
    const response = {
      "category_name":categoryTitle,"section_name":sectionTitle, "option_id":questionInfo[questionNumber-1].options[0].id, "question_id":questionInfo[questionNumber-1].question_id
    }
    gradeState.push(response);
    localStorage.setItem("gradeResponse", JSON.stringify(gradeState));
  }
  function option_4(params) {
    const response = {
      "category_name":categoryTitle,"section_name":sectionTitle, "option_id":questionInfo[questionNumber-1].options[0].id, "question_id":questionInfo[questionNumber-1].question_id
    }
    gradeState.push(response);
    localStorage.setItem("gradeResponse", JSON.stringify(gradeState));
  }
  function option_5(params) {
    const response = {
      categoryTitle,
      sectionId,
      question_id: questionInfo[questionNumber - 1].options[5].id,
      option_id: questionInfo[questionNumber - 1].option_id,
    };
    gradeState.push(response);
    localStorage.setItem("gradeResponse", JSON.stringify(gradeState));
  }

  return (
    <div className="">
      <div className=" flex mx-4">
        <div className="bg-white border w-96  rounded-xl py-8 px-4 tracking-wider space-y-8">
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
                className="border-2 rounded-xl outline-none  border-[#0079B0] text-[#0079B0] w-24 py-1"
              >
                1
              </button>
              <button
                type={"button"}
                onClick={() => {
                  increament();
                  option_1();
                }}
                className="border-2 rounded-xl outline-none  border-[#0079B0] text-[#0079B0] w-24 py-1"
              >
                2
              </button>
              <button
                type={"button"}
                onClick={() => {
                  increament();
                  option_2();
                }}
                className="border-2 rounded-xl outline-none  border-[#0079B0] text-[#0079B0] w-24 py-1"
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
                className="border-2 rounded-xl outline-none  border-[#0079B0] text-[#0079B0] w-24 py-1"
              >
                4
              </button>
              <button
                type={"button"}
                onClick={() => {
                  increament();
                  option_4();
                }}
                className="border-2 rounded-xl outline-none  border-[#0079B0] text-[#0079B0] w-24 py-1"
              >
                5
              </button>
              <button
                type={"button"}
                onClick={() => {
                  increament();
                  option_5();
                }}
                className="border-2 rounded-xl outline-none  border-[#0079B0] text-[#0079B0] w-24 py-1"
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

export default GroupOneQuestions;
