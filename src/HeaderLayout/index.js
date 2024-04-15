const MenuComponent=({...props})=>{
    return(
        <li className={props.classMenuLi}>
          <a className={props.classMenuA} aria-current="page" href={props.classHref}>{props.children}</a>
        </li>
    )
}
export default MenuComponent