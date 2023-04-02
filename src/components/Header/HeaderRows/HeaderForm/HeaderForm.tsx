import React from 'react';
import Search from '../../../../icons/Search';

const HeaderForm = () => {
    return (
        <form className='header-form'>
            <input placeholder='Поиск...' />
            <button >
                <Search />
            </button>
                </form>
    );
};

export default HeaderForm;