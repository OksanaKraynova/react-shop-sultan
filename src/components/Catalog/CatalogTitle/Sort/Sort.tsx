import React, { useState } from 'react';
import DropdownSort from './DropdownSort';

const Sort = ({ newGoods,setGoods }: any) => {
    const [selected, setSelected] = useState('')
    const [open, setOpen] = useState(false)

    return (
        <div className='sort'>
            <span className='sort__name' >Сортировка: </span>
            <div onClick={() => setOpen(!open)} className='sort__choose'>
                {selected ? selected : 'По популярности'}
            </div>
            {open && (
            <DropdownSort setSelected={setSelected} setOpen={setOpen} newGoods={newGoods} setGoods={setGoods} />
            )}
        </div>
    );
};

export default Sort;