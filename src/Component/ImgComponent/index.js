const ImgComponent=({...props})=>{
    return(
        <div className={props.classImg}>
            <img src={props.srcImg} className={props.cl} style={{maxHeight:"100%", maxWidth:"100%"}}/>
        </div>
        
    )
}
export default ImgComponent