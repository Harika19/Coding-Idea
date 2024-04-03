function deepClone(obj){
if(obj ==null || typeof obj !== 'object'){
    return obj;
}

let clone = Array.isArray(obj)? []: {};
for(const key in obj){
    const value = obj[key];
    clone[key] = deepClone(value);
}
return clone;
}

const obj = {
    name: "harika",
    age:24,
    socialPlat: {
        mail: "harika@gmail",
        facebook: "harika"
    },
    hobbies: ["read", "play"]

}
const cloned = deepClone(obj);
console.log(cloned);

cloned.socialPlat.facebook = "newHarika";
console.log(obj.socialPlat.facebook);