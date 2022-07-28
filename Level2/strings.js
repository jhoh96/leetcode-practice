const first = 'abcdef';
const second = 'qwerty';
const spaces = '     hello    ';
const commas = 'well, this, is, a, comma, string'
const brackets = '{{1,2}, {3,2,1}, {3,1,2}}'

// start - end string slice
console.log(first.slice(1,4)); // bcd

// everything FROM 0 to 2 but not including 2
console.log(first.substr(0, 3)); // abc

// looks like substr and substring are similar
console.log(first.substring(1)); // bcdef

// combines two strings , puts parameter str onto original str
console.log(second.concat(first)); // qwertyabcdef

// just trims white spaces
console.log(spaces.trim()); // hello
console.log("replaced = " +  spaces.replace(/[' ']/g,'*'));

//regex before splits
console.log('yeeet ' + commas.replace(/\s/g,"").split(','));

// in replace , everything inside [] is a class of chartype to replace
// second param is what to replace it with
console.log(brackets.replace(/[{},''' ']/g, '')); // 12321312


console.log('test' + '\n' + 'test2')