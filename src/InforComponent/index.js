import '@fortawesome/fontawesome-free/css/all.min.css';
const InforComponent=({...props})=>{
    return(
        <div className={props.classInfor}>
            <i className={props.classI}></i>
            <span className={props.classSpan}>{props.children}</span>
          </div>
    )
}
export default InforComponent