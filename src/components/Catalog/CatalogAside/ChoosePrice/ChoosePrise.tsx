import React, { FormEventHandler, useState } from 'react';
import { useAppSelector } from '../../../../app/hooks';
import { products } from '../../../../data/products';

const ChoosePrise = () => {
    const localGoods = useAppSelector(state => state.root.createState.goods)
    const [arr, setArr] = useState(localGoods.length ? localGoods : products)

    const min = arr.length > 0 ? arr.reduce((prod: { price: number; }, curr: { price: number; }) => prod.price < curr.price ? prod : curr).price : 0;

    const max = arr.length > 0 ? arr.reduce((prod: { price: number; }, curr: { price: number; }) => prod.price > curr.price ? prod : curr).price : 0;

    const [priceMin, setPriceMin] = useState(min);
    const [priceMax, setPriceMax] = useState(max);

    const handleGetPrice = (e: any) =>  arr.filter((prod: any) => prod.price >= priceMin && prod.price <= priceMax)

    return (
        <div className='price'>
            <div className='price__text'>Цена
                <span>₸</span>
                <div className="price__row">
                 
                        <input className="price__input" type='text' placeholder='0' value={priceMin} onChange={e => setPriceMin(e.target.value)} onKeyUp={handleGetPrice} />
                        <span>-</span>
                        <input className="price__input" type='text' onKeyUp={handleGetPrice} placeholder='10 000' value={priceMax} onChange={e => setPriceMax(e.target.value)} />
                   
                </div>
            </div>
        </div>
    );
};

export default ChoosePrise;