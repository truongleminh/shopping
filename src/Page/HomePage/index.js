import { useState, useContext, useEffect} from "react"; 
import { ButtonComponent, CardComponent, ImgComponent } from "../../Component";
import { AppContext } from "../../Context";
import { useNavigate } from "react-router-dom";
const HomePage=()=>{
  const { products, setProducts } = useContext(AppContext);
  const {cart}=useContext(AppContext)
  const {handleAdd}=useContext(AppContext)
  const navigate=useNavigate()
  const productsPage=()=>{
    return(
      navigate('../product')
    )
  }
    return(
    <>  
        <div className="">
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src='./logo/slider_1.webp' className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src='./logo/banner1.jpg' className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src='./logo/banner2.jpg' className="d-block w-100" alt="..."/>
              </div>
            </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
          </button>
        </div>
            <div className="text-primary link-danger text-uppercase text-center m-5 fs-1">Sản phẩm Adidas</div>
            <div className="container my-3 d-flex justify-content-center">
            <img src="./logo/banner-adidas.jpg" style={{maxHeight:"50%", maxWidth:"100%"}} />
      </div>
        </div>
        <div className="container">
          <div className="row d-flex justify-content-center">
            {
              products != undefined && 
              products.map((value,index)=>{
                if(value.thuonghieu==='adidas'&&value.idsanpham<5){
                  return(
                    <CardComponent key={index} idCard={value.idsanpham} valueName={value.name} valuePrice={value.gia} img={value.img} classCard="col-lg-3 col-md-6 col-sm-12" valueBtn="Mua hàng" btnClick={()=>{handleAdd(value)}}></CardComponent>
                  )
                }
              
                })
            } 
          </div>
        </div>
        <div className="text-center m-5 ">
           <ButtonComponent classBtn="btn text-uppercase text-light btn-primary text-center" btnClick={productsPage}>xem tất cả</ButtonComponent>
        </div>

        <div className="text-primary link-danger text-uppercase m-5 text-center fs-1">Sản phẩm Nike</div>
          <div className="container my-3 d-flex justify-content-center">
          <img src="./logo/img-best-sellers.webp" alt="" />
      </div>
      <div className="container">
          <div className="row d-flex justify-content-center">
          {
              products != undefined && 
              products.map((value,index)=>{
                if(value.thuonghieu==="nike"&& value.idsanpham<13){
                  return(
                    <CardComponent key={value.idsanpham} idCard={value.idsanpham} valueName={value.name} valuePrice={value.gia} img={value.img} classCard="col-lg-3 col-md-6 col-sm-12" valueBtn="Mua hàng" btnClick={()=>{handleAdd(value)}}></CardComponent>
                  )
                }
             
                })
            } 
          </div>
        </div>
        <div className="text-center m-5 ">
        <ButtonComponent classBtn="btn text-uppercase text-light btn-primary text-center" btnClick={productsPage}>xem tất cả</ButtonComponent>
        </div>

        <div className="text-primary link-danger text-uppercase mt-5 fs-1 text-center">phụ kiện</div>
        <div className="container my-5">
          <div className="row">
            <ImgComponent classImg="col-lg-6 col-sm-6" srcImg="./logo/accessories_1.webp"></ImgComponent>
            <div className="col-lg-6 row col-sm-6">
              <ImgComponent classImg="row-lg-6 row-sm-6" srcImg="./logo/accessories_2.webp"></ImgComponent>
              <ImgComponent classImg="row-lg-6 row-sm-6" srcImg="./logo/accessories_3.webp"></ImgComponent>
            </div>
          </div>
        </div>
     
   
      <div className="text-primary link-danger text-uppercase mt-5 fs-1 text-center">Tin tức</div>
      <div className="text-center">Tổng hợp tin tức, mẹo vặt cho bạn</div>
      <div className="container">
          <div className="row d-flex justify-content-center">
            <CardComponent classCard="col-lg-4" img="./logo/t7.webp" valueName="KING JAMES MANG ĐÔI OFF-WHITE X NIKE AIR FORCE 1 UNIV" valuePrice="OFF-WHITE x Nike Air Force 1 University Yellow là đôi sneakers được hé lộ trong website public—domain.com, một websit...." valueBtn="Xem thêm" valuePrice=""></CardComponent>
            <CardComponent classCard="col-lg-4" img="./logo/t6.webp" valueName="KING JAMES MANG ĐÔI OFF-WHITE X NIKE AIR FORCE 1 UNIV" valuePrice="adidas Stan Smith đã không còn xa lạ với bất cứ ai yêu mến sneakers trên toàn cầu nói chung và tại Việt Nam nói riêng..." valueBtn="Xem thêm" valuePrice=""></CardComponent>
            <CardComponent classCard="col-lg-4" img="./logo/t5.webp" valueName="KING JAMES MANG ĐÔI OFF-WHITE X NIKE AIR FORCE 1 UNIV" valuePrice="Nike lại tiếp tục tung ra một phối màu sử dụng tông màu trắng chủ đạo bằng chất liệu canvas kết hợp denim trên đôi sn...." valueBtn="Xem thêm" valuePrice=""></CardComponent> 
            
          </div>
      </div>
    </>      
    )
}
export default HomePage;