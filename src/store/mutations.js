export default {
    addcounter(state, payload) {
        payload.count++;
    },
    addtocart(state, payload) {
        state.cartList.push(payload)
    }
}