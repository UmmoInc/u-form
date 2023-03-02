import React from "react";
import GroupTwoQuestions from "../../Test/SDS/SectionFour/GroupTwoQuestions";
import InvestigativeQuestions from "../../Test/SDS/SectionFour/ArtisticQuestions";
import ArtisticQuestions from "../../Test/SDS/SectionFour/ArtisticQuestions";
import EnterprisingQuestions from "../../Test/SDS/SectionFour/EnterprisingQuestions";
import ConventionalQuestions from "../../Test/SDS/SectionFour/ConventionalQuestions";
import { loadState } from "../../../lib/localStorage";


const ConventionalQuestionComponent = () => {
  const testData = loadState();
  const getUser = JSON.parse(localStorage.getItem("user"));
  const sectionTitle = testData.data.data.section_info[3];

  return <ConventionalQuestions section_info={sectionTitle} user={getUser}/>
};

export default ConventionalQuestionComponent;
