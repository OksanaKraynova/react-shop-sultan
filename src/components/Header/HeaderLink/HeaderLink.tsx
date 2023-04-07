import React from 'react';
import { Link } from 'react-router-dom';

interface ILink {
    img?: any,
    link: string,
    text?: string
}

const HeaderLink = ({ img, link, text }: ILink) => {
    return (
        <div className='link'>
            <div className="link__icon">{img}</div>
            <div className="link__info">
                <Link to='/'>{link}</Link>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default HeaderLink;