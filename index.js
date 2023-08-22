// Método sort(): é usado para ordenar os elementos de um array em ordem numerica crescente por padrao,
// ordem alfabetica em strings.

// Segue a tabela Unicode

const idade = [14, 42, 26, 3, 33, 20, 20];
idade.sort((a, b) => a - b);
console.log(idade);
// reposta: [3, 14, 20, 20, 26, 33, 42]
// resposta usando apenas sort: [14, 20, 20, 26, 3, 33, 42]

idade.sort((a, b) => b - a);
console.log(idade);
// resposta: [42, 33, 26, 20, 20, 14, 3]

//  Se o valor retornado for negativo, o elemento a deve ser colocado antes do elemento b, se for positivo
//  o valor retornado, b deve ser colocado antes de a. Se o valor for 0, eles são considerados iguais.

const nomes = ['Bianca', 'Victor', 'Alexia', 'Maria', 'Vicente'];
nomes.sort();
console.log(nomes);
// resposta:  ['Alexia', 'Bianca', 'Maria', 'Vicente', 'Victor']
// Ordena strings em ordem alfabética

nomes.sort().reverse();
console.log(nomes);
// resposta: ['Victor', 'Vicente', 'Maria', 'Bianca', 'Alexia']
// Com o uso do metodo reverse, conseguimos obter também a ordem reversa, de Z a A, das strings.


// ordenando um array de objetos
const funcionarios = [
    { nome: 'Bianca', idade: 26},
    { nome: 'Victor', idade: 44},
    { nome: 'Maria', idade: 18},
    { nome: 'Alexia', idade: 30},
    { nome: 'Vicente', idade: 52}
];

funcionarios.sort((a, b) => a.idade - b.idade);
console.log(funcionarios);
// resposta: 
// {nome: 'Maria', idade: 18}
// {nome: 'Bianca', idade: 26}
// {nome: 'Alexia', idade: 30}
// {nome: 'Victor', idade: 44}
// {nome: 'Vicente', idade: 52}



// Método splice(): é utilizado para adicionar ou remover elementos de um array. 

// o primeiro argumento sendo o índice onde se deseja começar a operação 
// o segundo é o número de elementos que se deseja remover 
// e os argumentos adicionais são os elementos que se deseja inserir

// adicionando elementos
const datas = [1977, 2024, 1997, 1822, 2030];
datas.splice(1, 0, 2050);
console.log(datas);
// resposta:  [1977, 2050, 2024, 1997, 1822, 2030]

// removendo elementos de uma posição
const data = [1977, 2024, 1997, 1822, 2030];
data.splice(2, 2);
console.log(data);
// resposta: [1977, 2024, 2030]

// substituindo elementos de uma posição
const suco = ['laranja', 'limao', 'manga', 'abacaxi'];
suco.splice(2, 1, 'caju', 'acerola');
console.log(suco);
// ['laranja', 'limao', 'caju', 'acerola', 'abacaxi']

// quando se fornece só um argumento ele será o índice a partir de onde será removido todos os elementos
const dias = [12, 20, 25, 31];
dias.splice(2);
console.log(dias);
// resposta: [12, 20]



// Método indexOf(): para encontrar a posição de um elemento no array

const objeto =  ['bola', 'caneta', 'mesa', 'bolsa', 'porta'];
const index = objeto.indexOf('mesa');
console.log(index);
// resposta: 2

const frase = 'Olá, mundo';
const indexf = frase.indexOf('mundo');
console.log(indexf);
// ele conta o indice como a primeira letra da string procurada, nesse caso 'mundo' começa no indice 5
// e termina no indice 9, e os espaços também contam na contagem dos índices

// busca com inicio especifico:
const comida = ['arroz', 'macarrao', 'salada', 'feijao', 'salada'];
const especifico = comida.indexOf('salada', 3);
console.log(especifico);
// resposta: 4
// no método indexOf() se uma string ou numero se repetir, ele só encontra o primeiro indice

const comidas = ['carne', 'farofa', 'sushi'];
const esp = comidas.indexOf('banana');
console.log(esp);
// resposta: -1




