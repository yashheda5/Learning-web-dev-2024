function sum(a,b){
    let total = 0;
    for(let value of arguments){
        total +=value;
    }
    return total;
}
console.log(sum(1,2,3,4,5,6));
console.log(rest1 (1,2,3,4,5,6));
function rest1(...args){
    console.log(args);
}
function rest1(n,...args){
    console.log(args);
}