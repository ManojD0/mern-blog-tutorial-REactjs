
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://mernblog123:mernblog123@mernblog-w5i9o.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log("connectdb");
  client.close();
});
