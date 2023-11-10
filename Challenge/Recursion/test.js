
// var recursionTech = function(index, arr,newArr, res,target){
//     if(index == arr.length){
//         if(target==0){
//             res.push([...newArr])
//         }
//         return
//     }

//     if(arr[index]<= target){
//         newArr.push(arr[index])
//         recursionTech(index, arr, newArr, res, target-arr[index])
//         newArr.pop();
//     }
//     recursionTech(index+1, arr, newArr, res, target)
// }
var combinationSum = function(candidates, target) {
    candidates.sort((a,b)=> a-b)
    let res =[]
    function recursionTech(ind, candidates, temp, res, target){
            if(target==0){
                res.push([...temp])
                return
            }

        for(let i=ind;i<candidates.length;i++){
            if(i!=ind && candidates[i]==candidates[i-1]) continue
            if(candidates[i] > target) break

            temp.push(candidates[i])
            recursionTech(i+1, candidates, temp, res, target-candidates[i])
            temp.pop()
        }
    }
    recursionTech(0,candidates,[], res,target)
    return res
};

console.log(combinationSum([2,5,2,1,2],5))
console.log(combinationSum([10,1,2,7,6,1,5],8))