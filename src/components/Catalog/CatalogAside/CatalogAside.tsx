import React, { useState } from 'react';
import { ISearch } from '../../../types/ISearch';
import ChooseBrand from './ChooseBrand/ChooseBrand';
import ChooseCategory from './ChooseCategory/ChooseCategory';
import ChoosePrise from './ChoosePrice/ChoosePrise';

const CatalogAside = ({setSearch, search,  setGoods}:ISearch) => {
 
    return (
        <aside className='aside'>
            <div className='aside__title' >Подбор по параметрам</div>
            <ChoosePrise />
            <ChooseBrand setSearch={setSearch} search={search} setGoods={setGoods} />
            <ChooseCategory  setGoods={setGoods}/>
            
        </aside>
    );
};

export default CatalogAside;