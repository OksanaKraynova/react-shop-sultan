import React, { useState } from 'react';
import { useAppDispatch } from '../../../../../app/hooks';
import { addToCart } from '../../../../../reduser/cartReducer';
import GoodsCounter from './GoodsCounter/GoodsCounter';
import WhiteCart from '../../../../../icons/WhiteCart';

const GoodsCartRow = ({ data }: any) => {
    const dispatch = useAppDispatch()
    const [count, setCount] = useState(data.cartQuantity)

    const handleDecrease = () => {
        if (count === 1) return
        setCount(count - 1)
    }

    const handleIncrease = () => {
        setCount(count + 1)
    }

    const handleAddToCart = (data: any) => dispatch(addToCart(data))
    return (
        <div className='cart-row'>
            <div className='cart-row__price'>{data.price} ₸</div>
            <GoodsCounter count={count} handleDecrease={handleDecrease} handleIncrease={handleIncrease} />
            <button className='cart-row__btn btn' onClick={() => handleAddToCart(data)} >
                в корзину
                <WhiteCart />
            </button>
        </div>
    );
};

export default GoodsCartRow;