const arrMethod = require("../js-model/methodsModel.js");
const { MongoClient } = require("mongodb");

// Подключение к базе данных
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db("repetitionDB");

    // Выбор коллекции, в которую вы хотите записать текст
    const collection = db.collection("arrMethods");

    // Запись текста в коллекцию
    for (const method of arrMethod) {
      await collection.insertOne({ name: method });
    }

    console.log("Текст успешно записан в коллекцию");
  } finally {
    await client.close();
  }
}

run().catch(console.error);
