import React from 'react';
import { ISearch } from '../../../../../types/ISearch';
import Search from '../../../../../icons/Search';

const ChooseBrandForm = ({ setSearch, search }: ISearch) => {
    return (
        <form className='brand__form'>
            <input placeholder='Поиск...' value={search} onChange={e => setSearch(e.target.value)} />
            <button className='btn' >
                <Search />
            </button>
        </form>
    )
};

export default ChooseBrandForm;