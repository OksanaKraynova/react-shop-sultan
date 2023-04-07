import React, { useState } from 'react';
import { ICard } from '../../../types/ICard';
import { ISearch } from '../../../types/ISearch';
import Card from '../../Card/Card';
import Pagination from './Pagination/Pagination';

const CatalogCards = ({search, setSearch, goods}: ISearch) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);
 
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentGoods = goods.slice(firstPostIndex, lastPostIndex);

    return (
        <div className='catalog__wrapper'>
        <div className='catalog__cards'>
            {currentGoods.map((item: ICard) => (
                <Card key={item.id} name={item.name} url={item.url} price={item.price} description={item.description} brand={item.brand} type={item.type} size={item.size} manufacturer={item.manufacturer} code={item.code} id={item.id} cartQuantity={item.cartQuantity} />
            ))}
             </div>
            <Pagination totalPosts={goods.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
       </div>
    );
};

export default CatalogCards;