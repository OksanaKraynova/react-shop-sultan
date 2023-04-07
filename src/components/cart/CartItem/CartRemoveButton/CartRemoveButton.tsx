import React from 'react';
import Trash from '../../../../icons/Trash';

const CartRemoveButton = ({removeItem, data}: {removeItem: (item: any) => void, data: any}) => {
    return (
        <button className='item__btn btn' onClick={() => removeItem(data)} >
        <Trash/>
      </button>
    );
};

export default CartRemoveButton;