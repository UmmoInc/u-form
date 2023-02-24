import React from "react";
import { loadState } from "../../../pages/localStorage";
import GroupOneQuestions from "../../Test/SDS/SectionFour/GroupOneQuestions";


const ArtisticQuestionComponent = () => {
  const testData = loadState();

  const sectionTitle = testData.data.data.section_info[3];

  return <GroupOneQuestions section_info={sectionTitle} />
};

export default ArtisticQuestionComponent;
