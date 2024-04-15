import { Children, createContext } from "react";
import { useState, useEffect } from "react";
import { CardTitle } from "react-bootstrap";
export const AppContext=createContext()
export const AppProvider=({children})=>{
    const [products, setProducts]=useState([]);
    // const [quatity, setQuatity]=useState(1);
    useEffect(() => {
        fetch('http://localhost:3030/product').then(result => {
        return result.json();
    }).then(result => {
      // console.log(result.data);
      setProducts(result.data);
    }).catch(error => {
      console.log(error);
    })
  }, []);

  const [cart, setCart]=useState([])
  const [check, setCheck]=useState(true)
  const handleAdd=(value)=>{
    if(cart.length===0){
      products.forEach((item)=>{
        if(value.idsanpham===item.idsanpham){
          value.quatity=1;
          setCart([...cart, value])
        }
      })
    }
    if(cart.length>0){
      let check=cart.some((item)=>item.idsanpham===value.idsanpham)
      if(check){
        cart.map((item)=>{
          if(value.idsanpham===item.idsanpham){
            value.quatity+=1
            setCart([...cart])
          }
        })
      }else{
        value.quatity=1;
        setCart([...cart, value])
      }
    }
    }
    // if(!(cart.includes(value))){
    //   value.quatity=1;
    //   setCart([...cart, value])
    // }else{
    //   value.quatity+=1
    //   setCart([...cart])
    // }
    
    // }
  

  const add = (value) => {
    value.quatity+=1
    setCart([...cart])
}

const minus = (value) => {
  if(value.quatity>1){
    value.quatity-=1
    setCart([...cart])
  }
}

const change = (e,product)=>{
  let newArr=cart.map((item)=>{
    if(item.idsanpham==product.idsanpham){
      return {
        ...item,
        quatity: e.target.value === '' ? "" : e.target.valueAsNumber
      }
    }else{
    return item
    }
  })
  setCart(newArr)
  // console.log(value);
}
  const handleDelete=(value)=>{
    // let newArr=cart.filter((item,index)=>id!==index)
    let newArr=cart.filter(item=>item.idsanpham!==value.idsanpham)
    setCart(newArr)
    // console.log(newArr);
  }
 
  let sum=0
  cart.forEach((value)=>{
    sum+=value.quatity*value.gia
})

let sum1=0
cart.forEach((value)=>{
  sum1+=value.quatity
})


// const localCart1 = JSON.parse(localStorage.getItem('localCart'));

useEffect(() => {
  if (cart.length > 0) {
    localStorage.setItem('localCart', JSON.stringify(cart))
  }
}, [cart]);
const [localCart, setLocalCart]=useState([])
useEffect(()=>{
  const localCart=JSON.parse(localStorage.getItem('localCart'))
  if(localCart){
    setLocalCart(localCart)
  }
}, [])

// console.log(localCart);
// console.log(localCart1);
    return(
        <AppContext.Provider value={{products, setProducts, cart, setCart, handleAdd, handleDelete, add, minus, change, sum, sum1, localCart}}>
            {children}
        </AppContext.Provider>
    )
}

// context = {products, cart}

// {products, cart} = useContext()