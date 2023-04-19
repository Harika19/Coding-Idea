Events are synchronous and blocking.

EventEmitter is a class that helps us create a publisher-subscriber pattern in NodeJS.

With an event emitter, we can simply raise a new event, and a listener will listen to the raised event and have some action performed for the event.


* emit is used to trigger an event
* on is used to add a callback function that's going to be executed when the event is triggered
* once(): add a one-time listener
* removeListener() / off(): remove an event listener from an event
* removeAllListeners(): remove all listeners for an event









const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('start', (start, end) => {
  console.log(`started from ${start} to ${end}`);
});

eventEmitter.emit('start', 1, 100);
