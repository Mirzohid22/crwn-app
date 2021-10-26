import { createSelector } from "reselect";

//selectCart
const selectCart = (state) => state.cart;
//selectCartItems
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);
//selectCartHidden
export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);
//selectCartItemsCount
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);
//selectCartTotal
export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);
