/**
 * Created by Administrator on 2016/12/19.
 */
export const cartProducts = state => {
    return state.cart.added.map(({ id, quantity }) => {
        const product = state.products.all.find(p => p.id === id)
        return {
            title: product.title,
            price: product.price,
            quantity
        }
    })
}

