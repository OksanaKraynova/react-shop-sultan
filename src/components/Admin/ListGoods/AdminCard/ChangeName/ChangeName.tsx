import React from 'react';

interface IName {
    edit: boolean,
    changeName: string,
    setChangeName: (value: React.SetStateAction<string>) => void
}

const ChangeName = ({ edit, changeName, setChangeName }: IName) => {
    return (
        <div className="new-card__row">
            <div className='new-card__title'>Название:</div>
            {edit ?
                <input type='text' value={changeName} onChange={e => setChangeName(e.target.value)} />
                :
                <div className="new-card__meaning">{changeName}</div>}
        </div>
    );
};

export default ChangeName;