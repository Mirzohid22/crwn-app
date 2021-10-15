import { CartActionTypes } from "./cart.types";

export const toggleCartHidden = (cart) => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
});