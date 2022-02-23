export default {
    // addcart(context, payload) {
    //     let oldproduct = null
    //     for (let k of context.state.cartList) {
    //         if (k.iid == payload.iid) {
    //             oldproduct = k
    //         }
    //     }
    //     // let oldproduct = context.state.cartList.find(item => item.iid == payload.iid)
    //     if (oldproduct) {
    //         // oldproduct.count += 1;
    //         context.commit('addcounter', oldproduct)
    //     } else {
    //         payload.count = 1
    //         payload.checked = true
    //             // state.cartList.push(payload)
    //         context.commit('addtocart', payload)
    //     }
    // }
    addcart(context, payload) {
        return new Promise((resolve, reject) => {
            let oldproduct = null
            for (let k of context.state.cartList) {
                if (k.iid == payload.iid) {
                    oldproduct = k
                }
            }
            if (oldproduct) {
                context.commit('addcounter', oldproduct)
                resolve("商品+1")
            } else {
                payload.count = 1
                payload.checked = true
                context.commit('addtocart', payload)
                resolve("第一次添加")
            }
        })
    }
}