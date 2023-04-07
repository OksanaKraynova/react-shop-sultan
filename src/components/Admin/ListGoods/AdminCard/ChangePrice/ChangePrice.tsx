import React from 'react';

interface IPrice{
    changePrice: number,
    setChangePrice: (value: React.SetStateAction<number>) => void,
    edit: boolean
}

const ChangePrice = ({changePrice, setChangePrice, edit}: IPrice) => {
    return (
        <div className="new-card__row">
            <div className='new-card__title'>Цена:</div>
            {edit ? <input type='text' value={changePrice} onChange={e => setChangePrice(+e.target.value)} />
                : <div className="new-card__meaning">{changePrice}</div>}
        </div>
    );
};

export default ChangePrice;