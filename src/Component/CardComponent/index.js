const CardComponent = ({...props})=>{
    return(
        <div className={props.classCard}>
            <div className="card h-100" >
                <img src={props.img} class="card-img-bottom object-fit-contain h-75" />
                <div class="card-body ">
                <h5 className="card-title">{props.valueName}</h5>
                <>{
                    props.valuePrice!=="" ?
                    <>
                    <p className="card-text">{Number.parseInt(props.valuePrice).toLocaleString()}&nbsp;<span>VND</span></p>
                
                    </>
                    :
                    <>
                     <div></div>
                    </>
                   
}    
                 </>
                
                <button className="btn btn-success" onClick={props.btnClick}>{props.valueBtn}</button>
                </div>
            </div>
        </div>
             
    )
}
export default CardComponent