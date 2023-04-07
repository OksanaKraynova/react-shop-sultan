import React from 'react';
import AddGoods from './AddGoods/AddGoods';
import ListGoods from './ListGoods/ListGoods';

const AdminPage = () => {

    return (
        <div className='admin container'>
            <h3>Добавленные товары</h3>
            <div className="admin__wrapper">
                <AddGoods />
                <ListGoods />
            </div>
        </div>
    );
};

export default AdminPage;