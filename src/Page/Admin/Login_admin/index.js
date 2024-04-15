import { useState, useEffect } from "react"
import { InputComponent, ButtonComponent } from "../../../Component"
import { NavLink, useNavigate} from "react-router-dom"
const Login_admin=()=>{
  // const valiUser=new RegExp('[\\s@!#$%^&*>]')
  // const [errUser, setErrUser]=useState(false)
  // const valiPass=new RegExp('^[a-zA-Z0-9]{2,10}$')
  // const [errPass, setErrPass]=useState(false)
    const [userValue, setUserValue]=useState('')
    const changeUser=(e)=>{
        setUserValue(e.target.value)
    }
  console.log(userValue);
    const [password, setPass]=useState('')
    const changePass=(e)=>{
        setPass(e.target.value)
    }
    const navigate=useNavigate()
    const checkLogin=()=>{
      let data={
        user:userValue,
        password:password,
      }
      console.log(data);
      fetch("http://localhost:3030/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      }).then(result=>{
        return result.json()
      }).then(result=>{
        // console.log(result.data);
        if(result.data==true){
          navigate("/admin")
        }else{
          alert("Tên đăng nhập hoặc mật khẩu sai")
        }
      })
      // if(valiUser.test(userValue)==true){
      //   setErrUser(true)
      // }else{
      //   setErrUser(false)
      // }
      // if(valiPass.test(password)==false){
      //   setErrPass(true)
      // }else{
      //   setErrPass(false)
      // }
      // console.log(valiUser.test(userValue));
      // console.log(valiPass.test(password));
    
    }
    //validate
 
    return(
    <div className="mt-5 d-flex justify-content-center" id="login_admin">
      <div className=" border border-dark px-3" style={{width:"350px"}}>
            <div className="text-center h2 my-3">LOGIN</div> 
                <form className=""> 
                    <label>Tên đăng nhập:</label><br/>
                    <InputComponent  typeInput="text" change={changeUser} classInput="form-control border border-dark"></InputComponent><br/>
                    <label>Password:</label><br/>
                    <InputComponent typeInput="password" change={changePass} classInput="form-control border border-dark"></InputComponent>
                   
                </form>
              <div className="d-flex justify-content-center">
                <ButtonComponent classBtn="btn btn-success my-3 px-4 btn-lg" typeBtn="submit" btnClick={checkLogin}>Login</ButtonComponent>
              </div>
              
      </div>
    </div>
  
    )
}
export default Login_admin
