export interface ICard {
    name: string,
    url: string,
    type: string,
    size: string,
    code: string,
    manufacturer: string,
    brand: string,
    price: number,
    description: string,
    box?: string,
    id?: number,
    cartQuantity?: number,
    deleteCard?:any,
    uses?: string,
    list?: any,
    setNewList?: any,
  
    }