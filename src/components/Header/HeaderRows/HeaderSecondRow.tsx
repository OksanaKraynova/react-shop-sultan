import React from 'react';
import { Link } from 'react-router-dom';
import HeaderCart from './HeaderCart/HeaderCart';
import HeaderContacts from './HeaderContacts/HeaderContacts';
import HeaderForm from './HeaderForm/HeaderForm';
import Burger from '../../../icons/Burger';
import Close from '../../../icons/Close';
import Logo from '../../../icons/Logo';
import Menu from '../../../icons/Menu';


const HeaderSecondRow = ({ menu, setMenu }: any) => {

    const handleClick = () => {
        setMenu(!menu)
        document.querySelector('body')?.classList.toggle('bg')
    }

    return (
        <>
            <button className="header__burger" onClick={handleClick}>
                {menu ? <Close /> : <Burger />}
            </button>
            <Link to='/' className='logo-link'>
                <Logo />
            </Link>
            <Link to='/' className='header__catalog '  >
               <Menu />
                <span>Каталог</span>
            </Link>
            <button className='header__catalog hide' >Поиск</button>
            <HeaderForm />
            <div className="header__contacts-wrapper">
                <HeaderContacts />
            </div>

            <Link className='header-price btn' to='/admin' >Администратор</Link>
            <HeaderCart />
        </>
    );
};

export default HeaderSecondRow;