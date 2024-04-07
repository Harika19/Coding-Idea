// A ticket machine is a device similar to an ATM and was introduced by Indian Railways in order to make purchasing train tickets easier. The first step in buying a ticket is choosing
// the destination of the journey. The destination can be one of N destinations offered in
// advance, names of local and national places. The keyboard of the ticket machine has 28 keys - 26 uppercase alphabets from A to Z, ENTER and BACKSPACE. The travelers choose the destination by typing its name letter by letter. Once the destination is typed, they press the ENTER key to purchase the ticket. If they type the wrong letter, they use the BACKSPACE key to correct.

// We, as an engineer building the system, already know all N destinations. We’re receiving the next key pressed, by the traveler, in a data stream.

// When the client presses ENTER, check if the entered word points to the valid destination or not.


Code:


const destinations = ["DELHI", "BANGALORE", "MUMBAI", "CHENNAI", "GURGAON", "DUBAI"];
const keysPressed = ["D", "E", "R", "BACKSPACE", "L", "H", "I", "ENTER"];
let input = "";

function processKeys(key) {
  if (key === 'BACKSPACE') {
    input = input.slice(0, -1); // remove last char
  } else if (key === 'ENTER') {
    if (destinations.includes(input)) {
      console.log("valid destination");
    } else {
      console.log("not a valid destination");
    }
    input = ""; // Reset input after processing ENTER key
  } else {
    input += key;
  }
}

keysPressed.forEach(processKeys);








/*


    N = 5, destinations = [“DELHI”, “BANGALORE”, “MUMBAI”, “CHENNAI”, “GURGAON”]
    keysPressed = [“D”, “E”, “R”, BACKSPACE, “L”, “H”, “I”, ENTER]

    Let input = ””

        function processKeys(key) {
            if (key === ‘BACKSPACE’) {
                input = input.slice(0, -1) // remove last char
            } else if (key === ’ENTER’) {
                if (destinations.includes(input)) {
                    console.log(“valid destination”);
                } else {
                    console.log(“not a valid destination”);
                }
            }
            Else {
                Input += key;
            }
        }


    keysPressed.forEach(processKeys);

    Class TrieNode {
        constructor() {


                // each destination -> create a triennode
                Const destination = ‘DELHI”
                Let curr = this.root;
                for (const char of destination) {
                    if (!curr.children[char]) {
                        curr.children[char] = new TrieNode(); {
                            Curr = curr.children[char];


*/