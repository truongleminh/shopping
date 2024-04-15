import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../Context";
import CartComponent from "../../Component/CartComponent";
const Cart = () => {
  const { cart, setCart, handleDelete, add, minus, change, sum, localCart} = useContext(AppContext);
  const checkout=()=>{
    setCart([])
    alert("Bạn đã thanh toán thành công")
  }
  return (
    <>
      <div className="">
        <h2 className="fs-2 fw-bold text-center my-5">Your cart</h2>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="w-50">
                  Item
                </th>
                <th scope="col">Price</th>
                <th scope="col" className="text-center">
                  Quantity
                </th>
                <th scope="col">Total</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody className="carts">
              {cart.map((value, index) => {
                return (
                  <CartComponent
                    key={index}
                    item={value}
                    iconClick={() => {
                      handleDelete(value);
                    }}
                    btnAdd={()=>{
                      add(value)
                    }}
                    btnMinus={()=>{
                      minus(value)
                    }}
                    inputChange={(e)=>{
                      change(e,value)
                    }}
                  />
                );
              })}
            </tbody>

          </table>
          <div className="row">
            <div className="offset-md-7 col-md-5 row">
              <div className="d-flex justify-content-between border-bottom align-items-center py-2">
                <div className="fw-bold">
                  Subtotal:<span className="ms-5">{Number.parseInt(sum).toLocaleString()}&nbsp;<span>VND</span></span>
                </div>
                <div id="subtotal"></div>
              </div>
              {/* <div className="d-flex justify-content-between border-bottom align-items-center py-2">
                            <div className="fw-bold">Sale tax:</div>
                            <div id="tax"></div>
                        </div>
                        <div className="d-flex justify-content-between border-bottom align-items-center py-2">
                            <div className="fw-bold">Grand total:</div>
                            <div className="fs-3" id="grand_total"></div>
                        </div> */}

              <div className="offset-md-5 col-md-7">
                <div className="row mt-4">
                  <div className="col-md-9">
                    <span>Congrats, you're for</span>
                    <span className="fw-bold">free shipping</span>
                  </div>
                  <div className="col-md-3 text-end">
                    <i className="fa-solid fa-car-side"></i>
                  </div>
                </div>
                <div className="line border-top border-4 border-info my-4"></div>
                <div>
                  <button className="w-100 btn btn-dark" onClick={checkout}>Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
