import React from 'react';

interface IDescription {
    setChangeDescription: (value: React.SetStateAction<string>) => void
    changeDescription: string,
    edit: boolean
}

const ChangeDescription = ({ edit, changeDescription, setChangeDescription }: IDescription) => {
    return (
        <div className="new-card__row">
            <div className='new-card__title'>Описание:</div>
            {edit ? <input type='text' value={changeDescription} onChange={e => setChangeDescription(e.target.value)} />
                : <div className="new-card__meaning">{changeDescription}</div>}
        </div>
    );
};

export default ChangeDescription;