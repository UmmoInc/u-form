import React from "react"
import { loadUser } from "../../../pages/localStorage";
import TestSummary from "../../Test/SDS/Results/TestSummary"



const ClientComponent = ({reports}) => {
    const user = loadUser()
     console.log(reports);
    
  return <TestSummary reports={reports} user={user} />
}

export default ClientComponent