const stack = new Array();
const queue = [];
const content = [1,5,2,3,7,1];
var adder = 0;

for(i=0;i<content.length;i++) {
    stack.push(content[i]);
}

for(i=0;i<content.length;i++) {
    queue.push(content[i]);
}


for(i=0;i<queue.length;i++) {
    adder += queue.shift();
}

console.log(stack);
stack.pop();
console.log('after pop : ' + stack);

console.log(adder);
console.log(queue);
