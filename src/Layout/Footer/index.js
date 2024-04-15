import InforComponent from "../../InforComponent";
import { IconComponent } from "../../Component";
import { useState, useEffect } from "react";
const Footer=()=>{
  const [imgtts, setImgtt]=useState([])
  const [infor, setInfor]=useState([])
  const [icon, setIcon]=useState([])
  useEffect(() => {
    fetch('http://localhost:3030/imgtt').then(result => {
      return result.json();
    }).then(result => {
      setImgtt(result.data);
    }).catch(error => {
      console.log(error);
    })
  }, []);
  useEffect(() => {
    fetch('http://localhost:3030/infor').then(result => {
      return result.json();
    }).then(result => {
      setInfor(result.data);
    }).catch(error => {
      console.log(error);
    })
  }, []);
  useEffect(() => {
    fetch('http://localhost:3030/icon').then(result => {
      return result.json();
    }).then(result => {
      setIcon(result.data);
    }).catch(error => {
      console.log(error);
    })
  }, []);
  // const arrI=["fa-brands fa-youtube pe-3", "fa-brands fa-facebook pe-3", "fa-brands fa-instagram pe-3"]
    return(
      <>
        <div className="container-fluid bg-dark mt-5">
          <div className="row">
            <div className="col-lg-6 row fd1 row-sm-6">
              <div className="col-lg-6"></div>
              <div className="col-lg-6">
                <div className="py-4"><a href="" className=""><img src="./logo/logo.webp" alt=""/></a></div>
              {
                infor!=undefined&&
                infor.map((value,index)=>{
                 
                    return(
                      <InforComponent key={value.idinfor} classInfor="py-2" classI="fa-solid fa-headphones text-light me-1" classSpan="text-light text-right">{value.infor}</InforComponent>
                    )
                  
              
                 
                })
              }
                <div className="py-2">
              {
              imgtts!=undefined&&
              imgtts.map((value,index)=>{
                return(
                  <img src={value.img} key={value.idimg_thanh_toan}/>
                )
                
              })
              }
              </div>
          </div>
        </div>
        <div className="col-lg-6 row row-sm-6">
          <div className="col-lg-3"></div>
          <div className="col-lg-9 d-block">
            <div className="text-uppercase text-light pt-5">theo doi chúng tôi</div>
            <div className="text-primary py-4 fs-1 ">
              {
                icon!=undefined&&
                icon.map((value,index)=>{
                return(
                  <IconComponent classI={value.icon} key={index}></IconComponent>
                )
                
              })
              }
            </div>
          </div>   
        </div>
          </div>
        </div>
  </>
    )
}
export default Footer;