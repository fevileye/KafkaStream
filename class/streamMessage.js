const Transform = require('stream').Transform;

class streamMessage {

    constructor(objectMode,decodeString){
        this.objectMode=objectMode;
        this.decodeString=decodeString;
    }

    transform(){
        return new Transform({
            objectMode: this.objectMode,
            decodeStrings: this.decodeString,
            transform(message,encoding,callback){
                this.push(JSON.stringify(message.value));
                callback();
            }
        });
    }
    
}

module.exports = streamMessage;