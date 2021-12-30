import { removeProduct, incrementQuantity, decrementQuantity } from "./CartSelectors";
const cartState = {};

export function cartReducer(state = cartState, action){
    switch(action.type){
        case 'Cart/add-product':
            return {
                ...state,
                products: {
                    id: action.payload.id,
                    name: action.payload.name,
                    price: action.payload.price,
                    quantity: action.payload.quantity,
                    others: action.payload.others
                }
            }
        case 'Cart/remove-product':
            return removeProduct(state, action.payload.id)
        case 'Cart/increment':
            return 
        default:
            return state;
    }
}