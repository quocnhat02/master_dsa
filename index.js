const strings = ['a', 'b', 'c', 'd'];

// strings[2] // O(1)

// push
// strings.push('e'); // O(1)

// pop
// strings.pop(); // O(1)

// unshift
// strings.unshift('x'); // O(n)

// shift
// strings.unshift('x'); // O(n)

// splice
strings.splice(2, 0, 'alien');

console.log(strings);
