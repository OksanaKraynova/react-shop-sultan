import React from 'react';
import { menuList } from '../../data/menuLink';
import ColFirst from './ColFirst/ColFirst';
import FooterContacts from './FooterContacts/FooterContacts';
import FooterMenu from './FooterMenu/FooterMenu';
import MixColumn from './MixColumn/MixColumn';

const Footer = () => {
    return (
        <footer className='footer' data-testid='footer-id' >
            <div className="footer__container container">
                <ColFirst />
                <div className="footer__row">
                    <FooterMenu title='Меню сайта:' arr={menuList} />
                <FooterMenu title='Категории:' arr={menuList} />
                <MixColumn/>
                <FooterContacts />
                </div>
            </div>
        </footer>
    );
};

export default Footer;