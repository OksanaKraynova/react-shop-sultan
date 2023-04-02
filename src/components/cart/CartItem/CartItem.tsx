import React from 'react';
import Button from '../../Button/Button';
import CartCounter from './CartCounter';

type Card ={ 
    data: any
    handleDecrease: (item: any)=> void
    handleIncrease: (item: any)=> void
    removeItem:(item: any)=> void
}

const CartItem = ({ data, handleDecrease, handleIncrease, removeItem }: Card) => {
    return (
        <div className='cart__item item'>
            <div className="item__block first">
                <div className="item__image">
                    {data.url !== '' ? <img src={data.url} alt="" />  : <img src='no-photo.png' alt="" /> }
                    
                </div>
                <div className="item__description">
                    <div className="item__type">
                        {data.pack === 'box' ?
                            <img alt='' src='icons/box.svg' />
                            :
                            <img alt='' src='icons/bottle.svg' />
                        }
                        <span>{data.size} {data.type}</span>
                    </div>
                    <div className="item__title">{data.name}</div>
                    <p className='item__text'>{data.description} </p>
                </div>
            </div>
            <div className="item__block">
                <CartCounter data={data} handleDecrease={handleDecrease}  handleIncrease={handleIncrease}   />
            </div>
            <div className="item__block">
                <div className="item__price">
                    <span>{data.price}</span><span>₸</span>
                    </div>
            </div>
            <div className="item__block" onClick={() => removeItem(data)}>
                <Button className='item__btn btn' img='icons/trash.svg' />
            </div>
        </div>
    );
};

export default CartItem;