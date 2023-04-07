import React from 'react';
import GoodsButtons from './GoodsButtons/GoodsButtons';
import GoodsCartRow from './GoodsCartRow/GoodsCartRow';
import GoodsInfo from './GoodsInfo/GoodsInfo';
import GoodsName from './GoodsName/GoodsName';

const GoodsDescripion = ({data}: any) => {
    return (
        <div className='goods-desc'>
            <GoodsName name={data.name} type={data.type} size={data.size} box={data.pack} />
            <GoodsCartRow data={data}/>
            <GoodsButtons />
            <GoodsInfo data={data}/>
        </div>
    );
};

export default GoodsDescripion;