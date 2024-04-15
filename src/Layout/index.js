import Header from "./Header";
import Footer from "./Footer";
import { HomePage, Contact, Product } from "../Page";
import { Fragment } from "react";
const Layout1=({...props})=>{
    return(
        <>
            <Header></Header>
                <Fragment>
                    {props.children}
                </Fragment>
            <Footer></Footer>
        </>
    )
}
export default Layout1