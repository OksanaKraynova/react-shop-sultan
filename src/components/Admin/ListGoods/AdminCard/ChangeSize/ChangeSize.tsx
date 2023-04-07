import React from 'react';

interface ISize{
    changeSize: string,
    setChangeSize: (value: React.SetStateAction<string>) => void,
    edit: boolean
}

const ChangeSize = ({changeSize, edit, setChangeSize}: ISize) => {
    return (
        <div className="new-card__row">
        <div className='new-card__title'>Обьем:</div>

        {edit ? <input type='text' value={changeSize} onChange={e => setChangeSize(e.target.value)} />
            : <div className="new-card__meaning">{changeSize}</div>}
    </div>
    );
};

export default ChangeSize;