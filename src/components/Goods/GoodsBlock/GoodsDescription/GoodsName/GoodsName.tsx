import React from 'react';
import { ICard } from '../../../../../types/ICard';

interface IName {
    name: ICard['name'],
    box?: ICard['box'],
    type: ICard['type'],
    size: ICard['size'],
}
const GoodsName = ({ name, box, type, size }: IName) => {
    return (
        <div className='goods-name'>
            <span className='goods-name__label'>В наличии</span>
            <p className='goods-name__title'>{name}</p>
            <div className='goods-name__row'>
                {box && box === 'box' ? <img alt='' src='icons/box.svg' /> : <img alt='' src='icons/bottle.svg' />}
                <span>{size} {type}</span>
            </div>
        </div>
    );
};

export default GoodsName;