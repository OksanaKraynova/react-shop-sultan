import React from 'react';


const GoodsInfo = ({ data }: any) => {
    return (
        <ul className='goods-info'>
            <li>
                <span>Производитель:</span>
                <span className='goods-info__data'>{data.manufacturer}</span>
            </li>
            <li>
                <span>Бренд:</span>
                <span className='goods-info__data'>{data.brand}</span>
            </li>
            <li>
                <span>Артикул:</span>
                <span className='goods-info__data'>{data.code}</span>
            </li>
            <li>
                <span>Кол-во в коробке:</span>
                <span className='goods-info__data'>1</span>
            </li>
            <li>
                <span>Штрихкод:</span>
                <span className='goods-info__data'>{data.code}</span>
            </li>
           
        </ul>
    );
};

export default GoodsInfo;