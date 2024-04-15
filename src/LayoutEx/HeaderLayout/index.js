import MenuComponent from "../../MenuComponent";
import InputComponent from "../../Component/InputComponent";
import ButtonComponent from "../../Component/ButtonComponent";
import { useEffect, useState } from "react";
const HeaderLayout=()=>{
  const [menus, setMenu]=useState([])
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
  <nav className="navbar navbar-expand-lg navbar-light bg-success container">
    <div className="container-fluid">
      <a className="navbar-brand text-uppercase" href="#">Menu</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {
          menus != undefined &&
          menus.map((value, index) => {
            return(
              <MenuComponent key={index} classMenuLi="nav-item" classMenuA="nav-link" classHref={value.path}>{value.name}</MenuComponent>
              )
          }
          )
        }
      </ul>
      <form className="d-flex">
        <InputComponent classInput="form-control me-2" typeInput="search" />
        <ButtonComponent classBtn="btn btn-outline-light" typeBTn="submit">Search</ButtonComponent>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}
export default HeaderLayout