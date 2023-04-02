import React, { useEffect, useState } from 'react';
import HeaderOneRow from './HeaderRows/HeaderOneRow';
import HeaderSecondRow from './HeaderRows/HeaderSecondRow';

const Header = () => {
    const [menu, setMenu] = useState(false)

    useEffect(() => {
        if(menu){
            document.querySelector('body')?.classList.add('bg')
        }
    }, [menu])
   
    return (
        <header className='header'>
            <div className={menu ? 'header__row header__first active' : 'header__row header__first'}>
                <div className="header__container container ">
                    <HeaderOneRow setMenu={setMenu} />
                </div>
            </div>
            <div className='header__row'>
                <div className="header__container mobile container">
                   <HeaderSecondRow setMenu={setMenu} menu={menu} />
                </div>
            </div>
        </header>
    );
};

export default Header;