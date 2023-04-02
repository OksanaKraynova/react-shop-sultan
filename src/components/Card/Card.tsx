import React from 'react';
import { useDispatch } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import { setCurrentGoods } from '../../reduser/currentGoods';
import { ICard } from '../../types/ICard';
import Button from '../Button/Button';


const Card = ({name, url, type, size, code, manufacturer, brand, description, price, id , cartQuantity} : ICard) => {
    const history= useNavigate()
    const data = {name, url, type, size, code, manufacturer, brand, description, price , id, cartQuantity}
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(setCurrentGoods(data))
        history(`/${name}`)
    }
    return (
        <div className='card'>
            <div className="card__image">
                {url !== '' ?   <img src={url} alt="" /> :  <img src='no-photo.png' alt="" />}
              
            </div>
            <div className="card__info">
                <div className="card__size">
                    <img alt='' src='icons/bottle.svg' />
                    <div>{size} {type}</div>
                </div>
                <div className="card__name" >{name} </div>
                <div className="card__details">
                    <div className="card__code">
                        Штрихкод: <span>{code}</span>
                    </div>
                    <div className="card__owener">
                        Производитель: <span>{manufacturer}</span>
                    </div>
                    <div className="card__brand">
                        Бренд: <span>{brand}</span>
                    </div>
                </div>
                <div className="card__footer">
                    <div className='card__price'>{price} ₸</div>
                    <Button onClick={handleClick} className='card__btn btn' text='в корзину' img='icons/white-cart.svg' />
                </div>
            </div>
        </div>
    );
};

export default Card;