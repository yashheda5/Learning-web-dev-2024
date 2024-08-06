import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const[text,setText]=useState("");

  // useEffect(() =>{console.log("UI rendering done")}); -> variation 1
  // useEffect(() =>{console.log("UI rendering done")},[]);  ->  variation 2
   


  //variation 3  - runs on when change in value of the specified 
  // useEffect(() =>{console.log("UI rendering done")},[text]); 

  // varitation 4 - 
  useEffect(() =>{console.log("Listner Added"); // this runs second 
    return ()=>{
      console.log("Listner removed"); // first this runs 
    }
  },[text]);
 
  function print(event){
    console.log(text);
    setText(event.target.value);
    
  }
  return (
   <div>
    <input type="text" onChange={print} className='bg-green-700 text-white' />
   </div>
  );
}

export default App;
