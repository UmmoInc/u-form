import React from "react";
import SocialQuestions from "../../Test/SDS/SectionFour/SocialQuestions";
import { loadState } from "../../../lib/localStorage";


const SocialQuestionComponent = () => {
  const testData = loadState();
  const getUser = JSON.parse(localStorage.getItem("user"));
  const sectionTitle = testData.data.data.section_info[3];

  return <SocialQuestions section_info={sectionTitle} user={getUser}/>
};

export default SocialQuestionComponent;
