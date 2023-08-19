export {}
// passing array to function
function arrayFunction(nos:number[]){
    for(var a of nos){
        console.log(a);
    }
}

arrayFunction([10, 11, 12, 13])

// spread operator 
var arr1:any[] = [1, 2, 3]
var arr2:string[] = ['akshay', 'aniketh']

var arr1 = [...arr1, arr1]
console.log(arr1)

// spread operator with objects
var obj1 = {
    "name": "akshay",
    "roll": 19
}

var obj2 = {...obj1, "location": "San Francesco"}
var obj3 = {obj1, "location": "San Francesco"}

console.log(obj2, obj3);

// Enum
enum AccountType{
    curr = "Current Account",
    savi = "Savings Account",
    jt = "Joint Account",
    temp = 4,
    temp1 = 4
}

console.log(AccountType);