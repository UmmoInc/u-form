import React from "react";
import { loadState } from "../../../pages/localStorage";
import GroupTwoQuestions from "../../Test/SDS/SectionFour/GroupTwoQuestions";
import InvestigativeQuestions from "../../Test/SDS/SectionFour/ArtisticQuestions";
import ArtisticQuestions from "../../Test/SDS/SectionFour/ArtisticQuestions";
import EnterprisingQuestions from "../../Test/SDS/SectionFour/EnterprisingQuestions";


const EnterprisingQuestionComponent = () => {
  const testData = loadState();
  const getUser = JSON.parse(localStorage.getItem("user"));
  const sectionTitle = testData.data.data.section_info[3];

  return <EnterprisingQuestions section_info={sectionTitle} user={getUser}/>
};

export default EnterprisingQuestionComponent;
