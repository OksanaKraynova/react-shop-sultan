import React from 'react';

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

const HeaderList = () => {
    return (
        <ul className="header__list">
        <p className='header__submenu'>Меню сайта:</p>
        {list.map(li => (
            <li key={li.title}>
                <a href='/'>{li.title}</a>
            </li>
        ))}
    </ul>
    );
};

export default HeaderList;