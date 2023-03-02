import React from "react"
import { loadUser, loadUserData } from "../../../pages/localStorage";
import TestSummary from "../../Test/SDS/Results/TestSummary"



const GetResults = ({reports}) => {
    const user = loadUser()
    const userData = loadUserData()
     console.log(userData);
    
  return <TestSummary reports={reports} user={user} userData={userData} />
}

export default GetResults