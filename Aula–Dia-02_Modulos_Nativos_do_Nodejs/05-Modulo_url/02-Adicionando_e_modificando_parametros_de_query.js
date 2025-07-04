const url = new URL('https://meusite.com/produtos');

url.searchParams.append('id', '99');
url.searchParams.set('categoria', 'eletronicos');

console.log(url.toString());
// https://meusite.com/produtos?id=99&categoria=eletronicos
