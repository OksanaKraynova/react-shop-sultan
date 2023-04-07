import React from 'react';
import Search from '../../../../icons/Search';

const FooterForm = () => {
    return (
        <form className='footer-form'>
            <label>Подпишись на скидки и акции</label>
            <div>
                <input type='email' placeholder='Введите ваш E-mail' />
                <button>
                    <Search />
                </button>
            </div>
        </form >
    );
};

export default FooterForm;