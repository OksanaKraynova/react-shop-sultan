import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../app/hooks';
import Back from '../../../icons/Back';

const GoodsNav = () => {
    const data = useAppSelector((state) => state.root.goodState.currentGoods)
    useEffect(() => {
        document.title = `СУЛТАН - ${data?.name}`
    }, [data])
    return (
        <>
            <div className='nav'>
                <Link to='/'>Главная</Link>
                <Link to='/'>Каталог</Link>
                <span>{data.name}</span>
            </div>
            <Link to='/' className='hide' >
                <Back />
            </Link>
        </>
    );
};

export default GoodsNav;