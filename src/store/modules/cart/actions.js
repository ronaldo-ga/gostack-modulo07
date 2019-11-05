export function addToCartRequest(id) {
    return {
        type: '@cart/ADD_RESQUEST',
        id,
    };
}

export function addToCartSuccess(product) {
    return {
        type: '@cart/ADD_SUCCESS',
        product,
    };
}

export function removeFromCart(id) {
    return {
        type: '@cart/REMOVE',
        id,
    };
}

export function updateAmount(product, amount) {
    return {
        type: '@cart/UPDATE_AMOUNT',
        product,
        amount,
    };
}
