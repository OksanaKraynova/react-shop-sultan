import React from 'react';
import { Link } from 'react-router-dom';

const ColFirst = () => {
    return (
        <div className='footer-first'>
            <Link to='/'>
                <img alt='logo' src='logo-white.svg' />
            </Link>
            <p className='footer-text description'>Компания «Султан» — снабжаем розничные магазины товарами
                "под ключ" в Кокчетаве и Акмолинской области </p>
            <form className='footer-form'>
                <label>Подпишись на скидки и акции</label>
                <div>
                    <input type='email' placeholder='Введите ваш E-mail' />
                    <button>
                        <img src="icons/arrow.svg" alt="Send" />
                    </button>
                </div>
            </form >
        </div >
    );
};

export default ColFirst;