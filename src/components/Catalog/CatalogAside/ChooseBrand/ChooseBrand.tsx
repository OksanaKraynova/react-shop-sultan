import React from 'react';
import { ISearch } from '../../../../types/ISearch';
import ChooseBrandsChackboxes from './ChooseBrandCheckboxes/ChooseBrandsChackboxes';
import ChooseBrandForm from './ChooseBrandForm/ChooseBrandForm';

const ChooseBrand = ({search, setSearch,setGoods}: ISearch) => {
    return (
        <div className='brand'>
            <span className='brand__span'>Бренд</span>
            <ChooseBrandForm search={search} setSearch={setSearch} />
            <ChooseBrandsChackboxes setGoods={setGoods}/>   
        </div>
    );
};

export default ChooseBrand;