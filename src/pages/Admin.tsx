import React, { useEffect } from 'react';
import AdminPage from '../components/Admin/AdminPage';

const Admin = () => {
    useEffect(() => {
        document.title = `СУЛТАН - страница администратора`
    }, [])
    return (
        <>
            <AdminPage />
        </>
    );
};

export default Admin;

