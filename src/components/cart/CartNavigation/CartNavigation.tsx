import React from 'react';
import { Link } from 'react-router-dom';
import Back from '../../../icons/Back';

const CartNavigation = () => {
    return (
        <>
            <div className="nav">
                <Link to='/'>Главная</Link>
                <Link to='/cart'>Корзина</Link>
            </div>
            <Link to='/' className='hide' >
               <Back />
            </Link>
        </>
    );
};

export default CartNavigation;