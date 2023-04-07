import React from 'react';
import Sort from './Sort/Sort';

const CatalogTitle = ({ setGoods,  newGoods}: any) => {
    return (
        <div className='catalog__title'>
            <div className='catalog__name'>Косметика и гигиена</div>
            <div className='catalog__sort'>
                <Sort newGoods={newGoods} setGoods={setGoods} />
            </div>
        </div>
    );
};

export default CatalogTitle;