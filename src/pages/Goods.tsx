import React from 'react';

import GoodsBlock from '../components/Goods/GoodsBlock/GoodsBlock';
import GoodsNav from '../components/Goods/GoodsNav/GoodsNav';

const Goods = () => {
   
    return (
        <div className='goods-container container'>
            <GoodsNav />
            <GoodsBlock />
        </div>
    );
};

export default Goods;