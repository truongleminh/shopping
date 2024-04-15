import './indexSign.css'
import { InputComponent, ButtonComponent } from '../../Component'
import { useEffect, useState } from 'react'

const Signin=()=>{
    // truonglm54@wru.vn
  //Sh123456@4
    const validatiorEmail=new RegExp('^[a-zA-Z0-9]{2,}@[a-z]{2,}.[a-z]{2,}$')
    const validatiorPass= new RegExp('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$')
   const [email, setEmail]=useState('')
   const [errEmail, setErrEmail]=useState(false)
   const changeEmail=(e)=>{
    setEmail(e.target.value)
   }
   useEffect(()=>{
    if(validatiorEmail.test(email)===true){
        setErrEmail(false)
    }else{
        setErrEmail(true)
    }
   })
   console.log(validatiorEmail.test(email));

    const [pass, setPass]=useState('')
    const [errPass, setErrPass]=useState(false)
    const changePass=(e)=>{
        setPass(e.target.value)
     
    }
    useEffect(()=>{
        if(validatiorPass.test(pass)===true){
            setErrPass(false)
        }else{
            setErrPass(true)
        }
    })
    const [pass2, setPass2]=useState('')
    const [errPass2, setErrorPass2]=useState(false)
    const changePass2=(e)=>{
        setPass2(e.target.value)
       
    }
 useEffect(()=>{
    if(pass2===pass){
        setErrorPass2(false)
    }else{
        setErrorPass2(true)
    }
 })
    const signin=()=>{
        if(errEmail===false&&errPass===false&&errPass2===false){
            alert("Dang ky thanh cong")
        }else{
            alert("Thong tin khong dung, vui long dang ky lai")
        }
  
    }
    return(
        <>
            <div className='bgSignin'>
            <div className='signIn'>
                    <div className='text-uppercase h1 text-center'>Sign in</div>
                    <form>
                        <label className='form-label'>Email:</label><br/>
                        <InputComponent change={changeEmail} classInput='form-control' typeInput="text"></InputComponent>
                        {
                            errEmail===true&&email!==""&&
                                <div className='error'>Example: example@google.com</div>  
                        }
                       
                        <label className='form-label'>Password:</label><br/>
                        <InputComponent change={changePass} classInput="form-control" typeInput="password"></InputComponent>
                        {
                            errPass===true&&pass!==''&&
                              <div className='error'>Mat khau yeu</div> 
                        }
                        <label className='form-label'>Nhap lai Password:</label><br/>
                        <InputComponent change={changePass2} classInput="form-control" typeInput="password"></InputComponent>
                        {
                            errPass2===true&&pass2!==""&&
                              <div className='error'>Nhap mat khau trung voi mat khau o tren</div> 
                        }
                    </form>
                    
                    <ButtonComponent classBtn="btn btn-danger mb-2 mt-4 text-uppercase" btnClick={signin}>Signin</ButtonComponent><br/>
                </div>
            </div>

        </>
    )
}
export default Signin