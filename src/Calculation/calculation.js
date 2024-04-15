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
    <div className="">
      <header className="">
      <HeaderComponent classHeader="text-danger">Calculation.</HeaderComponent>
        <div>{number}</div>
        <ButtonComponent btnClick={add}>add</ButtonComponent>
        <ButtonComponent btnClick={minus}>minus</ButtonComponent>
    </header>
    </div>
  )
}
export default Calculation;