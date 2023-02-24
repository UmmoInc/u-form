import React from "react"
import { loadState } from "../../../pages/localStorage"
import RealisticQuestions from "../../Test/SDS/SectionTwo/RealisticQuestions"
import Question from "../../Test/SDS/SectionTwo/RealisticQuestions"




const RealisticQuestionComponent = ( ) => {
    const testData = loadState()
     const sectionTitle = testData.data.data.section_info[1]
   
  return <RealisticQuestions section_info={sectionTitle} />
}

export default RealisticQuestionComponent