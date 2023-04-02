import React from 'react';
import { ISearch } from '../../../../../types/ISearch';
import Button from '../../../../Button/Button';

const ChooseBrandForm = ({setSearch, search}: ISearch) => {
    return (
        <form className='brand__form'>
            <input placeholder='Поиск...' value={search} onChange={e => setSearch(e.target.value)} />
            <Button className='btn' img='icons/search.svg' />
        </form>
    )
};

export default ChooseBrandForm;