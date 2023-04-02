import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { removeCard } from '../../../reduser/createCard';
import { ICard } from '../../../types/ICard';
import AdminCard from './AdminCard';

const ListGoods = () => {
    const [edit, setEdit] = useState(false)
    const list = useAppSelector(state => state.root.createState.goods)
    const dispatch = useAppDispatch()

    const deleteCard = (id: ICard['id']) => {
        const newList = list.filter((card: ICard) => card.id !== id)
        dispatch(removeCard(newList))
    }

    return (
        <div className='admin__list'>
            {list.length ? list.map((item: ICard) => (
                <AdminCard key={item.id} name={item.name} size={item.size} description={item.description} price={item.price} url={item.url} code={item.code} type={item.type} manufacturer={item.manufacturer} deleteCard={deleteCard} id={item.id} list={list} edit={edit} setEdit={setEdit} />
            ))
                :
                <p style={{textAlign: 'center'}}>Вы ничего не добавили</p>
            }
        </div>
    );
};

export default ListGoods;