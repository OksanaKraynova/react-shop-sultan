import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../app/hooks';

const GoodsNav = () => {
    const data = useAppSelector((state) => state.root.goodState.currentGoods)
    useEffect(() => {
        document.title = `СУЛТАН - ${data?.name}`
    }, [])
    return (
        <>
        <div className='nav'>
            <Link to='/'>Главная</Link>
            <Link to='/'>Каталог</Link>
            <span>{data.name}</span>
        </div>
        <Link to='/' className='hide' >
<img src="icons/back.svg" alt="" />
        </Link>
        </>
    );
};

export default GoodsNav;