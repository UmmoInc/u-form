import React from "react"
import { loadState } from "../../../pages/localStorage"
import Section_Info from "../../Test/SDS/SectionThree/Section_Info"



const TestSectionComponent = ( ) => {
    const testData = loadState()
     const sectionInfo = testData.data.data.section_info[2]
    console.log(sectionInfo);
  return <Section_Info section={sectionInfo} />
}

export default TestSectionComponent