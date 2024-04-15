import ButtonComponent from "../ButtonComponent";
import { Link } from "react-router-dom";
const ItemComponent=(props)=>{
    const {item,updateClick,deleteClick}=props
    return(
        // <div>
        //     {props.value}
        //     <ButtonComponent btnClick={props.DeleteItem} classBtn="btn btn-danger">delete</ButtonComponent>
        // </div>
        <tr>
        <td>
            <div>{item.msp}</div>
        </td>
        <td>
            <div>{item.name}</div>
        </td>
        <td>
           <img src={item.img} style={{width:'100px'}}/>
        </td>
        <td>
            <div>{Number.parseInt(item.gia).toLocaleString()}</div>
        </td>
        <td>
         
                <button className="btn btn-success" onClick={updateClick}>Update</button>
          
            
        </td>
        <td>
            <button className="btn btn-danger" onClick={deleteClick}>Delete</button>
        </td>
    </tr>


    )
}
export default ItemComponent;