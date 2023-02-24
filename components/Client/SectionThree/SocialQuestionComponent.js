import React from "react"
import { loadState } from "../../../pages/localStorage"
import SocialQuestions from "../../Test/SDS/SectionThree/SocialQuestions"


const SocialQuestionComponent = ( ) => {
    const testData = loadState()
     const sectionTitle = testData.data.data.section_info[2]
   
  return <SocialQuestions section_info={sectionTitle} />
}

export default SocialQuestionComponent