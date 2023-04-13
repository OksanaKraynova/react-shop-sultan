import cartReducer , {clearCart} from './../reduser/cartReducer'

describe('cartReducer', () => {
    it('remove all from the cart', () => {
        expect(cartReducer({cartItems: localStorage.getItem('cartSultan')}, clearCart())).toEqual({cartItems: []})
    })
})