const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db("repetitionDB");
    const collection = db.collection("arrMethods");

    // Найти все записи в коллекции
    const cursor = collection.find();
    await cursor.forEach(console.log);
  } finally {
    await client.close();
  }
}

run().catch(console.error);
