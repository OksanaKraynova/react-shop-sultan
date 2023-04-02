import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Button/Button';
import HeaderCart from './HeaderCart/HeaderCart';
import HeaderContacts from './HeaderContacts/HeaderContacts';
import HeaderForm from './HeaderForm/HeaderForm';

const HeaderSecondRow = ({menu, setMenu}: any) => {

    const handleClick = () => {
        setMenu(!menu)
        document.querySelector('body')?.classList.toggle('bg')
    }


    return (
        <>
            <button className="header__burger" onClick={handleClick}>
                {menu ?  <img alt='' src='/static/icons/close.svg' /> :  <img alt='' src='/static/icons/burger.svg' />}
              
            </button>
            <Link to='/' className='logo-link'>
                <img alt='' src='/static/logo.svg' />
            </Link>
            <Link to='/' className='header__catalog '  >
                <img alt='catalog' src='/static/icons/menu.svg' />
                <span>Каталог</span>
                </Link>
                <button className='header__catalog hide' >Поиск</button>
            <HeaderForm />
            <div className="header__contacts-wrapper">
                <HeaderContacts />
            </div>
            
            <Link  className='header-price btn' to='/admin' >Администратор</Link>
            <HeaderCart />
        </>
    );
};

export default HeaderSecondRow;