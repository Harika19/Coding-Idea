// # PUPPALA HARIKA | 4+ yrs exp | R2
// - Nodejs, Javascript
// - MySQL, Redis
// - AWS: Kafka, S3, IAM, RDS, KMS


// # Question 1: Js problem


const nestedObj = {
    a: "Hi",
    b: { c: "Hello", g: {h: "World"}},
    d: { e: { f: 2} }
}

//output
// const flattenObj = {
//     a: "Hi",
//     b_c: "Hello",
//     b_g_h: "World",
//     d_e_f: 2
// }


function flattenObject(nestedObj){
    const res ={};
    for(const i in nestedObj){
        console.log('i.', i)
        if((typeof nestedObj[i]) ==="object" && nestedObj[i]!== null){
            const flatObj= flattenObject(nestedObj[i]);
            console.log('flatObj', flatObj)
            for(const j in flatObj){
                if(!flatObj.hasOwnProperty(j)) continue;
                res[i+'_'+j] = flatObj[j];
            }
        }else{
            res[i] = nestedObj[i];
        }
    }
    
    return res;
}


const result = flattenObject(nestedObj);
console.log(result);



// # Question 2: 

// - Array [1, 2, 3, 4, 5]  (distinct)
// k = 3  , 0<k<array.length

// [1, 2, 3]
// [1, 2, 4]
// [1, 2, 5]
// [1, 3, 4]
// [1, 3, 5]
// ...






function combinations(arr, k){
    let result =[]
    function getCombinations(start, curr){
        if(curr.length===k){
            result.push([...curr]);
            return
        }
        let prev = null;
        for(let i=start;i<arr.length;i++){
            if(prev!== arr[i]){
                curr.push(arr[i]);
                getCombinations(i+1, curr);
                curr.pop();
                prev = arr[i];
            }
        }
    }
    
    arr.sort((a,b)=> a-b);
    getCombinations(0,[]);
    return result;
    
}
let arr = [1, 2, 3, 4, 5];
console.log(combinations(arr, 3));










