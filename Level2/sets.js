const set = new Set();
const obj1 = {1: 'hello'}
set.add(2);
set.add(1);
set.add('hiya')
set.add(obj1);


const string = '';
set.forEach((item)=> {
    console.log(item);
})
