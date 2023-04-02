import React from 'react';
import ButtonPrice from '../ButtonPrice/ButtonPrice';

const MixColumn = () => {
    return (
        <div className='mix-column'>
            <h6 className='footer-title hide'>Скачать прайс-лист:</h6>
            <ButtonPrice />
            <div className="footer-social">
                <span>Связь в мессенджерах:</span>
                <div>
                    <a href='https://whatsapp.com' target='_blank' rel="noreferrer">
                        <img src="icons/watsapp.svg" alt="" />
                    </a>
                    <a href='https://telegram.org' target='_blank' rel="noreferrer">
                        <img src="icons/telegram.svg" alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MixColumn;