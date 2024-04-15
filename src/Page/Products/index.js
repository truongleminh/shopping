import { useState, useEffect, useContext } from "react";
import CardComponent from "../../Component/CardComponent";
import { AppContext } from "../../Context";
const Product=()=>{
    const {products, setProduct}=useContext(AppContext)
    const {cart, setCart, handleAdd}=useContext(AppContext)
    // console.log(cart);
      // const handleAdd=(id)=>{
      //   products.forEach((value,index)=>{
      //     if(id==index){
      //       setCart([...cart, value])
      //     }
      //   })
      // }
      // console.log(cart);
    return(
        <>
            <div className="container">
                <h1 className="text-center">Sản phẩm</h1>
                {/* <button className="btn btn-success" onClick={change}>Thêm sản phẩm</button>
                <div>{number}</div> */}
                <div className="h1">Adidas</div>
                <div className="row py-5">
                    {
                       products != undefined && 
                       products.map((value,index)=>{
                        if(value.thuonghieu==="adidas"){
                            return(
                                <CardComponent key={value.idsanpham} idCard={value.idsanpham} valueName={value.name} valuePrice={value.gia} img={value.img} classCard="col-lg-3 col-md-6 col-sm-12 mt-3" valueBtn="Mua hàng" btnClick={()=>{handleAdd(value)}}></CardComponent>
                            )
                        }
                      
                       })
                    } 
                </div>
                <div className="h1">Nike</div>
                <div className="row py-5">
                    {
                       products != undefined && 
                       products.map((value,index)=>{
                        if(value.thuonghieu==="nike"){
                            return(
                                <CardComponent key={value.idsanpham} idCard={value.idsanpham} valueName={value.name} valuePrice={value.gia} img={value.img} classCard="col-lg-3 col-md-6 col-sm-12 mt-3" valueBtn="Mua hàng" btnClick={()=>{handleAdd(value)}}></CardComponent>
                            )
                        }
                      
                       })
                    } 
                </div>
                
            </div>
        </>
    )
}
export default Product;