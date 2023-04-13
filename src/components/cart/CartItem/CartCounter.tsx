import React from 'react';

type Card ={ 
    data: any
    handleDecrease: (item: any)=> void
    handleIncrease: (item: any)=> void
}

const CartCounter = ({data, handleDecrease, handleIncrease }: Card) =>  {
    return (
        <div className='counter'>
            <button className="counter__btn" data-testid='decrement' onClick={()=>handleDecrease(data)}>-</button>
            <span data-testid='counter-value' >{data.cartQuantity}</span>
            <button className="counter__btn" data-testid='increment' onClick={() => handleIncrease(data)}>+</button>
        </div>
    );
};

export default CartCounter;