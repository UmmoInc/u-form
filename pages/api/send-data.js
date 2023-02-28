import { useRouter } from "next/router";
import clientPromise from "../../lib/mongodb";

export default function handler(req, res) {
  
      if (req.method === 'PUT') {
        const value = req.body.value

        fetch('http://ummo-digital-tester.herokuapp.com/api/v1/grading/grade',{
          method:"PUT",
          body: JSON.stringify(value)
        }).then(res => console.log(res))
        
      }
}