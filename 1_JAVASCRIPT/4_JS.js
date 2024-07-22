let rectangle={
    length:2,
    breadth:4

}
for(let key in rectangle){
    console.log(key,rectangle[key]);
}


//obj clonning 
//method 1 - iterating 
let src={value : 10};
let dest1={};
for(let key in src){
    dest1[key] = src[key];
}
//method 2 - assigning 
let dest2=Object.assign({},src);

//method3 - spread
let dest3={...src };

console.log();
console.log();
console.log();


//strings primitive vs obj

let firstName="yash";
let lastName=new String("heda");
console.log(typeof firstName)
console.log(typeof lastName)

console.log(firstName.length,lastName.length);

console.log();
console.log();
console.log();

console.log(`hello my name is 
    ${firstName} and i am a programmer`);

let numbers =[1,2,3,4,5];
console.log(numbers);
numbers.push(1,2,3,4,5);
console.log(numbers);
numbers.unshift("abc");
console.log(numbers);
numbers.splice(4,0,"abc");
console.log(numbers);
