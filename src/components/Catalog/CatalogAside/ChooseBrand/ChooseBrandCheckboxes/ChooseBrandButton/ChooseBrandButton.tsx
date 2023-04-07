import React from 'react';

type Button = {
    more: boolean
    handleChange: () =>void 
}

const ChooseBrandButton = ({more,handleChange }: Button) => {
    return (
        <button className='brand__more' onClick={handleChange} >
            <span>Показать все</span>
            {more ?
                <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.5 0L6.53109 5.25L0.468911 5.25L3.5 0Z" fill="#3F4E65" />
                </svg>
                :
                <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.5 6L0.468911 0.750001L6.53109 0.75L3.5 6Z" fill="#3F4E65" />
                </svg>
            }
        </button>
    );
};

export default ChooseBrandButton;