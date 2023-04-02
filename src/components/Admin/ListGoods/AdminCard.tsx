import React, {  Dispatch, SetStateAction, useState } from 'react';
import {  useAppSelector } from '../../../app/hooks';
import { ICard } from '../../../types/ICard';

type Card = {
    list: [],
    setEdit: Dispatch<SetStateAction<boolean>>
    edit: boolean
    id: ICard['id']
    name: ICard['name']
    url: ICard['url']
    size: ICard['size']
    type: ICard['type']
    price: ICard['price']
    description: ICard['description']
    manufacturer: ICard['manufacturer']
    code: ICard['code']
    deleteCard: (id: ICard['id']) => void
}

const AdminCard = ({setEdit, edit, list, id, name, url, size, type, price, description, manufacturer, code, deleteCard }: Card) => {

    const [changeName, setChangeName] = useState(name)
    const [changeDescription, setChangeDescription] = useState(description)
    const [changeUrl, setChangeUrl] = useState(url)
    const [changePrice, setChangePrice] = useState(price)
    const [changeArticle, setChangeArticle] = useState(code)
    const [changeSize, setChangeSize] = useState(size)
    const [changeBrand, setChangeBrand] = useState(manufacturer)
    const [changeType, setChangeType] = useState(type)
    
    const handleSave = (id: ICard['id']) => {
        setEdit(false)
        const listFind = list.map((item: any) => {
            return item.id !== id ? item : {
                ...item,
                name: changeName,
                description: changeDescription,
                url: changeUrl,
                price: changePrice,
                code: changeArticle,
                size: changeSize,
                manufacturer: changeBrand,
                type: changeType
            }
        })
    localStorage.setItem('sultan-goods', JSON.stringify(listFind))
    
    } 
 
    return (
        <div className='new-card'>
            <form className="new-card__wrapper" onSubmit={e => e.preventDefault()} >
                <div className="new-card__row">
                    <div className='new-card__title'>Название:</div>
                    {edit ?
                        <input type='text' value={changeName} onChange={e => setChangeName(e.target.value)} />
                        :
                        <div className="new-card__meaning">{changeName}</div>}
                </div>
                <div className="new-card__row">
                    <div className='new-card__title'>Описание:</div>
                    {edit ? <input type='text' value={changeDescription} onChange={e => setChangeDescription(e.target.value)} />
                        : <div className="new-card__meaning">{changeDescription}</div>}

                </div>
                <div className="new-card__row">
                    <div className='new-card__title'>Цена:</div>

                    {edit ? <input type='text' value={changePrice} onChange={e => setChangePrice(+e.target.value)} />
                        : <div className="new-card__meaning">{changePrice}</div>}
                </div>
                <div className="new-card__row">
                    <div className='new-card__title'>Обьем:</div>

                    {edit ? <input type='text' value={changeSize} onChange={e => setChangeSize(e.target.value)} />
                        : <div className="new-card__meaning">{changeSize}</div>}
                </div>
                <div className="new-card__row">
                    <div className='new-card__title'>Бренд:</div>
                    {edit ? <input type='text' value={changeBrand} onChange={e => setChangeBrand(e.target.value)} />
                        : <div className="new-card__meaning">{changeBrand}</div>}
                </div>
                <div className="new-card__row">
                    <div className='new-card__title'>Артикул</div>
                    {edit ? <input type='text' value={changeArticle} onChange={e => setChangeArticle(e.target.value)} />
                        : <div className="new-card__meaning">{changeArticle}</div>}
                </div>
                <div className="new-card__row">
                    <div className='new-card__title'>Тип:</div>
                    {edit ? <input type='text' value={changeType} onChange={e => setChangeType(e.target.value)} />
                        : <div className="new-card__meaning">{changeType}</div>}
                </div>
                <div className="new-card__row">
                    <div className='new-card__title'>Фото:</div>
                    {edit ? <input type='text' value={changeUrl} onChange={e => setChangeUrl(e.target.value)} />
                        : <div className="new-card__meaning">{changeUrl}</div>}
                </div>
                <div className="new-card__row">
                    {edit ? <button className='new-card__btn' onClick={()=>handleSave(id)} type='submit' >Сохранить</button>
                        :
                        <button className='new-card__btn' onClick={() => setEdit(true)} >Изменить</button>}

                    <button className="new-card__btn" onClick={() => deleteCard(id)}>Удалить</button>
                </div>
            </form>
        </div>
    );
};

export default AdminCard;