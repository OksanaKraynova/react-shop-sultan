import React, { useState } from 'react';
import { ICard } from '../../../../types/ICard';
import { Card } from '../../../../types/CardAdmin';
import ChangeName from './ChangeName/ChangeName';
import ChangeDescription from './ChangeDescription/ChangeDescription';
import ChangePrice from './ChangePrice/ChangePrice';
import ChangeSize from './ChangeSize/ChangeSize';
import ChangeBrand from './ChangeBrand/ChangeBrand';
import ChangeArticle from './ChangeArticle/ChangeArticle';
import ChangeType from './ChangeType/ChangeType';
import ChangePhoto from './ChangePhoto/ChangePhoto';
import Buttons from './Buttons/Buttons';

const AdminCard = ({ setEdit, edit, list, id, name, url, size, type, price, description, manufacturer, code, deleteCard }: Card) => {
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
                <ChangeName edit={edit} changeName={changeName} setChangeName={setChangeName} />
                <ChangeDescription edit={edit} changeDescription={changeDescription} setChangeDescription={setChangeDescription} />
                <ChangePrice setChangePrice={setChangePrice} changePrice={changePrice} edit={edit} />
                <ChangeSize setChangeSize={setChangeSize} changeSize={changeSize} edit={edit} />
                <ChangeBrand edit={edit} changeBrand={changeBrand} setChangeBrand={setChangeBrand} />
                <ChangeArticle edit={edit} changeArticle={changeArticle} setChangeArticle={setChangeArticle} />
                <ChangeType  changeType={changeType} setChangeType={setChangeType} edit={edit} />
               <ChangePhoto edit={edit} changeUrl={changeUrl} setChangeUrl={setChangeUrl} />
               <Buttons id={id} edit={edit} deleteCard={deleteCard} setEdit={setEdit} handleSave={handleSave} />
            </form>
        </div>
    );
};

export default AdminCard;