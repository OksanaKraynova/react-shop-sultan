import React, { useState } from 'react';
import { useAppSelector } from '../../../../app/hooks';
import { products } from '../../../../data/products';
import { types } from '../../../../data/type';
import { handleChooseType } from '../../../../utils/handleChooseType';

const ChooseCategory = ({ setGoods }: any) => {
    const localGoods = useAppSelector(state => state.root.createState.goods)
    const [arr, setArr] = useState(localGoods.length ? localGoods : products)
    return (
        <div className='brand__category category'>
            <div className="category__title">Выбор категории</div>
            <ul className='category__list'>
                {types.map(el => (
                    <li key={el.uses}>
                        <button onClick={() => handleChooseType(el.uses, setGoods, arr)} className="category__btn">
                            {el.title}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ChooseCategory;