import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    cartItems: localStorage.getItem('cartSultan')
        ? JSON.parse(localStorage.getItem('cartSultan')!)
        : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item: any) => item.id === action.payload.id)

            if (itemIndex >= 0) {
                state.cartItems[itemIndex] = {
                    ...state.cartItems[itemIndex],
                    cartQuantity: state.cartItems[itemIndex].cartQuantity + 1
                }
            } else {
                let tempProduct = { ...action.payload, cartQuantity: 1 }
                state.cartItems.push(tempProduct)
            }
            localStorage.setItem("cartSultan", JSON.stringify(state.cartItems));
        },
        decreaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item: any) => item.id === action.payload.id)
            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1
            } else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const nextCartItems = state.cartItems.filter((item: any) => item.id !== action.payload.id)
                state.cartItems = nextCartItems
            }
            localStorage.setItem('cartSultan', JSON.stringify(state.cartItems))
        },
        removeFromCart(state, action) {
            state.cartItems.map((cartItem: any) => {
                if (cartItem.id === action.payload.id) {
                    const cards = state.cartItems.filter((item: any) => item.id !== cartItem.id)
                    state.cartItems = cards
                }
                localStorage.setItem('cartSultan', JSON.stringify(state.cartItems))
                return state
            })
        },
        getTotals(state) {
            let { total, quantity } = state.cartItems.reduce(
                (cartTotal: any, cartItem: any) => {
                    const { price, cartQuantity } = cartItem;
                    const itemTotal = price * cartQuantity;

                    cartTotal.total += itemTotal;
                    cartTotal.quantity += cartQuantity;
                    return cartTotal;
                },
                {
                    total: 0,
                    quantity: 0,
                }
            );
            total = parseFloat(total.toFixed(2));

            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        },
        clearCart(state) {
            state.cartItems = []
            localStorage.setItem('cartSultan', JSON.stringify(state.cartItems))
        }
    }
})

export const { addToCart, decreaseCart, removeFromCart, clearCart, getTotals } = cartSlice.actions
export default cartSlice.reducer