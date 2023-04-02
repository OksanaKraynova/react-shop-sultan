import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
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