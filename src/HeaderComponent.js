import { Fragment } from "react";
import ButtonComponent from "./ButtonComponent";

const HeaderComponent = (props) => {
    const {name, itMe} = props
    // console.log(itMe);
    return (
        <Fragment>
            <div>
                Đây là header {name}
            </div>
            <div>
                Đây là header {itMe}
            </div>
            <>
                <div>
                    Đây là header
                </div>

                <ButtonComponent name={name} />
                <ButtonComponent name="Service" />
                <ButtonComponent name="contact" />
            </>
        </Fragment>     
    );
}

export default HeaderComponent;