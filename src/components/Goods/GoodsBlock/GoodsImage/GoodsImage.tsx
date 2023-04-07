import React from 'react';

const GoodsImage = ({ image }: { image: string }) => {
    return (
        <div className='goods-image'>
            {
                image !== '' ? <img src={image} alt="" /> : <img src='../no-photo.png' alt="" />
            }
        </div>
    );
};

export default GoodsImage;