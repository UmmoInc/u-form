import clientPromise from "../../lib/mongodb";

export default async (req, res) => {

    try {
        const client = await clientPromise;
        const db = client.db("sds");

        const { _id,
            date_of_birth,
            gender,
            id_number,
            location,
            school,} = req.body

        const candidate = await db.collection("candidates").insertOne({
            _id,
            date_of_birth,
            gender,
            id_number,
            location,
            school,
          });

        res.json(candidate) 

        res.status(201).json({ message: "Data inserted successfully!" });;
    } catch (e) {
        console.error(e);
    }
}