import HeaderLayout from "./HeaderLayout"
import FooterLayout from "./FooterLayout"
import { HomePage, Contact, Product } from '../Page';
import { Fragment } from "react";
const Layout=({...props})=>{
    return(
        <>
            <HeaderLayout></HeaderLayout>
                <Fragment>
                    {props.children}
                </Fragment>
            <FooterLayout></FooterLayout>
        </>
   
    )
}
export default Layout