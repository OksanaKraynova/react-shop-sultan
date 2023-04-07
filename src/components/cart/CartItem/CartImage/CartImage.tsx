import React from 'react';

const CartImage = ({url}: {url: string}) => {
    return (
        <div className="item__image">
                    {url !== '' ?
                     <img src={url} alt="" />
                      : 
                      <img src='no-photo.png' alt="" />}
                </div>
    );
};

export default CartImage;