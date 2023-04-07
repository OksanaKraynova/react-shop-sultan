import React from 'react';
import CartCounter from './CartCounter';
import CartImage from './CartImage/CartImage';
import CartDescription from './CartDescription/CartDescription';
import CartPrice from './CartPrice/CartPrice';
import CartRemoveButton from './CartRemoveButton/CartRemoveButton';

type Card = {
    data: any
    handleDecrease: (item: any) => void
    handleIncrease: (item: any) => void
    removeItem: (item: any) => void
}

const CartItem = ({ data, handleDecrease, handleIncrease, removeItem }: Card) => {
    return (
        <div className='cart__item item'>
            <div className="item__block first">
               <CartImage url={data.url} />
               <CartDescription name={data.name} size={data.size} description={data.description} type={data.type} pack={data.pack}/>
            </div>
            <div className="item__block">
                <CartCounter data={data} handleDecrease={handleDecrease} handleIncrease={handleIncrease} />
            </div>
            <div className="item__block">
                <CartPrice price={data.price} />
            </div>
            <div className="item__block" >
               <CartRemoveButton data={data} removeItem={removeItem} />
            </div>
        </div>
    );
};

export default CartItem;