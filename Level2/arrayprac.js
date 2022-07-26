const array = [1,4,2,7,3]
const oarray = [
    {name: 'apples', price: 400},
    {name: 'peaches', price: 600},
    {name: 'watermelons', price: 100},
    {name: 'grapes', price: 500},
    {name: 'oranges', price: 1000},

]

oarray.forEach(item => {
    if(item.name === 'oranges') {
        delete item.name
    }
})


console.table(oarray)
