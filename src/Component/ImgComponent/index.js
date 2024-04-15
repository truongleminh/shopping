const ImgComponent=({...props})=>{
    return(
        <div className={props.classImg}>
            <img src={props.srcImg} className={props.cl}/>
        </div>
        
    )
}
export default ImgComponent