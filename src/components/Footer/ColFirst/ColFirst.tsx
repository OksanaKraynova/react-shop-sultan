import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../../../icons/Search';
import LogoWhite from '../../../icons/LogoWhite';
import FooterForm from './FooteerForm/FooterForm';

const ColFirst = () => {
    return (
        <div className='footer-first'>
            <Link to='/'>
                <LogoWhite />
            </Link>
            <p className='footer-text description'>Компания «Султан» — снабжаем розничные магазины товарами
                "под ключ" в Кокчетаве и Акмолинской области </p>
            <FooterForm />
        </div >
    );
};

export default ColFirst;