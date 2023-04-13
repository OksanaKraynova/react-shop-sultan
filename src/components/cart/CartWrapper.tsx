import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addToCart, decreaseCart, removeFromCart, clearCart } from '../../reduser/cartReducer';
import { ICard } from '../../types/ICard';
import CartItem from './CartItem/CartItem';
import CartOrder from './CartOrder';
import CartNavigation from './CartNavigation/CartNavigation';

const CartWrapper = () => {
    const cart = useAppSelector((state) => state.root.cartState.cartItems)
    const dispatch = useAppDispatch()

    const handleDecrease = (item: any) =>  dispatch(decreaseCart(item))
    
    const handleIncrease = (item: any) =>  dispatch(addToCart(item))

    const removeItem = (item: any) => dispatch(removeFromCart(item))
    
    const clearAll = () => dispatch(clearCart())
    
    return (
        <div className='cart container'>
            <CartNavigation />
            <div className="cart__title" data-testid='cart-title' >КОРЗИНА</div>
            <div className="cart__cards">
                {cart.length !== 0 ?  cart.map((item: ICard) => (
                    <CartItem key={item.code} data={item} removeItem={removeItem} handleIncrease={handleIncrease} handleDecrease={handleDecrease} />
                )) : 
                <p style={{padding: '20px 0'}}>Ничего не добавлено.</p>
                }
            </div>
            <CartOrder clearAll={clearAll} />
        </div>
    );
};

export default CartWrapper;