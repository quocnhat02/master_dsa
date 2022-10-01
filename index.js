const url = 'https://example.com/posts?page=5&sort=desc#hash';

const urlObj = new URL(url);

// urlObj.search = '';

// const result = urlObj.toString();

console.log(urlObj.host);
console.log(urlObj.protocol);
console.log(urlObj.origin);
console.log(urlObj.pathname);
