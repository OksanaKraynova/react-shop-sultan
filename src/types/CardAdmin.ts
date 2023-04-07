import { Dispatch, SetStateAction } from "react"
import { ICard } from "./ICard"

export  type Card = {
    list: [],
    setEdit: Dispatch<SetStateAction<boolean>>
    edit: boolean
    id: ICard['id']
    name: ICard['name']
    url: ICard['url']
    size: ICard['size']
    type: ICard['type']
    price: ICard['price']
    description: ICard['description']
    manufacturer: ICard['manufacturer']
    code: ICard['code']
    deleteCard: (id: ICard['id']) => void
}
