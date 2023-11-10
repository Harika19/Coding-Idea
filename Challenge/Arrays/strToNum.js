var strTonum = function(str) {
    let res =0
    for(let i=0;i<str.length;i++){
        res = res * 10 + (str[i] -'0')
    }
    console.log(typeof(res))
    return res
};
//console.log(strTonum('234'))

var strTonum2 = function(str) {
   let a1 = Number(str)
   let a2 = parseInt(str)
   let a3 = +str
   console.log(typeof(a1), typeof(a2), typeof(a3))
   return a1
};
//console.log(strTonum2('234'))

var strTonum3 = function(input) {
    // let str = input.split(',').join('') - if only , are there u can do this 
    let str = input.replace(/[^0-9]/g, '')
    console.log('str', str)
    let res =0
    for(let i=0;i<str.length;i++){
        res = res * 10 + (str[i] -'0')
    }
    console.log(typeof(res))
    return res
};
console.log(strTonum3('Dollars. $ 234,034'))