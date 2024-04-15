import InforComponent from "../../InforComponent"
import InputComponent from "../../Component/InputComponent"
import ButtonComponent from "../../Component/ButtonComponent"
import MenuComponent from "../../MenuComponent"
import '@fortawesome/fontawesome-free/css/all.min.css';
const FooterLayout=()=>{
    const menus=["Home","Intro", "Product","News", "Contact"]
    return(
        <>
        <div className="container bg-success mt-5">
      <div className="row">
        <div className="col-lg-5 row-sm-5">
          <InforComponent classInfor="py-2" classI="fa-solid fa-location-dot text-light me-1" classTitle="text-light">Tầng 6, Tòa nhà Ladeco, 266 Đội Cấn, phường Linh Lang, quận Ba Đình, TP Hà Nội</InforComponent>
          <InforComponent classInfor="py-2" classI="fa-solid fa-phone text-light me-1" classTitle="text-light">19006750</InforComponent>
          <InforComponent classInfor="py-2" classI="fa-solid fa-headphones text-light me-1" valueTitle="Mail:" classTitle="text-light">support@sapo.com</InforComponent>
        </div>
        <div className="col-lg-2 row-sm-2">
          <div className="pt-3">
            <ul className="list-unstyled fd2_ul"><span className='text-light'>Về chúng tôi</span>
        {
            menus.map((value, index) => {
              return(
                <MenuComponent key={index} classMenuLi="nav-item" classMenuA="nav-link" classHref="#">{value}</MenuComponent>
              )
            }
          )
        }
            </ul>
          </div>
        </div>
        <div className="col-lg-5 row-sm-5 py-5">
            <div className="text-uppercase text-light">đăng ký nhận tin</div>
            <form className="d-flex">
              <InputComponent classInput="form-control me-2" typeInput="search" />
              <ButtonComponent classBtn="btn btn-outline-light" typeBTn="submit">submit</ButtonComponent>
            </form>
        </div>
      </div>
    </div>
        </>
    )
}
export default FooterLayout