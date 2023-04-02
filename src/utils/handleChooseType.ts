export const handleChooseType = (type: string, setGoods: any, arr: []) => {
    const data = arr.filter((item: { uses: string; }) => item.uses === type)
    setGoods(data)
}