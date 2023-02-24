import React from "react"
import { loadState } from "../../pages/localStorage"
import Home_Feed from "../Home/Main/Home_Feed"


const ClientComponent = () => {
    const testData = loadState()
     
    
  return <Home_Feed testData={testData} />
}

export default ClientComponent