import React from 'react';

interface ILink {
    img?: string,
    link: string,
    text?: string
}

const HeaderLink = ({ img, link, text }: ILink) => {
    return (
        <div className='link'>
            <div className="link__icon">
                <img alt='' src={img} />
            </div>
            <div className="link__info">
                <a href='/'>{link}</a>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default HeaderLink;