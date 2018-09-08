const consumeStream = require('kafka-node').ConsumerGroupStream;

class Kafka{
    constructor(hostname,port,groupId){
         this.consumerConfig={
            kafkaHost: `${hostname}:${port}`, 
            groupId: `${groupId}`,
            sessionTimeout: 30000,
            protocol: ['roundrobin'],
            fromOffset: 'earliest',
            commitOffsetsOnFirstJoin: true, 
            OfRangeOffset: 'earliest', // default
            migrateHLC: false,    
            migrateRolling: true,
          };
    }

    connect(topicName){
        return new consumeStream(this.consumerConfig,`${topicName}`)
    }
} 

module.exports= Kafka;