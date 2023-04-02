import React from 'react';

type Count = {
    count: any
    handleDecrease: () => void
    handleIncrease: () => void
}

const GoodsCounter = ({handleIncrease, count, handleDecrease}: Count) => {
    return (
        <div className='counter'>
            <button className="counter__btn" onClick={handleDecrease}>-</button>
            <span>{count}</span>
            <button className="counter__btn" onClick={handleIncrease}>+</button>
        </div>
    );
};

export default GoodsCounter;