const basket = ['apples', 'grapes', 'pears'];

let obj1 = { a: true };
let obj2 = obj1;
obj1.a = 'hello';
delete obj1;
obj2 = 'hello2';
console.log('2', obj2);
