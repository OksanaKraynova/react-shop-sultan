import React from 'react';
import Call from '../../../../icons/Call';

const HeaderContacts = () => {
    return (
        <div className='contacts'>
            <div className="contacts__data">
                <a className='contacts__tel' href="tel:87774900091">+7 (777) 490-00-91</a>
                <span>время работы: 9:00-20:00</span>
                <a className='contacts__call' href='/'>
                    <Call />
                    Заказать звонок
                </a>
            </div>
            <div className="contacts__image">
                <img alt='' src='https://board.mistaua.com/2019/88740_1_2.jpg' />
                <span className='contacts__online'></span>
            </div>
        </div>
    );
};

export default HeaderContacts;