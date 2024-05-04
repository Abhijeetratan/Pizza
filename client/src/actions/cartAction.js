export const addToCart = (pizza, quantity, varient) => (dispatch, getState) => {
    const cartItem = {
      name: pizza.name,
      _id: pizza._id,
      image: pizza.image,
      varient: varient,
      quantity: Number(quantity),
      prices: pizza.price,
      price: pizza.price[0][varient] * quantity,
    };
  
    console.log(cartItem);
  
    if (cartItem.quantity >= 10) {
      alert("You cannot add more than 10 quantities.");
    } else {
      if (cartItem.quantity < 0) {
        dispatch({ type: "Delete_from_cart", payload: pizza });
      } else {
        dispatch({ type: "ADD_TO_CART", payload: cartItem });
      }
    }
  
    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
  
  export const deleteFromCart = (pizza) => (dispatch, getState) => {
    dispatch({ type: "Delete_from_cart", payload: pizza });
    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
  