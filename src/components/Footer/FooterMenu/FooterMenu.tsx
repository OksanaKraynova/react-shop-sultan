import React from 'react';

interface IMenu {
    title: string,
    arr: any
}

const FooterMenu = ({title, arr}: IMenu) => {
    return (
        <div className='footer-menu'>
            <h6 className='footer-title'>{title}</h6>
            <ul className='footer-list'>
            {arr.map((li: any) => (
                <li key={li.title}>
                    <a href='/'>{li.title}</a>
                </li>
            )) }
            </ul>
        </div>
    );
};

export default FooterMenu;