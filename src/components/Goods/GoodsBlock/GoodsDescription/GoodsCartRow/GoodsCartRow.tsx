import React, { useState } from 'react';
import { useAppDispatch } from '../../../../../app/hooks';
import { addToCart } from '../../../../../reduser/cartReducer';
import Button from '../../../../Button/Button';
import GoodsCounter from './GoodsCounter/GoodsCounter';

const GoodsCartRow = ({data}: any) => {
    const dispatch= useAppDispatch()
    const [count, setCount] = useState(data.cartQuantity)
    console.log(count);
    
    
    const handleDecrease =( ) =>{
        if(count === 1) return
        setCount( count-1)
        console.log('Какашка -');
        
    }

    const handleIncrease =( ) =>{
        setCount( count+ 1)
        console.log('Какашка +');
        
    }

    const handleAddToCart = (data: any) => dispatch(addToCart(data))
    return (
        <div className='cart-row'>
            <div className='cart-row__price'>{data.price} ₸</div>
            <GoodsCounter count={count} handleDecrease={handleDecrease} handleIncrease={handleIncrease} />
            <Button className='cart-row__btn btn' text='В корзину' img='icons/white-cart.svg' onClick={() => handleAddToCart(data)} />
        </div>
    );
};

export default GoodsCartRow;