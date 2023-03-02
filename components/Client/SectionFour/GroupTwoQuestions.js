import React from "react";
import { loadState } from "../../../lib/localStorage";
import GroupTwoQuestions from "../../Test/SDS/SectionFour/GroupTwoQuestions";


const ArtisticQuestionComponent = () => {
  const testData = loadState();
  const getUser = JSON.parse(localStorage.getItem("user"));
  const sectionTitle = testData.data.data.section_info[3];

  return <GroupTwoQuestions section_info={sectionTitle} user={getUser}/>
};

export default ArtisticQuestionComponent;
