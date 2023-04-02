import React from 'react';
import Share from '../../../../../icons/Share';

const GoodsButtons = () => {
    return (
        <div className='goods-buttons'>
            <div className="goods-buttons__item  goods-buttons__share">
                <Share />
            </div>
            <div className="goods-buttons__item goods-buttons__flex">
                <p>При покупке от 10 000 ₸ бесплатная <br /> доставка по Кокчетаву и области</p>
            </div>
            <div className="goods-buttons__item goods-buttons__price">
                <span>Прайс-лист</span>
                <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.9585 4.375H8.12516V0.125H3.87516V4.375H1.04183L6.00016 10.0417L10.9585 4.375ZM0.333496 11.4583H11.6668V12.875H0.333496V11.4583Z" fill="#3F4E65" />
                </svg>
            </div>
        </div>
    );
};

export default GoodsButtons;