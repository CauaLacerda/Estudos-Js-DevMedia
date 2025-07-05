// Código com arrow function em mais de uma linha de código
const retorna_media = (nota_1, nota_2) => {

    let media = (nota_1 + nota_2) / 2;
    return media;

}

let media_aluno = retorna_media(9, 8);
console.log("A média do aluno é: " + media_aluno);



//Arrow function em uma linha 
const retorna_media1 = (nota_1, nota_2) => (nota_1 + nota_2) / 2;

let media_aluno1 = retorna_media(9, 8);
console.log("A média do aluno é: " + media_aluno);