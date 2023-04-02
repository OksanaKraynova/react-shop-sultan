import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getTotals } from '../../reduser/cartReducer';
import Button from '../Button/Button';

const CartOrder = ({clearAll}: {clearAll: () => void}) => {
    const [open, setOpen] = useState(false)
    const cart = useAppSelector((state) => state.root.cartState)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getTotals())
    }, [cart, dispatch])
console.log(cart);

    const handleSubmit = () => {
        setOpen(true)
        clearAll()
    }
    return (
        <>
            <div className='cart__order'>
                <button disabled={cart.cartItems.length === 0} className='cart__btn btn' onClick={handleSubmit} >Оформить заказ</button>
                <div className="cart__total">{cart.cartTotalAmount} ₸</div>
            </div>
            {open && <p className='cart__thanks'>Спасибо за ваш заказ!</p>}
        </>
    );
};

export default CartOrder;