import { useRouter } from "next/router";
import clientPromise from "../../lib/mongodb";

export default async (req, res) => {

    
    try {
        const client = await clientPromise;
        const db = client.db("sds");

        const { firstName, surname, email} = JSON.parse(req.body);

        const candidate = await db.collection("candidates").insertOne({
            firstName,
            surname,
            email,
          });

        
        

        res.status(201).json({ message: "Data inserted successfully!" });;
    } catch (e) {
        console.error(e);
    }
}