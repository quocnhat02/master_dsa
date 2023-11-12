const map = new Map();

map.set('Iphone 11', 5000);
map.set('XiaoMi 11', 1000);

console.log(map.get('XiaoMi 11'));
console.log(`size: ${map.size}`);

map.forEach((value, key) => {
  console.log(`Key: ${key} has value: ${value}`);
});

// map.delete('XiaoMi 11');

// console.log(map.get('XiaoMi 11'));
