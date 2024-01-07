// Sample Test Case
const BALLOTS = [
    { "A,B,C": 4},
    {"B,C,A": 3},
    {"C,B,A": 2},
];
const test1 = [{ "A,B,C": 2, "A,C,B": 2, "B,A,C": 3 }];


function checkVotes(ballots){
    let votes = {}
    ballots.forEach(ballet =>{
        
        for(let [vote, count] of Object.entries(ballet)){
            let [first] = vote.split(',');
            if(!votes[first]){
                votes[first] = 0;
            }
            votes[first]+= count;
        }
    });
    return votes;
}

function plurality(ballots) {
    // STUB: Fill in Part 1 solution here
    let maxVotes = 0;
    let pluralityWinner = "";
    let tallyVotes = checkVotes(ballots);
    for(let [person, votes] of Object.entries(tallyVotes)){
        if(votes>maxVotes){
            maxVotes= votes;
            pluralityWinner = person;
        }
    }
    return pluralityWinner;
    
}

function ranked_choice(ballots) {
    // STUB: Fill in Part 2 solution here
    
    let tempBallot = [...ballots];
    console.log(tempBallot)
    let totalVotes = tempBallot.reduce((acc, ballot)=> acc+Object.values(ballot)[0], 0);
    // console.log(totalVotes);
    while(true){
         let tallyVotes = checkVotes(ballots);
         let entries = Object.entries(tallyVotes);
         
         let majorityVotes = totalVotes/2;
         
        for(let [person, vote] of entries){
             if(vote>majorityVotes){
                 return person;
             }
         }
         
         let minVotes = Infinity;
         let personToBeEliminated= '';
         entries.forEach(([person, vote])=>{
             if(vote< minVotes){
                 minVotes = vote;
                 personToBeEliminated = person;
             }
         });
         
         tempBallot = tempBallot.map(ballot =>{
             let [vote, count] = Object.entries(ballot)[0];
             let newVote = vote.split(',').filter(c=> c!==personToBeEliminated ).join(',');
             
             return {[newVote]: count};
             
         }).filter(ballot => Object.keys(ballot)[0]!== '');
        //  console.log('tempBallot', tempBallot);

          
    }
    
}

// Runs test case
console.log(`The plurality winner is ${plurality(BALLOTS)}`)
console.log(`The plurality winner is ${plurality(test1)}`)
// console.log(`The ranked choice winner is ${ranked_choice(BALLOTS)}`)