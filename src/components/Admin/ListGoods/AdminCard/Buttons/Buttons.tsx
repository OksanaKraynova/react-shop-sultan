import React from 'react';
import { ICard } from '../../../../../types/ICard';

interface IButtons{
    handleSave: (id: ICard['id']) => void,
    id: ICard['id'],
    setEdit: (value: React.SetStateAction<boolean>) => void,
    edit: boolean,
    deleteCard: (id: number | undefined) => void
}

const Buttons = ({handleSave, setEdit, deleteCard, edit , id}: IButtons) => {
    return (
        <div className="new-card__row">
        {edit ? <button className='new-card__btn' onClick={() => handleSave(id)} type='submit' >Сохранить</button>
            :
            <button className='new-card__btn' onClick={() => setEdit(true)} >Изменить</button>}
        <button className="new-card__btn" onClick={() => deleteCard(id)}>Удалить</button>
    </div>
    );
};

export default Buttons;