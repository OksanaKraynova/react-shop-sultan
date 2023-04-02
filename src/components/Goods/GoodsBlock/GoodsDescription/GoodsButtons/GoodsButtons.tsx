import React from 'react';

const GoodsButtons = () => {
    return (
        <div className='goods-buttons'>
            <div className="goods-buttons__item  goods-buttons__share">
                                  <img src="icons/share.svg" alt="" />
                        </div>
            <div className="goods-buttons__item goods-buttons__flex">
                <p>При покупке от 10 000 ₸ бесплатная <br/> доставка по Кокчетаву и области</p>
            </div>
            <div className="goods-buttons__item goods-buttons__price">
                <span>Прайс-лист</span>
                <img src="icons/dow.svg" alt="" />
            </div>
        </div>
    );
};

export default GoodsButtons;