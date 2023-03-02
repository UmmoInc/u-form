import React from "react"
import { loadGradeState, loadState } from "../../../lib/localStorage"
import InvestigativeQuestions from "../../Test/SDS/SectionOne/InvestigativeQuestions"





const RealisticQuestionComponent = ( ) => {                 
    const testData = loadState()
    
    
     const sectionTitle = testData.data.data.section_info[0]
   
  return <InvestigativeQuestions section_info={sectionTitle}  />
}

export default RealisticQuestionComponent