import React from 'react';

type Card ={ 
    data: any
    handleDecrease: (item: any)=> void
    handleIncrease: (item: any)=> void
  
}

const CartCounter = ({data, handleDecrease, handleIncrease }: Card) =>  {
    console.log(data);
    
    return (
        <div className='counter'>
            <button className="counter__btn" onClick={()=>handleDecrease(data)}>-</button>
            <span>{data.cartQuantity}</span>
            <button className="counter__btn" onClick={() => handleIncrease(data)}>+</button>
        </div>
    );
};

export default CartCounter;