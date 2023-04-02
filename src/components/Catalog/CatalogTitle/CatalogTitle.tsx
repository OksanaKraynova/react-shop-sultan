import React from 'react';
import Sort from './Sort/Sort';

const CatalogTitle = ({sortedGoods, sortedGoodsDownPrice, sortedGoodsUpPrice, sortedOtherGoods}: any) => {
    return (
        <div className='catalog__title'>
            <div className='catalog__name'>Косметика и гигиена</div>
            <div className='catalog__sort'>
                <Sort sortedGoods={sortedGoods} sortedGoodsUpPrice={sortedGoodsUpPrice} sortedGoodsDownPrice={sortedGoodsDownPrice} sortedOtherGoods={sortedOtherGoods} />
            </div>
        </div>
    );
};

export default CatalogTitle;