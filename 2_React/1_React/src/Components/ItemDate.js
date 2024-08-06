import "./ItemDate.css";
export default function ItemDate(props){
    const day=props.day;
    const month=props.month;
    const year=props.year;
    return(
        <div>
            <span>{day} &nbsp;</span>
            <span>{month}&nbsp;</span>
            <span>{year}&nbsp;</span>
        </div>
    );
}