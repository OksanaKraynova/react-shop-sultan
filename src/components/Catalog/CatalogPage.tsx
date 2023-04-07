import React, { useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import { products } from '../../data/products';
import { ICard } from '../../types/ICard';
import CatalogAside from './CatalogAside/CatalogAside';
import CatalogButtons from './CatalogButtons/CatalogButtons';
import CatalogCards from './CatalogCards/CatalogCards';
import CatalogTitle from './CatalogTitle/CatalogTitle';
import CatalogNav from './CatalogNav/CatalogNav';

const CatalogPage = () => {
    const localGoods = useAppSelector(state => state.root.createState.goods)
    const [goods, setGoods] = useState(localGoods.length ? localGoods : products)
    const [search, setSearch] = useState('')

    const newGoods = goods.filter((item: ICard) => {
        if (item.brand.toLowerCase().includes(search.toLowerCase())) return true
        return false
    })

    return (
        <div className='catalog container'>
            <CatalogNav />
            <CatalogTitle setGoods={setGoods} newGoods={newGoods} />
            <CatalogButtons setGoods={setGoods} newGoods={newGoods} />
            <div className="catalog__main">
                <CatalogAside search={search} setGoods={setGoods} setSearch={setSearch} newGoods={goods} />
                {newGoods.length ?
                    <CatalogCards goods={newGoods} search={search} setSearch={setSearch} />
                    : <p className='not-found'>Ничего не найдено</p>
                }
            </div>
        </div>
    );
};

export default CatalogPage;