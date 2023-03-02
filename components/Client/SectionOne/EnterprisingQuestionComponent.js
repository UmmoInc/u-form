import React from "react"
import { loadState } from "../../../lib/localStorage"
import EnterprisingQuestions from "../../Test/SDS/SectionOne/EnterprisingQuestions"


const EnterprisingQuestionComponent = ( ) => {
    const testData = loadState()
     const sectionTitle = testData.data.data.section_info[0]
   
  return <EnterprisingQuestions section_info={sectionTitle} />
}

export default EnterprisingQuestionComponent