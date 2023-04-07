import React from 'react';

interface IType {
    changeType: string,
    setChangeType: (value: React.SetStateAction<string>) => void,
    edit: boolean
}

const ChangeType = ({changeType, edit, setChangeType }: IType) => {
    return (
        <div className="new-card__row">
            <div className='new-card__title'>Тип:</div>
            {edit ? <input type='text' value={changeType} onChange={e => setChangeType(e.target.value)} />
                : <div className="new-card__meaning">{changeType}</div>}
        </div>
    );
};

export default ChangeType;