import React, { useState } from 'react';
import { useAppSelector } from '../../../../../app/hooks';
import { brand } from '../../../../../data/brand';
import { products } from '../../../../../data/products';
import { ISearch } from '../../../../../types/ISearch';

const ChooseBrandsChackboxes = ({ setGoods }: ISearch['setGoods']) => {
    const [more, setMore] = useState(false)
    const [list, setList] = useState(brand.slice(0, 4))
    const localGoods = useAppSelector(state => state.root.createState.goods)
    const [arr, setArr] = useState(localGoods.length ? localGoods : products)

    const handleChange = () => {
        setMore(!more)
        more ? setList(brand.slice(0, 4)) : setList(brand.sort((a: any, b: any) => a.title < b.title ? -1 : 1))
    }
    const handleChooseBrand = (type: string,) => {
        const data = arr.filter((item: { brand: string; }) => item.brand.toLowerCase() === type.toLowerCase())
        setGoods(data)
    }
    return (
        <div className='check'>
            {list.map(el => (
                <label className='check__wrapper' key={el.title} onClick={() => handleChooseBrand(el.title)}  >
                    <input type='radio' name='sort' />
                    <div className='check__fake'></div>
                    <span className='check__text'>{el.title}</span>
                </label>
            ))}
            <button className='brand__more' onClick={handleChange} >
                <span>Показать все</span>
                {more ?
                    <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.5 0L6.53109 5.25L0.468911 5.25L3.5 0Z" fill="#3F4E65" />
                    </svg>
                    :
                    <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.5 6L0.468911 0.750001L6.53109 0.75L3.5 6Z" fill="#3F4E65" />
                    </svg>
                }
            </button>


        </div>
    );
};

export default ChooseBrandsChackboxes;