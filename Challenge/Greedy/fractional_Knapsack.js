// https://practice.geeksforgeeks.org/problems/fractional-knapsack-1587115620/1


let fractionalKnapsack = function(weight, values, w, n){

    let collectiveArr = [], sum=0
    for(let i=0;i<n;i++){
        let temp =[]
        temp.push(weight[i])
        temp.push(values[i])
        collectiveArr.push(temp)
    }
    console.log(collectiveArr) // [ [ 10, 60 ], [ 20, 100 ], [ 30, 120 ] ]
    collectiveArr.map(i=> {
        let ele = Math.floor(i[1]/i[0])
        sum+=i[0]
        i.push(ele)
    })
    collectiveArr= collectiveArr.sort((a,b)=> b[2]-a[2])
    let c=0
    let temp1 = w
    let m, k, index, test
    for(k=0;k<n;k++){
        test = (temp1-collectiveArr[k][0])>0  ? (temp1-collectiveArr[k][0]): temp1
        temp1 = (temp1-collectiveArr[k][0])
        index = k
        while(temp1>0){
            c+=collectiveArr[k][1]
            break
        }

    }
    if(sum< w){
        return c
    }else{
        let temp2 = collectiveArr[index][2]* test
        return (c+temp2)
    }
}

console.log('*******', fractionalKnapsack([10,20,30], [60,100,120], 50, 3)) // 240
console.log('*******',fractionalKnapsack([10,20], [60,100], 50, 2)) // 160

