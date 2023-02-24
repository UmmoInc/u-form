import React from "react"
import { loadState } from "../../../pages/localStorage"
import EnterprisingQuestions from "../../Test/SDS/SectionThree/EnterprisingQuestions"


const EnterprisingQuestionComponent = ( ) => {
    const testData = loadState()
     const sectionTitle = testData.data.data.section_info[2]
   
  return <EnterprisingQuestions section_info={sectionTitle} />
}

export default EnterprisingQuestionComponent