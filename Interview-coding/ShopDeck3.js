


# Question 3: Kafka Usecases
- Throughput
- Retention


Kafka
------
Topics
Producer()
consumer()





Topic:

Will take a array/queue and when new messages arrive , we will append to queue.

Producer:

Class KafkaProducer{
    constructor(){
    this.topics={};
    }
    
    createTopic(topicName){
        if(!this.topics[topicName]){
        this.topics[topicName] =[]
        }
        
    }
    
    produce(topicName, message){
        if(!this.topics[topicName]){
        console.warn("topic is not prent , create ")
        this.createTopic(topicName)
        }
        // push messages  to that topic
        this.topics[topicName].push(message);
    }
    
    printMessage(topicName){
    // put some logic to print it
    }
}


Consumer :
1. subscribe
2. consume


Class KafkaConsumer{
    constructor(kafka, groupId){
    this.kafka = kafka;
    this.groupId = groupId;
    this.offset = {};
    }
    
    subscribe(topicName){
    if(!this.offset[topicName]){
        this.offset[topicName]=0;
    }
    }
    
    consume(topicName){
    if(!this.kafka.topics[topicName]){
    console.warn("topic is not prent , create ")
    return;
    }
    
    const messages = this.kafka.topics[topicName]
    const newMessage = messages.slice(this.offset[topicName]);
    if(newMessage.length===0){
    console.log("no messages in the ${topicName } for this groupig")
    return
    }
    // updating offset to latest
    this.offset[topicName] += newMessage.length
    
    } 

}

const kafka = new KafkaProducer();
kafka.createTopic("topic1");
kafka.produce("topic1", {id:1, text : "Hi sample message"});

const consumerA = new KafkaConsumer();
consumerA

//ROund 4 - puzzle :


# Question 4: 

25 Horses

Fastest 3 horse.
5 horse in a race. 


1. lets assume 5 races 
2. race between winners of each grp against each other = winner is the fastest of all
3. try to discard remaining : all horses in the grp where overall fastest is present , exccept the top two .
4. try to discard remaining: bottom 2 horses of grp that second fastest is present .
5. try to discard remaining:all horses in the grp where 3 fastest is present, except for 2 place. 
6. try to discard remaining: all horses the fourth and fifth placed grps


top 2 of fastest, winner from second and third, second place from  third = 5 horses

7. race these 5 horses , you will able to get first , second, third ranked horses.

A,B,C,D,E

A1> 2 
B1> (A1,A2,B1)
C1> (A1,A2,B1)
D1
E1

A1, A2, B1, B2, C1, C2

B2< A2 (B1<A1)
A2, B1, B2, C1, C2 - RACE
A2> B1> C1> B2>C2 - RESULT

 
// Round 5 - experience - HLD

//Round 6 - HLD: 