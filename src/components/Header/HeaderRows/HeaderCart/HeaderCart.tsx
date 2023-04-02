import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { getTotals } from '../../../../reduser/cartReducer';
import Cart from '../../../../icons/Cart';

const HeaderCart = () => {
    const cart = useAppSelector((state) => state.root.cartState)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getTotals())
    }, [cart, dispatch])

    return (
        <Link to='/cart' className='cart-header'>
            <div className="cart-header__icon">
               <Cart />
                <span className="cart-header__count">{cart.cartItems.length}</span>
            </div>
            <div className="cart-header__main">
                <span className="cart-header__name">Корзина</span>
                <span className="cart-header__price">{cart.cartTotalAmount} T</span>
            </div>
        </Link>
    );
};

export default HeaderCart;