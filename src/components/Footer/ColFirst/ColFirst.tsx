import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../../../icons/Search';
import LogoWhite from '../../../icons/LogoWhite';

const ColFirst = () => {
    return (
        <div className='footer-first'>
            <Link to='/'>
               <LogoWhite />
            </Link>
            <p className='footer-text description'>Компания «Султан» — снабжаем розничные магазины товарами
                "под ключ" в Кокчетаве и Акмолинской области </p>
            <form className='footer-form'>
                <label>Подпишись на скидки и акции</label>
                <div>
                    <input type='email' placeholder='Введите ваш E-mail' />
                    <button>
                        <Search />
                    </button>
                </div>
            </form >
        </div >
    );
};

export default ColFirst;