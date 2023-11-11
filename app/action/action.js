import { addToCart, removeToCart } from "../reducer/cart";

export const addToCartItem=(item)=>({
    type:addToCart,payload:item
})
export const removeToCartItem=(item)=>({
    type:removeToCart,payload:item
})