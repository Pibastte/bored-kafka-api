const mongo = require('mongodb');

const MongoClient = mongo.MongoClient;

const url = 'mongodb://localhost:27017';

async function main(){
    const client = await MongoClient.connect(url, { useNewUrlParser: true }).catch(err => { console.log(err); });
    const db = await client.db("bored");

    try {
        //print all entries
        const data = await db.collection('activity').find({}).toArray();
        console.log('All:', data, data.length);
    }
    catch(err){
        console.log(err);
    }
    finally {
        await client.close();
    }
}

main();