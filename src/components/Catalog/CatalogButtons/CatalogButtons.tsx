import React, { useState } from 'react';
import { useAppSelector } from '../../../app/hooks';
import { products } from '../../../data/products';
import { types } from '../../../data/type';
import { handleChooseType } from '../../../utils/handleChooseType';

const CatalogButtons = ({ setGoods }: any) => {
    const localGoods = useAppSelector(state => state.root.createState.goods)
    const [arr, setArr] = useState(localGoods.length ? localGoods : products)

    return (
        <div className='catalog__btns'>
            {types.map(el => (
                <button onClick={() => handleChooseType(el.uses, setGoods, arr)} key={el.title}> {el.title}</button>
            ))}
        </div>
    );
};

export default CatalogButtons;