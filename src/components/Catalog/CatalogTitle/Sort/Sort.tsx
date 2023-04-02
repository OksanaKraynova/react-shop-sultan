import React, { useState } from 'react';
import { products } from '../../../../data/products';

const Sort = ({ sortedGoods, sortedGoodsDownPrice, sortedGoodsUpPrice, sortedOtherGoods }: any) => {
    const [selected, setSelected] = useState('')
    const [open, setOpen] = useState(false)


    return (
        <div className='sort'>
            <span className='sort__name' >Сортировка: </span>
            <div onClick={() => setOpen(!open)} className='sort__choose'>
                {selected ? selected : 'По популярности'}
            </div>
            {open && (
                <div className='sort__list'>
                    <div onClick={() => { setSelected('Название a-z'); setOpen(false); sortedGoods() }}  >Название a-z</div>
                    <div onClick={() => { setSelected('Название z-a'); setOpen(false); sortedOtherGoods() }}  >Название z-a</div>
                    <div onClick={() => { setSelected('Цена по убыванию'); setOpen(false); sortedGoodsDownPrice() }}>Цена по убыванию</div>
                    <div onClick={() => { setSelected('Цена по возрастанию'); setOpen(false); sortedGoodsUpPrice() }}>Цена по возрастанию</div>
                </div>
            )}


        </div>
    );
};

export default Sort;