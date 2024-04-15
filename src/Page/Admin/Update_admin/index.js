import { NavLink, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { ButtonComponent, InputComponent } from "../../../Component"
const Update=()=>{
    const valiPrice=new RegExp('^\-')
    const [errPrice, setErrPrice]=useState(false)
    const {id}=useParams()
   const [product, setProduct]=useState({
    idsanpham:"",
    msp:"",
    name:"",
    thuonghieu: "",
    gia:"",
    img:"",
   })

    useEffect(()=>{
        // console.log(id);
        fetch(`http://localhost:3030/products/${id}`).then((result)=>{
            return result.json()
        }).then(result=>{
            setProduct(result)
        })
    
    },[id])

    console.log(product.img);
    const handleChangeMsp=(e)=>{
        let updateValueMsp={msp:e.target.value}
        setProduct(product=>({
            ...product,
            ...updateValueMsp,
           
        }))
    }
    const handleChangeName=(e)=>{
        let updateValueName={name:e.target.value}
        setProduct(product=>({
            ...product,
            ...updateValueName,
           
        }))
    }
    const handleChangeThuonghieu=(e)=>{
        let updateValueThuonghieu={
            thuonghieu: e.target.value
        }
        setProduct(product=>({
            ...product,
            ...updateValueThuonghieu,
        }))
    }
    const handleChangeGia=(e)=>{
        let updateValueGia={gia:e.target.value}
        setProduct(product=>({
            ...product,
            ...updateValueGia,
        }))
    }
  const handleChangeImg=(e)=>{
    let updateValueImg={img:e.target.files[0].name}
    setProduct(product=>({
        ...product,...updateValueImg,
    }))
  }
    // console.log(valiPrice.test(product.price));
    // console.log(product.price);
   const handleUpdate=()=>{
    let data={
        idsanpham: product.idsanpham,
        msp:product.msp,
        name: product.name,
        thuonghieu: product.thuonghieu,
        gia: product.gia,
        img:"/logo/"+product.img
    }
        fetch(`http://localhost:3030/products/${id}`,{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data) 
        })
        if(valiPrice.test(product.price)===true){
            setErrPrice(true)
          }else{
            setErrPrice(false)
          }
         
       
    //                  console.log(errPrice);
   }
   
//    const [img, setImg]=useState({
//     selectedFile:null,
// })
// const changeImg=(e)=>{
//     let updateFile={selectedFile:e.target.files[0]}
//     setImg(img=>({
//         ...img,
//         ...updateFile
//     }))
// }
// const onFileUpload=(e)=>{
//    const formData=(()=>{
//     formData.append(
      
//         img.selectedFile,
//         img.selectedFile.name,
//      )
//    })
// }
  
  
//    e.preventDefault()
//    console.log(img);
// }

    return(
        <>
        <div className="d-flex justify-content-center mt-4">
        <div className="border border-dark p-4 w-50 h-auto" >
            <div className="h1 text-center">Sửa sản phẩm: {product.msp}</div>
                    <NavLink to="/admin">
                        <ButtonComponent classBtn="btn btn-danger my-2">Back</ButtonComponent>
                    </NavLink>
                    
                    <form className="">
                        <label className="form-label">Mã sản phẩm</label><br/>
                        <InputComponent classInput="form-control border border-dark " valueInput={product.msp} change={handleChangeMsp}></InputComponent><br/>
                        <label className="form-label">Tên sản phẩm</label><br/>
                        <InputComponent classInput="form-control border border-dark" valueInput={product.name} change={handleChangeName}></InputComponent><br/>
                        <label className="form-label">Ảnh sản phẩm</label><br/>
                        <InputComponent classInput="form-control border border-dark"  change={handleChangeImg} typeInput="file"></InputComponent><br/>
                        <label className="form-label">Thương hiệu</label><br/>
                        <InputComponent classInput="form-control  border border-dark" valueInput={product.thuonghieu} change={handleChangeThuonghieu}></InputComponent><br/>
                        <label className="form-label">Giá</label><br/>
                        <InputComponent classInput="form-control  border border-dark" valueInput={product.gia} change={handleChangeGia} typeInput="number"></InputComponent><br/>
                        {
                      errPrice&&<div className="h6 text-danger">Gia khong co so am</div>
                    }
                    
                        <ButtonComponent classBtn="btn btn-danger mt-2" btnClick={handleUpdate}>Update</ButtonComponent>
                        {/* <InputComponent typeInput="file" classInput="form-control" changeInput={changeImg}></InputComponent>
                        <ButtonComponent classBtn="btn btn-danger mt-2" btnClick={onFileUpload}>Update</ButtonComponent> */}
                    </form>
        </div>
            </div> 
        </>
           
    )
}
export default Update

