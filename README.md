Start the container with `$ docker-compose up`

Setup the config file in the container

`$ curl -X PUT http://localhost:3030/api/kafka-connect/connectors/MongoSinkConnector/config -H 'Content-Type: application/json' -H 'Accept: application/json' -d @connector.json`

Install packages:
`$ npm i` or `$ yarn install`

Run producer: `$ node producer.js`

Run consumer: `$ node consumer.js`
