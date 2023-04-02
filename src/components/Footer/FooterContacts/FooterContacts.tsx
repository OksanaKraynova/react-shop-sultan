import React from 'react';

const FooterContacts = () => {
    return (
        <div className='footer-contacts'>
            <h6 className='footer-title'>Контакты:</h6>
            <div className="footer-column">
                 <div className="foot">
                <a className='link' href='tel:87774900091'>+7 (777) 490-00-91</a>
                <span className='time'>время работы: 9:00-20:00</span>
                <a className='call' href='/'>Заказать звонок</a>
            </div>
            <div className="foot">
                <a className='link' href="mailto:opt.sultan@mail.ru ">opt.sultan@mail.ru</a>
                <span>На связи в любое время</span>
            </div>
            <div className="">
                <img className='img-first' alt='visa' src='icons/visa.png' />
                <img alt='visa' src='icons/master.png' />
            </div>
            </div>
           
        </div>
    );
};

export default FooterContacts;