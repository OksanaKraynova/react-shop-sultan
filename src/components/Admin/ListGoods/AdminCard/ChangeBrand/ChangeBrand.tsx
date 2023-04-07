import React from 'react';

interface IBrand{
    changeBrand: string,
    setChangeBrand: (value: React.SetStateAction<string>) => void,
    edit: boolean
}

const ChangeBrand = ({changeBrand, edit,setChangeBrand }: IBrand) => {
    return (
        <div className="new-card__row">
        <div className='new-card__title'>Бренд:</div>
        {edit ? <input type='text' value={changeBrand} onChange={e => setChangeBrand(e.target.value)} />
            : <div className="new-card__meaning">{changeBrand}</div>}
    </div>
    );
};

export default ChangeBrand;