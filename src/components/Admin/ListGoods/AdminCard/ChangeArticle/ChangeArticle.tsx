import React from 'react';

interface IArtice{
    changeArticle: string,
    setChangeArticle: (value: React.SetStateAction<string>) => void,
    edit: boolean
}


const ChangeArticle = ({changeArticle, edit, setChangeArticle}:IArtice ) => {
    return (
        <div className="new-card__row">
        <div className='new-card__title'>Артикул</div>
        {edit ? <input type='text' value={changeArticle} onChange={e => setChangeArticle(e.target.value)} />
            : <div className="new-card__meaning">{changeArticle}</div>}
    </div>
    );
};

export default ChangeArticle;