export {}

var no = 12
var no1:Number = 22

function add(a:number, b){
    return a+b;
}

let addition:string = add(12, 22);

console.log(addition, typeof addition)

var array:number[] = [10, 11, 12, 12];
console.log(array);

for(var a of array)
{
    console.log(a);
}