import React from 'react';
import HeaderContacts from './HeaderContacts/HeaderContacts';
import { Link } from 'react-router-dom';
import HeaderList from './HeaderList/HeaderList';
import HeaderLinksContainer from './HeaderLinksContainer/HeaderLinksContainer';

const HeaderOneRow = ({ setMenu }: any) => {
    const handleClick = () => {
        setMenu(false)
        document.querySelector('body')?.classList.remove('bg')
    }
    return (
        <>
          <HeaderLinksContainer/>
            <div className="header__main-wrapper">
                <HeaderContacts />
            </div>
            <HeaderList />
            <Link className='header__adm btn' to='/admin' onClick={handleClick} >Администратор</Link>
        </>
    );
};

export default HeaderOneRow;