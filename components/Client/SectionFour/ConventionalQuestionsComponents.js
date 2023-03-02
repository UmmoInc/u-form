import React from "react";
import ConventionalQuestions from "../../Test/SDS/SectionFour/ConventionalQuestions";
import { loadState } from "../../../lib/localStorage";


const ConventionalQuestionComponent = () => {
  const testData = loadState();
  const getUser = JSON.parse(localStorage.getItem("user"));
  const sectionTitle = testData.data.data.section_info[3];

  return <ConventionalQuestions section_info={sectionTitle} user={getUser}/>
};

export default ConventionalQuestionComponent;
