import React from 'react';
import { useAppSelector } from '../../../app/hooks';
import GoodsDescripion from './GoodsDescription/GoodsDescripion';
import GoodsImage from './GoodsImage/GoodsImage';

const GoodsBlock = () => {
    const data = useAppSelector((state) => state.root.goodState.currentGoods)

    return (
        <div className='goods-block'>
            {data && <GoodsImage image={data.url} />}
            <GoodsDescripion data={data}/>
        </div>
    );
};

export default GoodsBlock;