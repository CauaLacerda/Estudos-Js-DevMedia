//Complete o código a seguir para que os nomes do array sejam impressos com letras maiúsculas.

const colecaoNomes = ["Alberto", "Alex", "Sandro", "Roberta"];

for (let indice = 0; indice < colecaoNomes.length; indice++) {
    const nomeMaiusculo = colecaoNomes[indice].toUpperCase();

    colecaoNomes[indice] = nomeMaiusculo;
}

console.log(colecaoNomes);