//object 
let rectangle={
    length:1,
    breadth:2,
    draw(){
        console.log('drawing');
    }
};
console.log(rectangle);
console.log(rectangle.draw());

//factroy function
function createRectangle(len,bre){
    return rectangle={
        length:len,
        breadth:bre,
        draw(){
            console.log('drawing');
        }
    };
}
let obj1=createRectangle(5,4);
console.log(obj1.draw());

//constructor function

function Rectangle(l,b){
    this.length=l,
    this.breadth=b,
    this.draw=function(){
        console.log('drawing');
    }
}
let obj2=new Rectangle(4,6);
console.log(obj2);
console.log();
console.log();

console.log(obj2.constructor);

//pass by reference

let a={value :10};
let b=a;
a.value++;
console.log(a.value);
console.log(b.value);
