import React from 'react';

const CartPrice = ({price}: any) => {
    return (
        <div className="item__price">
            <span>{price}</span><span>₸</span>
        </div>

    );
};

export default CartPrice;