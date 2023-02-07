import clientPromise from "../../lib/mongodb";

export default async (req, res) => {

    try {
        const client = await clientPromise;
        const db = client.db("sds");

        const { fullname, surname, email} = req.body

        const candidate = await db.collection("candidates").insertOne({
            fullname,
            surname,
            email,
          });

        res.json(candidate) 

        res.status(201).json({ message: "Data inserted successfully!" });;
    } catch (e) {
        console.error(e);
    }
}