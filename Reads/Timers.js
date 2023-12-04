setTimeout(() => {
    console.log('Timeout 1');
  }, 0);
  
  setImmediate(() => {
    console.log('Immediate 1');
  }, 3000);

  process.nextTick(() => {
    console.log('Next Tick 1');
  });

  console.log(Promise.resolve('2222'))