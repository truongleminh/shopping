import MenuComponent from "../../MenuComponent"
import InputComponent from "../../Component/InputComponent";
import ButtonComponent from "../../Component/ButtonComponent";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useContext, useEffect, useState } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { AppContext } from "../../Context";
import { Link } from "react-router-dom";
const Header=()=>{
  const {cart, sum1}=useContext(AppContext)

//  console.log(cart);
  const [menus, setMenu]=useState([]);
  useEffect(() => {
    fetch('http://localhost:3030/menu').then(result => {
      return result.json();
    }).then(result => {
      setMenu(result.data);
    }).catch(error => {
      console.log(error);
    })
  }, []);
    return(
        <>
            <div className="bg-dark sticky-top">
            <div className="row py-3">
            <div className="col-lg-4 d-flex justify-content-end align-items-center col-md-4 col-sm-4 col-xs-4 order-lg-0 order-md-0 order-sm-0 order-xs-4">
                <a href="" className=""><img src="logo/logo.webp" alt=""/></a>
            </div>
            <div className="col-lg-4 d-flex justify-content-center align-items-center col-sm-4 col-md-4 col-xs-4 order-sm-2 order-lg-1 order-md-2 order-xs-2">
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
              <button className="navbar-toggler bg-danger" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                  {
                    menus !=undefined&&
                    menus.map((value,index)=>{
                      
                        return(
                          <MenuComponent key={index} classMenuLi="nav-item" classMenuA="nav-link text-light link-danger" classHref={value.path}>{value.name}</MenuComponent>
                        )
                    })
                  }
                </ul>
              </div>
            </div>
          </nav>
        </div>
        {/* <div className="py-2 col-lg-4 col-sm-4 d-flex justify-content-start align-items-center">
          <ul className="nav">
            <form className="d-flex">
              <InputComponent classInput="form-control me-2" typeInput="search" />
              <ButtonComponent classBtn="btn btn-outline-light" typeBTn="submit">Search</ButtonComponent>
            </form>
            <button type="button" class="btn position-relative">
              <i className="fa-solid fa-cart-shopping text-light"></i><span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">{sum1}</span>
            </button>
          </ul>   
        </div> */}
         <div className="py-2 col-lg-4 col-sm-4 col-md-4 col-xs-4 d-flex justify-content-start align-items-center order-sm-1 order-lg-2 order-md-1 order-xs-1">
          <ul className="nav ps-3">
            <li className="nav-item"><Link className="text-light pe-4" data-bs-toggle="dropdown"><i className="fa-solid fa-magnifying-glass"></i></Link>
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <input type="search" name="" id="" className=""/>
                </li>
              </ul>
            </li>
            <li className="nav-item"><Link className="text-light pe-4" data-bs-toggle="dropdown" ><i className="fa-solid fa-user"></i></Link>
              <ul className="dropdown-menu">
                <li className="dropdown-item"><Link to="./login" class="text-decoration-none">Đăng nhập</Link></li>    
                <li className="dropdown-item"><Link to="./signin" class="text-decoration-none">Đăng ký</Link></li>
              </ul>
            </li>
            <li className="nav-item"><Link to="" className="text-light pe-4"><i class="fa-solid fa-lock"></i></Link></li>
            <li className="nav-item position-relative ps-2">
              <Link to='/cart'><i className="fa-solid fa-cart-shopping text-light pe-2"></i><span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">{sum1}</span></Link>
            </li>
          </ul>   
        </div>

      </div>
    </div>
        </>
    )
}
export default Header