const { URL } = require('url');

const minhaUrl = new URL('https://meusite.com/produtos?id=12&categoria=livros');

console.log(minhaUrl.hostname);   // meusite.com
console.log(minhaUrl.pathname);   // /produtos
console.log(minhaUrl.search);     // ?id=12&categoria=livros
console.log(minhaUrl.searchParams.get('id')); // 12
console.log(minhaUrl.searchParams.get('categoria')); // livros
