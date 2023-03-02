import React from "react"
import { loadState } from "../../../lib/localStorage"
import EnterprisingQuestions from "../../Test/SDS/SectionTwo/EnterprisingQuestions"


const EnterprisingQuestionComponent = ( ) => {
    const testData = loadState()
     const sectionTitle = testData.data.data.section_info[1]
   
  return <EnterprisingQuestions section_info={sectionTitle} />
}

export default EnterprisingQuestionComponent