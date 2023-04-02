import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import { products } from '../../data/products';
import { ICard } from '../../types/ICard';
import CatalogAside from './CatalogAside/CatalogAside';
import CatalogButtons from './CatalogButtons/CatalogButtons';
import CatalogCards from './CatalogCards/CatalogCards';
import CatalogTitle from './CatalogTitle/CatalogTitle';
import { Link } from 'react-router-dom';



const CatalogPage = () => {
    const localGoods = useAppSelector(state => state.root.createState.goods)
    const [goods, setGoods] = useState(localGoods.length ? localGoods :  products)
    const [search, setSearch] = useState('')


    const newGoods = goods.filter((item: ICard) => {
        if (item.brand.toLowerCase().includes(search.toLowerCase())) return true
        
        return false
    })
    const sortedGoods = () => {
        const data = newGoods.sort((a: any, b: any) => a.name < b.name ? -1 : 1)
        setGoods(data)
    }
    const sortedOtherGoods = () => {
        const data = newGoods.sort((a: any, b: any) => a.name > b.name ? -1 : 1)
        setGoods(data)
    }
    const sortedGoodsUpPrice = () => {
        const data = newGoods.sort((a: any, b: any) => a.price < b.price ? -1 : 1)
        setGoods(data)
    }
    const sortedGoodsDownPrice = () => {
        const data = newGoods.sort((a: any, b: any) => a.price > b.price ? -1 : 1)
        setGoods(data)
    }

    return (
        <div className='catalog container'>
            <div className="nav">
                <Link to="/">Главная</Link>
                <span>Каталог</span>
            </div>
            <CatalogTitle sortedGoods={sortedGoods} sortedGoodsUpPrice={sortedGoodsUpPrice} sortedGoodsDownPrice={sortedGoodsDownPrice} sortedOtherGoods={sortedOtherGoods} />
            <CatalogButtons setGoods={setGoods} />
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