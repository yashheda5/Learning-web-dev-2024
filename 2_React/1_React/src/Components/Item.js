import "./Item.css";
export default function Item(props){
    const ItemName=props.Name;
    return(<p className="demo">{ItemName} </p>)
}
