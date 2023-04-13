import React, { useEffect } from 'react';
import CartWrapper from '../components/cart/CartWrapper';

const Cart = () => {
    useEffect(() => {
        document.title = `СУЛТАН - корзина`
    }, [])
    return (
        <div data-testid='cartPage'>
            <CartWrapper />
        </div>
    );
};

export default Cart;