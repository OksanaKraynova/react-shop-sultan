export const sortedGoods = (arr: any, setGoods: any) => {
    const data = arr.sort((a: any, b: any) => a.name < b.name ? -1 : 1)
    setGoods(data)
}
export const sortedOtherGoods = (arr: any,setGoods: any) => {
    const data = arr.sort((a: any, b: any) => a.name > b.name ? -1 : 1)
    setGoods(data)
}
export const sortedGoodsUpPrice = (arr: any, setGoods: any) => {
    const data = arr.sort((a: any, b: any) => a.price < b.price ? -1 : 1)
    setGoods(data)
}
export const sortedGoodsDownPrice = (arr: any, setGoods: any) => {
    const data = arr.sort((a: any, b: any) => a.price > b.price ? -1 : 1)
    setGoods(data)
}