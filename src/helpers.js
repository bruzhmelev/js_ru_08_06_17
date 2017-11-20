export const arrToMap = (array) => {
    array.reduce((map, item) => {
        map[item.id] = item;
        return map;
    }, {});
}

export const mapToArr = (obj) => {
    // let array = [];
    // for(let item of map){
    //     array.push(item)
    // }
    // return array;
    //Или более элегантное решение
    return Object.keys(obj).map(id => obj[id])
}
