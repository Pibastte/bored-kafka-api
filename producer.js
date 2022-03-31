const axios = require('axios').default;
const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'test',
  brokers: ['localhost:9092']
})

const producer = kafka.producer({
    allowAutoTopicCreation: true,
    transactionTimeout: 30000
})

async function getData() {
    await producer.connect();

    const { data } = await axios.get('https://www.boredapi.com/api/activity');

    console.log(`New thing to do ${data.activity}`)
    
    await producer.send({
        topic: 'bored-base',
        messages: [
            { 
                key: 'activity', 
                value: `${JSON.stringify(
                    {
                        timestamp: data.activity
                    }
                        
                )}`
                , partition: 0
            },
        ],
    
    });
}

setInterval(getData, 5100); //5.1s