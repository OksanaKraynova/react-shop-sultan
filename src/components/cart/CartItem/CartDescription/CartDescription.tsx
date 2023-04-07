import React from 'react';
import Box from '../../../../icons/Box';
import Bottle from '../../../../icons/Bottle';

const CartDescription = ({pack, size, type, name,description}: any) => {
    return (
        <div className="item__description">
            <div className="item__type">
                {pack === 'box' ? <Box /> : <Bottle />}
                <span>{size} {type}</span>
            </div>
            <div className="item__title">{name}</div>
            <p className='item__text'>{description} </p>
        </div>
    );
};

export default CartDescription;