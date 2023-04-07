import React from 'react';
import { Link } from 'react-router-dom';

const CatalogNav = () => {
    return (
        <div className="nav">
                <Link to="/">Главная</Link>
                <span>Каталог</span>
            </div>
    );
};

export default CatalogNav;