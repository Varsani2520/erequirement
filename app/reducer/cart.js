const initialStaage={
    cartItem:[],
    status:'pending'
}
export const addToCart="add"
export const removeToCart="remove"

export const cartReducer=(state=initialStaage,action)=>{
    switch (action.type){
        case addToCart:return{
            ...state,cartItem:[...state.cartItem,action.payload],status:'pending'
        };
        case removeToCart:
      const updatedCart = state.cartItem.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        cartItems: updatedCart,
        status: "pending",
      };
      default:return false;
    }
}