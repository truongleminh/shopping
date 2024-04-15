import './index1.css'
import { ButtonComponent, InputComponent } from '../../Component'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
const Login=()=>{
    const [user, setUser]=useState('')
    const changeUser=(e)=>{
        setUser(e.target.value)
    }
    console.log(user);
    const [pass, setPass]=useState('')
    const changePass=(e)=>{
        setPass(e.target.value)
    }
    return(
        <>
            <div className='bgLogin'>
                <div className='logIn'>
                    <div className='text-uppercase h1 text-center'>login</div>
                    <form>
                        <label className='form-label'>User:</label><br/>
                        <InputComponent changeInput={changeUser} classInput="form-control"></InputComponent><br/>
                        <label className='form-label'>Password:</label><br/>
                        <InputComponent changeInput={changePass} classInput="form-control"></InputComponent>
                    </form>
                    <ButtonComponent classBtn="btn btn-danger mb-2 mt-4 text-uppercase">Login</ButtonComponent><br/>
                    <Link className='my-3 me-4'>Foget Password</Link>
                    <Link to='/signin'>Sign in</Link>
                </div>
            </div>
        </>
    )
}
export default Login