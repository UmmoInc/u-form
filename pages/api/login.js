import { useRouter } from "next/router";
import clientPromise from "../../lib/mongodb";

export default async (req, res) => {

    
    try {
        const client = await clientPromise;
        const db = client.db("sds");

        const { phone_number, token} = JSON.parse(req.body);

        const candidate = await db.collection("candidates").insertOne({
          phone_number, token
          });
          res.json(candidate)
        
        

        res.status(201).json({ message: "Data inserted successfully!" });;
    } catch (e) {
        console.error(e);
    }
}