const fs = require('fs').promises;

async function readFile() {
  try {
    const data = await fs.readFile('info.csv');
    console.log(data.toString());
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
  }
}

async function openFile() {
  try {
    const csvHeaders = 'name,id'
    await fs.writeFile('info.csv', csvHeaders);
  } catch (error) {
    console.error(`Got an error trying to write to a file: ${error.message}`);
  }
}

async function writeFile(name, id) {
  try {
    const csvLine = `\n${name},${id}`
    await fs.writeFile('info.csv', csvLine, { flag: 'a' });
  } catch (error) {
    console.error(`Got an error trying to write to a file: ${error.message}`);
  }
}



module.exports={
    readFile,
    openFile,
    writeFile
}
