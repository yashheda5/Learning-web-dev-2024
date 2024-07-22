let courses=[{no:1,name:"rahul"},{no:2,name:"yash"}];
let c=courses.find(function(course){
    return course.name ==="yash";
})
let d=courses.find(courses=>courses.name === "yash");
console.log(c);
console.log(d);
let numbers=[1,2,3,4,5,6];
numbers.pop();
console.log(numbers);
numbers.shift();
console.log(numbers);
numbers.splice(2,1);
console.log(numbers);
console.log();
console.log();
console.log();
console.log();
let n1=[1,2,3,4];
console.log(n1);
n1.length =0;
console.log(n1);

let a=[1,2,3];
let b=[4,5,6];
let ab=a.concat(b);
console.log(ab);
let ce =[...a,...b];
console.log(ce);
console.log(ce.join(','));
let name ="my name is yash heda";
console.log(name.split(" "));
