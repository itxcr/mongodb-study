const mongoClient = require('mongodb').MongoClient;

mongoClient.connect(`mongodb://weitian:test@localhost:27017/test`, (err, client) => {
    if (err) {
        throw err;
    }

    let db = client.db();
    db.collection('article').find().toArray((err, result) => {
        if (err) {
            throw  err;
        }
        console.log(result);
        client.close();

    });

    // db.collection('user').insertOne({"username":"test23244","age":2941}, (err, data) => {
    //     if (err) {
    //         console.log(err)
    //         return
    //     }
    //     console.log(data)
    //     client.close()
    // })


});
