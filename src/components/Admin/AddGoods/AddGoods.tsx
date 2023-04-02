import React, { useState } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { addCard } from '../../../reduser/createCard';
import useInput from '../../../hooks/useInput';
import { types } from '../../../data/type';

const AddGoods = () => {
    const name = useInput('', { isEmpty: true, minLength: 3 })
    const desc = useInput('', { isEmpty: true, minLength: 5 })
    const url = useInput('', { isEmpty: true, minLength: 5 })
    const price = useInput('', { isEmpty: true, minLength: 2 })
    const manufacturer = useInput('', { isEmpty: true, minLength: 3 })
    const article = useInput('', { isEmpty: true, minLength: 5 })
    const [size, setSize] = useState('')
    const [type, setType] = useState('')
    const [uses, setUses] = useState('')
    const dispatch = useAppDispatch()

    const handleSubmit = (e: any) => {
        e.preventDefault()
        dispatch(addCard({
            id: Date.now(),
            name: name.value,
            url: url.value,
            type,
            size,
            code: article.value,
            manufacturer: manufacturer.value,
            brand: manufacturer.value,
            cartQuantity: 1,
            price: +price.value,
            description: desc.value,
            pack: 'box',
            uses
        }))
        name.setValue('')
        name.setTouch(false)
        url.setValue('')
        url.setTouch(false)
        setSize('')
        desc.setValue('')
        desc.setTouch(false)
        manufacturer.setValue('')
        manufacturer.setTouch(false)
        price.setValue('')
        price.setTouch(false)
        article.setValue('')
        article.setTouch(false)
        setType('')
    }

    return (
        <div className='admin__add add'>
            <div className="add__title">Добавить товар</div>
            <form className="add__card" onSubmit={handleSubmit}>
                {(name.isEmpty && name.touch && name.minLength) && <div style={{ color: 'red', fontSize: '10px' }}>Не менее 3 символов</div>}
                <input type='text' placeholder='Название товара' value={name.value} onChange={(e) => name.onChange(e)} onBlur={(e) => name.onBlur(e)} />
                {(desc.isEmpty && desc.touch && desc.minLength) && <div style={{ color: 'red', fontSize: '10px' }}>Не менее 5 символов</div>}
                <input type='text' placeholder='Описание товара' value={desc.value} onChange={(e) => desc.onChange(e)} onBlur={(e) => desc.onBlur(e)} />
                {(manufacturer.isEmpty && manufacturer.touch) && <div style={{ color: 'red', fontSize: '10px' }}>Поле должно быть заполнено</div>}
                <input type='text' placeholder='Производитель' value={manufacturer.value} onChange={(e) => manufacturer.onChange(e)} onBlur={e => manufacturer.onBlur(e)} />
                <input type='number' placeholder='Масса' value={size} onChange={(e) => setSize(e.target.value)} />
                <input type='text' placeholder='Мл, г..' value={type} onChange={(e) => setType(e.target.value)} />
                 {(article.isEmpty && article.touch) && <div style={{ color: 'red', fontSize: '10px' }}>Поле должно быть заполнено</div>}
                <input type='number' placeholder='Артикул' value={article.value} onChange={(e) => article.onChange(e)} onBlur={e => article.onBlur(e)} />
                {(price.isEmpty && price.touch) && <div style={{ color: 'red', fontSize: '10px' }}>Поле должно быть заполнено</div>}
                <input type='number' placeholder='Цена' value={price.value} onChange={(e) => price.onChange(e)} onBlur={e => price.onBlur(e)} />
                {(url.isEmpty && url.touch ) && <div style={{ color: 'red', fontSize: '10px' }}>Поле должно быть заполнено</div>}
                <input type='text' placeholder='URL картинки' value={url.value} onChange={(e) => url.onChange(e)} onBlur={e => url.onBlur(e)} />
                <select onChange={e => setUses(e.target.value)} >
                    {types.map(option => (
                         <option key={option.uses} value={option.uses}>{option.title}</option>
                    ))}
                </select>
                <button disabled={!name.inputValid || !desc.inputValid || !manufacturer.inputValid  || !price.inputValid  } className='add__btn btn' >Добавить</button>
            </form>
        </div>
    );
};

export default AddGoods;