import React from 'react';
import HeaderLink from '../HeaderLink/HeaderLink';
import HeaderContacts from './HeaderContacts/HeaderContacts';
import { Link } from 'react-router-dom';

const list = [
    {
        title: 'О компании'
    },
    {
        title: 'Доставка и оплата'
    },
    {
        title: 'Возврат'
    },
    {
        title: 'Контакты'
    },
]

const HeaderOneRow = ({setMenu}: any) => {
    const handleClick = () => {
        setMenu(false)
        document.querySelector('body')?.classList.remove('bg')
    }
    return (
        <>
            <div className="header__links">
                <HeaderLink link='г. Кокчетав, ул. Ж. Ташенова 129Б' text='(Рынок Восточный)'
                    img='icons/map.svg' />
                <HeaderLink link='opt.sultan@mail.ru ' text='На связи в любое время'
                    img='icons/mail.svg' />
            </div>
            <div className="header__main-wrapper">
  <HeaderContacts />
            </div>
          
            <ul className="header__list">
                <p className='header__submenu'>Меню сайта:</p>
                {list.map(li => (
                    <li key={li.title}>
                        <a href='/'>{li.title}</a>
                    </li>
                ))}
            </ul>
            <Link className='header__adm btn' to='/admin' onClick={handleClick} >Администратор</Link>
        </>
    );
};

export default HeaderOneRow;