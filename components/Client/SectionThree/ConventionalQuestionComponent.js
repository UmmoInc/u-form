import React from "react"
import { loadState } from "../../../lib/localStorage"
import ConventionalQuestions from "../../Test/SDS/SectionThree/ConventionalQuestions"





const ConventionalQuestionComponent = ( ) => {
    const testData = loadState()
     const sectionTitle = testData.data.data.section_info[2]
   
  return <ConventionalQuestions section_info={sectionTitle} />
}

export default ConventionalQuestionComponent