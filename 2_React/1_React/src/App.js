import "./App.css";
import "./Components/Item.js";
import Item from "./Components/Item.js";
import ItemDate from "./Components/ItemDate.js";
function App() {
  const response =[
    {
      itemname:"yash heda",
      itemdate: "9",
      itemmonth: "march",
      itemyear:"2002"
    },
    {
      itemname:"khushi heda",
      itemdate: "20",
      itemmonth: "march",
      itemyear:"2004"
    },
    {
      itemname:"ramakant heda",
      itemdate: "23",
      itemmonth: "may",
      itemyear:"1975"
    },
  ]
  return (
    <div>
    <Item Name={response[0].itemname}></Item>
    <ItemDate day={response[0].itemdate} month={response[0].itemmonth} year={response[0].itemyear}></ItemDate>

    <Item Name={response[1].itemname}></Item>
    <ItemDate day={response[1].itemdate} month={response[1].itemmonth} year={response[1].itemyear}></ItemDate>

    <Item Name={response[2].itemname}></Item>
    <ItemDate day={response[2].itemdate} month={response[2].itemmonth} year={response[2].itemyear}></ItemDate>

    
   
   </div>
  );
}

export default App;
