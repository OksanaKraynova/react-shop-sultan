import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addToCart, decreaseCart, removeFromCart, clearCart } from '../../reduser/cartReducer';
import { ICard } from '../../types/ICard';
import CartItem from './CartItem/CartItem';
import CartOrder from './CartOrder';
import Back from '../../icons/Back';

const CartWrapper = () => {
    const cart = useAppSelector((state) => state.root.cartState.cartItems)
    const dispatch = useAppDispatch()

    const handleDecrease = (item: any) => {
        dispatch(decreaseCart(item))
    }

    const handleIncrease = (item: any) => {
        dispatch(addToCart(item))
    }

    const removeItem = (item: any) => {
        dispatch(removeFromCart(item))
    }
    const clearAll = () => {
        dispatch(clearCart())
    }

    return (
        <div className='cart container'>
            <div className="nav">
                <Link to='/'>Главная</Link>
                <Link to='/cart'>Корзина</Link>
            </div>
            <Link to='/' className='hide' >
               <Back />
            </Link>
            <div className="cart__title">КОРЗИНА</div>
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