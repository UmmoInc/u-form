import React from "react"
import { loadState } from "../../../lib/localStorage"
import SocialQuestions from "../../Test/SDS/SectionOne/SocialQuestions"


const SocialQuestionComponent = ( ) => {
    const testData = loadState()
     const sectionTitle = testData.data.data.section_info[0]
   
  return <SocialQuestions section_info={sectionTitle} />
}

export default SocialQuestionComponent