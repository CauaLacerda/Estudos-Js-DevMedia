// utilize funções nativas para imprir somente o nome dos produtos
const produtos = [
  { id: 1, nome: 'Açúcar', ativo: true, valor: 2.00 },
  { id: 2, nome: 'Álcool 70', ativo: false, valor: 9.95 },
  { id: 3, nome: 'Luvas descartáveis', ativo: false, valor: 2.50 },
  { id: 3, nome: 'Papel toalha', ativo: true, valor: 2.50 },
];

let nomesProdutos = produtos.reduce( ( resultado, produto ) => {
  
return resultado + produto.nome + ', '
;}, "" );

console.log(nomesProdutos);