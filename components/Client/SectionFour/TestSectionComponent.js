import React from "react"
import { loadState } from "../../../lib/localStorage"
import Section_Info from "../../Test/SDS/SectionFour/Section_Info"



const TestSectionComponent = ( ) => {
    const testData = loadState()
     const sectionInfo = testData.data.data.section_info[3]
    console.log(sectionInfo);
  return <Section_Info section={sectionInfo} />
}

export default TestSectionComponent