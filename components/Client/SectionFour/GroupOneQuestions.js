import React from "react";
import { loadState } from "../../../pages/localStorage";
import GroupOneQuestions from "../../Test/SDS/SectionFour/GroupOneQuestions";


const ArtisticQuestionComponent = () => {
  const testData = loadState();


  const getUser = JSON.parse(localStorage.getItem("user"));

  const sectionTitle = testData.data.data.section_info[3];

  return <GroupOneQuestions section_info={sectionTitle} user={getUser} />
};

export default ArtisticQuestionComponent;
