import { Dispatch, SetStateAction } from "react";

export interface ISearch {
    search: string,
    setSearch: Dispatch<SetStateAction<string>>,
    goods?: any,
    newGoods?: any,
    setGoods?: any,
    
}