var kafka = require('kafka-node');
const client = new kafka.KafkaClient({kafkaHost: ''});
var Producer = kafka.Producer;

var producer= new Producer(client);
var payloads = [
    { topic: '', messages: 'hi', partition: 0 }
];

producer.on('ready', function () {
    producer.send(payloads, function (err, data) {
        console.log(data);
    });
});
 
producer.on('error', function (err) {
    cpnsole.log(err);
})