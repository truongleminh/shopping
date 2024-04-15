import HeaderComponent from './Component/HeaderComponent';
import {useState} from "react";
import ButtonComponent from './Component/ButtonComponent';
function Calculation(){
    const [number, setNumber]=useState(0);
    const add=()=>{
      setNumber(number+1);
    }
    const minus=()=>{
      setNumber(number-1);
      if(number===0)
      setNumber(number)
    }
    return(
        <div className='d-flex justify-content-center bg-dark'>
            <HeaderComponent classHeader="text-light me-2">Calculation</HeaderComponent>
            <div className='text-light'>{number}</div>
            <ButtonComponent btnClick={add}>add</ButtonComponent>
            <ButtonComponent btnClick={minus}>minus</ButtonComponent>
        </div>
    )
}
export default Calculation;