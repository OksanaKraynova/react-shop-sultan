import React from 'react';

const HeaderContacts = () => {
    return (
        <div className='contacts'>
            <div className="contacts__data">
                <a className='contacts__tel' href="tel:87774900091">+7 (777) 490-00-91</a>
                 <span>время работы: 9:00-20:00</span>
                <a className='contacts__call' href='/'>
                    <img src="icons/call.svg" alt="" />
                    Заказать звонок
                    </a>
               
            </div>
            <div className="contacts__image">
                <img alt='' src='human.png' />
<span className='contacts__online'></span>
            </div>
        </div>
    );
};

export default HeaderContacts;