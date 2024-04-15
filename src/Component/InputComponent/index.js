const InputComponent=({...props})=>{
    return(
       <><input className={props.classInput} onChange={props.change} value={props.valueInput} type={props.typeInput}/></>
       
        
    )
}
export default InputComponent