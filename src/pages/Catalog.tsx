import React, { useEffect } from 'react';
import CatalogPage from '../components/Catalog/CatalogPage';

const Catalog = () => {
    useEffect(() => {
        document.title = `СУЛТАН - главная`
    }, [])
    return (
        <div data-testid='catalog-page'>
            <CatalogPage />
        </div>
    );
};

export default Catalog;