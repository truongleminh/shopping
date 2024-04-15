import { Fragment, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ButtonComponent, InputComponent, ItemComponent } from "../../../Component";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const Product_admin = () => {
  const valiPrice=new RegExp('^\-')
  const [errPrice, setErrPrice]=useState(false)
  const [products, setProducts] = useState([]);
  const [check, setCheck]=useState(true)
  useEffect(() => {
    fetch("http://localhost:3030/products")
      .then((result) => {
        return result.json();
      })
      .then((result) => {
        setProducts(result.data);
      })
      .catch((error) => {
        console.log("error");
      });
  },[check]);
  
  const handleDelete = (idsanpham) => {
    let data = {
      idsanpham: idsanpham,
    };
    fetch("http://localhost:3030/products", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    setCheck(!check)
  };
//thêm mới
const [msp, setMsp]=useState('')
    const changeMsp=(e)=>{
        setMsp(e.target.value)
    }
    const [name, setName]=useState('')
    const changeName=(e)=>{
        setName(e.target.value)
    }
    const [thuonghieu, setThuonghieu]=useState('')
    const changeThuonghieu=(e)=>{
        setThuonghieu(e.target.value)
    }
    const [price, setPrice]=useState('')
    const changePrice=(e)=>{
        setPrice(e.target.value)
 
    }
    const [img,setImg]=useState('')
    const changeImg=(e)=>{
      setImg(e.target.files[0].name)
    }
    console.log(img);
    useEffect(()=>{
      if(valiPrice.test(price)===true){
        setErrPrice(true)
      }else{
        setErrPrice(false)
      }
    })
    const creatProduct=(e)=>{
      let data={
          msp:msp,
          name:name,
          thuonghieu: thuonghieu,
          price:price,
          img:'./logo/'+img,
      }
      fetch("http://localhost:3030/products",{
          method:"POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(data)
      })
      setCheck(!check)
    

  }

  const navigate=useNavigate()
 const handleUpdate=(id)=>{
  // console.log(id);
  navigate('/products/'+id)
    
 }
 const [show, setShow] = useState(false);

 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);
//  console.log(products);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-2 bg-secondary text-uppercase h-auto"
          
          >
            <div>
            <ul className="mt-3">
              <li className="">
                <Link className="text-dark sideBar" to="/admin">Danh muc sản phẩm</Link>
              </li>
        </ul>
            </div>
       
          </div>
          <div className="col-10">
            <div className="">
              <div className="d-flex justify-content-end">
                <NavLink to="/">
                  <ButtonComponent classBtn="btn btn-secondary rounded-pill mt-2">
                    Logout
                  </ButtonComponent>
                </NavLink>
              </div>
              <div >
              {/* <!-- Button trigger modal --> */}
<button onClick={handleShow} type="button" className="btn btn-primary">
  Thêm sản phẩm
</button>


{/* <!-- Modal --> */}
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm sản phẩm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <form>
          <label className="form-label" >Mã sản phẩm <span className="text-danger">*</span></label><br/>
          <InputComponent classInput="form-control" change={changeMsp}></InputComponent>
          <label className="form-label">Tên sản phẩm<span className="text-danger">*</span></label><br/>
          <InputComponent classInput="form-control" change={changeName}></InputComponent>
          <label className="form-label">Ảnh sản phẩm<span className="text-danger">*</span></label><br/>
          <InputComponent classInput="form-control" change={changeImg} typeInput="file"></InputComponent>
          <label className="form-label">Thương hiệu<span className="text-danger">*</span></label><br/>
          <InputComponent classInput="form-control" change={changeThuonghieu}></InputComponent>
          <label className="form-label">Giá<span className="text-danger">*</span></label><br/>
          <InputComponent classInput="form-control" change={changePrice} typeInput="number"></InputComponent>
          {
                      errPrice===true&&<div className="h6 text-danger">Gia khong co so am</div>
          }
         </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={creatProduct}>
            Thêm mới
          </Button>
        </Modal.Footer>
      </Modal>
              </div>
   
              <table className="table">
                <thead>
                  <tr>
                    <th>Mã sản phẩm </th>
                    <th>Tên sản phẩm</th>
                    <th>Ảnh sản phẩm</th>
                    <th>Giá</th>
                    <th>Sửa</th>
                    <th>Xóa</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((item, index) => {
                    return (
                      <ItemComponent
                        key={item.idsanpham}
                        item={item}
                        deleteClick={() => handleDelete(item.idsanpham)}
                        updateClick={()=>handleUpdate(item.idsanpham)}
                      ></ItemComponent>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>


      
    </>
  );
};
export default Product_admin;

