import React from "react"
import { loadUser, loadValue } from "../../../lib/localStorage"
import Response_Form from "../../Test/SDS/ResponseForm"



const SendComponent = () => {
    const value = loadValue()
    const user = loadUser()
    const token = user.token
     
    
  return <Response_Form valueUser={value} token={token} />
}

export default SendComponent