import React from 'react';
import Button from '../../../Button/Button';

const HeaderForm = () => {
    return (
        <form className='header-form'>
            <input placeholder='Поиск...' />
            <Button  img='icons/search.svg' />
        </form>
    );
};

export default HeaderForm;