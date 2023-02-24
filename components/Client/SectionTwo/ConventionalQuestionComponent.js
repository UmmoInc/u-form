import React from "react"
import { loadState } from "../../../pages/localStorage"
import ConventionalQuestions from "../../Test/SDS/SectionTwo/ConventionalQuestions"





const ConventionalQuestionComponent = ( ) => {
    const testData = loadState()
     const sectionTitle = testData.data.data.section_info[1]
   
  return <ConventionalQuestions section_info={sectionTitle} />
}

export default ConventionalQuestionComponent