import React from 'react';
import HeaderLink from '../../HeaderLink/HeaderLink';
import Mail from '../../../../icons/Mail';
import Map from '../../../../icons/Map';

const HeaderLinksContainer = () => {
    return (
        <div className="header__links">
                <HeaderLink link='г. Кокчетав, ул. Ж. Ташенова 129Б' text='(Рынок Восточный)'
                    img={<Map />} />
                <HeaderLink link='opt.sultan@mail.ru ' text='На связи в любое время'
                    img={<Mail />} />
            </div>
    );
};

export default HeaderLinksContainer;
