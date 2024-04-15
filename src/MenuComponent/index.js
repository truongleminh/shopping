import { Link, NavLink } from "react-router-dom"
const MenuComponent=({...props})=>{
    return(
        <li className={props.classMenuLi}>
          <Link className={props.classMenuA} to={props.classHref}>{props.children}</Link>
        </li>
    )
}
export default MenuComponent