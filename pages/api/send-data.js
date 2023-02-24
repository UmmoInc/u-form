import { useRouter } from "next/router";
import clientPromise from "../../lib/mongodb";

export default async (req, res) => {

     const {value} = JSON.parse(req.body);

     try {
        fetch("http://ummo-digital-tester.herokuapp.com/api/v1/grading/grade", {
           
         method: "put",
         headers: {
           "Content-Type": "application/json",
           "Access-Control-Allow-Origin": "*"
         },
         body: JSON.stringify(value),
       }).then(async (response) => {
         const result = await response.json();
         console.log(result);
         if (result.status === 1) {
           console.log("SUCCESS");
           console.log(result);
           router.push(`/home`);
         }
       });
     } catch (error) {}
}