'use strict';

const config = require('./config/config.json');
const Kafka = require('./class/kafka.js');
const StreamMessage = require('./class/streamMessage.js');


const streamMessage = new StreamMessage(true,true);
const kafka= new Kafka(config.hostname,config.port,config.groupID);

const consumer = kafka.connect(config.topicName);
const messageTransform= streamMessage.transform();

consumer.pipe(messageTransform).pipe(process.stdout);

consumer.commit(function(err,data){
    console.log(err);
});

