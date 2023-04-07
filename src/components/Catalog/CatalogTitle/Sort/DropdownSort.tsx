import React from 'react';
import { sortedGoods, sortedGoodsDownPrice, sortedGoodsUpPrice, sortedOtherGoods } from '../../../../utils/sortedDrop';

interface Dropdowm {
    setSelected: React.Dispatch<React.SetStateAction<string>>,
    setGoods: React.Dispatch<React.SetStateAction<any>>,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    newGoods: any,
    
}

const DropdownSort = ({ setSelected, setOpen, setGoods, newGoods }: Dropdowm) => {
    return (
        <div className='sort__list' data-testid='toggle-drop'>
            <div onClick={() => { setSelected('Название a-z'); setOpen(false); sortedGoods(newGoods, setGoods) }}  >Название a-z</div>
            <div onClick={() => { setSelected('Название z-a'); setOpen(false); sortedOtherGoods(newGoods, setGoods) }}  >Название z-a</div>
            <div onClick={() => { setSelected('Цена по убыванию'); setOpen(false); sortedGoodsDownPrice(newGoods, setGoods) }}>Цена по убыванию</div>
            <div onClick={() => { setSelected('Цена по возрастанию'); setOpen(false); sortedGoodsUpPrice(newGoods, setGoods) }}>Цена по возрастанию</div>
        </div>
    );
};

export default DropdownSort;