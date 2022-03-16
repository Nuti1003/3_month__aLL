// let countChar = 'loremipsumdolor'

// const getList = ([x, ...y]) => [x,y]
// const list = [1,2,3,4]
// console.log(getList(list));

function countChar(text, symbol){
   console.log(text.split(symbol).length - 1); //функция split - разделяет элементы в массиве по указанному символу
}

countChar('rrr','r')