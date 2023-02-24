import React from "react"
import { loadGradeState, loadState } from "../../../pages/localStorage"
import InvestigativeQuestions from "../../Test/SDS/SectionTwo/InvestigativeQuestions"





const RealisticQuestionComponent = ( ) => {
    const testData = loadState()
    
    
     const sectionTitle = testData.data.data.section_info[1]
   
  return <InvestigativeQuestions section_info={sectionTitle}  />
}

export default RealisticQuestionComponent