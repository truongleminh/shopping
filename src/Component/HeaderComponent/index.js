const HeaderComponent=({...props})=>{
    return(
        <div className={props.classHeader}>
            {props.children}
        </div>
    );
}
export default HeaderComponent;