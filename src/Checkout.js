import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";

import myImage from "./images/image3.jpg";
import Subtotal from "./Subtotal";



const Checkout = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="Checkout">
        <div className="checkout__left">
      <img className="checkout__ad" src={myImage} alt="" />
      {basket?.length === 0 ? (
        <div>
          <h2>Your Cart Is Empty</h2>
        </div>
      ) : (
        <div>
          <h2 className="checkout__title">Your Shopping Cart</h2>
          {/**product list  */}
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      )}
      </div>
      
        <div className="checkout__right">
             
            <Subtotal/>
        </div>

    </div>
  );
};

export default Checkout;
