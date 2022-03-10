const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    //fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails === 'function').toBe(true);
    // Teste se o retorno da função é um array.
    expect(Array.isArray(productDetails('value1','value2'))).toBe(true);
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('value1','value2').length).toBe(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    let produtos = productDetails('value1','value2');
    expect(typeof produtos[0] && typeof produtos[1]).toBe('object');
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(produtos[0] !== produtos[1]).toBe(true);
    // Teste se os dois productIds terminam com 123.
    expect(produtos[0].details.productId.endsWith('123')).toBe(true);
    expect(produtos[1].details.productId.endsWith('123')).toBe(true);
  });
});
