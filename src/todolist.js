import {useState} from "react";
import ButtonComponent from './Component/ButtonComponent';
import InputComponent from './Component/InputComponent';
import ItemComponent from './Component/ItemComponent';
const TodoList=()=>{
    const [value, setValue]=useState("");
    const [todo, setTodo]=useState([])
    const addItem=()=>{
        setValue(value)
        setTodo([...todo,value]);
    }
    const deleteItem=(id)=>{
    const newArr=todo.filter((item,index)=>id!=index)
        setTodo(newArr)
    }
    const change=(e)=>{
        setValue(e.target.value);
    }
    const reset=()=>{
      setValue("");
    }
    return(
        <>
        <div className='form-control w-25 d-flex justify-content-center'>
          <InputComponent classInput="input-group me-2" change={change} valueInput={value}/>  
          <ButtonComponent classBtn="btn btn-danger" btnClick={addItem}>add</ButtonComponent>
        </div>
        
        <div>
            {
              todo.map((value, index)=>{
                return <ItemComponent key={index} value={value} DeleteItem={()=>deleteItem(index)}/>
              })
            }
        </div>
        <button onClick={reset}>Reset</button>
          </>   
    )
}
export default TodoList