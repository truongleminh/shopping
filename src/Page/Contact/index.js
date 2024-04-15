import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../Context";

const Contact=()=>{
    return(
    <>
        <div className="position-relative">
        <img src="./logo/20230420_ExnDny6Z.webp" alt=""  className="w-100"/>
    </div>
    <div className="container mt-4">
        <div className="row">
            <div className="col-lg-6 p-3 col-md-6 col-sm-6 d-sm-none d-lg-block d-md-block my-5">
                
                <img src="./logo/slider_1.webp" className="w-100 h-50"/>
            </div>
            
            <div className="col-lg-6  col-md-6 col-sm-6 mt-3">
                <div className="text-uppercase fs-3">liên hệ với chúng tôi</div>
                <div>Để liên hệ và nhận các thông tin khuyến mãi sớm nhất, Chúng tôi sẽ liên lạc với bạn trong thời gian sớm nhất</div>
                <form>
                <label>Họ và tên *</label>
                    <input type="text" className="form-control"/>
                    <label>Email *</label>
                    <input type="email" className="form-control"/>
                    <label>Điện thoại *</label>
                    <input type="number" className="form-control"/>
                    <label>Nội dung *</label>
                    <textarea name="" id="" cols="30" rows="10" className="form-control"></textarea>
                    <button type="button" className="btn btn-primary mt-3">Gửi liên hện ngay</button>
                
                </form>
                   
            </div>
        </div>
    </div>
    </>
        

     
    )
}
export default Contact;