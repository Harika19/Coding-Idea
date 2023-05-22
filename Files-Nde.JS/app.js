
const { readFile, openFile, writeFile } = require('./fileHandler');


(async function(){
    await openFile();
    await writeFile('test1', 12);
    await writeFile('test2', 1); 
    await readFile(); 
})();
