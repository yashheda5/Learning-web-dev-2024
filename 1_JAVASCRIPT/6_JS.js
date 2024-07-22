let n=[1,2,-2,-4,5,-9];
//filtering 
let f=n.filter(function(value){
    return value>=0;
});
console.log(f);

//mapping
let m=n.map(function(value){
return 'studentNO.'+value;
});
console.log(m);

// object mapping 

let mob=n.map(function(num){
    let obj={value:num};
    return obj;
});
console.log(mob); 
