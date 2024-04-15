const InforComponent=({...props})=>{
    return(
        <div className={props.classInfor}>
            <div className={props.classTitle}>{props.valueTitle}</div>
            <span className={props.classSpan}>{props.children}</span>
          </div>
    )
}
export default InforComponent