import React from 'react';
import ButtonPrice from '../ButtonPrice/ButtonPrice';
import Whatsapp from '../../../icons/Whatsapp';
import Telegram from '../../../icons/Telegram';

const MixColumn = () => {
    return (
        <div className='mix-column'>
            <h6 className='footer-title hide'>Скачать прайс-лист:</h6>
            <ButtonPrice />
            <div className="footer-social">
                <span>Связь в мессенджерах:</span>
                <div>
                    <a href='https://whatsapp.com' target='_blank' rel="noreferrer">
                       <Whatsapp/>
                    </a>
                    <a href='https://telegram.org' target='_blank' rel="noreferrer">
                        <Telegram />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MixColumn;