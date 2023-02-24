import React from "react";
import { loadState } from "../../../pages/localStorage";
import ArtisticQuestions from "../../Test/SDS/SectionOne/ArtisticQuestions";

const ArtisticQuestionComponent = () => {
  const testData = loadState();

  const sectionTitle = testData.data.data.section_info[0];

  return <ArtisticQuestions section_info={sectionTitle} />;
};

export default ArtisticQuestionComponent;
