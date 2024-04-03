class Broker{
    constructor(){
        this.messages =[];
        this.offset= new Map(); // tracl last read offset
    }

    produce(message){
        this.messages.push(message);
        console.log("Produced Message ", message)
    }

    consumer(consumerId){
        if(!this.offset.has(consumerId)){
            this.offset.set(consumerId, 0);
        }

        const startOffset= this.offset.get(consumerId);

        if(startOffset>= this.messages.length){
            console.log("No messages for consumer", consumerId);
            return [];
        }
        // retrive message starting from startOffset to end
        const newMessages = this.messages.slice(startOffset);
        // update the offset for the consumer to end of messages array
        this.offset.set(consumerId, this.messages.length);

        console.log(`consumer ${consumerId} consumed message:`, newMessages);
        return newMessages;
    }
}


const broker = new Broker();
broker.produce('Hello 1');
broker.produce('Hello 2');
broker.consumer('consumer1');
broker.produce('Hello 3');
broker.consumer('consumer2');

