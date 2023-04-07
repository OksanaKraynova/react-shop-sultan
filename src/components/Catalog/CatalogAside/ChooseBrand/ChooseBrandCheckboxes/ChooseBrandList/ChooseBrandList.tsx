import React from 'react';

type List = {
    list: {title: string}[]
    handleChooseBrand: (type: string) => void
}

const ChooseBrandList = ({list, handleChooseBrand}: List) => {
    return (
        <>
              {list.map(el => (
                <label className='check__wrapper' key={el.title} onClick={() => handleChooseBrand(el.title)}  >
                    <input type='radio' name='sort' />
                    <div className='check__fake'></div>
                    <span className='check__text'>{el.title}</span>
                </label>
            ))}
        </>
    );
};

export default ChooseBrandList;