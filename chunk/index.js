// const chunk = (arr, size) => {
//   let chunked = [];

//   for (let element of arr) {
//     let last = chunked[chunked.length - 1];

//     if (!last || last.length === size) {
//       chunked.push([element]);
//     } else {
//       last.push(element);
//     }
//   }

//   return chunked;
// };

const chunk = (arr, size) => {
  let chunked = [];
  let index = 0;

  while (index < arr.length) {
    chunked.push(arr.slice(index, index + size));
    index += size;
  }

  return chunked;
};

console.log(chunk([1, 2, 3, 4, 5], 2));
