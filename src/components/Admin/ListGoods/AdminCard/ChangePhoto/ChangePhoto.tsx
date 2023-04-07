import React from 'react';

interface IPhoto {
    changeUrl: string,
    setChangeUrl: (value: React.SetStateAction<string>) => void,
    edit: boolean
}

const ChangePhoto = ({edit,changeUrl, setChangeUrl }: IPhoto) => {
    return (
        <div className="new-card__row">
        <div className='new-card__title'>Фото:</div>
        {edit ? <input type='text' value={changeUrl} onChange={e => setChangeUrl(e.target.value)} />
            : <div className="new-card__meaning">{changeUrl}</div>}
    </div>
    );
};

export default ChangePhoto;