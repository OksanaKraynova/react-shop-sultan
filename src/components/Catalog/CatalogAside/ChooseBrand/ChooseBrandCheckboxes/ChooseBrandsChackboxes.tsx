import React, { useState } from 'react';
import { useAppSelector } from '../../../../../app/hooks';
import { brand } from '../../../../../data/brand';
import { products } from '../../../../../data/products';
import { ISearch } from '../../../../../types/ISearch';
import ChooseBrandButton from './ChooseBrandButton/ChooseBrandButton';
import ChooseBrandList from './ChooseBrandList/ChooseBrandList';

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
          <ChooseBrandList list={list} handleChooseBrand={handleChooseBrand} />
           <ChooseBrandButton handleChange={handleChange} more={more} />
        </div>
    );
};

export default ChooseBrandsChackboxes;