const ButtonComponent=({...props})=>{
    return(
      <button onClick={props.btnClick} className={props.classBtn} type={props.typeBtn}>
        {props.children}
      </button>
    );
}
export default ButtonComponent;