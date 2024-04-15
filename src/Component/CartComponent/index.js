import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../Context"

const CartComponent = (props) => {
    const { item, iconClick } = props; // props.item ,props.iconClick
    // const [quatity, setQuatity] = useState(1);
    const {cart, setCart, quatity, setQuatity} = useContext(AppContext);
    // const add = () => {
    //     // setQuatity(quatity + 1);
    // }

    // const change = (e) => {
    //     (e.target.valueAsNumber);
    // };
    // const minus = () => {
    //     // if(quatity>1){
    //     //     setQuatity(quatity - 1)
    //     // }
        
    // };

    // tìm vị trí (index) với idsanpham thay đổi

    // cập nhật vào item thay đổi theo index vừa tìm được

    // cập nhật lại cart với array vừa có item thay đổi

    // useEffect(() => {
    //     if(quatity){
    //         const newArr=[...cart];
    //         const index=newArr.findIndex((product)=>product.idsanpham === item.idsanpham);
    //         if(index > -1){
    //             newArr[index].quatity=quatity;
    //             newArr[index].total=item.gia*quatity;
    //             setCart(newArr)
    //         }
    //     }
    // }, [quatity]);
    
    return (
        <>
            <tr className="item">
                <td className="d-flex align-items-center">
                    <img src={item.img} width="100" alt="" />
                    <div className="ms-3">
                        <div className="fw-bold fs-3">{item.name}</div>
                   
                    </div>
                </td>
                <td className="align-middle">
                    <div>{Number.parseInt(item.gia).toLocaleString()}&nbsp;<span>VND</span></div>
                </td>
                <td className="align-middle">
                    <div className="input-group justify-content-center">
                        <button className="btn btn-secondary"  onClick={props.btnMinus}>-</button>
                        <input type="number" class="w-25 text-center inputValue" value={item.quatity} onChange={props.inputChange}/>
                        <button className="btn btn-secondary" onClick={props.btnAdd}>+</button>
                    </div>
                </td>
                <td class="align-middle">
                    <div className="total">{Number.parseInt(item.gia*item.quatity).toLocaleString()}&nbsp;<span>VND</span></div>

                </td>
                <td className="align-middle text-center">
                    <i className="fa-solid fa-trash text-danger " onClick={iconClick}></i>
                </td>
            </tr>
        </>

    )
}
export default CartComponent