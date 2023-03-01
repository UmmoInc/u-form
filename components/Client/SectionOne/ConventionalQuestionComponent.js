import React from "react"
import { loadState } from "../../../pages/localStorage"
import ConventionalQuestions from "../../Test/SDS/SectionOne/ConventionalQuestions"
import Question from "../../Test/SDS/SectionOne/RealisticQuestions"




const ConventionalQuestionComponent = ( ) => {
    const testData = loadState()
     const sectionTitle = testData.data.data.section_info[0]
   
  return <ConventionalQuestions section_info={sectionTitle} />
}

export default ConventionalQuestionComponent