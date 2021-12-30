export function removeProduct(state, id){
    return state.product.filter(item=>{
        return item.id !== id
    })
}

export function incrementQuantity(state, id){
    return state.product.forEach(element => {
        if(element.id === id)
            element.quantity+=1
    });
}

export function decrementQuantity(state, id){
    return state.product.forEach(element=>{
        if(element.id === id)
            element.quantity-=1
    })
}

export function empty(state, id){
    return {}
}