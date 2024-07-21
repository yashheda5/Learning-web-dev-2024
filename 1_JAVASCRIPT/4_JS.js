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
    dest[key] = src[key];
}
//method 2 - assigning 
let dest2=object.assign({},src);

//method3 - spread
let dest3={...src };